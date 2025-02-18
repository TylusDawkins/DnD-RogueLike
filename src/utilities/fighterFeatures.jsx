export default [
    {
        "name": "Rage",
        "dependency": null,
        "description": "On your turn, you can enter a rage as a bonus action. While Raging: You have advantage on Strength checks and Strength saving throws, when you make a melee weapon attack using Strength, you gain a bonus to the damage roll that increases as you gain levels as a barbarian, as shown in the Rage Damage column of the Barbarian table, and you have resistance to bludgeoning, piercing, and slashing damage. If you are able to cast spells, you can't cast them or concentrate on them while raging. Your rage lasts for 1 minute. It ends early if you are knocked unconscious or if your turn ends and you haven't attacked a hostile creature since your last turn or taken damage since then. You can also end your rage on your turn as a bonus action.",
        "conflifts": [null],
        "tier": 1,
        "stackable": false
    },
    {
        "name": "Unarmored Defense",
        "dependency": null,
        "description": "While you are not wearing any armor, your armor class equals 10 + your Dexterity modifier + your Constitution modifier. You can use a shield and still gain this benefit.",
        "conflifts": [null],
        "tier": 1,
        "stackable": false
    },
    {
        "name": "Reckless Attack",
        "dependency": null,
        "description": "You can throw aside all concern for defense to attack with fierce desperation. When you make your first attack on your turn, you can decide to attack recklessly. Doing so gives you advantage on melee weapon attack rolls using Strength during this turn, but attack rolls against you have advantage until your next turn.",
        "conflifts": [null],
        "tier": 1,
        "stackable": false
    },
    {
        "name": "Danger Sense",
        "dependency": null,
        "description": "You gain an uncanny sense of when things nearby aren't as they should be, giving you an edge when you dodge away from danger. You have advantage on Dexterity saving throws against effects that you can see, such as traps and spells. To gain this benefit, you can't be blinded, deafened, or incapacitated.",
        "conflifts": [null],
        "tier": 1,
        "stackable": false
    },
    {
        "name": "Extra Attack",
        "dependency": null,
        "description": "You can attack twice, instead of once, whenever you take the Attack action on your turn.",
        "conflifts": [null],
        "tier": 1,
        "stackable": true
    },
    {
        "name": "Fast Movement",
        "dependency": null,
        "description": "Your speed increases by 10 feet while you aren't wearing heavy armor.",
        "conflifts": [null],
        "tier": 1,
        "stackable": false
    },
    {
        "name": "Feral Instinct",
        "dependency": null,
        "description": "Your instincts are so honed that you have advantage on initiative rolls. Additionally, if you are surprised at the beginning of combat and aren't incapacitated, you can act normally on your first turn, but only if you enter your rage before doing anything else on that turn.",
        "conflifts": [null],
        "tier": 2,
        "stackable": false
    },
    {
        "name": "Brutal Critical",
        "dependency": null,
        "description": "You can roll one additional weapon damage die when determining the extra damage for a critical hit with a melee attack. This increases to two additional dice at 13th level and three additional dice at 17th level.",
        "conflifts": [null],
        "tier": 2,
        "stackable": false
    },
    {
        "name": "Relentless Rage",
        "dependency": "Rage",
        "description": "Your rage can keep you fighting despite grievous wounds. If you drop to 0 hit points while you're raging and don't die outright, you can make a DC 10 Constitution saving throw. If you succeed, you drop to 1 hit point instead. Each time you use this feature after the first, the DC increases by 5. When you finish a short or long rest, the DC resets to 10.",
        "conflifts": [null],
        "tier": 2,
        "stackable": false
    },
    {
        "name": "Persistent Rage",
        "dependency": "Rage",
        "description": "Your rage is so fierce that it ends early only if you fall unconscious or if you choose to end it.",
        "conflifts": [null],
        "tier": 3,
        "stackable": false
    },
    {
        "name": "Indomitable Might",
        "dependency": null,
        "description": "If your total for a Strength check is less than your Strength score, you can use that score in place of the total.",
        "conflifts": [null],
        "tier": 3,
        "stackable": false
    },
    {
        "name": "Primal Champion",
        "dependency": null,
        "description": "You embody the power of the wilds. Your Strength and Constitution scores increase by 4. Your maximum for those scores is now 24.",
        "conflifts": [null],
        "tier": 3,
        "stackable": false
    },
    {
        "name": "Fighting Style",
        "dependency": null,
        "description": "Look up dnd 5e fighting styles",
        "conflifts": [null],
        "tier": 1,
        "stackable": true
    },
    {
        "name": "Action Surge",
        "dependency": null,
        "description": "You can push yourself beyond your normal limits for a moment. On your turn, you can take one additional action on top of your regular action and a possible bonus action. Once you use this feature, you must finish a short or long rest before you can use it again. Starting at 17th level, you can use it twice before a rest, but only once on the same turn.",
        "conflifts": [null],
        "tier": 2,
        "stackable": false
    },
    {
        "name": "Indomitable",
        "dependency": null,
        "description": "You can reroll a saving throw that you fail. If you do so, you must use the new roll, and you can't use this feature again until you finish a long rest. You can use this feature twice between long rests starting at 13th level and three times between long rests starting at 17th level.",
        "conflifts": [null],
        "tier": 2,
        "stackable": false
    },
    {
        "name": "Martial Arts",
        "dependency": null,
        "description": "Look it up in the monk table in 5e",
        "conflifts": [null],
        "tier": 1,
        "stackable": false
    },
    {
        "name": "Ki",
        "dependency": null,
        "description": "Look it up in the monk table in 5e",
        "conflifts": [null],
        "tier": 1,
        "stackable": false
    },
    {
        "name": "Unarmored Movement",
        "dependency": null,
        "description": "Your speed increases by 10 feet while you are not wearing armor or wielding a shield. This bonus increases when you reach certain monk levels, as shown in the Monk table. At 9th level, you gain the ability to move along vertical surfaces and across liquids on your turn without falling during the move.",
        "conflifts": [null],
        "tier": 2,
        "stackable": false
    },
    {
        "name": "Deflect Missiles",
        "dependency": "Ki",
        "description": "You can use your reaction to deflect or catch the missile when you are hit by a ranged weapon attack. When you do so, the damage you take from the attack is reduced by 1d 10 + your Dexterity modifier + your level.",
        "conflifts": [null],
        "tier": 2,
        "stackable": false
    },
    {
        "name": "Stunning Strike",
        "dependency": "Ki",
        "description": "You can interfere with the flow of ki in an opponent's body. When you hit another creature with a melee weapon attack, you can spend 1 ki point to attempt a stunning strike. The target must succeed on a Constitution saving throw or be stunned until the end of your next turn.",
        "conflifts": [null],
        "tier": 2,
        "stackable": false
    },
    {
        "name": "Ki-Empowered Strikes",
        "dependency": "Ki",
        "description": "Your unarmed strikes count as magical for the purpose of overcoming resistance and immunity to nonmagical attacks and damage.",
        "conflifts": [null],
        "tier": 2,
        "stackable": false
    },
    {
        "name": "Evasion",
        "dependency": null,
        "description": "Your instinctive agility lets you dodge out of the way of certain area effects, such as a blue dragon's lightning breath or a fireball spell. When you are subjected to an effect that allows you to make a Dexterity saving throw to take only half damage, you instead take no damage if you succeed on the saving throw, and only half damage if you fail.",
        "conflifts": [null],
        "tier": 2,
        "stackable": false
    },
    {
        "name": "Diamond Soul",
        "dependency": "Ki",
        "description": "Your mastery of ki grants you proficiency in all saving throws. Additionally, whenever you make a saving throw and fail, you can spend 1 ki point to reroll it and take the second result.",
        "conflifts": [null],
        "tier": 3,
        "stackable": false
    },
    {
        "name": "Sneak Attack",
        "dependency": null,
        "description": "You know how to strike subtly and exploit a foe's distraction. Once per turn, you can deal an extra 1d6 damage to one creature you hit with an attack if you have advantage on the attack roll. The attack must use a finesse or a ranged weapon. You don't need advantage on the attack roll if another enemy of the target is within 5 feet of it, that enemy isn't incapacitated, and you don't have disadvantage on the attack roll. The amount of the extra damage increases as you gain levels in this class, as shown in the Sneak Attack column of the Rogue table.",
        "conflifts": [null],
        "tier": 1,
        "stackable": false
    },
    {
        "name": "Cunning Action",
        "dependency": null,
        "description": "Your quick thinking and agility allow you to move and act quickly. You can take a bonus action on each of your turns in combat. This action can be used only to take the Dash, Disengage, or Hide action.",
        "conflifts": [null],
        "tier": 1,
        "stackable": false
    },
    {
        "name": "Uncanny Dodge",
        "dependency": null,
        "description": "when an attacker that you can see hits you with an attack, you can use your reaction to halve the attack's damage against you.",
        "conflifts": [null],
        "tier": 2,
        "stackable": false
    },
    {
        "name": "Blindsense",
        "dependency": null,
        "description": "If you are able to hear, you are aware of the location of any hidden or invisible creature within 10 feet of you.",
        "conflifts": [null],
        "tier": 3,
        "stackable": false
    },
    {
        "name": "Elusive",
        "dependency": null,
        "description": "you are so evasive that attackers rarely gain the upper hand against you. No attack roll has advantage against you while you aren't incapacitated.",
        "conflifts": [null],
        "tier": 3,
        "stackable": false
    },
    {
        "name": "Stroke of Luck",
        "dependency": null,
        "description": "you have an uncanny knack for succeeding when you need to. If your attack misses a target within range, you can turn the miss into a hit. Alternatively, if you fail an ability check, you can treat the d20 roll as a 20. Once you use this feature, you can't use it again until you finish a short or long rest.",
        "conflifts": [null],
        "tier": 3,
        "stackable": false
    },
    {
        "name": "Ability Score Improvement",
        "dependency": null,
        "conflifts": [null],
        "tier": 1,
        "stackable": true,
        cb: ((char, setChar) => {
            const charCopy = { ...char }
            charCopy.pointsLeft += 2
            setChar(charCopy)
        })
    },
    {
        "name": "Shield Master",
        "dependency": null,
        "conflifts": [null],
        "tier": 1,
        "stackable": false,
        "link": "http://dnd5e.wikidot.com/feat:shield-master"
    },
    {
        "name": "Sentinel",
        "dependency": null,
        "conflifts": [null],
        "tier": 1,
        "stackable": false,
        "link": "http://dnd5e.wikidot.com/feat:sentinel"
    },
    {
        "name": "Savage Attacker",
        "dependency": null,
        "conflifts": [null],
        "tier": 1,
        "stackable": false,
        "link": "http://dnd5e.wikidot.com/feat:savage-attacker"
    },
    {
        "name": "Polearm Master",
        "dependency": null,
        "conflifts": [null],
        "tier": 1,
        "stackable": false,
        "link": "http://dnd5e.wikidot.com/feat:polearm-master"
    },
    {
        "name": "Heavy Armor Master",
        "dependency": null,
        "conflifts": [null],
        "tier": 1,
        "stackable": false,
        "link": "http://dnd5e.wikidot.com/feat:heavy-armor-master",
        cb: ((char, setChar) => {
            const charCopy = { ...char }
            charCopy.physical += 1
            setChar(charCopy)
        })
    },
    {
        "name": "Great Weapon Master",
        "dependency": null,
        "conflifts": [null],
        "tier": 1,
        "stackable": false,
        "link": "http://dnd5e.wikidot.com/feat:great-weapon-master"
    },
    {
        "name": "Dual Wielder",
        "dependency": null,
        "conflifts": [null],
        "tier": 1,
        "stackable": false,
        "link": "http://dnd5e.wikidot.com/feat:dual-wielder"
    },
    {
        "name": "Defensive Duelist",
        "dependency": null,
        "conflifts": [null],
        "tier": 1,
        "stackable": false,
        "link": "http://dnd5e.wikidot.com/feat:defensive-duelist"
    },
    {
        "name": "Ancestral Protectors",
        "dependency": "Rage",
        "description": "http://dnd5e.wikidot.com/barbarian:ancestral-guardian",
        "conflifts": [null],
        "tier": 1,
        "stackable": false
    },
    {
        "name": "Spirit Shield",
        "dependency": "Rage",
        "description": "http://dnd5e.wikidot.com/barbarian:ancestral-guardian",
        "conflifts": [null],
        "tier": 2,
        "stackable": false
    },
    {
        "name": "Vengeful Ancestors",
        "dependency": "Spirit Shield",
        "description": "http://dnd5e.wikidot.com/barbarian:ancestral-guardian",
        "conflifts": [null],
        "tier": 3,
        "stackable": false
    },
    {
        "name": "Form of the Beast",
        "dependency": "Rage",
        "description": "http://dnd5e.wikidot.com/barbarian:beast",
        "conflifts": [null],
        "tier": 1,
        "stackable": false
    },
    {
        "name": "Bestial Soul",
        "dependency": "Form of the Beast",
        "description": "http://dnd5e.wikidot.com/barbarian:beast",
        "conflifts": [null],
        "tier": 2,
        "stackable": false
    },
    {
        "name": "Infectious Fury",
        "dependency": "Bestial Soul",
        "description": "http://dnd5e.wikidot.com/barbarian:beast",
        "conflifts": [null],
        "tier": 3,
        "stackable": false
    },
    {
        "name": "Frenzy",
        "dependency": "Rage",
        "description": "http://dnd5e.wikidot.com/barbarian:berserker",
        "conflifts": [null],
        "tier": 1,
        "stackable": false
    },
    {
        "name": "Mindless Rage",
        "dependency": "Rage",
        "description": "http://dnd5e.wikidot.com/barbarian:berserker",
        "conflifts": [null],
        "tier": 1,
        "stackable": false
    },
    {
        "name": "Intimidating Presence",
        "dependency": null,
        "description": "http://dnd5e.wikidot.com/barbarian:berserker",
        "conflifts": [null],
        "tier": 2,
        "stackable": false
    },
    {
        "name": "Retaliation",
        "dependency": null,
        "description": "http://dnd5e.wikidot.com/barbarian:berserker",
        "conflifts": [null],
        "tier": 3,
        "stackable": false
    },
    {
        "name": "Giant's Havoc",
        "dependency": "Rage",
        "description": "http://dnd5e.wikidot.com/barbarian:giant",
        "conflifts": [null],
        "tier": 1,
        "stackable": false
    },
    {
        "name": "Elemental Cleaver",
        "dependency": "Rage",
        "description": "http://dnd5e.wikidot.com/barbarian:giant",
        "conflifts": [null],
        "tier": 2,
        "stackable": false
    },
    {
        "name": "Mighty Impel",
        "dependency": "Giant's Havoc",
        "description": "http://dnd5e.wikidot.com/barbarian:giant",
        "conflifts": [null],
        "tier": 2,
        "stackable": false
    },
    {
        "name": "Demiurgic Colossus",
        "dependency": "Mighty Impel",
        "description": "http://dnd5e.wikidot.com/barbarian:giant",
        "conflifts": [null],
        "tier": 3,
        "stackable": false
    },
    {
        "name": "Storm Aura",
        "dependency": "Rage",
        "description": "http://dnd5e.wikidot.com/barbarian:storm-herald",
        "conflifts": [null],
        "tier": 1,
        "stackable": false
    },
    {
        "name": "Storm Soul",
        "dependency": "Storm Aura",
        "description": "http://dnd5e.wikidot.com/barbarian:storm-herald",
        "conflifts": [null],
        "tier": 2,
        "stackable": false
    },
    {
        "name": "Shielding Storm",
        "dependency": "Storm Soul",
        "description": "http://dnd5e.wikidot.com/barbarian:storm-herald",
        "conflifts": [null],
        "tier": 2,
        "stackable": false
    },
    {
        "name": "Raging Storm",
        "dependency": "Shielding Storm",
        "description": "http://dnd5e.wikidot.com/barbarian:storm-herald",
        "conflifts": [null],
        "tier": 3,
        "stackable": false
    },
    {
        "name": "Totem Spirit",
        "dependency": "Rage",
        "description": "http://dnd5e.wikidot.com/barbarian:totem-warrior",
        "conflifts": [null],
        "tier": 1,
        "stackable": false
    },
    {
        "name": "Aspect of the Beast",
        "dependency": "Totem Spirit",
        "description": "http://dnd5e.wikidot.com/barbarian:totem-warrior",
        "conflifts": [null],
        "tier": 2,
        "stackable": false
    },
    {
        "name": "Totemic Attunement",
        "dependency": "Aspect of the Beast",
        "description": "http://dnd5e.wikidot.com/barbarian:totem-warrior",
        "conflifts": [null],
        "tier": 3,
        "stackable": false
    },
    {
        "name": "Wild Surge",
        "dependency": "Rage",
        "description": "http://dnd5e.wikidot.com/barbarian:wild-magic",
        "conflifts": [null],
        "tier": 1,
        "stackable": false
    },
    {
        "name": "Unstable Backlash",
        "dependency": "Wild Surge",
        "description": "http://dnd5e.wikidot.com/barbarian:wild-magic",
        "conflifts": [null],
        "tier": 2,
        "stackable": false
    },
    {
        "name": "Controlled Surge",
        "dependency": "Unstable Backlash",
        "description": "http://dnd5e.wikidot.com/barbarian:wild-magic",
        "conflifts": [null],
        "tier": 3,
        "stackable": false
    },
    {
        "name": "Divine Fury",
        "dependency": "Rage",
        "description": "http://dnd5e.wikidot.com/barbarian:zealot",
        "conflifts": [null],
        "tier": 1,
        "stackable": false
    },
    {
        "name": "Fanatical Focus",
        "dependency": "Rage",
        "description": "http://dnd5e.wikidot.com/barbarian:zealot",
        "conflifts": [null],
        "tier": 2,
        "stackable": false
    },
    {
        "name": "Zealous Presence",
        "dependency": "Divine Fury",
        "description": "http://dnd5e.wikidot.com/barbarian:zealot",
        "conflifts": [null],
        "tier": 2,
        "stackable": false
    },
    {
        "name": "Rage Beyond Death",
        "dependency": "Zealous Presence",
        "description": "http://dnd5e.wikidot.com/barbarian:zealot",
        "conflifts": [null],
        "tier": 3,
        "stackable": false
    }
]
