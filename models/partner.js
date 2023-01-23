const { Sequelize, DataTypes } = require('sequelize')
const sequelize = new Sequelize(process.env.DATABASE, process.env.USER, process.env.PASSWORD, {
  host: 'localhost',
  port: '3306',
  dialect: 'mysql'
})

const partnerSchema = sequelize.define('partner', {
  partner_pseudo: {
    type: DataTypes.STRING,
    allowNull: false
  },
  partner_picture: {
    type: DataTypes.STRING,
    allowNull: false
  },
  partner_twitch: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, { timestamps: false })

const partnerModel = sequelize.model('partner', partnerSchema)
module.exports = partnerModel