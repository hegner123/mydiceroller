export interface SpellsByClasses {
  count: number;
  results: APIReference[];
}

export interface SpellObject {
  index: string;
  name: string;
  url: string;
  desc: string[];
  higherLevel: string[];
  range: string;
  components: string[];
  Allowed: "V" | "S" | "M";
  material: string;
  areaOfEffect: AOE;
  ritual: boolean;
  duration: string;
  concentration: boolean;
  casting_time: string;
  level: number;
  attack_type: string;
  damage: SpellDamage;
  school: APIReference;
  classes: APIReference[];
  subclasses: APIReference[];
}

export interface AOE {
  size: number;
  type: "sphere" | "cone" | "cylinder" | "line" | "cube";
}

export interface SpellDamage {
  damageType: APIReference;
  damageAtCharacterLevel?: damageAtCharacterLevel;
  damageAtSlotLevel?: damageAtSlotLevel;
}

export interface damageAtCharacterLevel {
  [index: number]: any;
}

export interface damageAtSlotLevel {
  [index: number]: any;
}

export interface APIReference {
  index: string;
  name: string;
  url: string;
}
