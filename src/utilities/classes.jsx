import mageImage from "/public/assets/mage.png"
import mageFeatures from "@utils/mageFeatures"

import fighterImage from '@assets/fighter.png'
import fighterFeatures from '@utils/fighterFeatures'

import halfCasterImage from '@assets/half-caster.png'
import halfCasterFeatures from '@utils/halfCasterFeatures'

const classes = [
    {
        image: fighterImage,
        name: 'Fighter',
        description: `A melee fighter focused on overwhelming enemies with stats`,
        baseStats: {
            baseHp:20,
            hpMod:2,
            physical: 10,
            fortitude: 10,
            mental: 10,
        },
        features:fighterFeatures,
        canCast:false
    },
    {
        image: halfCasterImage,
        name: 'Hybrid',
        description: 'A half-caster specializing in both magic and melee combat.',
        baseStats: {
            baseHp:15,
            hpMod:1.5,
            physical: 10,
            fortitude: 10,
            mental: 10,
        },
        spellPoints:{
            0:0,
            1:4,
            2:4,
            3:6,
            4:6,
            5:14,
            6:14,
            8:17,
            9:17,
            10:27,
            11:32,
            12:32,
            13:38,
            14:38,
            15:44,
            16:44,
            17:157,
            18:57,
            19:64,
            20:64
        },
        features:halfCasterFeatures,
        canCast:true
    },
    {
        image: mageImage,
        name: 'Mage',
        description: 'A magic focused class that excels in ranged combat.',
        baseStats: {
            baseHp:10,
            hpMod:1,
            physical: 10,
            fortitude: 10,
            mental: 10,
        },
        spellPoints:{
            0:0,
            1:4,
            2:6,
            3:14,
            4:17,
            5:27,
            6:32,
            8:44,
            9:57,
            10:64,
            11:73,
            12:73,
            13:83,
            14:83,
            15:94,
            16:95,
            17:107,
            18:114,
            19:123,
            20:133
        },
        features:mageFeatures,
        canCast:true
    }
]
        

export default classes