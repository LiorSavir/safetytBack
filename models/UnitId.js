const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema


const UnitIdSchema = new mongoose.Schema({
  //visitor data
unitName:{type: String,required: true},
unitLocation:{type: String,required: true},
unitStructure:{type:String,required:true},
unitMeansDetails:{type:String, required: true},
unitCentralOccupation:{type:String, required: true},
unitStructureTree:{type:String, required: true},
teneStructureTree:{type:String, required: true},
});

const UnitId = mongoose.model('UnitId', UnitIdSchema);

module.exports = UnitId;
