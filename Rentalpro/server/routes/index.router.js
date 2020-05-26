const express = require('express');
const router = express.Router();

const ctrlUser = require('../controllers/user.controller');

const propertyCtrl = require('../controllers/property.controller');

const jwtHelper = require('../config/jwtHelper');

router.post('/register', ctrlUser.register);
router.post('/authenticate', ctrlUser.authenticate);
router.get('/userProfile',jwtHelper.verifyJwtToken, ctrlUser.userProfile);

router.post('/addProperty', propertyCtrl.addProperty)
router.get('/getAllProperty', propertyCtrl.getAllPropertyAd)
router.get('/getPropertyAdsDetails/:id', propertyCtrl.getPropertyAdsDetails)
router.put('/updateProperty/:id', propertyCtrl.updateProperty);
router.delete('/removeProperty/:id', propertyCtrl.removeProperty);

module.exports = router;



