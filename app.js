const express = require('express')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
const Sequelize = require('sequelize')
const cors = require('cors')
const app = express()
const nodemailer = require('nodemailer')
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
    console.log('Connexion à la BDD MYSQL');
  }).catch(() => {
    console.log('Connexion à la BDD MYSQL raté');
  })

// CORS
app.use(cors())

// middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// route
app.use('/api/partner', partnerRoute)

//nodemailer
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
})

app.post('/send-email', function(req, res) {
  var lastname = req.body.lastname
  var firstname = req.body.firstname
  var email = req.body.email
  var genre = req.body.genre
  var date = req.body.date
  var website = req.body.website
  var phone = req.body.phone
  var adress = req.body.adress
  var sponsor = req.body.sponsor
  var nolife = req.body.nolife
  var goodPartner = req.body.goodPartner
  var whatPartner = req.body.whatPartner
  var jeux = req.body.jeux
  var plateform = req.body.plateforme
  var linkTwitter = req.body.linkTwitter
  var linkTwitch = req.body.linkTwitch
  var linkFacebook = req.body.linkFacebook
  var linkInstagram = req.body.linkInstagram
  var linkYoutube = req.body.linkYoutube
  var linkTiktok = req.body.linkTiktok
  var mailOptions = {
    from: email,
    to: 'bnz@nolife-clothing.fr',
    subject: 'Demandes de partenariat - ' + firstname,
    // text: `Prénom: ${firstname}, Nom: ${lastname}, Email: ${email}, Genre: ${genre}, Date de naissance: ${date},
    // Site: ${website}, Téléphone: ${phone}, Adresse: ${adress}, Qui sont vos sponsors actuels ?: ${sponsor}, Comment promouvoir la marque Nolife ?: ${nolife},
    // Qu'est ce qui fait de vous un bon candidat pour un partenariat: ${goodPartner}, Quel type de partenariat recherchez vous ?: ${whatPartner},
    // Quel est votre jeu principal ?: ${jeux}, Sur quelles plateformes diffusez-vous ?: ${plateform}, Lien twitter: ${linkTwitter}, Lien twitch: ${linkTwitch}, Lien facebook: ${linkFacebook},
    // Lien instagram: ${linkInstagram}, Lien youtube: ${linkYoutube}, Lien tiktok: ${linkTiktok}`,
    html: `<h1 style="font-size: 25px; color: #000">Demandes de partenariat - ${firstname}</h1> </br> 
    <p style="font-weight: bold; margin-top: 20px">Nom : <span style="font-weight: normal">${lastname}</span></p> </br>
    <p style="font-weight: bold; margin-top: 10px">Prénom : <span style="font-weight: normal">${firstname}</span></p> </br>
    <p style="font-weight: bold; margin-top: 20px">Email : <span style="font-weight: normal">${email}</span></p> </br>
    <p style="font-weight: bold; margin-top: 20px">Genre : <span style="font-weight: normal">${genre}</span></p> </br>
    <p style="font-weight: bold; margin-top: 20px">Date de naissance : <span style="font-weight: normal">${date}</span></p> </br>
    <p style="font-weight: bold; margin-top: 20px">Site web : <span style="font-weight: normal">${website}</span></p> </br>
    <p style="font-weight: bold; margin-top: 20px">Téléphone : <span style="font-weight: normal">${phone}</span></p> </br>
    <p style="font-weight: bold; margin-top: 20px">Adresse : <span style="font-weight: normal">${adress}</span></p> </br>
    <p style="font-weight: bold; margin-top: 20px">Qui sont vos sponsors actuels ? : <span style="font-weight: normal">${sponsor}</span></p> </br>
    <p style="font-weight: bold; margin-top: 20px">Comment promouvoir la marque Nolife ? : <span style="font-weight: normal">${nolife}</span></p> </br>
    <p style="font-weight: bold; margin-top: 20px">Qu'est ce qui fait de vous un bon candidat pour un partenariat ? : <span style="font-weight: normal">${goodPartner}</span></p> </br>
    <p style="font-weight: bold; margin-top: 20px">Quel type de partenariat recherchez vous ? : <span style="font-weight: normal">${whatPartner}</span></p> </br>
    <p style="font-weight: bold; margin-top: 20px">Quel est votre jeu principal ? : <span style="font-weight: normal">${jeux}</span></p> </br>
    <p style="font-weight: bold; margin-top: 20px">Sur quelles plateformes diffusez-vous ? : <span style="font-weight: normal">${plateform}</span></p> </br>
    <p style="font-weight: bold; margin-top: 20px">Lien twitter : <span style="font-weight: normal">${linkTwitter}</span></p> </br>
    <p style="font-weight: bold; margin-top: 20px">Lien twitch : <span style="font-weight: normal">${linkTwitch}</span></p> </br>
    <p style="font-weight: bold; margin-top: 20px">Lien facebook : <span style="font-weight: normal">${linkFacebook}</span></p> </br>
    <p style="font-weight: bold; margin-top: 20px">Lien instagram : <span style="font-weight: normal">${linkInstagram}</span></p> </br>
    <p style="font-weight: bold; margin-top: 20px">Lien youtube : <span style="font-weight: normal">${linkYoutube}</span></p> </br>
    <p style="font-weight: bold; margin-top: 20px">Lien tiktok : <span style="font-weight: normal">${linkTiktok}</span></p> </br>`
  }
  transporter.sendMail(mailOptions, function(err, info) {
    if(err) {
      console.log(err);
    } else {
      console.log('Email envoyé : ' + info.response);
    }
  })
})

module.exports = app;