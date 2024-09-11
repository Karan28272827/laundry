import Clothes from "../model/clothes.model.js";

export const getClothes = async(req, res) => {
    try {
        const cloth =await Clothes.find()
        res.status(200).json(cloth)  
    } catch (error) {
        console.log("Error: ",error);
        res.status(500).json(error);
    }
}
