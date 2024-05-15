import mageImage from "/public/assets/mage.png"
import mageFeatures from "@utils/mageFeatures.json"

import fighterImage from '@assets/fighter.png'
import fighterFeatures from '@utils/fighterFeatures.json'

import halfCasterImage from '@assets/half-caster.png'
import halfCasterFeatures from '@utils/halfCasterFeatures.json'



const types = {
    Fighter:{
        image:fighterImage,
        hasSpells:false,
        features:fighterFeatures
    },
    Hybrid:{
        image:halfCasterImage,
        hasSpells:true,
        features:halfCasterFeatures
    },
    Mage:{
        image:mageImage,
        hasSpells:true,
        features:mageFeatures,
    },
}

export default types