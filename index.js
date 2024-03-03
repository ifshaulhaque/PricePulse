const { config } = require('dotenv')
const express = require("express")
const app = express()
config()

app.get("/", (req, res) => {
    res.json({
        status: "successfull"
    })
})

app.listen(process.env.PORT || 3000)