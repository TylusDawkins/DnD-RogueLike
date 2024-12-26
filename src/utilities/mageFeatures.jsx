export default [
    {
        "name": "Arcane Ward",
        "dependancy": "",
        "description":"You can weave magic around yourself for protection. When you cast an abjuration spell of 1st level or higher, you can simultaneously use a strand of the spell's magic to create a magical ward on yourself that lasts until you finish a long rest. The ward has hit points equal to twice your wizard level + your Intelligence modifier. Whenever you take damage, the ward takes the damage instead. If this damage reduces the ward to 0 hit points, you take any remaining damage. While the ward has 0 hit points, it can't absorb damage, but its magic remains. Whenever you cast an abjuration spell of 1st level or higher, the ward regains a number of hit points equal to twice the level of the spell. Once you create the ward, you can't create it again until you finish a long rest.",
        "conflifts": [null],
        "tier": 1,
        "stackable": false
    },
    {
        "name": "Projected Ward",
        "dependancy": "Arcane Ward",
        "description":"When a creature that you can see within 30 feet of you takes damage, you can use your reaction to cause your Arcane Ward to absorb that damage. If this damage reduces the ward to 0 hit points, the warded creature takes any remaining damage.",
        "conflifts": [null],
        "tier": 2,
        "stackable": false
    },
    {
        "name": "Spell Resistance",
        "dependancy": "Arcane Ward",
        "description":"You have advantage on saving throws against spells.",
        "conflifts": [null],
        "tier": 3,
        "stackable": false
    },
    {
        "name": "Bladesong",
        "dependancy": "",
        "description":"You gain proficiency with Light Armor and one-handed weapons. You can invoke a secret elven magic called the Bladesong, provided that you aren't wearing medium or heavy armor or using a shield. It graces you with supernatural speed, agility, and focus. You can use a bonus action to start the Bladesong, which lasts for 1 minute. It ends early if you are incapacitated, if you don medium or heavy armor or a shield, or if you use two hands to make an attack with a weapon. You can also dismiss the Bladesong at any time you choose (no action required). While your Bladesong is active, you gain the following benefits: You gain a bonus to your AC equal to your Intelligence modifier (minimum of +1). Your walking speed increases by 10 feet. You have advantage on Dexterity (Acrobatics) checks. You gain a bonus to any Constitution saving throw you make to maintain your concentration on a spell. The bonus equals your Intelligence modifier (minimum of +1).",
        "conflifts": [null],
        "tier": 1,
        "stackable": false
    },
    {
        "name": "Extra Attack",
        "dependancy": "Bladesong",
        "description":"You can attack twice, instead of once, whenever you take the Attack action on your turn.",
        "conflifts": [null],
        "tier": 2,
        "stackable": false
    },
    {
        "name": "Song of Defense",
        "dependancy": "Bladesong",
        "description":"When you take damage, you can use your reaction to expend one spell slot and reduce that damage to you by an amount equal to five times the spell slot's level.",
        "conflifts": [null],
        "tier": 3,
        "stackable": false
    },
    {
        "name": "Song of Victory",
        "dependancy": "Bladesong",
        "description":"When you reduce a creature to 0 hit points, you gain temporary hit points equal to your Intelligence modifier + your wizard level (minimum of 1).",
        "conflifts": [null],
        "tier": 3,
        "stackable": false
    },
    {
        "name": "Chronal Shift",
        "dependancy": "",
        "description":"When you or a creature within 30 feet of you makes an attack roll, an ability check, or a saving throw, you can use your reaction to ignore the die roll and decide whether the number rolled is the minimum needed to succeed or one less than that number (your choice). When you use this feature, you gain one level of exhaustion.",
        "conflifts": [null],
        "tier": 1,
        "stackable": false
    },
    {
        "name": "Temporal Awareness",
        "dependancy": "Chronal Shift",
        "description":"You can't be surprised while you aren't incapacitated.",
        "conflifts": [null],
        "tier": 2,
        "stackable": false
    },
    {
        "name": "Convergant Future",
        "dependancy": "Chronal Shift",
        "description":"You can peer through possible futures and magically pull one of them into events around you, ensuring a particular outcome. When you or a creature you can see within 60 feet of you makes an attack roll, an ability check, or a saving throw, you can use your reaction to ignore the die roll and decide whether the number rolled is the minimum needed to succeed or one less than that number (your choice). When you use this feature, you gain one level of exhaustion. Only by finishing a long rest can you remove a level of exhaustion gained in this way.",
        "conflifts": [null],
        "tier": 3,
        "stackable": false
    },
    {
        "name": "Portent",
        "dependancy": "",
        "description":"Glimpses of the future begin to press in on your awareness. When you finish a long rest, roll two d20s and record the numbers rolled. You can replace any attack roll, saving throw, or ability check made by you or a creature that you can see with one of these foretelling rolls. You must choose to do so before the roll, and you can replace a roll in this way only once per turn. Each foretelling roll can be used only once. When you finish a long rest, you lose any unused foretelling rolls.",
        "conflifts": [null],
        "tier": 2,
        "stackable": false
    },
    {
        "name": "Greater Portent",
        "dependancy": "Portent",
        "description":"The visions in your dreams intensify and paint a more accurate picture of the future. You roll three d20s for your Portent feature, rather than two.",
        "conflifts": [null],
        "tier": 3,
        "stackable": false
    },
    {
        "name": "Benign Transportaion",
        "dependancy": "",
        "description":"Yyou can use your action to teleport up to 30 feet to an unoccupied space that you can see. Alternatively, you can choose a space within range that is occupied by a Small or Medium creature. If that creature is willing, you both teleport, swapping places. Once you use this feature, you can't use it again until you finish a long rest or you cast a conjuration spell of 1st level or higher.",
        "conflifts": [null],
        "tier": 1,
        "stackable": false
    },
    {
        "name": "Focused Conjuration",
        "dependancy": "",
        "description":"While you are concentrating on a conjuration spell, your concentration can't be broken as a result of taking damage.",
        "conflifts": [null],
        "tier": 2,
        "stackable": false
    },
    {
        "name": "Durable Summons",
        "dependancy": "",
        "description":"Any creature that you summon or create with a conjuration spell receives 30 temporary hit points.",
        "conflifts": [null],
        "tier": 3,
        "stackable": false
    },
    {
        "name": "Sculpt Spells",
        "dependancy": "",
        "description":"You can create pockets of relative safety within the effects of your evocation spells. When you cast an evocation spell that affects other creatures that you can see, you can choose a number of them equal to 1 + the spell's level. The chosen creatures automatically succeed on their saving throws against the spell, and they take no damage if they would normally take half damage on a successful save.",
        "conflifts": [null],
        "tier": 1,
        "stackable": false
    },
    {
        "name": "Potent Cantrip",
        "dependancy": "",
        "description":"Your damaging cantrips affect even creatures that avoid the brunt of the effect. When a creature succeeds on a saving throw against your cantrip, the creature takes half the cantrip's damage (if any) but suffers no additional effect from the cantrip.",
        "conflifts": [null],
        "tier": 2,
        "stackable": false
    },
    {
        "name": "Empowered Evocation",
        "dependancy": "",
        "description":"You can add your Intelligence modifier to one damage roll of any evocation spell you cast.",
        "conflifts": [null],
        "tier": 3,
        "stackable": false
    },
    {
        "name": "Overchannel",
        "dependancy": "",
        "description":"You can increase the power of your simpler spells. When you cast a wizard spell of 1st through 5th level that deals damage, you can deal maximum damage with that spell. The first time you do so, you suffer no adverse effect. If you use this feature again before you finish a long rest, you take 2d12 necrotic damage for each level of the spell, immediately after you cast it. Each time you use this feature again before finishing a long rest, the necrotic damage per spell level increases by 1d12. This damage ignores resistance and immunity.",
        "conflifts": [null],
        "tier": 3,
        "stackable": false
    },
    {
        "name": "Gravity Well",
        "dependancy": "",
        "description":"When you cast a spell with an area of effect, you can select a number of creatures equal to your Intelligence modifier (minimum of one creature). The selected creatures automatically fail their saving throws against the spell, and they take the full brunt of the spell's effects.",
        "conflifts": [null],
        "tier": 1,
        "stackable": false
    },
    {
        "name": "Violent Attraction",
        "dependancy": "Gravity Well",
        "description":"When you cast a spell with an area of effect, you can select a number of creatures equal to your Intelligence modifier (minimum of one creature). The selected creatures automatically fail their saving throws against the spell, and they take the full brunt of the spell's effects.",
        "conflifts": [null],
        "tier": 2,
        "stackable": false
    },
    {
        "name": "Event Horizon",
        "dependancy": "Gravity Well",
        "description":"When you cast a spell with an area of effect, you can select a number of creatures equal to your Intelligence modifier (minimum of one creature). The selected creatures automatically fail their saving throws against the spell, and they take the full brunt of the spell's effects.",
        "conflifts": [null],
        "tier": 3,
        "stackable": false
    },
    {
        "name": "Illusory Self",
        "dependancy": "",
        "description":"You can create an illusory duplicate of yourself as an instant, almost instinctual reaction to danger. When a creature makes an attack roll against you, you can use your reaction to interpose the illusory duplicate between the attacker and yourself. The attack automatically misses you, then the illusion dissipates. Once you use this feature, you can't use it again until you finish a short or long rest.",
        "conflifts": [null],
        "tier": 2,
        "stackable": false
    },
    {
        "name": "Grim Harvest",
        "dependancy": "",
        "description":"Once per turn when you kill one or more creatures with a spell of 1st level or higher, you regain hit points equal to twice the spell's level, or three times its level if the spell belongs to the School of Necromancy. You don't gain this benefit for killing constructs or undead.",
        "conflifts": [null],
        "tier": 1,
        "stackable": false
    },
    {
        "name": "Undead Thralls",
        "dependancy": "",
        "description":"You can cast Animate Dead without expending a spell slot. When you do so, you can target only one corpse or pile of bones within 10 feet of you (instead of the normal limit of two corpses that Animate Dead normally allows). When you cast Animate Dead in this way, the target gains the following additional benefits: <ul> The creature doesn't require verbal or somatic components to cast its spells. The creature's spellcasting ability for its wizard spells is Intelligence. The creature adds your proficiency bonus to its weapon damage rolls. The creature's hit point maximum equals its normal maximum or four times your wizard level, whichever is higher. </ul>",
        "conflifts": [null],
        "tier": 2,
        "stackable": false
    },
    {
        "name": "Arcane Deflection",
        "dependancy": "",
        "description":"When you are hit by an attack or fail a saving throw, you can use your reaction to gain a +2 bonus to your AC against that attack or a +4 bonus to that saving throw. When you use this feature, you can't cast spells other than cantrips until the end of your next turn.",
        "conflifts": [null],
        "tier": 1,
        "stackable": false
    },
    {
        "name": "Tactical Wit",
        "dependancy": "",
        "description":"your keen ability to assess tactical situations allows you to act quickly in battle. You can give yourself a bonus to your initiative rolls equal to your Intelligence modifier.",
        "conflifts": [null],
        "tier": 1,
        "stackable": false
    },
    {
        "name": "Power Surge",
        "dependancy": "",
        "description":"You can store a maximum number of power surges equal to your Intelligence modifier (minimum of one). Whenever you finish a long rest, your number of power surges resets to one. Whenever you successfully end a spell with Dispel Magic or Counterspell, you gain one power surge, as you steal magic from the spell you foiled. If you end a short rest with no power surges, you gain one power surge. Once per turn when you deal damage to a creature or object with a wizard spell, you can spend one power surge to deal extra force damage to that target. The extra damage equals half your wizard level.</p<",
        "conflifts": [null],
        "tier": 2,
        "stackable": false
    },
    {
        "name": "Durable Magic",
        "dependancy": "",
        "description":"Beginning at 10th level, the magic you channel helps ward off harm. While you maintain concentration on a spell, you have a +2 bonus to AC and all saving throws.",
        "conflifts": [null],
        "tier": 3,
        "stackable": false
    },
    {
        "name": "Deflecting Shroud",
        "dependancy": "",
        "description":"your Arcane Deflection becomes infused with deadly magic. When you use your Arcane Deflection feature, you can cause magical energy to arc from you. Up to three creatures of your choice within 60 feet of you each take force damage equal to half your wizard level.",
        "conflifts": [null],
        "tier": 3,
        "stackable": false
    },
    {
        "name": "Metamagic",
        "dependancy": "",
        "description":"You gain the ability to twist your spells to suit your needs. You gain two of the following Metamagic options of your choice. You gain another one at 10th and 17th level. You can use only one Metamagic option on a spell when you cast it, unless otherwise noted.",
        "conflifts": [null],
        "tier": 1,
        "stackable": false
    },
    {
        "name": "Sorcerous Restoration",
        "dependancy": "",
        "description":"When you roll for initiative and have no sorcery points remaining, you regain 4 sorcery points.",
        "conflifts": [null],
        "tier": 1,
        "stackable": false
    },
    {
        "name": "Restore Balance",
        "dependancy": "",
        "description":"Starting at 1st level, your connection to the plane of absolute order allows you to equalize chaotic moments. When a creature you can see within 60 feet of you is about to roll a d20 with advantage or disadvantage, you can use your reaction to prevent the roll from being affected by advantage and disadvantage. You can use this feature a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.",
        "conflifts": [null],
        "tier": 1,
        "stackable": false
    },
    {
        "name": "Bastion of Law",
        "dependancy": "Restore Balance",
        "description": "you can tap into the grand equation of existence to imbue a creature with a shimmering shield of order. As an action, you can expend 1 to 5 sorcery points to create a magical ward around yourself or another creature you can see within 30 feet of you. The ward lasts until you finish a long rest or until you use this feature again.",
        "conflifts": [null],
        "tier": 2,
        "stackable": false
    },
    {
        "name": "Trance of Order",
        "dependancy": "Restore Balance",
        "description": "Starting at 14th level, you gain the ability to align your consciousness to the endless calculations of Mechanus. As a bonus action, you can enter this state for 1 minute. For the duration, attack rolls against you can't benefit from advantage, and whenever you make an attack roll, an ability check, or a saving throw, you can treat a roll of 9 or lower on the d20 as a 10.Once you use this bonus action, you can't use it again until you finish a long rest, unless you spend 5 sorcery points to use it again.",
        "conflifts": [null],
        "tier": 3,
        "stackable": false
    },
    {
        "name": "Draconic Resilience",
        "dependancy": "",
        "description":"Your hit point maximum increases by 1 and increases by 1 again whenever you gain a level in this class. Additionally, parts of your skin are covered by a thin sheen of dragon-like scales. When you aren't wearing armor, your AC equals 13 + your Dexterity modifier.",
        "conflifts": [null],
        "tier": 1,
        "stackable": false
    },
    {
        "name": "Elemental Affinity",
        "dependancy": "",
        "description":"when you cast a spell that deals damage of the type associated with your draconic ancestry, add your Charisma modifier to one damage roll of that spell. At the same time, you can spend 1 sorcery point to gain resistance to that damage type for 1 hour.",
        "conflifts": [null],
        "tier": 1,
        "stackable": false
    },
    {
        "name": "Dragon Wings",
        "dependancy": "",
        "description":"At 14th level, you gain the ability to sprout a pair of dragon wings from your back, gaining a flying speed equal to your current speed. You can create these wings as a bonus action on your turn. They last until you dismiss them as a bonus action on your turn. You can't manifest your wings while wearing armor unless the armor is made to accommodate them, and clothing not made to accommodate your wings might be destroyed when you manifest them.",
        "conflifts": "Angelic Form",
        "tier": 2,
        "stackable": false
    },
    {
        "name": "Favored by the Gods",
        "dependancy": "",
        "description":"Starting at 1st level, divine power guards your destiny. If you fail a saving throw or miss with an attack roll, you can roll 2d4 and add it to the total, possibly changing the outcome. Once you use this feature, you can't use it again until you finish a short or long rest.",
        "conflifts": [null],
        "tier": 1,
        "stackable": false
    },
    {
        "name": "Empowered Healing",
        "dependancy": "",
        "description":"Beginning at 6th level, the divine energy coursing through you can empower healing spells. Whenever you or an ally within 5 feet of you rolls dice to determine the number of hit points a spell restores, you can spend 1 sorcery point to reroll any number of those dice once, provided you aren't incapacitated. You can use this feature only once per turn.",
        "conflifts": [null],
        "tier": 2,
        "stackable": false
    },
    {
        "name": "Angelic Form",
        "dependancy": "",
        "description":"You can use a bonus action to manifest a pair of spectral wings from your back. While the wings are present, you have a flying speed of 30 feet. The wings last until you're incapacitated, you die, or you dismiss them as a bonus action.",
        "conflifts": "Dragon Wings",
        "tier": 3,
        "stackable": false
    },
    {
        "name": "Unearthly Recovery",
        "dependancy": "",
        "description":"You gain the ability to overcome grievous injuries. As a bonus action when you have fewer than half of your hit points remaining, you can regain a number of hit points equal to half your hit point maximum.",
        "conflifts": [null],
        "tier": 3,
        "stackable": false
    },
    {
        "name": "Strength of the Grave",
        "dependancy": "",
        "description":"Your existence in a twilight state between life and death makes you difficult to defeat. When damage reduces you to 0 hit points, you can make a Charisma saving throw (DC 5 + the damage taken). On a success, you instead drop to 1 hit point. You can't use this feature if you are reduced to 0 hit points by radiant damage or by a critical hit.",
        "conflifts": [null],
        "tier": 1,
        "stackable": false
    },
    {
        "name": "Shadow Walk",
        "dependancy": "",
        "description":"You gain the ability to step from one shadow into another. When you are in dim light or darkness, as a bonus action, you can teleport up to 120 feet to an unoccupied space you can see that is also in dim light or darkness.",
        "conflifts": [null],
        "tier": 3,
        "stackable": false
    },
    {
        "name": "Umbral Form",
        "dependancy": "Strength of the Grave",
        "description":"You can spend 6 sorcery points as a bonus action to magically transform yourself into a shadowy form. In this form, you have resistance to all damage except force and radiant damage, and you can move through other creatures and objects as if they were difficult terrain. You take 5 force damage if you end your turn inside an object. You remain in this form for 1 minute. It ends early if you are incapacitated, if you die, or if you dismiss it as a bonus action.",
        "conflifts": [null],
        "tier": 2,
        "stackable": false
    },
    {
        "name": "Tempestuous Magic",
        "dependancy": "",
        "description":"You can use a bonus action on your turn to cause whirling gusts of elemental air to briefly surround you, immediately before or after you cast a spell of 1st level or higher. Doing so allows you to fly up to 10 feet without provoking opportunity attacks.",
        "conflifts": [null],
        "tier": 1,
        "stackable": false
    },
    {
        "name": "Storm's Fury",
        "dependancy": "Tempestuous Magic",
        "description":"When you are hit by a melee attack, you can use your reaction to deal lightning damage to the attacker. The damage equals your sorcerer level. The attacker must also make a Strength saving throw against your sorcerer spell save DC. On a failed save, the attacker is pushed in a straight line up to 20 feet away from you.",
        "conflifts": [null],
        "tier": 2,
        "stackable": false
    },
    {
        "name": "Wind Soul",
        "dependancy": "Tempestuous Magic",
        "description":"You gain immunity to lightning and thunder damage. You also gain a magical flying speed of 60 feet. As an action, you can reduce your flying speed to 30 feet for 1 hour and choose a number of creatures within 30 feet of you equal to 3 + your Charisma modifier. The chosen creatures gain a magical flying speed of 30 feet for 1 hour. Once you reduce your flying speed in this way, you can't do so again until you finish a short or long rest.",
        "conflifts": [null],
        "tier": 3,
        "stackable": false
    },
    {
        "name": "Heart of fire",
        "dependancy": "",
        "description":"Whenever you start casting a spell of 1st level or higher that deals fire damage, fiery magic erupts from you. This eruption causes creatures of your choice that you can see within 10 feet of you to take fire damage equal to half your sorcerer level (minimum of 1).",
        "conflifts": [null],
        "tier": 1,
        "stackable": false
    },
    {
        "name": "Fire in the Veins",
        "dependancy": "Heart of fire",
        "description":"You gain resistance to fire damage. In addition, spells you cast ignore resistance to fire damage.",
        "conflifts": [null],
        "tier": 2,
        "stackable": false
    },
    {
        "name": "Pyromancer's Fury",
        "dependancy": "",
        "description":"When you are hit by a melee attack, you can use your reaction to deal fire damage to the attacker. The damage equals your sorcerer level, and ignores resistance to fire damage.",
        "conflifts": [null],
        "tier": 2,
        "stackable": false
    },
    {
        "name": "Fiery Soul",
        "dependancy": "Heart of fire",
        "description":"you gain immunity to fire damage. In addigfbvc , any spell or effect you create ignores resistance to fire damage and treats immunity to fire damage as resistance to fire damage.",
        "conflifts": [null],
        "tier": 3,
        "stackable": false
    },
    {
        "name": "Ability Score Improvement",
        "dependancy": "",
        "description":"you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
        "conflifts": [null],
        "tier": 1,
        "stackable": true,
        cb:((char,setChar)=>{
            const charCopy = {...char}
            charCopy.pointsLeft+=2
            setChar(charCopy)
        })
    }
]