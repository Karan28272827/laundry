import mongoose from "mongoose";    

const customerSchema = mongoose.Schema({
    fullname: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique:true
    },
    password: {
        type: String,
        required: true,
    }
})

const customer1 = mongoose.model("customerRegistration",customerSchema)
// const modelName = "customerRegistration";
// let customer1 = mongoose.models[modelName] || mongoose.model(modelName, customerSchema);

export default customer1;
// const customer1 = new customerRegistration({
//     customer_id: 1,
//     name: "Karan Paigude",
//     phone_no: 8329472403,
//     email: "paigudekaran2827@gmail.com",
//     password: "hello",
//     active: true
// })
// customer1.save();

