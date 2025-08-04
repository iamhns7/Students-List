
import { Button, Paper, TextField } from "@mui/material"
import { useEffect, useState, type ChangeEvent } from "react"
import { type Student } from "../utils/data";
import { createStudent } from "../api/students";

interface Props {
  students: Student[],
  setStudents: React.Dispatch<React.SetStateAction<Student[]>>
}
const initialState ={ id: 19, fullName: "", age: "", email: "", department: "", year: ""}
export const AddStudent = ({ setStudents, students }: Props) => {
  const [formData, setFormData] = useState({ id: 19, fullName: "", age: "", email: "", department: "", year: " "
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({...formData,[e.target.name]:e.target.value
    });
  };

  const handleSubmit = async () => {
    console.log(formData)
    const data = await createStudent(formData)
    setStudents([...students, data])
    setFormData(initialState)
  
    setFormData({id: formData.id, fullName: "", age: "", email: "", department: "", year: ""
    });
  };

  
  useEffect(() => {
    console.log("Firing useEffect")
    if (formData.fullName === "Admin") {
      alert("You entered a name that should not be stored in the database")
    }
  }, [formData.fullName]);
  

  return (
    <Paper sx={{
      width: 200,
      padding: 2,
      marginTop: "10px",
      gap: 1,
      display: "flex",
      flexDirection: "column"
    }}>
      <TextField
        onChange={handleChange}
        value={formData.fullName}
        id="outlined-basic"
        label="Full Name"
        name="fullName"
        variant="outlined"
      />
      <TextField
        onChange={handleChange}
        value={formData.age}
        id="outlined-basic"
        label="Age"
        name="age"
        type="number"
        variant="outlined"
      />
      <TextField
        onChange={handleChange}
        value={formData.email}
        id="outlined-basic"
        label="Email"
        name="email"
        variant="outlined"
      />
      <TextField
        onChange={handleChange}
        value={formData.department}
        id="outlined-basic"
        label="Department"
        name="department"
        variant="outlined"
      />
      <TextField
        onChange={handleChange}
        value={formData.year}
        id="outlined-basic"
        label="Year"
        name="year"
        variant="outlined"
      />
      <Button variant="contained" onClick={handleSubmit}>
        Add Student
      </Button>
    </Paper>
  )
}
