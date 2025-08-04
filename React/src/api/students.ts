import type { Student } from "../utils/data";



export const fetchStudents = async () => {
    const response = await fetch('http://localhost:5000/students');
      return await response.json();
   
}
export const createStudent = async (data: Student) =>{
    const response = await fetch("http://localhost:5000/students",{
       method: "POST",
       body: JSON.stringify(data),
       headers: {
        "Content-Type": "application/json"
    }
    })
          return await response.json();
      
}