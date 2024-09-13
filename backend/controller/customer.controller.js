import customer1 from "../model/customer.model.js";
import bcryptjs from 'bcryptjs'

export const getcustomer1 = async(req, res) => {
    try {
        const {fullname,phone,email,password} = req.body
        const customer = await customer1.findOne({email})
        if(customer){
            return res.status(400).json({message:"Email already exists"})
        }
        const hashPassword = await bcryptjs.hash(password, 10)
        const createdCustomer = new customer1({
            fullname:fullname,
            phone:phone,
            email:email,
            password:hashPassword
        });
        await createdCustomer.save()
        res.status(201).json({message:"User created successfully"})
    } catch (error) {
       console.log("Error: " + error.message);
       res.status(500).json({message: "Internal server error"});
    }
};
export const login = async(req,res)=>{
    try {
        const {name, phone, email, password} = req.body;
        const customer = await customer1.findOne({email})
        const isMatch = await bcryptjs.compare(password, customer.password)
        if(!customer || !isMatch){
            return res.status(400).json({message:"Invaild credentials"})
        }else{
            res.status(200).json({message:"Login successfull",customer:{
                _id:customer._id,
                fullname:customer.fullname,
                email:customer.email
            }})
        }
    } catch (error) {
        console.log("Error: " + error.message)
        res.status(500).json({message:"Internal server error"})
    }
}
