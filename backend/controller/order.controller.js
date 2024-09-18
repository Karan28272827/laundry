import order1 from "../model/order.model.js";
import customer1 from "../model/customer.model.js";

export const getorder1 = async(req, res) => {
    try {
        const order =await order1.find()
        res.status(200).json(order)  
    } catch (error) {
        console.log("Error: ",error);
        res.status(500).json(error);
    }
}
