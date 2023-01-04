const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const multer=require("multer")
const userRouter=require("./routes/user.js")
const { application } = require("express")
const app = express()
app.use("/uploads",express.static("uploads"))
app.use(express.json({  extended: true }))
app.use(express.urlencoded({  extended: true }))
app.use(cors());
app.use("/user",userRouter)

const CONNECTION_URL = 'mongodb+srv://Mohib_7:Saaiq123@cluster0.75lldu5.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT|| 5000;
mongoose.set('strictQuery', false)
mongoose.connect(CONNECTION_URL)
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));