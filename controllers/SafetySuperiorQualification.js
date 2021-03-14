const safetySuperior = require('../models/safetySuperior');
const formidable = require('formidable');
const _ = require('lodash'); //helps update the product
const fs = require('fs');

exports.safetySuperiorById = (req, res, next, id) => {
    safetySuperior.findById(id).exec((err, safetySuperior) => {
        if(err || !safetySuperior) {
            return res.status(400).json({
                error:"הפריט לא נמצא"
            })
        }
        req.safetySuperior = safetySuperior
        next()
    })
  }

exports.find = (req, res) => {
    safetySuperior.find().sort({safetySuperiordate: 'descending'})
    .then(orders => res.json(orders))
    .catch(err => res.status(400).json('Error: ' + err));
}

    exports.create = (req, res) => {
       
       const safetySuperior = new safetySuperior(req.body)
       safetySuperior.save((err,data) => {
           if(err) {
               return res.status(400).json({
                   error: err
               })
           }
           res.json(data)
       })
    }

exports.update = (req, res) => {
    let form = new formidable.IncomingForm()
    form.keepExtensions = true
    form.parse(req,(err,fields) => {
        if(err){
            return res.status(400).json({
                error:'לא ניתן להעלות את התמונה'
            })
        }
        /* const {safetySuperiordate,cartype,safetySuperiortype,egadtype,carnum } = fields
        if(!safetySuperiordate || !cartype  || !safetySuperiortype || !egadtype || !carnum   ) {
            return res.status(400).json({
                error: "כל השדות נדרשים"
            })
        } */
        let safetySuperior = req.safetySuperior;
        safetySuperior = _.extend(safetySuperior,fields);
        // if(files.photo){
        //     if (files.photo.size > 100000) {
        //         return res.status(400).json({
        //             error: "התמונה צריכה לשקול פחות מ 1 מגה ביט"
        //         })
        //     }
        //     // console.log('FILES PHOTO:', files.photo)
        //     product.photo.data = fs.readFileSync(files.photo.path)
        //     product.photo.contentType = files.photo.type
        // }
        safetySuperior.save((err, result) => {
            if(err) {
                return res.status(400).json({
                    error: err
                })
            }
            res.json({ result });
        })

 }) 

}

exports.remove = (req, res) => {
    let safetySuperior = req.safetySuperior
    safetySuperior.remove((err, deletedsafetySuperior) => {
        if(err){
            return res.status(400).json({
                error: err
            })
        }
        res.json({
            message:"הטיפול נמחק בהצלחה"
        })
       
    })
}
exports.read = (req, res) => {
    return res.json(req.safetySuperior);
}

exports.findsafetySuperiorsbyuser = (req, res) => {
    String.prototype.toObjectId = function() {
        var ObjectId = (require('mongoose').Types.ObjectId);
        return new ObjectId(this.toString());
      };
    safetySuperior.find({user:(req.params.userId).toObjectId()}).sort({safetySuperiordate: 'descending'})
    .then(orders => res.json(orders))
    .catch(err => res.status(400).json('Error: ' + err));
}

exports.setsafetySuperiorstatusdeleted = (req, res) => {
    safetySuperior.updateOne({_id: req.safetySuperior._id},{ status: "נמחק" })
    .then(orders => res.json(orders))
    .catch(err => res.status(400).json('Error: ' + err));;
}

exports.getactivesafetySuperiors = (req, res) => {
    safetySuperior.find({ status: { $ne: "נמחק" } }).sort({safetySuperiordate: 'descending'})
    .then(orders => res.json(orders))
    .catch(err => res.status(400).json('Error: ' + err));
}

/*exports.schedulersafetySuperiors = (req, res) => {
    var senddata = [];

     safetySuperior.find().exec(function(err, data){
         //set id property for all records
         for (var i = 0; i < data.length; i++)
         {
             var safetySuperior
            var tempsafetySuperiordate=data[i].safetySuperiordate;
            //var tempsafetySuperiordate=data[i].safetySuperiordate.substring(0,10)+"14:00";
            senddata.push({id:data[i]._id,start_date:tempsafetySuperiordate,end_date:tempsafetySuperiordate});
          //  senddata[i].text="hello";
         }res.send(senddata);
        });
    }*/

exports.getsafetySuperiorsbydate = (req, res) => { //req.body={ day: 14, month: 12, year: 2020 } might need to be optimized
    safetySuperior.find().exec(function (err, data) {
        var senddata = [];
        for (var i = 0; i < data.length; i++) {
            var myDate = new Date(data[i].safetySuperiordate);
            if ((myDate.getDate() == req.body.day) && ((myDate.getMonth() + 1) == req.body.month) && (myDate.getFullYear() == req.body.year)) {
                senddata.push(data[i]);
            }
        } res.send(senddata);
    });
}

/*exports.getspecificdatesafetySuperiors = (req, res) => { //req.body={ day: 14, month: 12, year: 2020 }
   console.log(req);
}
*/

exports.createsafetySuperior = (req, res) => {   
    const safetySuperior = new safetySuperior(req.body)
    safetySuperior.save((err,data) => {
        if(err) {
            return res.status(400).json({
                error: err
            })
        }
        res.json(data)
    })
 }