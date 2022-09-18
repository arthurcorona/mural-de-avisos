const port = 3000
const express = require('express')
const apiRoute = require('./routes/api')
const app = express()
const path = require('path')

app.use('/api/', apiRoute)
app.use('/', express.static(path.join(__dirname, "public")))

app.listen(port, () => {
    console.log("server running on port", port);
})

