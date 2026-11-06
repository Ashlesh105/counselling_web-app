import confetti from 'canvas-confetti';

/**
 * Triggers a 3-stage sacred golden and flower-petal blessing shower across the screen.
 * Synchronized with the 3 temple bell strikes:
 *  - Strike 1 (0s): Center burst of divine gold & marigold petals
 *  - Strike 2 (~1.15s): Temple flanking showers (left and right)
 *  - Strike 3 (~2.3s): Grand celestial Pushpa Vrishti rain
 */
export function triggerDivineBlessingShower(): void {
  // Strike 1: Center auspicious burst
  confetti({
    particleCount: 75,
    spread: 90,
    origin: { y: 0.35, x: 0.5 },
    colors: ['#D4AF37', '#F59E0B', '#DC2626', '#FFFBEB', '#F97316'],
    shapes: ['circle', 'square'],
    scalar: 1.2,
    ticks: 250,
    gravity: 0.7,
    drift: 0.05,
  });

  // Strike 2: Dual flanking temple showers
  setTimeout(() => {
    confetti({
      particleCount: 50,
      angle: 60,
      spread: 75,
      origin: { x: 0.08, y: 0.45 },
      colors: ['#FBBF24', '#D97706', '#E11D48', '#FEF08A'],
      scalar: 1.1,
      ticks: 260,
    });
    confetti({
      particleCount: 50,
      angle: 120,
      spread: 75,
      origin: { x: 0.92, y: 0.45 },
      colors: ['#FBBF24', '#D97706', '#E11D48', '#FEF08A'],
      scalar: 1.1,
      ticks: 260,
    });
  }, 1150);

  // Strike 3: Grand consecration shower
  setTimeout(() => {
    confetti({
      particleCount: 110,
      spread: 120,
      origin: { y: 0.25, x: 0.5 },
      colors: ['#FFD700', '#F59E0B', '#B91C1C', '#FFFFFF', '#EA580C'],
      shapes: ['circle'],
      scalar: 1.3,
      ticks: 300,
      gravity: 0.6,
    });
  }, 2300);
}
