const UnitId = require('../models/UnitId');
const formidable = require('formidable');
const _ = require('lodash'); //helps update the product
const fs = require('fs');


exports.find = (req, res) => {
    UnitId.find()
    .then(orders => res.json(orders))
    .catch(err => res.status(400).json('Error: ' + err));
}

    exports.create = (req, res) => {
       
       const UnitId = new UnitId(req.body)
       UnitId.save((err,data) => {
           if(err) {
               return res.status(400).json({
                   error: err
               })
           }
           res.json(data)
       })
    }

