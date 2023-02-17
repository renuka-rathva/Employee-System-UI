import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";
const AddEmployee = () => {

    const [employee,setEmployee] = useState({
        "id":"",
        "firstName":"",
        "lastName":"",
        "emailId":""
    });
    const nevigate =  useNavigate()
    const handleChange=(e)=>{
        const value = e.target.value;
        setEmployee({...employee,[e.target.name]:value});
    }
    const saveEmployee=(e)=>{
        e.preventDefault();
        EmployeeService.saveEmployee(employee).then((response)=>{
            console.log(response)
            nevigate("/employeeList")
        }).catch((err)=>{
            console.log(err)
        });
    }
    const reset=(e)=>{
      e.preventDefault();
      setEmployee({
        "id":"",
        "firstName":"",
        "lastName":"",
        "emailId":""
    })
  }
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Add Employee</h5>
             
              <div className="mb-3">
                <label className="form-label">First Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="firstName"
                  value={employee.firstName}
                  onChange={(e)=>handleChange(e)}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="lastName"
                  value={employee.lastName}
                  onChange={(e)=>handleChange(e)}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="emailId"
                  value={employee.emailId}
                  onChange={(e)=>handleChange(e)}
                />
              </div>
              <button onClick={saveEmployee} type="button" className="btn btn-primary me-2">
                Add
              </button>
              <button onClick={reset}  type="button" className="btn btn-danger">
                Clear
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEmployee;
