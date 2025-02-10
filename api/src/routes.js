const express = require('express')
const routes = express.Router()

const feedback = require('./controller/controlefeedback')

routes.post('/feedback', feedback.create)
routes.get('/feedback', feedback.read)
routes.delete('/feedback/:id', feedback.deleteFeedback);

module.exports = routes