import customer1 from "../model/customer.model.js";

export const getcustomer1 = async(req, res) => {
    try {
        const customer =await customer1.find()
        res.status(200).json(customer)  
    } catch (error) {
        console.log("Error: ",error);
        res.status(500).json(error);
    }
}
