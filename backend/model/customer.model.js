import mongoose from "mongoose";    

const customerSchema = mongoose.Schema({
    Name: {
        type: String,
        required: true,
    },
    Phone: {
        type: Number,
        required: true,
    },
    Email: {
        type: String,
        required: true,
    },
    Password: {
        type: String,
        required: true,
    }
})

const customer1 = mongoose.model("customerRegistration",customerSchema)

// const customer1 = new customerRegistration({
//     customer_id: 1,
//     name: "Karan Paigude",
//     phone_no: 8329472403,
//     email: "paigudekaran2827@gmail.com",
//     password: "hello",
//     active: true
// })
// customer1.save();

export default customer1;