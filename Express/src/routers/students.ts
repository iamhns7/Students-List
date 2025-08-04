import  express  from "express";
import { studentModel } from "../models/student";


const router = express.Router();


router.get('/',async (req, res) =>{
  const students = await studentModel.find()
  res.status(200).send(students)
  
});

router.post('/', async (req, res) => {
  const data = req.body;
  console.log({data})
  const newStudent = await studentModel.create(data)
  newStudent.save();
  res.status(201).send(newStudent);
});

router.put('/:id',async (req, res) =>{ 
    const id = req.params.id;
    const data = req.body;

 const student = await studentModel.findByIdAndUpdate(id, data, {new: true})

  if(!student){
   return res.status(404).send("Student not found")
  }
  res.send(student)
});

router.delete('/:id',async (req, res) =>{
    const id = req.params.id;
    const student = await studentModel.findByIdAndDelete(id)

    if(!student){
     return res.status(404).send("Student not found")
  }
  res.send("Okey")
  });

  export default router;
