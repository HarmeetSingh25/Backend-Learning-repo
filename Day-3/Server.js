const express = require("express")
const app = express()
const notes = []
app.use(express.json())

app.post("/notes", (req, res) => {
    console.log(req.body);
})
app.listen(3000, () => {
    console.log("Server is running");

})