
const mongoose = require('mongoose');
const Property = mongoose.model('Property'); 

module.exports.addProperty = (req, res, next) => {

    var property = new Property()
    property.propertyName = req.body.propertyName;
    property.propertyCategory = req.body.propertyCategory;
    property.city=req.body.city;
    property.street=req.body.street;
    property.imageinput=req.body.imageinput;
    property.bedrooms=req.body.bedrooms;
    property.propertyPrice = req.body.propertyPrice;
    property.propertyDescription = req.body.propertyDescription;
    property.propertyImageUrl = req.body.propertyImageUrl;
    property.favourite = req.body.favourite;
    property.propertyOwner = req.body.propertyOwner;

    property.save((err, doc) => {
        if(!err) {
            res.send(doc)
        } else {
            return next(err);
        }
    })
}

module.exports.getAllPropertyAd = (req, res, next) => {
    Property.find(function(err, property) {
        if(err) { return next(err)}
        else {
            res.json(property);
        }
    })
}

module.exports.getPropertyAdsDetails = (req, res, next) => {
    Property.findById(req.params.id, function(err, property) {
        if(err) {
            return next(err)
        } else {
            return res.json(property);
        }
    })
}

module.exports.updateProperty = (req, res, next) => {

    Property.findById(req.params.id, function(err, property) {
        if(err) { return next(err) }
        else {
            property.propertyName = req.body.propertyName;
            property.propertyCategory = req.body.propertyCategory;
            property.city=req.body.city;
            property.street=req.body.street;
            property.imageinput=req.body.imageinput;
            property.bedrooms=req.body.bedrooms;
            property.propertyPrice = req.body.propertyPrice;
            property.propertyDescription = req.body.propertyDescription;
            property.propertyImageUrl = req.body.propertyImageUrl;
            property.favourite = req.body.favourite;
            property.propertyOwner = req.body.propertyOwner;
            property.save(function(err, doc){
                if(!err) {
                    res.send(doc)
                } else {
                    return next(err);
                }
            })
        }
    })

}

module.exports.removeProperty = (req, res, next) => {
    Property.remove({_id: req.params.id}, function(err, prod) {
        if(err) {
            return next(err)
        } else {
            return res.send(prod)
        }
    })
}
