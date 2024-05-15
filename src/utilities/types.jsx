import mageImage from "/public/assets/mage.png"
import mageFeatures from "@utils/mageFeatures.json"



const types = {
    fighter:{},
    hybrid:{},
    mage:{
        image:mageImage,
        hasSpells:true,
        availableFeatures:mageFeatures,
    },
}

export default types