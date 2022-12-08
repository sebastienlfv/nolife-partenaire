const express = require('express')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
const Sequelize = require('sequelize')
const cors = require('cors')
const app = express()
dotenv.config()

const partnerRoute = require('./routes/partner')

// connect to DB
const sequelize = new Sequelize(process.env.DATABASE, process.env.USER, process.env.PASSWORD, {
  host: 'localhost',
  port: '3306',
  dialect: 'mysql'
})

sequelize.authenticate()
  .then(() => {
    console.log('Connexion à la BDD');
  }).catch(() => {
    console.log('Connexion à la BDD raté');
  })

// CORS
app.use(cors())


// middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// route
app.use('/api/partner', partnerRoute)

module.exports = app;