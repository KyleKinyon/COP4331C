export interface Stats {
	strength: number;
	constitution: number;
	dexterity: number;
	wisdom: number;
	intelligence: number;
	charisma: number;
};

export interface Abilities {
	acrobatics: number;
	sleightOfHand: number;
	stealth: number;
	animalHealing: number;
	insight: number;
	medicine: number;
	survival: number;
	perception: number;
	arcana: number;
	history: number;
	investigation: number;
	nature: number;
	deception: number;
	intimidation: number;
	performance: number;
	persuasion: number;
	athletics: number;
}

export interface Character {
	_id: string;
	charName: string;
	race: string;
	level: number;

	charisma: number;
	constitution: number;
	dexterity: number;
	intelligence: number;
	strength: number;
	wisdom: number;
	equipment: string[];
}