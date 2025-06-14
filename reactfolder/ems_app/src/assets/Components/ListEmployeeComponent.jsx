// import React from 'react'
import { useState,useEffect } from 'react'
import { deleteEmployee, listEmployees } from '../../Services/EmployeeService';
import { useNavigate } from 'react-router-dom';
const ListEmployeeComponent = () => {
    
    const[employees,setEmployees]=useState([]);
    
    const navigator=useNavigate();
    useEffect(()=> {
        getAllEmployees();
    },[])

    function getAllEmployees(){
         
        listEmployees().then((response) => {
            setEmployees(response.data);
        }).catch(error =>{
            console.error(error);
        })
    }

    function addNewEmployee(){
       navigator('/add-employee')
    }
    function updateEmployee(id){
        navigator(`/edit-employee/${id}`)
    }
    function removeEmployee(id){
        deleteEmployee(id).then((response)=>
        {
            getAllEmployees();

        }).catch((error)=>
        {
            console.error(error);
        })
    }

  return (
    <div className='container'>
        <h2 className='text-center fw-bold'>List of Employees</h2>
        <button className="btn btn-primary btn-lg mb-2 active" onClick={addNewEmployee}>Add Employee</button>
        <table className='table table-striped table-bordered'>
            <thead>
                <tr>
                    <th>Employee id</th>
                    <th>Employee First Name</th>
                    <th>Employee Last Name</th>
                    <th>Employee email</th>
                    <th className='text-center'>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    employees.map((employee)=>
                    <tr key={employee.id}>
                        <td>{employee.id}</td>
                        <td>{employee.firstName}</td>
                        <td>{employee.lastName}</td>
                        <td>{employee.email}</td>
                        <td className='text-center'>
                            <button className='btn btn-info' onClick={()=> updateEmployee(employee.id)}>Update</button>
                            <button className='btn btn-danger ms-2' onClick={()=> removeEmployee(employee.id)}>Delete</button></td>
                    </tr>)
                }
                
            </tbody>
        </table>
    </div>
  )
}

export default ListEmployeeComponent