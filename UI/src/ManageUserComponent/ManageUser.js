// import './Manageusers.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { _apiurluser } from '../APIurls';
import { useNavigate } from 'react-router-dom';
function Manageusers() {
    // const navigate= useNavigate()
    const [output, setOuput] = useState();

    const [userDetails, setUserDetails] = useState([]);
    useEffect(() => {
        axios.get(_apiurluser + "fetch?role=user").then((response) => {
            setUserDetails(response.data);
        }).catch((err) => {
            console.log(err);
        });
    });
    const navigate = useNavigate();

    const managemyuser = (_id, s,email) => {
        if (s == "block") {
            let condition = { "condition_obj": { "_id": _id }, "content_obj": { "status": 0 } }
            axios.patch(_apiurluser + "update", condition).then((response) => {
                setOuput("Blocked User :- "+email)
                navigate("/manageuser");
            }).catch((err) => {
                console.log(err);
            });
        }
        else if (s == "verify") {
            let condition = { "condition_obj": { "_id": _id }, "content_obj": { "status": 1 } }

            axios.patch(_apiurluser + "update", condition).then((response) => {
                setOuput("Verified User :- "+email)

                navigate("/manageuser");
            }).catch((err) => {
                console.log(err);
            });
        }
        else {
            let condition = { "data": { "_id": _id } }
            axios.delete(_apiurluser + "delete", condition).then((response) => {
                setOuput("Deleted User :- "+email)

                navigate("/manageuser");
            }).catch((err) => {
                console.log(err);
            });
        }
    }

    return (
        <div>
            {/* About Start */}
            <div class="container-xxl py-5">
                <div class="container">
                    <div class="row g-5 align-items-center">
                        <div class="col-lg-12">
                            <h3 class="mb-4">View and <span class="text-primary ">Manage Users</span><h5 className='btn btn-secondary' style={{ 'color': 'white' ,'float':'right','fontWeight':'15px'}}>{output}</h5></h3>
                            
                            <table class="table  table-bordered" cellspacing="5" cellpadding="5">
                                <tr>
                                    <th>RegID</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Mobile</th>
                                    <th>Address</th>
                                    <th>City</th>
                                    <th>Gender</th>
                                    <th>Info</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>

                                {
                                    // if()
                                    userDetails.map((row) => (
                                        <tr>
                                            <td>{row._id}</td>
                                            <td>{row.name}</td>
                                            <td>{row.email}</td>
                                            <td>{row.mobile}</td>
                                            <td>{row.address}</td>
                                            <td>{row.city}</td>
                                            <td>{row.gender}</td>
                                            <td>{row.info}</td>
                                            <td>
                                                {/* {row.status} */}
                                                {row.status == 1 &&
                                                    <a class="btn btn-primary" onClick={() => { managemyuser(row._id, "block",row.email )}} >Block </a>
                                                }
                                                {row.status == 0 &&
                                                    <a class="btn btn-secondary" onClick={() => { managemyuser(row._id, "verify",row.email) }}>Verify</a>
                                                }

                                            </td>
                                            <td>
                                                {
                                                    <a class="btn btn-danger" onClick={() => { managemyuser(row._id, "delete",row.email) }} >Delete</a>
                                                }
                                            </td>
                                        </tr>
                                    ))
                                }

                            </table>

                            <br /><br /><br />
                        </div>

                    </div>
                </div>
            </div>
            {/* About End */}
        </div>

    );
}

export default Manageusers;
