import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import EmployeeService from '../services/EmployeeService';

const UpdateEmployee = () => {
    const {id} = useParams();
    
    const [employee,setEmployee] = useState({
        "id":id,
        "firstName":"",
        "lastName":"",
        "emailId":""
    });
    const nevigate =  useNavigate()
    const handleChange=(e)=>{
        const value = e.target.value;
        setEmployee({...employee,[e.target.name]:value});

        console.log(employee);
    }
  useEffect(() => {
  const fetchData = async()=>{
    debugger
    try {
        const response = await EmployeeService.getEmployeeById(id);
        setEmployee(response.data);
       
    } catch (error) {
        console.log(error);
    }
  };
  fetchData();
  }, [])
  
    const updateEmployee =(e)=>{
        debugger
        e.preventDefault();
        EmployeeService.updateEmployee(employee,id)
        .then((response)=>{
            console.log(response);
            nevigate("/employeeList");
        }).catch((error)=>{
            console.log(error);
        })
        
    }
   
  return (
    <div className="container">
    <div className="row justify-content-center">
      <div className="col-6">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Update Employee</h5>
           
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
            <button onClick={updateEmployee} className="btn btn-primary me-2">
              Update
            </button>
            <button  onClick={()=> nevigate("/employeeList")}  className="btn btn-danger">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default UpdateEmployee