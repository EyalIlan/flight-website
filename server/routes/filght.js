const express = require('express')
const flightsController = require('../controllers/flight')

const router = express.Router()

router.get('/flight/search/:flights',flightsController.getFilghts)


module.exports = router
