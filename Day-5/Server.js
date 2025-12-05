const express = require("express")
const app = express()

app.use(express.json())

const connecttodb = require("./src/db/db.js")
connecttodb()


const notes =[]
app.get("/", (req,res) => {
    res.send("Welcome to the home page ")
    console.log("Welcome to the home page ");
    
})
 

app.post("/notes",(req,res)=>{
const note=req.body
notes.push(note)

console.log(notes);
})


app.listen(3000, () => {
    console.log("Server is running ");
})
