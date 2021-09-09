const express = require('express')
const models = require('../db/mongoose')
const router = express.Router()


// for creating teachers

router.post('/createteacher',(req,res)=>{
 
    const teacher = new models.tec(req.body)
    teacher.save().then(()=>{
        res.status(200).send('New Teacher Added Successfully !')
    }).catch((e)=>{
        res.status(500).send(e)
    })
})

// adding student 
router.post('/createstudent',(req,res)=>{
 
    const student = new models.stu(req.body)
    student.save().then(()=>{
        res.status(200).send('New Student Added Successfully !')
    }).catch((e)=>{
        res.status(500).send(e)
    })
})

// list all teachers
router.get('/teachers',(req,res)=>{
    models.tec.find({}).then((r)=>{
        res.status(200).send(r)
    }).catch((e)=>{
        res.status(500).send("Error !!!")
    })
})

//list all students
router.get('/students',(req,res)=>{
    models.stu.find({}).then((r)=>{
        res.status(200).send(r)
    }).catch((e)=>{
        res.status(500).send("Error !!!")
    })
})
//filtering teachers (subject in this case) 
router.get('/filterteachers',(req,res)=>{
    models.tec.findOne({subject : req.query.sub}).then((r)=>{
        res.status(200).send(r)
    }).catch((e)=>{
        res.status(500).send(e)
    })
})

//filtering students (class , section) 
router.get('/filterstudents',(req,res)=>{
    models.stu.find({section :req.query.section,class:req.query.class}).then((r)=>{
        res.status(200).send(r)
    }).catch((e)=>{
        res.status(500).send(e)
    })
})

// Update student details 
router.patch('/updatedetails/:name',(req,res)=>{
    const update_details = req.body
    models.stu.findOneAndUpdate(req.params.name,update_details).then((r)=>{
        res.status(200).send("Details Uploaded!")
    }).catch((e)=>{
        res.status(500).send(e)
    })
})


// all students asigned to  a teacher (id)
router.get('/studentlistofteacher/:tid',(req,res)=>{

  models.tec.findById(req.params.tid).then((r)=>{
       models.stu.find({assignedteacher : r.name}).then((re)=>{
           res.status(200).send(re)
       })
  }).catch((e)=>{
      res.status(500).send('Error Occured !!!')
  })

})









module.exports = router