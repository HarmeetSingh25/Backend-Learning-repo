const express = require("express")
const app = express()

app.use(express.json())

let notes = []

app.post("/notes", (req, res) => {
    console.log(req.body);
    notes.push(req.body)
    res.json("Notes is added ")

})

app.delete("/notes/:index", (req, res) => {
    const index = req.params.index
    delete notes[index]
    res.json(notes)
})

app.patch("/notes/:index", (req, res) => {
    const index = req.params.index
    if (!notes[index]) {
        return res.json("Invalid number")
    }
    const { tittle } = req.body
    notes[index].tittle = tittle
    res.json(notes)
})



app.listen(3000, () => {
    console.log("Server is running");

})