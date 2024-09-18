import  express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import clothRoute from './router/cloth.route.js'
import customerRoute from './router/customer.route.js'
import cors from 'cors'
import orderRoute from './router/order.route.js'
import userRoute from './router/user.route.js'

const app = express()
app.use(cors())
app.use(express.json())
 // Adjust the path and extension as needed

dotenv.config();
const port = process.env.PORT || 4000;
const URI = process.env.mongoDBURI;

//connect to mongoDB
try {
    mongoose.connect(URI,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log("Connected to mongoDB");
} catch (error) {
    console.log("Error:",error);
}
//defining routes 
app.use('/cloth',clothRoute)
app.use('/customer',customerRoute)
app.use('/order',orderRoute)
app.use("/user",userRoute)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
