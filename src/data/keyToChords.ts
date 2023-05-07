export const keyToChords = {
  A: ['A', 'B', 'C#', 'D', 'E', 'F#', 'G'],
  Bb: ['Bb', 'C', 'D', 'Eb', 'F', 'G', 'Ab'],
  B: ['B', 'C#', 'D#', 'E', 'F#', 'G#', 'A'],
  C: ['C', 'D', 'E', 'F', 'G', 'A', 'Bb'],
  Db: ['Db', 'Eb', 'F', 'Gb', 'Ab', 'Bb', 'Cb (B)'],
  D: ['D', 'E', 'F#', 'G', 'A', 'B', 'C'],
  Eb: ['Eb', 'F', 'G', 'Ab', 'Bb', 'C', 'Db'],
  E: ['E', 'F#', 'G#', 'A', 'B', 'C#', 'D'],
  F: ['F', 'G', 'A', 'Bb', 'C', 'D', 'Eb'],
  'F#': ['F#', 'G#', 'A#', 'B', 'C#', 'D#', 'E'],
  G: ['G', 'A', 'B', 'C', 'D', 'E', 'F'],
  Ab: ['Ab', 'Bb', 'C', 'Db', 'Eb', 'F', 'Gb'],
};

export type KeyToChordsT = keyof typeof keyToChords;
