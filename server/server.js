const express = require('express')
const app = express()
const flightRoute = require('./routes/filght')
const cors = require('cors')
//
app.use(cors())

app.use(express.json())
app.use(express.urlencoded({extended:true}))

//

// Routes
app.use(flightRoute)

app.listen(process.env.PORT || 5000,(req,res) =>{
    console.log(`Server is running on ${process.env.PORT || 5000}`);
})
