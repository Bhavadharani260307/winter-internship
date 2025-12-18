// const express = require('express');
// const mdb=require('mongoose');
// const app=express();
// const PORT=8001;

// // Middleware to parse JSON
// app.use(express.json());

// // CORS middleware to allow frontend connection
// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
//     res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
//     res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
//     next();
// });
// mdb.connect('mongodb://localhost:27017/MERN').then(()=>{
//     console.log("Mongodb connection successfull")
// }).catch((err)=>{
//     console.log("Mongodb connection unsuccessful",err)
// })
// app.get('/',(req,res)=>{
//     res.send("Welcome to backend server")
// })
// app.get('/json',(req,res)=>{
//     res.json({
//      "college":"sece",
//      "Dept":"Cys",
//      "StuCount":"64"
//     })  
// })
// app.get('/static',(req,res)=>{
//    res.sendFile(__dirname + '/index.html')
//     })

// app.get('/signup',(req, res)=>{
//     res.send("Signup page - Use POST method to submit signup data")
// })

// app.post('/signup',(req, res)=>{
//     const{email,username,password} = req.body;
//     console.log('Received signup data:', {email, username, password});
//     res.json({"Message":"Signup successful", "data": {email, username}})
// })

// app.listen(PORT,()=>{
//     console.log(`Server is running on port ${PORT}`)
// })

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = 8001;

/* ===== Middleware ===== */
app.use(cors());
app.use(express.json());

/* ===== MongoDB Connection ===== */
mongoose
  .connect("mongodb://localhost:27017/BHAVADHARANI")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

/* ===== Schema ===== */
const userSchema = new mongoose.Schema({
  email: String,
  password: String,
});

const User = mongoose.model("User", userSchema);

/* ===== Home ===== */
app.get("/", (req, res) => {
  res.send("Backend running");
});

/* ===== Signup API ===== */
app.post("/signup", async (req, res) => {
  const { email, password } = req.body;

  const userExists = await User.findOne({ email });
  if (userExists) {
    return res.json({ message: "User already exists" });
  }

  const newUser = new User({ email, password });
  await newUser.save();

  res.json({ message: "Signup successful" });
});

/* ===== Login API (THIS WAS MISSING) ===== */
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email, password });

  if (!user) {
    return res.json({
      message: "Invalid email or password",
      isLoggedIn: false,
    });
  }

  res.json({
    message: "Login successful",
    isLoggedIn: true,
  });
});

/* ===== Start Server ===== */
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});