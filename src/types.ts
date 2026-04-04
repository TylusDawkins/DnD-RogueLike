export interface CharacterStats {
  maxHp: number;
  currentHp: number;
  physical: number;
  fortitude: number;
  mental: number;
  speed: number;
  hpMod?: number;
  currentSpellPoints?: number;
}

export interface SpellSlotsUsed {
  [level: number]: number;
}

export interface Character {
  id: string;
  name: string;
  description: string;
  type: string;
  level: number;
  inventory: Reward[];
  stats: CharacterStats;
  features: Feature[];
  spells: Spell[];
  spellSlotsUsed: SpellSlotsUsed;
  pointsLeft: number;
  totalPoints: number;
  spellPointsMax: number;
  currentSpellPoints: number;
  maxSpellPoints?: number;
  canCast?: boolean;
  physical?: number;
}

export interface Feature {
  name: string;
  dependency: string | null;
  description?: string;
  conflicts: (string | null)[];
  tier: number;
  stackable: boolean;
  link?: string;
  cb?: (char: Character, setChar: (c: Character) => void) => void;
}

export interface Spell {
  name: string;
  description: string[];
  higherLevel: string[];
  level: number;
}

export interface SpellPointsMap {
  [level: number]: number;
}

export interface BaseStats {
  baseHp: number;
  hpMod: number;
  physical: number;
  fortitude: number;
  mental: number;
}

export interface ClassDef {
  image: string;
  name: string;
  description: string;
  baseStats: BaseStats;
  features: Feature[];
  canCast: boolean;
  spellPoints?: SpellPointsMap;
}

export interface TypeDef {
  image: string;
  canCast: boolean;
  features: Feature[];
}

export interface TypesMap {
  [key: string]: TypeDef;
}

export interface ItemEffect {
  name: string;
  type: string;
  class: string[];
  description: string;
  tier: number;
  special?: string;
}

export interface Reward {
  id?: string;
  name: string;
  type: string;
  damage?: string;
  AC?: number | string;
  properties: string;
  effects: ItemEffect[];
  tier: number;
  classes: string[];
}

export interface SpellCosts {
  [level: number]: number;
}

export interface SpellLimits {
  [level: number]: number | null;
}

export interface CharactersMap {
  [id: string]: Character;
}
