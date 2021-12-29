import { Link } from "react-router-dom"


import React, {useEffect,useState} from 'react'

function Userlist() {

const [users,setUsers] = useState([])
useEffect(async() => {
try {
    let list = await fetch("https://61cae4ef194ffe0017788a0d.mockapi.io/api/users");
let userData = await list.json()
setUsers(userData)
} catch (error) {
    console.log(error);
}


},[])
    

    return (
        <> <div className="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 className="h3 mb-0 text-gray-800">Userlist</h1>
            <Link to="/usercreate" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                className="fas fa-download fa-sm text-white-50"></i> CreateUser</Link>
                
        </div>
            {/* <div className="row">
                
            </div> */}
             <div className="card shadow mb-4">
            <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">DataTables Example</h6>
            </div>
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellspacing="10">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Position</th>
                                <th>Office</th>
                                <th>Age</th>
                                <th>Start date</th>
                                <th>Salary</th>
                                <th>Options</th>
                            </tr>
                        </thead>
                    
                        <tbody>
                            {
                                users.map((user,index) => {
                                    return <tr key={index}>
                                        <td>{user.name}</td>
                                        <td>{user.position}</td>
                                        <td>{user.office}</td>
                                        <td>{user.age}</td>
                                        <td>{user.date}</td>
                                        <td>{user.salary}</td>
                                        <td>

                                            <Link to={`/useredit/${user.id}`}><button className="btn btn-primary btn-sm ml-2">Edit</button></Link>
                                           <Link to={`/userdelete/${user.id}`}><button className="btn btn-danger btn-sm ml-3">Delete</button></Link>
                                        </td>
                                    </tr>
                                })

                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        </>)
}

export default Userlist