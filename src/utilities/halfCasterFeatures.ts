import type { Feature, Character } from "../types";

const halfCasterFeatures: Feature[] = [
    {
        name: "Infusion",
        dependency: null,
        description: "http://dnd5e.wikidot.com/artificer",
        conflicts: [null],
        tier: 1,
        stackable: false
    },
    {
        name: "Magic Item Adept",
        dependency: null,
        description: "http://dnd5e.wikidot.com/artificer",
        conflicts: [null],
        tier: 1,
        stackable: false
    },
    {
        name: "Magic Item Savant",
        dependency: "Magic Item Adept",
        description: "http://dnd5e.wikidot.com/artificer",
        conflicts: [null],
        tier: 2,
        stackable: false
    },
    {
        name: "Magic Item Master",
        dependency: "Magic Item Savant",
        description: "http://dnd5e.wikidot.com/artificer",
        conflicts: [null],
        tier: 2,
        stackable: false
    },
    {
        name: "Soul of Artifice",
        dependency: "Magic Item Master",
        description: "http://dnd5e.wikidot.com/artificer",
        conflicts: [null],
        tier: 3,
        stackable: false
    },
    {
        name: "Experimental Elixir",
        dependency: null,
        description: "http://dnd5e.wikidot.com/artificer:alchemist",
        conflicts: [null],
        tier: 1,
        stackable: false
    },
    {
        name: "Restorative Reagents",
        dependency: "Experimental Elixir",
        description: "http://dnd5e.wikidot.com/artificer:alchemist",
        conflicts: [null],
        tier: 2,
        stackable: false
    },
    {
        name: "Chemical Mastery",
        dependency: "Experimental Elixir",
        description: "http://dnd5e.wikidot.com/artificer:alchemist",
        conflicts: [null],
        tier: 3,
        stackable: false
    },
    {
        name: "Arcane Armor/Armor Model",
        dependency: null,
        description: "http://dnd5e.wikidot.com/artificer:armorer",
        conflicts: [null],
        tier: 1,
        stackable: false
    },
    {
        name: "Armor Modifications",
        dependency: "Arcane Armor/Armor Model",
        description: "http://dnd5e.wikidot.com/artificer:armorer",
        conflicts: [null],
        tier: 2,
        stackable: false
    },
    {
        name: "Perfected Armor",
        dependency: "Armor Modifications",
        description: "http://dnd5e.wikidot.com/artificer:armorer",
        conflicts: [null],
        tier: 3,
        stackable: false
    },
    {
        name: "Eldritch Cannon",
        dependency: null,
        description: "http://dnd5e.wikidot.com/artificer:artillerist",
        conflicts: [null],
        tier: 2,
        stackable: false
    },
    {
        name: "Explosive Cannon",
        dependency: "Eldritch Cannon",
        description: "http://dnd5e.wikidot.com/artificer:artillerist",
        conflicts: [null],
        tier: 2,
        stackable: false
    },
    {
        name: "Fortified Position",
        dependency: "Eldritch Cannon",
        description: "http://dnd5e.wikidot.com/artificer:artillerist",
        conflicts: [null],
        tier: 3,
        stackable: false
    },
    {
        name: "Steel Defender",
        dependency: null,
        description: "http://dnd5e.wikidot.com/artificer:battle-smith",
        conflicts: [null],
        tier: 2,
        stackable: false
    },
    {
        name: "Arcane Jolt",
        dependency: "Steel Defender",
        description: "http://dnd5e.wikidot.com/artificer:battle-smith",
        conflicts: [null],
        tier: 2,
        stackable: false
    },
    {
        name: "Improved Defender",
        dependency: "Arcane Jolt",
        description: "http://dnd5e.wikidot.com/artificer:battle-smith",
        conflicts: [null],
        tier: 3,
        stackable: false
    },
    {
        name: "Bardic Inspiration",
        dependency: null,
        description: "http://dnd5e.wikidot.com/bard",
        conflicts: [null],
        tier: 1,
        stackable: false
    },
    {
        name: "Unfailing Inspiration",
        dependency: "Bardic Inspiration",
        description: "http://dnd5e.wikidot.com/bard:eloquence",
        conflicts: [null],
        tier: 3,
        stackable: false
    },
    {
        name: "Infectious Inspiration",
        dependency: "Bardic Inspiration",
        description: "http://dnd5e.wikidot.com/bard:eloquence",
        conflicts: [null],
        tier: 3,
        stackable: false
    },
    {
        name: "Cutting Words",
        dependency: "Bardic Inspiration",
        description: "http://dnd5e.wikidot.com/bard:lore",
        conflicts: [null],
        tier: 1,
        stackable: false
    },
    {
        name: "Blade Flourish",
        dependency: "Bardic Inspiration",
        description: "http://dnd5e.wikidot.com/bard:swords",
        conflicts: [null],
        tier: 2,
        stackable: false
    },
    {
        name: "Master's Flourish",
        dependency: "Blade Flourish",
        description: "http://dnd5e.wikidot.com/bard:swords",
        conflicts: [null],
        tier: 3,
        stackable: false
    },
    {
        name: "Superior Inspiration",
        dependency: "Bardic Inspiration",
        description: "http://dnd5e.wikidot.com/bard",
        conflicts: [null],
        tier: 2,
        stackable: false
    },
    {
        name: "Combat Inspiration",
        dependency: "Bardic Inspiration",
        description: "http://dnd5e.wikidot.com/bard:valor",
        conflicts: [null],
        tier: 2,
        stackable: false
    },
    {
        name: "Psychic Blades",
        dependency: "Bardic Inspiration",
        description: "https://dnd5e.wikidot.com/rogue:soulknife",
        conflicts: [null],
        tier: 1,
        stackable: false
    },
    {
        name: "Battle Magic",
        dependency: null,
        description: "http://dnd5e.wikidot.com/bard:valor",
        conflicts: [null],
        tier: 2,
        stackable: false
    },
    {
        name: "Divine Strike",
        dependency: null,
        description: "Once on each of your turns when you hit a creature with a weapon attack, you can cause the attack to deal an a 1d8 necrotic damage to the target. When you reach 14th level, the extra damage increases to 2d8.",
        conflicts: [null],
        tier: 2,
        stackable: false
    },
    {
        name: "Wild Shape",
        dependency: null,
        description: "http://dnd5e.wikidot.com/druid",
        conflicts: [null],
        tier: 1,
        stackable: false
    },
    {
        name: "Beast Spells",
        dependency: "Wild Shape",
        description: "http://dnd5e.wikidot.com/druid",
        conflicts: [null],
        tier: 2,
        stackable: false
    },
    {
        name: "Combat Wild Shape",
        dependency: "Wild Shape",
        description: "http://dnd5e.wikidot.com/druid:moon",
        conflicts: [null],
        tier: 1,
        stackable: false
    },
    {
        name: "Halo of Spores",
        dependency: "Wild Shape",
        description: "http://dnd5e.wikidot.com/druid:moon",
        conflicts: [null],
        tier: 1,
        stackable: false
    },
    {
        name: "Symbiotic Entity",
        dependency: "Halo of Spores",
        description: "http://dnd5e.wikidot.com/druid:moon",
        conflicts: [null],
        tier: 2,
        stackable: false
    },
    {
        name: "Fungal Infestation",
        dependency: "Halo of Spores",
        description: "http://dnd5e.wikidot.com/druid:moon",
        conflicts: [null],
        tier: 2,
        stackable: false
    },
    {
        name: "Fungal Body",
        dependency: "Halo of Spores",
        description: "http://dnd5e.wikidot.com/druid:moon",
        conflicts: [null],
        tier: 3,
        stackable: false
    },
    {
        name: "Archdruid",
        dependency: "Wild Shape",
        description: "http://dnd5e.wikidot.com/druid",
        conflicts: [null],
        tier: 3,
        stackable: false
    },
    {
        name: "Starry Form",
        dependency: "Wild Shape",
        description: "http://dnd5e.wikidot.com/druid:stars",
        conflicts: [null],
        tier: 1,
        stackable: false
    },
    {
        name: "Twinkling Constellations",
        dependency: "Starry Form",
        description: "http://dnd5e.wikidot.com/druid:stars",
        conflicts: [null],
        tier: 2,
        stackable: false
    },
    {
        name: "Full of Stars",
        dependency: "Starry Form",
        description: "http://dnd5e.wikidot.com/druid:stars",
        conflicts: [null],
        tier: 3,
        stackable: false
    },
    {
        name: "Balm of the Summer Court",
        dependency: "Wild Shape",
        conflicts: [null],
        tier: 1,
        stackable: false
    },
    {
        name: "War Magic",
        dependency: null,
        description: "http://dnd5e.wikidot.com/fighter:eldritch-knight",
        conflicts: [null],
        tier: 1,
        stackable: false
    },
    {
        name: "Improved War Magic",
        dependency: "War Magic",
        description: "http://dnd5e.wikidot.com/fighter:eldritch-knight",
        conflicts: [null],
        tier: 2,
        stackable: false
    },
    {
        name: "Eldritch Strike",
        dependency: "War Magic",
        conflicts: [null],
        tier: 2,
        stackable: false
    },
    {
        name: "Extra Attack",
        dependency: null,
        conflicts: [null],
        tier: 1,
        stackable: true
    },
    {
        name: "Lay on Hands",
        dependency: null,
        conflicts: [null],
        tier: 1,
        stackable: false
    },
    {
        name: "Divine Smite",
        dependency: null,
        conflicts: [null],
        tier: 1,
        stackable: false
    },
    {
        name: "Aura of Protection",
        dependency: null,
        conflicts: [null],
        tier: 1,
        stackable: false
    },
    {
        name: "Improved Divine Smite",
        dependency: "Divine Smite",
        conflicts: [null],
        tier: 2,
        stackable: false
    },
    {
        name: "Aura of Hate",
        dependency: null,
        conflicts: [null],
        tier: 2,
        stackable: false
    },
    {
        name: "Fighting Style",
        dependency: null,
        description: "Look up dnd 5e fighting styles",
        conflicts: [null],
        tier: 1,
        stackable: true
    },
    {
        name: "Supernatural Resistance",
        dependency: null,
        conflicts: [null],
        tier: 3,
        stackable: false
    },
    {
        name: "Vigilant Rebuke",
        dependency: null,
        conflicts: [null],
        tier: 2,
        stackable: false
    },
    {
        name: "Emissary of Redemption",
        dependency: null,
        conflicts: [null],
        tier: 3,
        stackable: false
    },
    {
        name: "Protective Spirit",
        dependency: null,
        conflicts: [null],
        tier: 2,
        stackable: false
    },
    {
        name: "Living Legend",
        dependency: null,
        conflicts: [null],
        tier: 3,
        stackable: false
    },
    {
        name: "Eldritch Invocations",
        dependency: null,
        conflicts: [null],
        tier: 1,
        stackable: false
    },
    {
        name: "Meta Magic",
        description: "https://dnd5e.wikidot.com/sorcerer",
        dependency: null,
        conflicts: [null],
        tier: 1,
        stackable: false
    },
    {
        name: "Bolstering Magic",
        dependency: null,
        description: "http://dnd5e.wikidot.com/barbarian:wild-magic",
        conflicts: [null],
        tier: 1,
        stackable: false
    },
    {
        name: "Ability Score Improvement",
        dependency: null,
        conflicts: [null],
        tier: 1,
        stackable: true,
        cb: (char: Character, setChar: (c: Character) => void) => {
            const charCopy = { ...char }
            charCopy.pointsLeft += 2
            setChar(charCopy)
        }
    },
    {
        name: "Martial Adept",
        dependency: null,
        conflicts: [null],
        tier: 1,
        stackable: false
    },
    {
        name: "War Caster",
        dependency: null,
        conflicts: [null],
        tier: 1,
        stackable: false,
        link: "http://dnd5e.wikidot.com/feat:war-caster"
    },
    {
        name: "Shadow Touched",
        dependency: null,
        conflicts: [null],
        tier: 1,
        stackable: false,
        link: "http://dnd5e.wikidot.com/feat:shadow-touched"
    },
    {
        name: "Fey Touched",
        dependency: null,
        conflicts: [null],
        tier: 1,
        stackable: false,
        link: "http://dnd5e.wikidot.com/feat:fey-touched"
    },
    {
        name: "Ember of the Fire Giant",
        dependency: null,
        conflicts: [null],
        tier: 1,
        stackable: false,
        link: "http://dnd5e.wikidot.com/feat:ember-of-the-fire-giant"
    },
    {
        name: "Infusion",
        dependency: null,
        conflicts: [null],
        tier: 1,
        stackable: false,
        link: "http://dnd5e.wikidot.com/artificer"
    }
];

export default halfCasterFeatures;
