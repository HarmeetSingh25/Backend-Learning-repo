const express = require("express")
const app = express()
 PORT = 3000
app.get("/", (req, res) => {
    res.send("hello world")
})
app.get("/about", (req, res) => {
    res.send("Welcome to about page");

})
app.listen(PORT, () => {
    console.log(`Express Server is running ${PORT}`);
})