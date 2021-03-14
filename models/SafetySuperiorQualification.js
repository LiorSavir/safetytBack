const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema


const SafetySuperiorQualificationSchema = new mongoose.Schema({
  //visitor data
superiorCn:{type: String,required: true},
superiorId:{type: String,required: true},
superiorFullName:{type:String,required:true},
superiorCertificateDate:{type:String, required: true},
superiorSeminarDays:{type:String, required: true},
});

const SafetySuperiorQualification = mongoose.model('SafetySuperiorQualification', SafetySuperiorQualificationSchema);

module.exports = SafetySuperiorQualification;
