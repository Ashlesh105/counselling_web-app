# ==========================================
# Stage 1: Build the React + TypeScript app
# ==========================================
FROM node:22-alpine AS builder

WORKDIR /app

# Copy dependency definitions
COPY package*.json ./

# Install all dependencies
RUN npm install

# Copy source code and config files
COPY . .

# Build production assets
RUN npm run build

# ==========================================
# Stage 2: Serve with lightweight Nginx
# ==========================================
FROM nginx:alpine AS runner

# Remove default nginx welcome page
RUN rm -rf /usr/share/nginx/html/*

# Copy custom nginx configuration for SPA routing & caching
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy compiled production bundle from builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]

