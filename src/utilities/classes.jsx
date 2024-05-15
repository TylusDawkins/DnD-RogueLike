import mageImage from "/public/assets/mage.png"
import mageFeatures from "@utils/mageFeatures.json"

import fighterImage from '@assets/fighter.png'
import fighterFeatures from '@utils/fighterFeatures'

import halfCasterImage from '@assets/half-caster.png'
import halfCasterFeatures from '@utils/halfCasterFeatures.json'

const classes = [
    {
        image: fighterImage,
        name: 'Fighter',
        description: `A melee fighter focused on overwhelming enemies with stats`,
        baseStats: {
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
            hpMod:1.5,
            physical: 10,
            fortitude: 10,
            mental: 10,
        },
        features:halfCasterFeatures,
        canCast:true
    },
    {
        image: mageImage,
        name: 'Mage',
        description: 'A magic focused class that excels in ranged combat.',
        baseStats: {
            hpMod:1,
            physical: 10,
            fortitude: 10,
            mental: 10,
        },
        features:mageFeatures,
        canCast:true
    }
]
        

export default classes