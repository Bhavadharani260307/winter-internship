const express = require('express');
const mdb=require('mongoose');
const app=express();
const PORT=8001;

// Middleware to parse JSON
app.use(express.json());

// CORS middleware to allow frontend connection
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});
mdb.connect('mongodb://localhost:27017/MERN').then(()=>{
    console.log("Mongodb connection successfull")
}).catch((err)=>{
    console.log("Mongodb connection unsuccessful",err)
})
app.get('/',(req,res)=>{
    res.send("Welcome to backend server")
})
app.get('/json',(req,res)=>{
    res.json({
     "college":"sece",
     "Dept":"Cys",
     "StuCount":"64"
    })  
})
app.get('/static',(req,res)=>{
   res.sendFile(__dirname + '/index.html')
    })

app.get('/signup',(req, res)=>{
    res.send("Signup page - Use POST method to submit signup data")
})

app.post('/signup',(req, res)=>{
    const{email,username,password} = req.body;
    console.log('Received signup data:', {email, username, password});
    res.json({"Message":"Signup successful", "data": {email, username}})
})

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})