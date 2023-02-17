import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import EmployeeService from "../services/EmployeeService";
import Employee from '../components/Employee';
const EmployeeList = () => {
  
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [employees, setEmployees] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await EmployeeService.getEmployees();
        setEmployees(response.data);
       
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  },[]);

  const deleteEmployee = (e,id)=>{
    e.preventDefault();
    EmployeeService.deleteEmployee(id).then((res)=>{
        if(employees){
            setEmployees((prevElement)=>{
                return prevElement.filter(employee => employee.id !== id);
            })
        }
    })
  }
  return (
    <>
      <div className="d-flex justify-content-center">
        <button
          className="btn btn-primary my-3"
          onClick={() => navigate("/addEmployee")}
        >
          Add Employee
        </button>
      </div>
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          {!loading && (
            <tbody>
              {employees.map((employee) => (
               <Employee employee={employee} deleteEmployee={deleteEmployee} key={employee.id}></Employee>
              ))}
            </tbody>
          )}
        </table>
      </div>
    </>
  );
};

export default EmployeeList;
