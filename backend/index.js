import  express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import  ClothesModel from './model/clothes.model.js'
import clothRoute from './router/cloth.route.js'
import customerRoute from './router/customer.route.js'
const app = express()

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

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
