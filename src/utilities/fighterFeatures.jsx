export default [
    { 
        "name": "Rage", 
        "dependancy": null,
        "description": "On your turn, you can enter a rage as a bonus action. While Raging: You have advantage on Strength checks and Strength saving throws, when you make a melee weapon attack using Strength, you gain a bonus to the damage roll that increases as you gain levels as a barbarian, as shown in the Rage Damage column of the Barbarian table, and you have resistance to bludgeoning, piercing, and slashing damage. If you are able to cast spells, you can't cast them or concentrate on them while raging. Your rage lasts for 1 minute. It ends early if you are knocked unconscious or if your turn ends and you haven't attacked a hostile creature since your last turn or taken damage since then. You can also end your rage on your turn as a bonus action.",
        "conflifts": [null], 
        "tier": 1,
        "stackable":false
    },
    { 
        "name": "Unarmored Defense", 
        "dependancy": null,
        "description": "While you are not wearing any armor, your armor class equals 10 + your Dexterity modifier + your Constitution modifier. You can use a shield and still gain this benefit.",
        "conflifts": [null], 
        "tier": 1,
        "stackable":false 
    },
    { 
        "name": "Reckless Attack", 
        "dependancy": null,
        "description": "You can throw aside all concern for defense to attack with fierce desperation. When you make your first attack on your turn, you can decide to attack recklessly. Doing so gives you advantage on melee weapon attack rolls using Strength during this turn, but attack rolls against you have advantage until your next turn.",
        "conflifts": [null], 
        "tier": 1,
        "stackable":false 
    },
    { 
        "name": "Danger Sense", 
        "dependancy": null,
        "description": "You gain an uncanny sense of when things nearby aren't as they should be, giving you an edge when you dodge away from danger. You have advantage on Dexterity saving throws against effects that you can see, such as traps and spells. To gain this benefit, you can't be blinded, deafened, or incapacitated.",
        "conflifts": [null], 
        "tier": 1,
        "stackable":false 
    },
    { 
        "name": "Extra Attack", 
        "dependancy": null,
        "description": "You can attack twice, instead of once, whenever you take the Attack action on your turn.",
        "conflifts": [null], 
        "tier": 1,
        "stackable":true 
    },
    { 
        "name": "Fast Movement", 
        "dependancy": null,
        "description": "Your speed increases by 10 feet while you aren't wearing heavy armor.",
        "conflifts": [null], 
        "tier": 1,
        "stackable":false 
    },
    { 
        "name": "Feral Instinct", 
        "dependancy": null,
        "description": "Your instincts are so honed that you have advantage on initiative rolls. Additionally, if you are surprised at the beginning of combat and aren't incapacitated, you can act normally on your first turn, but only if you enter your rage before doing anything else on that turn.",
        "conflifts": [null], 
        "tier": 2,
        "stackable":false 
    },
    { 
        "name": "Brutal Critical", 
        "dependancy": null,
        "description": "You can roll one additional weapon damage die when determining the extra damage for a critical hit with a melee attack. This increases to two additional dice at 13th level and three additional dice at 17th level.",
        "conflifts": [null], 
        "tier": 2,
        "stackable":false 
    },
    { 
        "name": "Relentless Rage", 
        "dependancy": "Rage",
        "description": "Your rage can keep you fighting despite grievous wounds. If you drop to 0 hit points while you're raging and don't die outright, you can make a DC 10 Constitution saving throw. If you succeed, you drop to 1 hit point instead. Each time you use this feature after the first, the DC increases by 5. When you finish a short or long rest, the DC resets to 10.",
        "conflifts": [null], 
        "tier": 2,
        "stackable":false 
    },
    { 
        "name": "Persistent Rage", 
        "dependancy": "Rage",
        "description": "Your rage is so fierce that it ends early only if you fall unconscious or if you choose to end it.",
        "conflifts": [null], 
        "tier": 3,
        "stackable":false 
    },
    { 
        "name": "Indomitable Might", 
        "dependancy": null,
        "description": "If your total for a Strength check is less than your Strength score, you can use that score in place of the total.",
        "conflifts": [null], 
        "tier": 3,
        "stackable":false 
    },
    { 
        "name": "Primal Champion", 
        "dependancy": null,
        "description": "You embody the power of the wilds. Your Strength and Constitution scores increase by 4. Your maximum for those scores is now 24.",
        "conflifts": [null], 
        "tier": 3,
        "stackable":false 
    },
    { 
        "name": "Fighting Style (Fighter)", 
        "dependancy": null,
        "conflifts": [null], 
        "tier": 1,
        "stackable":false 
    },
    { 
        "name": "Second Wind", 
        "dependancy": null,
        "conflifts": [null], 
        "tier": 1,
        "stackable":false 
    },
    { 
        "name": "Action Surge", 
        "dependancy": null,
        "conflifts": [null], 
        "tier": 2,
        "stackable":false 
    },
    { 
        "name": "Indomitable", 
        "dependancy": null,
        "conflifts": [null], 
        "tier": 2,
        "stackable":false 
    },
    { 
        "name": "Martial Arts", 
        "dependancy": null,
        "conflifts": [null], 
        "tier": 1,
        "stackable":false 
    },
    { 
        "name": "Ki", 
        "dependancy": null,
        "conflifts": [null], 
        "tier": 1,
        "stackable":false 
    },
    { 
        "name": "Unarmored Movement", 
        "dependancy": null,
        "conflifts": [null], 
        "tier": 2,
        "stackable":false 
    },
    { 
        "name": "Deflect Missiles", 
        "dependancy": null,
        "conflifts": [null], 
        "tier": 2,
        "stackable":false 
    },
    { 
        "name": "Stunning Strike", 
        "dependancy": "Ki",
        "conflifts": [null], 
        "tier": 2,
        "stackable":false 
    },
    {
        "name": "Ki-Empowered Strikes",
        "dependancy": "Ki",
        "conflifts": [null],
        "tier": 2,
        "stackable":false

    },
    { 
        "name": "Evasion", 
        "dependancy": null,
        "conflifts": [null], 
        "tier": 2,
        "stackable":false 
    },
    { 
        "name": "Diamond Soul", 
        "dependancy": "Ki",
        "conflifts": [null], 
        "tier": 3,
        "stackable":false 
    },
    {
        "name": "Empty Body",
        "dependancy": "Ki",
        "conflifts": [null],
        "tier": 3,
        "stackable":false
    },
    { 
        "name": "Fighting Style (Ranger)", 
        "dependancy": null,
        "conflifts": [null], 
        "tier": 1,
        "stackable":false 
    },
    { 
        "name": "Foe Slayer", 
        "dependancy": null,
        "conflifts": [null], 
        "tier": 3,
        "stackable":false 
    },
    { 
        "name": "Sneak Attack", 
        "dependancy": null,
        "conflifts": [null], 
        "tier": 1,
        "stackable":false 
    },
    { 
        "name": "Cunning Action", 
        "dependancy": null,
        "conflifts": [null], 
        "tier": 1,
        "stackable":false 
    },
    { 
        "name": "Uncanny Dodge", 
        "dependancy": null,
        "conflifts": [null], 
        "tier": 2,
        "stackable":false 
    },
    { 
        "name": "Reliable Talent", 
        "dependancy": null,
        "conflifts": [null], 
        "tier": 2,
        "stackable":false 
    },
    { 
        "name": "Blindsense", 
        "dependancy": null,
        "conflifts": [null], 
        "tier": 3,
        "stackable":false 
    },
    { 
        "name": "Elusive", 
        "dependancy": null,
        "conflifts": [null], 
        "tier": 3,
        "stackable":false 
    },
    { 
        "name": "Stroke of Luck", 
        "dependancy": null,
        "conflifts": [null], 
        "tier": 3,
        "stackable":false 
    },
    { 
        "name": "Ability Score Improvement", 
        "dependancy": null,
        "conflifts": [null], 
        "tier": 1,
        "stackable":true,
        cb:((char,setChar)=>{
            const charCopy = {...char}
            charCopy.pointsLeft+=2
            setChar(charCopy)
        })
    },
    {
        "name":"Shield Master",
        "dependancy":null,
        "conflifts":[null],
        "tier":1,
        "stackable":false,
        "link":"http://dnd5e.wikidot.com/feat:shield-master"
    },
    {
        "name":"Sentinel",
        "dependancy":null,
        "conflifts":[null],
        "tier":1,
        "stackable":false,
        "link":"http://dnd5e.wikidot.com/feat:sentinel"
    },
    {
        "name":"Savage Attacker",
        "dependancy":null,
        "conflifts":[null],
        "tier":1,
        "stackable":false,
        "link":"http://dnd5e.wikidot.com/feat:savage-attacker"
    },
    {
        "name":"Polearm Master",
        "dependancy":null,
        "conflifts":[null],
        "tier":1,
        "stackable":false,
        "link":"http://dnd5e.wikidot.com/feat:polearm-master"
    },
    {
        "name":"Heavy Armor Master",
        "dependancy":null,
        "conflifts":[null],
        "tier":1,
        "stackable":false,
        "link":"http://dnd5e.wikidot.com/feat:heavy-armor-master"
    },
    {
        "name":"Great Weapon Master",
        "dependancy":null,
        "conflifts":[null],
        "tier":1,
        "stackable":false,
        "link":"http://dnd5e.wikidot.com/feat:great-weapon-master"
    },
    {
        "name":"Dual Wielder",
        "dependancy":null,
        "conflifts":[null],
        "tier":1,
        "stackable":false,
        "link":"http://dnd5e.wikidot.com/feat:dual-wielder"
    },
    {
        "name":"Defensive Duelist",
        "dependancy":null,
        "conflifts":[null],
        "tier":1,
        "stackable":false,
        "link":"http://dnd5e.wikidot.com/feat:defensive-duelist"
    }
]
