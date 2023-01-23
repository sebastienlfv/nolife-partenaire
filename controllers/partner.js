const partnerModel = require('../models/partner')

module.exports.readPartner = async (req, res) => {
  partnerModel.findAll()
    .then(partner => res.status(200).json(partner))
    .catch(err => res.status(400).json(err))
}

module.exports.addPartner = async (req, res) => {
  const partner = new partnerModel({
    ...req.body
  })
  partner.save()
    .then(() => res.status(200).json({ message: 'Partenaire ajouté !' }))
    .catch(err => res.status(400).json({ err }))
}

module.exports.deletePartner = async (req, res) => {
  partnerModel.destroy({ where: { id: req.params.id }})
    .then(() => res.status(200).json({ message: 'Partenaire supprimé !' }))
    .catch(err => res.status(400).json({ err }))
}