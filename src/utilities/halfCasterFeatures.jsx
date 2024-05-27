export default [
    { 
        "name": "Bardic Inspiration", 
        "dependancy": null,
        "conflifts": [null], 
        "tier": 1,
        "stackable":false
    },
    {
        "name:": "Superior Inspiration",
        "dependancy": "Bardic Inspiration",
        "conflifts": [null],
        "tier": 2,
        "stackable": false
    },
    {
        "name":"Combat Inspiration",
        "dependancy": "Bardic Inspiration",
        "conflifts": [null],
        "tier": 2,
        "stackable": false
    },
    {
        "name":"Battle Magic",
        "dependancy": "null",
        "conflifts": [null],
        "tier": 2,
        "stackable": false
    },
    {
        "name": "Wild Shape",
        "dependancy": null,
        "conflifts": [null],
        "tier": 1,
        "stackable": false
    },
    {
        "name":"Beast Spells",
        "dependancy": "Wild Shape",
        "conflifts": [null],
        "tier": 2,
        "stackable": false
    },
    {
        "name": "Archdruid",
        "dependancy": "Wild Shape",
        "conflifts": [null],
        "tier": 3,
        "stackable": false
    },
    {
        "name":"War Magic",
        "dependancy": null,
        "conflifts": [null],
        "tier": 1,
        "stackable": false
    },
    {
        "name":"Improved War Magic",
        "dependancy": "War Magic",
        "conflifts": [null],
        "tier": 2,
        "stackable": false
    },
    {
        "name":"Eldritch Strike",
        "dependancy": "War Magic",
        "conflifts": [null],
        "tier": 2,
        "stackable": false
    },
    {
        "name":"Extra Attack",
        "dependancy": null,
        "conflifts": [null],
        "tier": 1,
        "stackable": true
    },
    { 
        "name": "Lay on Hands", 
        "dependancy": null,
        "conflifts": [null], 
        "tier": 1,
        "stackable":false 
    },
    {
        "name": "Divine Smite",
        "dependancy": null,
        "conflifts": [null],
        "tier": 1,
        "stackable":false
    },
    { 
        "name": "Aura of Protection", 
        "dependancy": null,
        "conflifts": [null], 
        "tier": 1,
        "stackable":false 
    },
    { 
        "name": "Improved Divine Smite", 
        "dependancy": "Divine Smite",
        "conflifts": [null], 
        "tier": 2,
        "stackable":false 
    },
    {
        "name": "Aura of Hate",
        "dependancy": null,
        "conflifts": [null],
        "tier": 2,
        "stackable": false
    },
    { 
        "name": "Fighting Style", 
        "dependancy": null,
        "description":"Look up dnd 5e fighting styles",
        "conflifts": [null], 
        "tier": 1,
        "stackable":true 
    },
    {
        "name":"Supernatural Resistance",
        "dependancy": null,
        "conflifts": [null],
        "tier": 3,
        "stackable": false
    },
    {
        "name":"Vigilant Rebuke",
        "dependancy": null,
        "conflifts": [null],
        "tier": 2,
        "stackable": false
    },
    {
        "name":"Emissary of Redemption",
        "dependancy": null,
        "conflifts": [null],
        "tier": 3,
        "stackable": false
    },
    {
        "name":"Protective Spirit",
        "dependancy": null,
        "conflifts": [null],
        "tier": 2,
        "stackable": false
    },
    {
        "name":"Living Legend",
        "dependancy": null,
        "conflifts": [null],
        "tier": 3,
        "stackable": false
    },
    {
        "name": "Eldritch Invocations",
        "dependancy": null,
        "conflifts": [null],
        "tier": 1,
        "stackable": false
    },
    {
        "name":"Meta Magic",
        "dependancy": null,
        "conflifts": [null],
        "tier": 1,
        "stackable": false
    },
    {
        "name":"Ability Score Improvement",
        "dependancy": null,
        "conflifts": [null],
        "tier": 1,
        "stackable": true,
        cb:((char,setChar)=>{
            const charCopy = {...char}
            charCopy.pointsLeft+=2
            setChar(charCopy)
        })
    },
    {
        "name":"Martial Adept",
        "dependancy": null,
        "conflifts": [null],
        "tier": 1,
        "stackable": false
    },
    {
        "name":"War Caster",
        "dependancy": null,
        "conflifts": [null],
        "tier": 1,
        "stackable": false,
        "link":"http://dnd5e.wikidot.com/feat:war-caster"
    },
    {
        "name":"Shadow Touched",
        "dependancy": null,
        "conflifts": [null],
        "tier": 1,
        "stackable": false,
        "link":"http://dnd5e.wikidot.com/feat:shadow-touched"
    },
    {
        "name":"Fey Touched",
        "dependancy": null,
        "conflifts": [null],
        "tier": 1,
        "stackable": false,
        "link":"http://dnd5e.wikidot.com/feat:fey-touched"
    },
    {
        "name":"Ember of the Fire Giant",
        "dependancy": null,
        "conflifts": [null],
        "tier": 1,
        "stackable": false,
        "link":"http://dnd5e.wikidot.com/feat:ember-of-the-fire-giant"
    },
    {
        "name":"Infusion",
        "dependancy": null,
        "conflifts": [null],
        "tier": 1,
        "stackable": false,
        "link":"http://dnd5e.wikidot.com/artificer"
    }
]