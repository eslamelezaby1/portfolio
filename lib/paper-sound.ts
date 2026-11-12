/** A short, locally synthesized paper rustle. No network requests or audio files. */
export class PaperSound {
  private context: AudioContext | null = null;

  play() {
    try {
      this.context ??= new AudioContext();
      const context = this.context;
      void context.resume().then(() => {
        const duration = 0.52;
        const buffer = context.createBuffer(1, Math.ceil(context.sampleRate * duration), context.sampleRate);
        const samples = buffer.getChannelData(0);
        let previous = 0;
        for (let i = 0; i < samples.length; i++) {
          previous = (previous + (Math.random() * 2 - 1) * 0.08) / 1.08;
          const t = i / samples.length;
          const texture = 0.5 + 0.5 * Math.sin(t * 65);
          samples[i] = previous * texture;
        }
        const source = context.createBufferSource();
        source.buffer = buffer;
        const filter = context.createBiquadFilter();
        filter.type = 'bandpass';
        filter.frequency.value = 1500;
        filter.Q.value = 0.6;
        const gain = context.createGain();
        const now = context.currentTime;
        gain.gain.setValueAtTime(0, now);
        gain.gain.linearRampToValueAtTime(0.42, now + 0.08);
        gain.gain.exponentialRampToValueAtTime(0.001, now + duration);
        source.connect(filter).connect(gain).connect(context.destination);
        source.start(now);
      }).catch(() => {});
    } catch { /* Audio is optional when unavailable in the browser. */ }
  }

  close() {
    void this.context?.close().catch(() => {});
    this.context = null;
  }
}
