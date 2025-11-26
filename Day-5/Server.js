const expres = require("express")
const app = expres()

app.post("/",(req,res)=>{
res.json("Welcome to the home page ")
})

app.listen(3000, () => {
    console.log("Server is running ");

})