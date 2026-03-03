const express = require("express")
const app = express()
const notes = []
app.use(express.json())

app.get("/home", (req, res) => {
res.send("Welcome to home page ")
})

app.get("/about" , (req,res)=>{
    res.send("welecome to about page ")
})
app.listen(3000, () => {
    console.log("Server is running");

})