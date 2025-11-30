    const mongoose = require("mongoose")

    function connecttodb() {
        mongoose.connect("mongodb+srv://ajits4978_db_user:LVBElwu2R35pKqgf@cluster0.z47iykq.mongodb.net/cohort").then(() => {
            console.log("Connect with DB");

        })
    }
    module.exports = connecttodb