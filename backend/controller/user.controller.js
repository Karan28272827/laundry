import bcryptjs from "bcryptjs";
import User from "../model/user.model.js";


// backend code
export const signup = async (req, res) => {
  try {
    const { email, password, fullname } = req.body;

    // Check if the user already exists by email
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      // Return 409 Conflict if the user already exists
      return res.status(409).json({ message: "User already exists" });
    }

    // Hash the password before saving
    const hashedPassword = await bcryptjs.hash(password, 10);

    // Create a new user with the hashed password
    const newUser = new User({
      email,
      password: hashedPassword,
      fullname
    });
    await newUser.save();

    // Return a successful response with the user data
    return res.status(201).json({
      message: "Signup successful",
      customer: {
        _id: newUser._id,
        fullname: newUser.fullname,
        email: newUser.email
      }
    });
  } catch (error) {
    // Log the error for debugging purposes
    console.log("Error: " + error.message);
    
    // Return 500 Internal Server Error for unexpected issues
    return res.status(500).json({ message: "Internal server error" });
  }
};

  

export const login = async (req,res) =>{
    try {
        const {email,password} = req.body
        const user = await User.findOne({email});
        const isMatch = await bcryptjs.compare(password,user.password)
        if(!user || !isMatch){
            return res.status(400).json({message:"Invalid credentials"})
        }else{
            res.status(200).json({message:"Login successfull",user:{
                _id: user._id,
                fullname:user.fullname,
                email:user.email
            }})
        }
    } catch (error) {
        console.log("Error: "+error.message);
        res.status(500).json({message:"Internal server error"})
    }
}

// New function to check if email exists
export const checkEmailExists = async (req, res) => {
    try {
      const { email } = req.params;
      const user = await User.findOne({ email });
      
      if (user) {
        return res.status(200).json({ exists: true, message: "Email already registered" });
      } else {
        return res.status(200).json({ exists: false, message: "Email is available" });
      }
    } catch (error) {
      console.log("Error: " + error.message);
      res.status(500).json({ message: "Internal server error" });
    }
  };