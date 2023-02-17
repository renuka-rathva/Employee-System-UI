import React from "react";
import { useNavigate } from "react-router-dom";

const Employee = ({employee,deleteEmployee}) => {
const navigate =  useNavigate();
const editEmployee = (e,id)=>{
    e.preventDefault();
    navigate(`/editEmployee/${id}`);
}

  return (
      <tr key={employee.id}>
        <td>{employee.firstName}</td>
        <td>{employee.lastName}</td>
        <td>{employee.emailId}</td>
        <td>
          <a onClick={(e,id)=>editEmployee(e,employee.id)} className="btn btn-sm btn-primary me-3">
            Edit
          </a>
          <a onClick={(e,id)=>deleteEmployee(e,employee.id)} className="btn btn-sm btn-danger">
            Delete
          </a>
        </td>
      </tr>
   
  );
};

export default Employee;
