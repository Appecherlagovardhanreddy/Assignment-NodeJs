const { MongoGridFSChunkError } = require('mongodb')
const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/assignmnet',{
    useNewUrlParser:true
  
})

const teacher_schema = mongoose.Schema({
    name :{
        type : String,required : true,
    },
    email :{
        type : String,required : true,
    },
    subject :{
        type: String,required : true,
    }
})

const students_schema = mongoose.Schema({
   name : {type : String,require:true},
   email : {type : String,require:true},
   class : {type : Number,require:true},
   section : {type : String,require:true},
   assignedteacher : {type : String,require:true},
})
const tec = mongoose.model('teachers',teacher_schema)
const stu = mongoose.model('students',students_schema)



module.exports = {tec,stu}