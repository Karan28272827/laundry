import mongoose from "mongoose";    

const clothesschema = mongoose.Schema({
    Clothing_id: Number,
    Order_id: Number,
    Clothing_type: String,
    Quantity: String,
    Material: String
})

const Clothes = mongoose.model("Clothes",clothesschema )

export default Clothes;