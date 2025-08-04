
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import type { Student } from '../utils/data';
import { useEffect, useMemo } from 'react';

interface Props{
 students: Student[]

}
export const StudentTable = ({students}: Props) => {
  useEffect(() => {
    if(students.length === 5){
   console.log("call in useEffect")
    alert("max limit reached")
  }
  },
  [students])

  const studentsWithScholarship = useMemo(() => {
     return students.map((s) => {
    let result = false;
    for(let i= 0; i<= 100000; i++){
     result = Math.random() > 0.5
    }
    return{
      ...s, eligible: result
    }
  });
  },[students]) 
 
    return(
      <TableContainer component = {Paper}>
      <Table size = "small" sx ={{border: 2, background: "#368776ff"}}>
       <TableHead>
        <TableRow sx = {{border: 3, background:"#b6a9a9ff"}}>
          <TableCell sx={{fontSize: 20}}>Full Name</TableCell>
          <TableCell sx={{fontSize: 20}}>Age</TableCell>
          <TableCell sx={{fontSize: 20}}>Email</TableCell>
          <TableCell sx={{fontSize: 20}}>Department</TableCell>
          <TableCell sx={{fontSize: 20}}>Scholarship</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
       {students.map((item, index) => {
          return(
            <tr>
        <TableCell>{item.fullName}</TableCell>
        <TableCell>{item.age}</TableCell>
        <TableCell>{item.email}</TableCell>
        <TableCell>{item.department}</TableCell>
        <TableCell>{studentsWithScholarship[index].eligible ? "Yes": "No"}</TableCell>
      </tr>
          );
      })}
      
      </TableBody>
    </Table>
    </TableContainer>
    );
};