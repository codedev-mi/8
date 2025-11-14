const express = require('express')
const app = express();
const PORT = 3000;

app.get('/',(req,res)=>{
    res.send("Welcome to Student Portal")
})
app.get('/about',(req,res)=>{
    res.send("This is an Express App")
})
app.get('/contact',(req,res)=>{
    res.send("Name : Nilesh Pande <br> Email : nilesh@example.com")
})

app.listen(PORT,()=>{
    console.log(`Server is Running on http://localhost:${PORT}`)
})