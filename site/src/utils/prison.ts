// =====================================================================
//  Klescher prison time reduction — mining rates
// ---------------------------------------------------------------------
//  At Klescher you mine ore, deposit it at a terminal and receive
//  "merits". 1 merit = 1 second removed from your sentence.
//
//  `secondsPerUnit` below equals the merit value of one deposited unit
//  of each ore (merits per piece, from community data — verify against
//  the current patch if CIG retunes them).
//
//    Hadanite  ~523 merits/unit
//    Dolivine  ~148 merits/unit
//    Aphorite  ~140 merits/unit
// =====================================================================

export interface PrisonOre {
  id: string;
  /** i18n key suffix in `prison.ores.*`, falls back to `name` */
  name: string;
  /** seconds of sentence removed per unit deposited (= merits/unit) */
  secondsPerUnit: number;
  /** accent colour for the UI card */
  color: string;
}

export const PRISON_ORES: PrisonOre[] = [
  { id: 'hadanite', name: 'Hadanite', secondsPerUnit: 523, color: '#d8966a' },
  { id: 'dolivine', name: 'Dolivine', secondsPerUnit: 148, color: '#8ac9a6' },
  { id: 'aphorite', name: 'Aphorite', secondsPerUnit: 140, color: '#7aa6d8' },
];
