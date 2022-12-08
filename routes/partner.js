const express = require('express')
const router = express.Router()
const partnerCtrl = require('../controllers/partner')

router.get('/', partnerCtrl.readPartner)
router.post('/', partnerCtrl.addPartner)
router.delete('/:id', partnerCtrl.deletePartner)

module.exports = router