import type { Feature, Character } from "../types";

const fighter = "Fighter"
const hybrid = "Hybrid"
const mage = "Mage"

const features: Feature[] = [
    {
        name: "Rage",
        classes: [fighter],
        dependency: null,
        description: "On your turn, you can enter a rage as a bonus action. While Raging: You have advantage on Physical checks and Physical saving throws, when you make a melee weapon attack using Physical, you gain a bonus to the damage roll that increases as you gain levels as a barbarian, as shown in the Rage Damage column of the Barbarian table, and you have resistance to bludgeoning, piercing, and slashing damage. If you are able to cast spells, you can't cast them or concentrate on them while raging. Your rage lasts for 1 minute. It ends early if you are knocked unconscious or if your turn ends and you haven't attacked a hostile creature since your last turn or taken damage since then. You can also end your rage on your turn as a bonus action.",
        conflicts: [null],
        tier: 1,
        stackable: false,
        maxStacks: 1
    },
    {
        name: "Unarmored Defense",
        classes: [fighter],
        dependency: null,
        description: "While you are not wearing any armor, your armor class equals 10 + your Physical modifier + your Fortitude modifier. You can use a shield and still gain this benefit.",
        conflicts: [null],
        tier: 1,
        stackable: false,
        maxStacks: 1
    },
    {
        name: "Reckless Attack",
        classes: [fighter],
        dependency: null,
        description: "You can throw aside all concern for defense to attack with fierce desperation. When you make your first attack on your turn, you can decide to attack recklessly. Doing so gives you advantage on melee weapon attack rolls using Physical during this turn, but attack rolls against you have advantage until your next turn.",
        conflicts: [null],
        tier: 1,
        stackable: false,
        maxStacks: 1
    },
    {
        name: "Danger Sense",
        classes: [fighter],
        dependency: null,
        description: "You gain an uncanny sense of when things nearby aren't as they should be, giving you an edge when you dodge away from danger. You have advantage on Physical saving throws against effects that you can see, such as traps and spells. To gain this benefit, you can't be blinded, deafened, or incapacitated.",
        conflicts: [null],
        tier: 1,
        stackable: false,
        maxStacks: 1
    },
    {
        name: "Extra Attack",
        classes: [fighter, hybrid],
        dependency: null,
        description: "You can attack twice, instead of once, whenever you take the Attack action on your turn.",
        conflicts: [null],
        tier: 1,
        stackable: true,
        maxStacks: 999
    },
    {
        name: "Fast Movement",
        classes: [fighter],
        dependency: null,
        description: "Your speed increases by 10 feet while you aren't wearing heavy armor.",
        conflicts: [null],
        tier: 1,
        stackable: false,
        maxStacks: 1
    },
    {
        name: "Feral Instinct",
        classes: [fighter],
        dependency: null,
        description: "Your instincts are so honed that you have advantage on initiative rolls. Additionally, if you are surprised at the beginning of combat and aren't incapacitated, you can act normally on your first turn, but only if you enter your rage before doing anything else on that turn.",
        conflicts: [null],
        tier: 2,
        stackable: false,
        maxStacks: 1
    },
    {
        name: "Brutal Critical",
        classes: [fighter],
        dependency: null,
        description: "You can roll one additional weapon damage die when determining the extra damage for a critical hit with a melee attack. This increases to two additional dice at 13th level and three additional dice at 17th level.",
        conflicts: [null],
        tier: 2,
        stackable: false,
        maxStacks: 1
    },
    {
        name: "Relentless Rage",
        classes: [fighter],
        dependency: "Rage",
        description: "Your rage can keep you fighting despite grievous wounds. If you drop to 0 hit points while you're raging and don't die outright, you can make a DC 10 Fortitude saving throw. If you succeed, you drop to 1 hit point instead. Each time you use this feature after the first, the DC increases by 5. When you finish a short or long rest, the DC resets to 10.",
        conflicts: [null],
        tier: 2,
        stackable: false,
        maxStacks: 1
    },
    {
        name: "Persistent Rage",
        classes: [fighter],
        dependency: "Rage",
        description: "Your rage is so fierce that it ends early only if you fall unconscious or if you choose to end it.",
        conflicts: [null],
        tier: 3,
        stackable: false,
        maxStacks: 1
    },
    {
        name: "Indomitable Might",
        classes: [fighter],
        dependency: null,
        description: "If your total for a Physical check is less than your Physical score, you can use that score in place of the total.",
        conflicts: [null],
        tier: 3,
        stackable: false,
        maxStacks: 1
    },
    {
        name: "Primal Champion",
        classes: [fighter],
        dependency: null,
        description: "You embody the power of the wilds. Your Physical and Fortitude scores increase by 4. Your maximum for those scores is now 24.",
        conflicts: [null],
        tier: 3,
        stackable: false,
        maxStacks: 1
    },
    {
        name: "Fighting Style",
        classes: [fighter, hybrid],
        dependency: null,
        description: "Look up dnd 5e fighting styles",
        conflicts: [null],
        tier: 1,
        stackable: true,
        maxStacks: 5
    },
    {
        name: "Action Surge",
        classes: [fighter],
        dependency: null,
        description: "You can push yourself beyond your normal limits for a moment. On your turn, you can take one additional action on top of your regular action and a possible bonus action. Once you use this feature, you must finish a short or long rest before you can use it again. Starting at 17th level, you can use it twice before a rest, but only once on the same turn.",
        conflicts: [null],
        tier: 2,
        stackable: false,
        maxStacks: 1
    },
    {
        name: "Indomitable",
        classes: [fighter],
        dependency: null,
        description: "You can reroll a saving throw that you fail. If you do so, you must use the new roll, and you can't use this feature again until you finish a long rest. You can use this feature twice between long rests starting at 13th level and three times between long rests starting at 17th level.",
        conflicts: [null],
        tier: 2,
        stackable: false,
        maxStacks: 1
    },
    {
        name: "Martial Arts",
        classes: [fighter],
        dependency: null,
        description: "Look it up in the monk table in 5e",
        conflicts: [null],
        tier: 1,
        stackable: false,
        maxStacks: 1
    },
    {
        name: "Ki",
        classes: [fighter],
        dependency: null,
        description: "Look it up in the monk table in 5e",
        conflicts: [null],
        tier: 1,
        stackable: false,
        maxStacks: 1
    },
    {
        name: "Unarmored Movement",
        classes: [fighter],
        dependency: null,
        description: "Your speed increases by 10 feet while you are not wearing armor or wielding a shield. This bonus increases when you reach certain monk levels, as shown in the Monk table. At 9th level, you gain the ability to move along vertical surfaces and across liquids on your turn without falling during the move.",
        conflicts: [null],
        tier: 2,
        stackable: false,
        maxStacks: 1
    },
    {
        name: "Deflect Missiles",
        classes: [fighter],
        dependency: "Ki",
        description: "You can use your reaction to deflect or catch the missile when you are hit by a ranged weapon attack. When you do so, the damage you take from the attack is reduced by 1d10 + your Physical modifier + your level.",
        conflicts: [null],
        tier: 2,
        stackable: false,
        maxStacks: 1
    },
    {
        name: "Stunning Strike",
        classes: [fighter],
        dependency: "Ki",
        description: "You can interfere with the flow of ki in an opponent's body. When you hit another creature with a melee weapon attack, you can spend 1 ki point to attempt a stunning strike. The target must succeed on a Fortitude saving throw or be stunned until the end of your next turn.",
        conflicts: [null],
        tier: 2,
        stackable: false,
        maxStacks: 1
    },
    {
        name: "Ki-Empowered Strikes",
        classes: [fighter],
        dependency: "Ki",
        description: "Your unarmed strikes count as magical for the purpose of overcoming resistance and immunity to nonmagical attacks and damage.",
        conflicts: [null],
        tier: 2,
        stackable: false,
        maxStacks: 1
    },
    {
        name: "Evasion",
        classes: [fighter],
        dependency: null,
        description: "Your instinctive agility lets you dodge out of the way of certain area effects, such as a blue dragon's lightning breath or a fireball spell. When you are subjected to an effect that allows you to make a Physical saving throw to take only half damage, you instead take no damage if you succeed on the saving throw, and only half damage if you fail.",
        conflicts: [null],
        tier: 2,
        stackable: false,
        maxStacks: 1
    },
    {
        name: "Diamond Soul",
        classes: [fighter],
        dependency: "Ki",
        description: "Your mastery of ki grants you proficiency in all saving throws. Additionally, whenever you make a saving throw and fail, you can spend 1 ki point to reroll it and take the second result.",
        conflicts: [null],
        tier: 3,
        stackable: false,
        maxStacks: 1
    },
    {
        name: "Sneak Attack",
        classes: [fighter],
        dependency: null,
        description: "You know how to strike subtly and exploit a foe's distraction. Once per turn, you can deal an extra 1d6 damage to one creature you hit with an attack if you have advantage on the attack roll. The attack must use a finesse or a ranged weapon. You don't need advantage on the attack roll if another enemy of the target is within 5 feet of it, that enemy isn't incapacitated, and you don't have disadvantage on the attack roll. The amount of the extra damage increases as you gain levels in this class, as shown in the Sneak Attack column of the Rogue table.",
        conflicts: [null],
        tier: 1,
        stackable: false,
        maxStacks: 1
    },
    {
        name: "Cunning Action",
        classes: [fighter],
        dependency: null,
        description: "Your quick thinking and agility allow you to move and act quickly. You can take a bonus action on each of your turns in combat. This action can be used only to take the Dash, Disengage, or Hide action.",
        conflicts: [null],
        tier: 1,
        stackable: false,
        maxStacks: 1
    },
    {
        name: "Uncanny Dodge",
        classes: [fighter],
        dependency: null,
        description: "When an attacker that you can see hits you with an attack, you can use your reaction to halve the attack's damage against you.",
        conflicts: [null],
        tier: 2,
        stackable: false,
        maxStacks: 1
    },
    {
        name: "Blindsense",
        classes: [fighter],
        dependency: null,
        description: "If you are able to hear, you are aware of the location of any hidden or invisible creature within 10 feet of you.",
        conflicts: [null],
        tier: 3,
        stackable: false,
        maxStacks: 1
    },
    {
        name: "Elusive",
        classes: [fighter],
        dependency: null,
        description: "You are so evasive that attackers rarely gain the upper hand against you. No attack roll has advantage against you while you aren't incapacitated.",
        conflicts: [null],
        tier: 3,
        stackable: false,
        maxStacks: 1
    },
    {
        name: "Stroke of Luck",
        classes: [fighter],
        dependency: null,
        description: "You have an uncanny knack for succeeding when you need to. If your attack misses a target within range, you can turn the miss into a hit. Alternatively, if you fail an ability check, you can treat the d20 roll as a 20. Once you use this feature, you can't use it again until you finish a short or long rest.",
        conflicts: [null],
        tier: 3,
        stackable: false,
        maxStacks: 1
    },
    {
        name: "Ability Score Improvement",
        classes: [fighter, hybrid, mage],
        dependency: null,
        description: "You can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
        conflicts: [null],
        tier: 1,
        stackable: true,
        maxStacks: 9999,
        cb: (char: Character, setChar: (c: Character) => void) => {
            const charCopy = { ...char }
            charCopy.pointsLeft += 2
            setChar(charCopy)
        }
    },
    {
        name: "Shield Master",
        classes: [fighter],
        dependency: null,
        conflicts: [null],
        tier: 1,
        stackable: false,
        maxStacks: 1,
        link: "http://dnd5e.wikidot.com/feat:shield-master"
    },
    {
        name: "Sentinel",
        classes: [fighter],
        dependency: null,
        conflicts: [null],
        tier: 1,
        stackable: false,
        maxStacks: 1,
        link: "http://dnd5e.wikidot.com/feat:sentinel"
    },
    {
        name: "Savage Attacker",
        classes: [fighter],
        dependency: null,
        conflicts: [null],
        tier: 1,
        stackable: false,
        maxStacks: 1,
        link: "http://dnd5e.wikidot.com/feat:savage-attacker"
    },
    {
        name: "Polearm Master",
        classes: [fighter],
        dependency: null,
        conflicts: [null],
        tier: 1,
        stackable: false,
        maxStacks: 1,
        link: "http://dnd5e.wikidot.com/feat:polearm-master"
    },
    {
        name: "Heavy Armor Master",
        classes: [fighter],
        dependency: null,
        conflicts: [null],
        tier: 1,
        stackable: false,
        maxStacks: 1,
        link: "http://dnd5e.wikidot.com/feat:heavy-armor-master",
        cb: (char: Character, setChar: (c: Character) => void) => {
            const charCopy = { ...char }
            charCopy.stats.physical += 1
            setChar(charCopy)
        }
    },
    {
        name: "Great Weapon Master",
        classes: [fighter],
        dependency: null,
        conflicts: [null],
        tier: 1,
        stackable: false,
        maxStacks: 1,
        link: "http://dnd5e.wikidot.com/feat:great-weapon-master"
    },
    {
        name: "Dual Wielder",
        classes: [fighter],
        dependency: null,
        conflicts: [null],
        tier: 1,
        stackable: false,
        maxStacks: 1,
        link: "http://dnd5e.wikidot.com/feat:dual-wielder"
    },
    {
        name: "Defensive Duelist",
        classes: [fighter],
        dependency: null,
        conflicts: [null],
        tier: 1,
        stackable: false,
        maxStacks: 1,
        link: "http://dnd5e.wikidot.com/feat:defensive-duelist"
    },
    {
        name: "Ancestral Protectors",
        classes: [fighter],
        dependency: "Rage",
        description: "http://dnd5e.wikidot.com/barbarian:ancestral-guardian",
        conflicts: [null],
        tier: 1,
        stackable: false,
        maxStacks: 1
    },
    {
        name: "Spirit Shield",
        classes: [fighter],
        dependency: "Rage",
        description: "http://dnd5e.wikidot.com/barbarian:ancestral-guardian",
        conflicts: [null],
        tier: 2,
        stackable: false,
        maxStacks: 1
    },
    {
        name: "Vengeful Ancestors",
        classes: [fighter],
        dependency: "Spirit Shield",
        description: "http://dnd5e.wikidot.com/barbarian:ancestral-guardian",
        conflicts: [null],
        tier: 3,
        stackable: false,
        maxStacks: 1
    },
    {
        name: "Form of the Beast",
        classes: [fighter],
        dependency: "Rage",
        description: "http://dnd5e.wikidot.com/barbarian:beast",
        conflicts: [null],
        tier: 1,
        stackable: false,
        maxStacks: 1
    },
    {
        name: "Bestial Soul",
        classes: [fighter],
        dependency: "Form of the Beast",
        description: "http://dnd5e.wikidot.com/barbarian:beast",
        conflicts: [null],
        tier: 2,
        stackable: false,
        maxStacks: 1
    },
    {
        name: "Infectious Fury",
        classes: [fighter],
        dependency: "Bestial Soul",
        description: "http://dnd5e.wikidot.com/barbarian:beast",
        conflicts: [null],
        tier: 3,
        stackable: false,
        maxStacks: 1
    },
    {
        name: "Frenzy",
        classes: [fighter],
        dependency: "Rage",
        description: "http://dnd5e.wikidot.com/barbarian:berserker",
        conflicts: [null],
        tier: 1,
        stackable: false,
        maxStacks: 1
    },
    {
        name: "Mindless Rage",
        classes: [fighter],
        dependency: "Rage",
        description: "http://dnd5e.wikidot.com/barbarian:berserker",
        conflicts: [null],
        tier: 1,
        stackable: false,
        maxStacks: 1
    },
    {
        name: "Intimidating Presence",
        classes: [fighter],
        dependency: null,
        description: "http://dnd5e.wikidot.com/barbarian:berserker",
        conflicts: [null],
        tier: 2,
        stackable: false,
        maxStacks: 1
    },
    {
        name: "Retaliation",
        classes: [fighter],
        dependency: null,
        description: "http://dnd5e.wikidot.com/barbarian:berserker",
        conflicts: [null],
        tier: 3,
        stackable: false,
        maxStacks: 1
    },
    {
        name: "Giant's Havoc",
        classes: [fighter],
        dependency: "Rage",
        description: "http://dnd5e.wikidot.com/barbarian:giant",
        conflicts: [null],
        tier: 1,
        stackable: false,
        maxStacks: 1
    },
    {
        name: "Elemental Cleaver",
        classes: [fighter],
        dependency: "Rage",
        description: "http://dnd5e.wikidot.com/barbarian:giant",
        conflicts: [null],
        tier: 2,
        stackable: false,
        maxStacks: 1
    },
    {
        name: "Mighty Impel",
        classes: [fighter],
        dependency: "Giant's Havoc",
        description: "http://dnd5e.wikidot.com/barbarian:giant",
        conflicts: [null],
        tier: 2,
        stackable: false,
        maxStacks: 1
    },
    {
        name: "Demiurgic Colossus",
        classes: [fighter],
        dependency: "Mighty Impel",
        description: "http://dnd5e.wikidot.com/barbarian:giant",
        conflicts: [null],
        tier: 3,
        stackable: false,
        maxStacks: 1
    },
    {
        name: "Storm Aura",
        classes: [fighter],
        dependency: "Rage",
        description: "http://dnd5e.wikidot.com/barbarian:storm-herald",
        conflicts: [null],
        tier: 1,
        stackable: false,
        maxStacks: 1
    },
    {
        name: "Storm Soul",
        classes: [fighter],
        dependency: "Storm Aura",
        description: "http://dnd5e.wikidot.com/barbarian:storm-herald",
        conflicts: [null],
        tier: 2,
        stackable: false,
        maxStacks: 1
    },
    {
        name: "Shielding Storm",
        classes: [fighter],
        dependency: "Storm Soul",
        description: "http://dnd5e.wikidot.com/barbarian:storm-herald",
        conflicts: [null],
        tier: 2,
        stackable: false,
        maxStacks: 1
    },
    {
        name: "Raging Storm",
        classes: [fighter],
        dependency: "Shielding Storm",
        description: "http://dnd5e.wikidot.com/barbarian:storm-herald",
        conflicts: [null],
        tier: 3,
        stackable: false,
        maxStacks: 1
    },
    {
        name: "Totem Spirit",
        classes: [fighter],
        dependency: "Rage",
        description: "http://dnd5e.wikidot.com/barbarian:totem-warrior",
        conflicts: [null],
        tier: 1,
        stackable: false,
        maxStacks: 1
    },
    {
        name: "Aspect of the Beast",
        classes: [fighter],
        dependency: "Totem Spirit",
        description: "http://dnd5e.wikidot.com/barbarian:totem-warrior",
        conflicts: [null],
        tier: 2,
        stackable: false,
        maxStacks: 1
    },
    {
        name: "Totemic Attunement",
        classes: [fighter],
        dependency: "Aspect of the Beast",
        description: "http://dnd5e.wikidot.com/barbarian:totem-warrior",
        conflicts: [null],
        tier: 3,
        stackable: false,
        maxStacks: 1
    },
    {
        name: "Wild Surge",
        classes: [fighter],
        dependency: "Rage",
        description: "http://dnd5e.wikidot.com/barbarian:wild-magic",
        conflicts: [null],
        tier: 1,
        stackable: false,
        maxStacks: 1
    },
    {
        name: "Unstable Backlash",
        classes: [fighter],
        dependency: "Wild Surge",
        description: "http://dnd5e.wikidot.com/barbarian:wild-magic",
        conflicts: [null],
        tier: 2,
        stackable: false,
        maxStacks: 1
    },
    {
        name: "Controlled Surge",
        classes: [fighter],
        dependency: "Unstable Backlash",
        description: "http://dnd5e.wikidot.com/barbarian:wild-magic",
        conflicts: [null],
        tier: 3,
        stackable: false,
        maxStacks: 1
    },
    {
        name: "Divine Fury",
        classes: [fighter],
        dependency: "Rage",
        description: "http://dnd5e.wikidot.com/barbarian:zealot",
        conflicts: [null],
        tier: 1,
        stackable: false,
        maxStacks: 1
    },
    {
        name: "Fanatical Focus",
        classes: [fighter],
        dependency: "Rage",
        description: "http://dnd5e.wikidot.com/barbarian:zealot",
        conflicts: [null],
        tier: 2,
        stackable: false,
        maxStacks: 1
    },
    {
        name: "Zealous Presence",
        classes: [fighter],
        dependency: "Divine Fury",
        description: "http://dnd5e.wikidot.com/barbarian:zealot",
        conflicts: [null],
        tier: 2,
        stackable: false,
        maxStacks: 1
    },
    {
        name: "Rage Beyond Death",
        classes: [fighter],
        dependency: "Zealous Presence",
        description: "http://dnd5e.wikidot.com/barbarian:zealot",
        conflicts: [null],
        tier: 3,
        stackable: false,
        maxStacks: 1
    },
    {
        name: "Infusion",
        classes: [hybrid],
        dependency: null,
        description: "http://dnd5e.wikidot.com/artificer",
        conflicts: [null],
        tier: 1,
        stackable: false,
        maxStacks: 1,
        link: "http://dnd5e.wikidot.com/artificer"
    },
    {
        name: "Magic Item Adept",
        classes: [hybrid],
        dependency: null,
        description: "http://dnd5e.wikidot.com/artificer",
        conflicts: [null],
        tier: 1,
        stackable: false,
        maxStacks: 1
    },
    {
        name: "Magic Item Savant",
        classes: [hybrid],
        dependency: "Magic Item Adept",
        description: "http://dnd5e.wikidot.com/artificer",
        conflicts: [null],
        tier: 2,
        stackable: false,
        maxStacks: 1
    },
    {
        name: "Magic Item Master",
        classes: [hybrid],
        dependency: "Magic Item Savant",
        description: "http://dnd5e.wikidot.com/artificer",
        conflicts: [null],
        tier: 2,
        stackable: false,
        maxStacks: 1
    },
    {
        name: "Soul of Artifice",
        classes: [hybrid],
        dependency: "Magic Item Master",
        description: "http://dnd5e.wikidot.com/artificer",
        conflicts: [null],
        tier: 3,
        stackable: false,
        maxStacks: 1
    },
    {
        name: "Experimental Elixir",
        classes: [hybrid],
        dependency: null,
        description: "http://dnd5e.wikidot.com/artificer:alchemist",
        conflicts: [null],
        tier: 1,
        stackable: false,
        maxStacks: 1
    },
    {
        name: "Restorative Reagents",
        classes: [hybrid],
        dependency: "Experimental Elixir",
        description: "http://dnd5e.wikidot.com/artificer:alchemist",
        conflicts: [null],
        tier: 2,
        stackable: false,
        maxStacks: 1
    },
    {
        name: "Chemical Mastery",
        classes: [hybrid],
        dependency: "Experimental Elixir",
        description: "http://dnd5e.wikidot.com/artificer:alchemist",
        conflicts: [null],
        tier: 3,
        stackable: false,
        maxStacks: 1
    },
    {
        name: "Arcane Armor/Armor Model",
        classes: [hybrid],
        dependency: null,
        description: "http://dnd5e.wikidot.com/artificer:armorer",
        conflicts: [null],
        tier: 1,
        stackable: false,
        maxStacks: 1
    },
    {
        name: "Armor Modifications",
        classes: [hybrid],
        dependency: "Arcane Armor/Armor Model",
        description: "http://dnd5e.wikidot.com/artificer:armorer",
        conflicts: [null],
        tier: 2,
        stackable: false,
        maxStacks: 1
    },
    {
        name: "Perfected Armor",
        classes: [hybrid],
        dependency: "Armor Modifications",
        description: "http://dnd5e.wikidot.com/artificer:armorer",
        conflicts: [null],
        tier: 3,
        stackable: false,
        maxStacks: 1
    },
    {
        name: "Eldritch Cannon",
        classes: [hybrid],
        dependency: null,
        description: "http://dnd5e.wikidot.com/artificer:artillerist",
        conflicts: [null],
        tier: 2,
        stackable: false,
        maxStacks: 1
    },
    {
        name: "Explosive Cannon",
        classes: [hybrid],
        dependency: "Eldritch Cannon",
        description: "http://dnd5e.wikidot.com/artificer:artillerist",
        conflicts: [null],
        tier: 2,
        stackable: false,
        maxStacks: 1
    },
    {
        name: "Fortified Position",
        classes: [hybrid],
        dependency: "Eldritch Cannon",
        description: "http://dnd5e.wikidot.com/artificer:artillerist",
        conflicts: [null],
        tier: 3,
        stackable: false,
        maxStacks: 1
    },
    {
        name: "Steel Defender",
        classes: [hybrid],
        dependency: null,
        description: "http://dnd5e.wikidot.com/artificer:battle-smith",
        conflicts: [null],
        tier: 2,
        stackable: false,
        maxStacks: 1
    },
    {
        name: "Arcane Jolt",
        classes: [hybrid],
        dependency: "Steel Defender",
        description: "http://dnd5e.wikidot.com/artificer:battle-smith",
        conflicts: [null],
        tier: 2,
        stackable: false,
        maxStacks: 1
    },
    {
        name: "Improved Defender",
        classes: [hybrid],
        dependency: "Arcane Jolt",
        description: "http://dnd5e.wikidot.com/artificer:battle-smith",
        conflicts: [null],
        tier: 3,
        stackable: false,
        maxStacks: 1
    },
    {
        name: "Bardic Inspiration",
        classes: [hybrid],
        dependency: null,
        description: "http://dnd5e.wikidot.com/bard",
        conflicts: [null],
        tier: 1,
        stackable: false,
        maxStacks: 1
    },
    {
        name: "Unfailing Inspiration",
        classes: [hybrid],
        dependency: "Bardic Inspiration",
        description: "http://dnd5e.wikidot.com/bard:eloquence",
        conflicts: [null],
        tier: 3,
        stackable: false,
        maxStacks: 1
    },
    {
        name: "Infectious Inspiration",
        classes: [hybrid],
        dependency: "Bardic Inspiration",
        description: "http://dnd5e.wikidot.com/bard:eloquence",
        conflicts: [null],
        tier: 3,
        stackable: false,
        maxStacks: 1
    },
    {
        name: "Cutting Words",
        classes: [hybrid],
        dependency: "Bardic Inspiration",
        description: "http://dnd5e.wikidot.com/bard:lore",
        conflicts: [null],
        tier: 1,
        stackable: false,
        maxStacks: 1
    },
    {
        name: "Blade Flourish",
        classes: [hybrid],
        dependency: "Bardic Inspiration",
        description: "http://dnd5e.wikidot.com/bard:swords",
        conflicts: [null],
        tier: 2,
        stackable: false,
        maxStacks: 1
    },
    {
        name: "Master's Flourish",
        classes: [hybrid],
        dependency: "Blade Flourish",
        description: "http://dnd5e.wikidot.com/bard:swords",
        conflicts: [null],
        tier: 3,
        stackable: false,
        maxStacks: 1
    },
    {
        name: "Superior Inspiration",
        classes: [hybrid],
        dependency: "Bardic Inspiration",
        description: "http://dnd5e.wikidot.com/bard",
        conflicts: [null],
        tier: 2,
        stackable: false,
        maxStacks: 1
    },
    {
        name: "Combat Inspiration",
        classes: [hybrid],
        dependency: "Bardic Inspiration",
        description: "http://dnd5e.wikidot.com/bard:valor",
        conflicts: [null],
        tier: 2,
        stackable: false,
        maxStacks: 1
    },
    {
        name: "Psychic Blades",
        classes: [hybrid],
        dependency: "Bardic Inspiration",
        description: "https://dnd5e.wikidot.com/rogue:soulknife",
        conflicts: [null],
        tier: 1,
        stackable: false,
        maxStacks: 1
    },
    {
        name: "Battle Magic",
        classes: [hybrid],
        dependency: null,
        description: "http://dnd5e.wikidot.com/bard:valor",
        conflicts: [null],
        tier: 2,
        stackable: false,
        maxStacks: 1
    },
    {
        name: "Divine Strike",
        classes: [hybrid],
        dependency: null,
        description: "Once on each of your turns when you hit a creature with a weapon attack, you can cause the attack to deal an a 1d8 necrotic damage to the target. When you reach 14th level, the extra damage increases to 2d8.",
        conflicts: [null],
        tier: 2,
        stackable: false,
        maxStacks: 1
    },
    {
        name: "Wild Shape",
        classes: [hybrid],
        dependency: null,
        description: "http://dnd5e.wikidot.com/druid",
        conflicts: [null],
        tier: 1,
        stackable: false,
        maxStacks: 1
    },
    {
        name: "Beast Spells",
        classes: [hybrid],
        dependency: "Wild Shape",
        description: "http://dnd5e.wikidot.com/druid",
        conflicts: [null],
        tier: 2,
        stackable: false,
        maxStacks: 1
    },
    {
        name: "Combat Wild Shape",
        classes: [hybrid],
        dependency: "Wild Shape",
        description: "http://dnd5e.wikidot.com/druid:moon",
        conflicts: [null],
        tier: 1,
        stackable: false,
        maxStacks: 1
    },
    {
        name: "Halo of Spores",
        classes: [hybrid],
        dependency: "Wild Shape",
        description: "http://dnd5e.wikidot.com/druid:moon",
        conflicts: [null],
        tier: 1,
        stackable: false,
        maxStacks: 1
    },
    {
        name: "Symbiotic Entity",
        classes: [hybrid],
        dependency: "Halo of Spores",
        description: "http://dnd5e.wikidot.com/druid:moon",
        conflicts: [null],
        tier: 2,
        stackable: false,
        maxStacks: 1
    },
    {
        name: "Fungal Infestation",
        classes: [hybrid],
        dependency: "Halo of Spores",
        description: "http://dnd5e.wikidot.com/druid:moon",
        conflicts: [null],
        tier: 2,
        stackable: false,
        maxStacks: 1
    },
    {
        name: "Fungal Body",
        classes: [hybrid],
        dependency: "Halo of Spores",
        description: "http://dnd5e.wikidot.com/druid:moon",
        conflicts: [null],
        tier: 3,
        stackable: false,
        maxStacks: 1
    },
    {
        name: "Archdruid",
        classes: [hybrid],
        dependency: "Wild Shape",
        description: "http://dnd5e.wikidot.com/druid",
        conflicts: [null],
        tier: 3,
        stackable: false,
        maxStacks: 1
    },
    {
        name: "Starry Form",
        classes: [hybrid],
        dependency: "Wild Shape",
        description: "http://dnd5e.wikidot.com/druid:stars",
        conflicts: [null],
        tier: 1,
        stackable: false,
        maxStacks: 1
    },
    {
        name: "Twinkling Constellations",
        classes: [hybrid],
        dependency: "Starry Form",
        description: "http://dnd5e.wikidot.com/druid:stars",
        conflicts: [null],
        tier: 2,
        stackable: false,
        maxStacks: 1
    },
    {
        name: "Full of Stars",
        classes: [hybrid],
        dependency: "Starry Form",
        description: "http://dnd5e.wikidot.com/druid:stars",
        conflicts: [null],
        tier: 3,
        stackable: false,
        maxStacks: 1
    },
    {
        name: "Balm of the Summer Court",
        classes: [hybrid],
        dependency: "Wild Shape",
        conflicts: [null],
        tier: 1,
        stackable: false,
        maxStacks: 1
    },
    {
        name: "War Magic",
        classes: [hybrid],
        dependency: null,
        description: "http://dnd5e.wikidot.com/fighter:eldritch-knight",
        conflicts: [null],
        tier: 1,
        stackable: false,
        maxStacks: 1
    },
    {
        name: "Improved War Magic",
        classes: [hybrid],
        dependency: "War Magic",
        description: "http://dnd5e.wikidot.com/fighter:eldritch-knight",
        conflicts: [null],
        tier: 2,
        stackable: false,
        maxStacks: 1
    },
    {
        name: "Eldritch Strike",
        classes: [hybrid],
        dependency: "War Magic",
        conflicts: [null],
        tier: 2,
        stackable: false,
        maxStacks: 1
    },
    {
        name: "Lay on Hands",
        classes: [hybrid],
        dependency: null,
        conflicts: [null],
        tier: 1,
        stackable: false,
        maxStacks: 1
    },
    {
        name: "Divine Smite",
        classes: [hybrid],
        dependency: null,
        conflicts: [null],
        tier: 1,
        stackable: false,
        maxStacks: 1
    },
    {
        name: "Aura of Protection",
        classes: [hybrid],
        dependency: null,
        conflicts: [null],
        tier: 1,
        stackable: false,
        maxStacks: 1
    },
    {
        name: "Improved Divine Smite",
        classes: [hybrid],
        dependency: "Divine Smite",
        conflicts: [null],
        tier: 2,
        stackable: false,
        maxStacks: 1
    },
    {
        name: "Aura of Hate",
        classes: [hybrid],
        dependency: null,
        conflicts: [null],
        tier: 2,
        stackable: false,
        maxStacks: 1
    },
    {
        name: "Supernatural Resistance",
        classes: [hybrid],
        dependency: null,
        conflicts: [null],
        tier: 3,
        stackable: false,
        maxStacks: 1
    },
    {
        name: "Vigilant Rebuke",
        classes: [hybrid],
        dependency: null,
        conflicts: [null],
        tier: 2,
        stackable: false,
        maxStacks: 1
    },
    {
        name: "Emissary of Redemption",
        classes: [hybrid],
        dependency: null,
        conflicts: [null],
        tier: 3,
        stackable: false,
        maxStacks: 1
    },
    {
        name: "Protective Spirit",
        classes: [hybrid],
        dependency: null,
        conflicts: [null],
        tier: 2,
        stackable: false,
        maxStacks: 1
    },
    {
        name: "Living Legend",
        classes: [hybrid],
        dependency: null,
        conflicts: [null],
        tier: 3,
        stackable: false,
        maxStacks: 1
    },
    {
        name: "Eldritch Invocations",
        classes: [hybrid],
        dependency: null,
        conflicts: [null],
        tier: 1,
        stackable: false,
        maxStacks: 1
    },
    {
        name: "Meta Magic",
        classes: [hybrid],
        dependency: null,
        description: "https://dnd5e.wikidot.com/sorcerer",
        conflicts: [null],
        tier: 1,
        stackable: false,
        maxStacks: 1
    },
    {
        name: "Bolstering Magic",
        classes: [hybrid],
        dependency: null,
        description: "http://dnd5e.wikidot.com/barbarian:wild-magic",
        conflicts: [null],
        tier: 1,
        stackable: false,
        maxStacks: 1
    },
    {
        name: "Martial Adept",
        classes: [hybrid],
        dependency: null,
        conflicts: [null],
        tier: 1,
        stackable: false,
        maxStacks: 1
    },
    {
        name: "War Caster",
        classes: [hybrid],
        dependency: null,
        conflicts: [null],
        tier: 1,
        stackable: false,
        maxStacks: 1,
        link: "http://dnd5e.wikidot.com/feat:war-caster"
    },
    {
        name: "Shadow Touched",
        classes: [hybrid],
        dependency: null,
        conflicts: [null],
        tier: 1,
        stackable: false,
        maxStacks: 1,
        link: "http://dnd5e.wikidot.com/feat:shadow-touched"
    },
    {
        name: "Fey Touched",
        classes: [hybrid],
        dependency: null,
        conflicts: [null],
        tier: 1,
        stackable: false,
        maxStacks: 1,
        link: "http://dnd5e.wikidot.com/feat:fey-touched"
    },
    {
        name: "Ember of the Fire Giant",
        classes: [hybrid],
        dependency: null,
        conflicts: [null],
        tier: 1,
        stackable: false,
        maxStacks: 1,
        link: "http://dnd5e.wikidot.com/feat:ember-of-the-fire-giant"
    },
    {
        name: "Arcane Ward",
        classes: [mage],
        dependency: null,
        description: "You can weave magic around yourself for protection. When you cast an abjuration spell of 1st level or higher, you can simultaneously use a strand of the spell's magic to create a magical ward on yourself that lasts until you finish a long rest. The ward has hit points equal to twice your wizard level + your Mental modifier. Whenever you take damage, the ward takes the damage instead. If this damage reduces the ward to 0 hit points, you take any remaining damage. While the ward has 0 hit points, it can't absorb damage, but its magic remains. Whenever you cast an abjuration spell of 1st level or higher, the ward regains a number of hit points equal to twice the level of the spell. Once you create the ward, you can't create it again until you finish a long rest.",
        conflicts: [],
        tier: 1,
        stackable: false,
        maxStacks: 1
    },
    {
        name: "Projected Ward",
        classes: [mage],
        dependency: "Arcane Ward",
        description: "When a creature that you can see within 30 feet of you takes damage, you can use your reaction to cause your Arcane Ward to absorb that damage. If this damage reduces the ward to 0 hit points, the warded creature takes any remaining damage.",
        conflicts: [],
        tier: 2,
        stackable: false,
        maxStacks: 1
    },
    {
        name: "Spell Resistance",
        classes: [mage],
        dependency: "Arcane Ward",
        description: "You have advantage on saving throws against spells.",
        conflicts: [],
        tier: 3,
        stackable: false,
        maxStacks: 1
    },
    {
        name: "Bladesong",
        classes: [mage],
        dependency: null,
        description: "You gain proficiency with Light Armor and one-handed weapons. You can invoke a secret elven magic called the Bladesong, provided that you aren't wearing medium or heavy armor or using a shield. It graces you with supernatural speed, agility, and focus. You can use a bonus action to start the Bladesong, which lasts for 1 minute. It ends early if you are incapacitated, if you don medium or heavy armor or a shield, or if you use two hands to make an attack with a weapon. You can also dismiss the Bladesong at any time you choose (no action required). While your Bladesong is active, you gain the following benefits: You gain a bonus to your AC equal to your Mental modifier (minimum of +1). Your walking speed increases by 10 feet. You have advantage on Physical (Acrobatics) checks. You gain a bonus to any Fortitude saving throw you make to maintain your concentration on a spell. The bonus equals your Mental modifier (minimum of +1).",
        conflicts: [],
        tier: 1,
        stackable: false,
        maxStacks: 1
    },
    {
        name: "Extra Attack",
        classes: [mage],
        dependency: "Bladesong",
        description: "You can attack twice, instead of once, whenever you take the Attack action on your turn.",
        conflicts: [],
        tier: 2,
        stackable: false,
        maxStacks: 1
    },
    {
        name: "Song of Defense",
        classes: [mage],
        dependency: "Bladesong",
        description: "When you take damage, you can use your reaction to expend one spell slot and reduce that damage to you by an amount equal to five times the spell slot's level.",
        conflicts: [],
        tier: 3,
        stackable: false,
        maxStacks: 1
    },
    {
        name: "Song of Victory",
        classes: [mage],
        dependency: "Bladesong",
        description: "When you reduce a creature to 0 hit points, you gain temporary hit points equal to your Mental modifier + your wizard level (minimum of 1).",
        conflicts: [],
        tier: 3,
        stackable: false,
        maxStacks: 1
    },
    {
        name: "Chronal Shift",
        classes: [mage],
        dependency: null,
        description: "When you or a creature within 30 feet of you makes an attack roll, an ability check, or a saving throw, you can use your reaction to ignore the die roll and decide whether the number rolled is the minimum needed to succeed or one less than that number (your choice). When you use this feature, you gain one level of exhaustion.",
        conflicts: [],
        tier: 1,
        stackable: false,
        maxStacks: 1
    },
    {
        name: "Temporal Awareness",
        classes: [mage],
        dependency: "Chronal Shift",
        description: "You can't be surprised while you aren't incapacitated.",
        conflicts: [],
        tier: 2,
        stackable: false,
        maxStacks: 1
    },
    {
        name: "Convergent Future",
        classes: [mage],
        dependency: "Chronal Shift",
        description: "You can peer through possible futures and magically pull one of them into events around you, ensuring a particular outcome. When you or a creature you can see within 60 feet of you makes an attack roll, an ability check, or a saving throw, you can use your reaction to ignore the die roll and decide whether the number rolled is the minimum needed to succeed or one less than that number (your choice). When you use this feature, you gain one level of exhaustion. Only by finishing a long rest can you remove a level of exhaustion gained in this way.",
        conflicts: [],
        tier: 3,
        stackable: false,
        maxStacks: 1
    },
    {
        name: "Portent",
        classes: [mage],
        dependency: null,
        description: "Glimpses of the future begin to press in on your awareness. When you finish a long rest, roll two d20s and record the numbers rolled. You can replace any attack roll, saving throw, or ability check made by you or a creature that you can see with one of these foretelling rolls. You must choose to do so before the roll, and you can replace a roll in this way only once per turn. Each foretelling roll can be used only once. When you finish a long rest, you lose any unused foretelling rolls.",
        conflicts: [],
        tier: 2,
        stackable: false,
        maxStacks: 1
    },
    {
        name: "Greater Portent",
        classes: [mage],
        dependency: "Portent",
        description: "The visions in your dreams intensify and paint a more accurate picture of the future. You roll three d20s for your Portent feature, rather than two.",
        conflicts: [],
        tier: 3,
        stackable: false,
        maxStacks: 1
    },
    {
        name: "Benign Transportation",
        classes: [mage],
        dependency: null,
        description: "You can use your action to teleport up to 30 feet to an unoccupied space that you can see. Alternatively, you can choose a space within range that is occupied by a Small or Medium creature. If that creature is willing, you both teleport, swapping places. Once you use this feature, you can't use it again until you finish a long rest or you cast a conjuration spell of 1st level or higher.",
        conflicts: [],
        tier: 1,
        stackable: false,
        maxStacks: 1
    },
    {
        name: "Focused Conjuration",
        classes: [mage],
        dependency: null,
        description: "While you are concentrating on a conjuration spell, your concentration can't be broken as a result of taking damage.",
        conflicts: [],
        tier: 2,
        stackable: false,
        maxStacks: 1
    },
    {
        name: "Durable Summons",
        classes: [mage],
        dependency: null,
        description: "Any creature that you summon or create with a conjuration spell receives 30 temporary hit points.",
        conflicts: [],
        tier: 3,
        stackable: false,
        maxStacks: 1
    },
    {
        name: "Sculpt Spells",
        classes: [mage],
        dependency: null,
        description: "You can create pockets of relative safety within the effects of your evocation spells. When you cast an evocation spell that affects other creatures that you can see, you can choose a number of them equal to 1 + the spell's level. The chosen creatures automatically succeed on their saving throws against the spell, and they take no damage if they would normally take half damage on a successful save.",
        conflicts: [],
        tier: 1,
        stackable: false,
        maxStacks: 1
    },
    {
        name: "Potent Cantrip",
        classes: [mage],
        dependency: null,
        description: "Your damaging cantrips affect even creatures that avoid the brunt of the effect. When a creature succeeds on a saving throw against your cantrip, the creature takes half the cantrip's damage (if any) but suffers no additional effect from the cantrip.",
        conflicts: [],
        tier: 2,
        stackable: false,
        maxStacks: 1
    },
    {
        name: "Empowered Evocation",
        classes: [mage],
        dependency: null,
        description: "You can add your Mental modifier to one damage roll of any evocation spell you cast.",
        conflicts: [],
        tier: 3,
        stackable: false,
        maxStacks: 1
    },
    {
        name: "Overchannel",
        classes: [mage],
        dependency: null,
        description: "You can increase the power of your simpler spells. When you cast a wizard spell of 1st through 5th level that deals damage, you can deal maximum damage with that spell. The first time you do so, you suffer no adverse effect. If you use this feature again before you finish a long rest, you take 2d12 necrotic damage for each level of the spell, immediately after you cast it. Each time you use this feature again before finishing a long rest, the necrotic damage per spell level increases by 1d12. This damage ignores resistance and immunity.",
        conflicts: [],
        tier: 3,
        stackable: false,
        maxStacks: 1
    },
    {
        name: "Gravity Well",
        classes: [mage],
        dependency: null,
        description: "When you cast a spell with an area of effect, you can select a number of creatures equal to your Mental modifier (minimum of one creature). The selected creatures automatically fail their saving throws against the spell, and they take the full brunt of the spell's effects.",
        conflicts: [],
        tier: 1,
        stackable: false,
        maxStacks: 1
    },
    {
        name: "Violent Attraction",
        classes: [mage],
        dependency: "Gravity Well",
        description: "When you cast a spell with an area of effect, you can select a number of creatures equal to your Mental modifier (minimum of one creature). The selected creatures automatically fail their saving throws against the spell, and they take the full brunt of the spell's effects.",
        conflicts: [],
        tier: 2,
        stackable: false,
        maxStacks: 1
    },
    {
        name: "Event Horizon",
        classes: [mage],
        dependency: "Gravity Well",
        description: "When you cast a spell with an area of effect, you can select a number of creatures equal to your Mental modifier (minimum of one creature). The selected creatures automatically fail their saving throws against the spell, and they take the full brunt of the spell's effects.",
        conflicts: [],
        tier: 3,
        stackable: false,
        maxStacks: 1
    },
    {
        name: "Illusory Self",
        classes: [mage],
        dependency: null,
        description: "You can create an illusory duplicate of yourself as an instant, almost instinctual reaction to danger. When a creature makes an attack roll against you, you can use your reaction to interpose the illusory duplicate between the attacker and yourself. The attack automatically misses you, then the illusion dissipates. Once you use this feature, you can't use it again until you finish a short or long rest.",
        conflicts: [],
        tier: 2,
        stackable: false,
        maxStacks: 1
    },
    {
        name: "Grim Harvest",
        classes: [mage],
        dependency: null,
        description: "Once per turn when you kill one or more creatures with a spell of 1st level or higher, you regain hit points equal to twice the spell's level, or three times its level if the spell belongs to the School of Necromancy. You don't gain this benefit for killing constructs or undead.",
        conflicts: [],
        tier: 1,
        stackable: false,
        maxStacks: 1
    },
    {
        name: "Undead Thralls",
        classes: [mage],
        dependency: null,
        description: "You can cast Animate Dead without expending a spell slot. When you do so, you can target only one corpse or pile of bones within 10 feet of you (instead of the normal limit of two corpses that Animate Dead normally allows). When you cast Animate Dead in this way, the target gains the following additional benefits: The creature doesn't require verbal or somatic components to cast its spells. The creature's spellcasting ability for its wizard spells is Mental. The creature adds your proficiency bonus to its weapon damage rolls. The creature's hit point maximum equals its normal maximum or four times your wizard level, whichever is higher.",
        conflicts: [],
        tier: 2,
        stackable: false,
        maxStacks: 1
    },
    {
        name: "Arcane Deflection",
        classes: [mage],
        dependency: null,
        description: "When you are hit by an attack or fail a saving throw, you can use your reaction to gain a +2 bonus to your AC against that attack or a +4 bonus to that saving throw. When you use this feature, you can't cast spells other than cantrips until the end of your next turn.",
        conflicts: [],
        tier: 1,
        stackable: false,
        maxStacks: 1
    },
    {
        name: "Tactical Wit",
        classes: [mage],
        dependency: null,
        description: "Your keen ability to assess tactical situations allows you to act quickly in battle. You can give yourself a bonus to your initiative rolls equal to your Mental modifier.",
        conflicts: [],
        tier: 1,
        stackable: false,
        maxStacks: 1
    },
    {
        name: "Power Surge",
        classes: [mage],
        dependency: null,
        description: "You can store a maximum number of power surges equal to your Mental modifier (minimum of one). Whenever you finish a long rest, your number of power surges resets to one. Whenever you successfully end a spell with Dispel Magic or Counterspell, you gain one power surge, as you steal magic from the spell you foiled. If you end a short rest with no power surges, you gain one power surge. Once per turn when you deal damage to a creature or object with a wizard spell, you can spend one power surge to deal extra force damage to that target. The extra damage equals half your wizard level.",
        conflicts: [],
        tier: 2,
        stackable: false,
        maxStacks: 1
    },
    {
        name: "Durable Magic",
        classes: [mage],
        dependency: null,
        description: "Beginning at 10th level, the magic you channel helps ward off harm. While you maintain concentration on a spell, you have a +2 bonus to AC and all saving throws.",
        conflicts: [],
        tier: 3,
        stackable: false,
        maxStacks: 1
    },
    {
        name: "Deflecting Shroud",
        classes: [mage],
        dependency: null,
        description: "Your Arcane Deflection becomes infused with deadly magic. When you use your Arcane Deflection feature, you can cause magical energy to arc from you. Up to three creatures of your choice within 60 feet of you each take force damage equal to half your wizard level.",
        conflicts: [],
        tier: 3,
        stackable: false,
        maxStacks: 1
    },
    {
        name: "Metamagic",
        classes: [mage],
        dependency: null,
        description: "You gain the ability to twist your spells to suit your needs. You gain two of the following Metamagic options of your choice. You gain another one at 10th and 17th level. You can use only one Metamagic option on a spell when you cast it, unless otherwise noted.",
        conflicts: [],
        tier: 1,
        stackable: false,
        maxStacks: 1
    },
    {
        name: "Sorcerous Restoration",
        classes: [mage],
        dependency: "Metamagic",
        description: "When you roll for initiative and have no sorcery points remaining, you regain 4 sorcery points.",
        conflicts: [],
        tier: 1,
        stackable: false,
        maxStacks: 1
    },
    {
        name: "Restore Balance",
        classes: [mage],
        dependency: null,
        description: "Starting at 1st level, your connection to the plane of absolute order allows you to equalize chaotic moments. When a creature you can see within 60 feet of you is about to roll a d20 with advantage or disadvantage, you can use your reaction to prevent the roll from being affected by advantage and disadvantage. You can use this feature a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.",
        conflicts: [],
        tier: 1,
        stackable: false,
        maxStacks: 1
    },
    {
        name: "Bastion of Law",
        classes: [mage],
        dependency: "Restore Balance",
        description: "You can tap into the grand equation of existence to imbue a creature with a shimmering shield of order. As an action, you can expend 1 to 5 sorcery points to create a magical ward around yourself or another creature you can see within 30 feet of you. The ward lasts until you finish a long rest or until you use this feature again.",
        conflicts: [],
        tier: 2,
        stackable: false,
        maxStacks: 1
    },
    {
        name: "Trance of Order",
        classes: [mage],
        dependency: "Restore Balance",
        description: "Starting at 14th level, you gain the ability to align your consciousness to the endless calculations of Mechanus. As a bonus action, you can enter this state for 1 minute. For the duration, attack rolls against you can't benefit from advantage, and whenever you make an attack roll, an ability check, or a saving throw, you can treat a roll of 9 or lower on the d20 as a 10. Once you use this bonus action, you can't use it again until you finish a long rest, unless you spend 5 sorcery points to use it again.",
        conflicts: [],
        tier: 3,
        stackable: false,
        maxStacks: 1
    },
    {
        name: "Draconic Resilience",
        classes: [mage],
        dependency: null,
        description: "Your hit point maximum increases by 1 and increases by 1 again whenever you gain a level in this class. Additionally, parts of your skin are covered by a thin sheen of dragon-like scales. When you aren't wearing armor, your AC equals 13 + your Physical modifier.",
        conflicts: [],
        tier: 1,
        stackable: false,
        maxStacks: 1
    },
    {
        name: "Elemental Affinity",
        classes: [mage],
        dependency: null,
        description: "When you cast a spell that deals damage of the type associated with your draconic ancestry, add your Mental modifier to one damage roll of that spell. At the same time, you can spend 1 sorcery point to gain resistance to that damage type for 1 hour.",
        conflicts: [],
        tier: 1,
        stackable: false,
        maxStacks: 1
    },
    {
        name: "Dragon Wings",
        classes: [mage],
        dependency: null,
        description: "At 14th level, you gain the ability to sprout a pair of dragon wings from your back, gaining a flying speed equal to your current speed. You can create these wings as a bonus action on your turn. They last until you dismiss them as a bonus action on your turn. You can't manifest your wings while wearing armor unless the armor is made to accommodate them, and clothing not made to accommodate your wings might be destroyed when you manifest them.",
        conflicts: ["Angelic Form"],
        tier: 2,
        stackable: false,
        maxStacks: 1
    },
    {
        name: "Favored by the Gods",
        classes: [mage],
        dependency: null,
        description: "Starting at 1st level, divine power guards your destiny. If you fail a saving throw or miss with an attack roll, you can roll 2d4 and add it to the total, possibly changing the outcome. Once you use this feature, you can't use it again until you finish a short or long rest.",
        conflicts: [],
        tier: 1,
        stackable: false,
        maxStacks: 1
    },
    {
        name: "Empowered Healing",
        classes: [mage],
        dependency: null,
        description: "Beginning at 6th level, the divine energy coursing through you can empower healing spells. Whenever you or an ally within 5 feet of you rolls dice to determine the number of hit points a spell restores, you can spend 1 sorcery point to reroll any number of those dice once, provided you aren't incapacitated. You can use this feature only once per turn.",
        conflicts: [],
        tier: 2,
        stackable: false,
        maxStacks: 1
    },
    {
        name: "Angelic Form",
        classes: [mage],
        dependency: null,
        description: "You can use a bonus action to manifest a pair of spectral wings from your back. While the wings are present, you have a flying speed of 30 feet. The wings last until you're incapacitated, you die, or you dismiss them as a bonus action.",
        conflicts: ["Dragon Wings"],
        tier: 3,
        stackable: false,
        maxStacks: 1
    },
    {
        name: "Unearthly Recovery",
        classes: [mage],
        dependency: null,
        description: "You gain the ability to overcome grievous injuries. As a bonus action when you have fewer than half of your hit points remaining, you can regain a number of hit points equal to half your hit point maximum.",
        conflicts: [],
        tier: 3,
        stackable: false,
        maxStacks: 1
    },
    {
        name: "Physical of the Grave",
        classes: [mage],
        dependency: null,
        description: "Your existence in a twilight state between life and death makes you difficult to defeat. When damage reduces you to 0 hit points, you can make a Mental saving throw (DC 5 + the damage taken). On a success, you instead drop to 1 hit point. You can't use this feature if you are reduced to 0 hit points by radiant damage or by a critical hit.",
        conflicts: [],
        tier: 1,
        stackable: false,
        maxStacks: 1
    },
    {
        name: "Shadow Walk",
        classes: [mage],
        dependency: null,
        description: "You gain the ability to step from one shadow into another. When you are in dim light or darkness, as a bonus action, you can teleport up to 120 feet to an unoccupied space you can see that is also in dim light or darkness.",
        conflicts: [],
        tier: 3,
        stackable: false,
        maxStacks: 1
    },
    {
        name: "Umbral Form",
        classes: [mage],
        dependency: "Physical of the Grave",
        description: "You can spend 6 sorcery points as a bonus action to magically transform yourself into a shadowy form. In this form, you have resistance to all damage except force and radiant damage, and you can move through other creatures and objects as if they were difficult terrain. You take 5 force damage if you end your turn inside an object. You remain in this form for 1 minute. It ends early if you are incapacitated, if you die, or if you dismiss it as a bonus action.",
        conflicts: [],
        tier: 2,
        stackable: false,
        maxStacks: 1
    },
    {
        name: "Tempestuous Magic",
        classes: [mage],
        dependency: null,
        description: "You can use a bonus action on your turn to cause whirling gusts of elemental air to briefly surround you, immediately before or after you cast a spell of 1st level or higher. Doing so allows you to fly up to 10 feet without provoking opportunity attacks.",
        conflicts: [],
        tier: 1,
        stackable: false,
        maxStacks: 1
    },
    {
        name: "Storm's Fury",
        classes: [mage],
        dependency: "Tempestuous Magic",
        description: "When you are hit by a melee attack, you can use your reaction to deal lightning damage to the attacker. The damage equals your sorcerer level. The attacker must also make a Physical saving throw against your sorcerer spell save DC. On a failed save, the attacker is pushed in a straight line up to 20 feet away from you.",
        conflicts: [],
        tier: 2,
        stackable: false,
        maxStacks: 1
    },
    {
        name: "Wind Soul",
        classes: [mage],
        dependency: "Tempestuous Magic",
        description: "You gain immunity to lightning and thunder damage. You also gain a magical flying speed of 60 feet. As an action, you can reduce your flying speed to 30 feet for 1 hour and choose a number of creatures within 30 feet of you equal to 3 + your Mental modifier. The chosen creatures gain a magical flying speed of 30 feet for 1 hour. Once you reduce your flying speed in this way, you can't do so again until you finish a short or long rest.",
        conflicts: [],
        tier: 3,
        stackable: false,
        maxStacks: 1
    },
    {
        name: "Heart of Fire",
        classes: [mage],
        dependency: null,
        description: "Whenever you start casting a spell of 1st level or higher that deals fire damage, fiery magic erupts from you. This eruption causes creatures of your choice that you can see within 10 feet of you to take fire damage equal to half your sorcerer level (minimum of 1).",
        conflicts: [],
        tier: 1,
        stackable: false,
        maxStacks: 1
    },
    {
        name: "Fire in the Veins",
        classes: [mage],
        dependency: "Heart of Fire",
        description: "You gain resistance to fire damage. In addition, spells you cast ignore resistance to fire damage.",
        conflicts: [],
        tier: 2,
        stackable: false,
        maxStacks: 1
    },
    {
        name: "Pyromancer's Fury",
        classes: [mage],
        dependency: null,
        description: "When you are hit by a melee attack, you can use your reaction to deal fire damage to the attacker. The damage equals your sorcerer level, and ignores resistance to fire damage.",
        conflicts: [],
        tier: 2,
        stackable: false,
        maxStacks: 1
    },
    {
        name: "Fiery Soul",
        classes: [mage],
        dependency: "Heart of Fire",
        description: "You gain immunity to fire damage. In addition, any spell or effect you create ignores resistance to fire damage and treats immunity to fire damage as resistance to fire damage.",
        conflicts: [],
        tier: 3,
        stackable: false,
        maxStacks: 1
    },
    {
        name: "Multitasking",
        classes: [mage],
        dependency: null,
        description: "You are now able to cast another persistent spell at a time",
        conflicts: [],
        tier: 3,
        stackable: true,
        maxStacks: 3
    },
    {
        name: "Regenerative Magic",
        classes: [mage, hybrid],
        dependency: null,
        description: "Every time you cast restore an amount of hp points = the spell points spent x {level}",
        conflicts: [],
        tier: 1,
        stackable: true,
        maxStacks: 2
    },
    {
        name: "Extra Spell Damage",
        classes: [mage, hybrid],
        dependency: null,
        description: "Roll more damage dice up to {level} when casting dealing damage with a spell that cost spell points.",
        conflicts: [],
        tier: 1,
        stackable: true,
        maxStacks: 3
    },
    {
        name: "Extra Attack Damage",
        classes: [fighter, hybrid],
        dependency: null,
        description: "Roll more damage dice up to {level} when making an attack.",
        conflicts: [],
        tier: 1,
        stackable: true,
        maxStacks: 3
    },
    {
        name: "Extra Attack Accuracy",
        classes: [fighter, hybrid],
        dependency: null,
        description: "Add {2*level} to your attack rolls up to {level} when making an attack.",
        conflicts: [],
        tier: 1,
        stackable: true,
        maxStacks: 5
    },
    {
        name: "Extra Spell Accuracy",
        classes: [mage, hybrid],
        dependency: null,
        description: "Add {2*level} to your spell attack rolls up to {level} when casting a spell that cost spell points.",
        conflicts: [],
        tier: 1,
        stackable: true,
        maxStacks: 5
    }
];

export default features;
