import mongoose from "mongoose";    

const orderSchema = mongoose.Schema({
    service: {
        type: String,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    }
})

const order1 = mongoose.model("orderAppend",orderSchema)

// const customer1 = new customerRegistration({
//     customer_id: 1,
//     name: "Karan Paigude",
//     phone_no: 8329472403,
//     email: "paigudekaran2827@gmail.com",
//     password: "hello",
//     active: true
// })
// customer1.save();

export default order1;