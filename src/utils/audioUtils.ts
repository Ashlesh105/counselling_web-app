// Web Audio API Synthesizer for Authentic Temple Bell & 432Hz Meditative Drone
// 100% self-contained, no external audio file dependencies.

let audioCtx: AudioContext | null = null;
let droneOsc: OscillatorNode | null = null;
let droneGain: GainNode | null = null;
let isDronePlaying = false;

function getAudioContext(): AudioContext {
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    audioCtx = new AudioContextClass();
  }
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

/**
 * Plays an individual bronze bell strike at a given audio context time offset.
 */
function playBellStrike(ctx: AudioContext, strikeTime: number, strikeIntensity = 1.0): void {
  // Harmonic overtone ratios for authentic Indian bronze temple bell (ghanta)
  const frequencies = [432, 864, 1296, 1728, 2592];
  const baseGains = [0.45, 0.28, 0.16, 0.09, 0.04];
  const decays = [4.2, 3.0, 2.0, 1.3, 0.7];

  frequencies.forEach((freq, index) => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = index === 0 ? 'sine' : 'triangle';
    osc.frequency.setValueAtTime(freq, strikeTime);

    // Subtle natural organic micro-detune for authentic forged bronze metal resonance
    if (index > 0) {
      osc.detune.setValueAtTime((Math.random() - 0.5) * 6, strikeTime);
    }

    const peakGain = baseGains[index] * strikeIntensity;
    gain.gain.setValueAtTime(0, strikeTime);
    gain.gain.linearRampToValueAtTime(peakGain, strikeTime + 0.015);
    gain.gain.exponentialRampToValueAtTime(0.0001, strikeTime + decays[index]);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(strikeTime);
    osc.stop(strikeTime + decays[index]);
  });
}

/**
 * Plays the sacred bronze temple bell 3 times in a row.
 * Rhythmic cadence: Strike 1 -> Strike 2 (~1.1s) -> Strike 3 (~2.2s).
 */
export function playTempleBell(count = 3, intervalSeconds = 1.15): void {
  try {
    const ctx = getAudioContext();
    const now = ctx.currentTime;

    for (let i = 0; i < count; i++) {
      const strikeTime = now + (i * intervalSeconds);
      // Subtle natural variation in strike intensity (1.0 -> 0.95 -> 1.05)
      const intensity = i === count - 1 ? 1.05 : i === 0 ? 0.95 : 1.0;
      playBellStrike(ctx, strikeTime, intensity);
    }
  } catch (err) {
    console.warn("AudioContext not allowed yet without user gesture", err);
  }
}

/**
 * Toggles a continuous sacred 432Hz healing soundscape drone.
 */
export function toggleAmbientSoundscape(onToggle?: (playing: boolean) => void): boolean {
  try {
    const ctx = getAudioContext();

    if (isDronePlaying) {
      if (droneGain && droneOsc) {
        const now = ctx.currentTime;
        droneGain.gain.linearRampToValueAtTime(0.0001, now + 1.5);
        setTimeout(() => {
          try {
            droneOsc?.stop();
            droneOsc?.disconnect();
            droneGain?.disconnect();
          } catch {
            // ignore
          }
          droneOsc = null;
          droneGain = null;
        }, 1600);
      }
      isDronePlaying = false;
      onToggle?.(false);
      return false;
    } else {
      const now = ctx.currentTime;
      droneOsc = ctx.createOscillator();
      droneGain = ctx.createGain();

      // 432Hz fundamental + warm low filter
      droneOsc.type = 'sine';
      droneOsc.frequency.setValueAtTime(216, now); // Sub-octave 216Hz for gentle grounding hum

      droneGain.gain.setValueAtTime(0.0001, now);
      droneGain.gain.linearRampToValueAtTime(0.06, now + 2.5); // Very soft, non-intrusive background

      droneOsc.connect(droneGain);
      droneGain.connect(ctx.destination);

      droneOsc.start(now);
      isDronePlaying = true;
      onToggle?.(true);
      return true;
    }
  } catch (err) {
    console.warn("Ambient sound error:", err);
    return false;
  }
}
