
import { useState } from "react";

import axios from 'axios';
import { _apiurluser } from '../APIurls.js';

function UpdateProfile() {
    const [oldpassword, setoldpassword] = useState()
    const [newpassword, setnewpassword] = useState()
    const [confirmpassword, setconfirmpassword] = useState()
    const [output, setOuput] = useState();


    const handlesubmit = (evt) => {
        evt.preventDefault();
        axios.get(_apiurluser + "fetch?email=" + localStorage.getItem("email") + "&password=" + oldpassword).then((response) => {
            if (newpassword == confirmpassword) {
            
                var conditon = { 'condition_obj': { '_id': localStorage.getItem("_id") }, 'content_obj': { 'password': newpassword } }
                axios.patch(_apiurluser + "update", conditon).then((result) => {

                    setOuput('Password Update Succesfully');
                    setnewpassword("");
                    setconfirmpassword("");
                    setoldpassword("");
                })

            }
            else {
                setOuput("Old & New Password Mismatch");
                setconfirmpassword("");

            }
        }).catch((error) => {
            setOuput("Invalid Old Password");
            setoldpassword("");
        })
    }
    return (
        <div>
            <form class="row g-3 border w-50 mb-5 mt-5 shadow-lg p-3 mb-5 bg-body rounded" style={{ "marginLeft": "350px", "height": "500px" }}>
                <h4 class="title-section">Update<span class="fg-primary"> Your </span> Password</h4>

                <h6 style={{ 'color': 'blue' }}>{output}</h6>

                <div class="row ms-1">
                    <div class="col-md-12">
                        <label class="form-label"> Enter Old Password</label>
                        <input type="email" class="form-control" onChange={e => setoldpassword(e.target.value)} value={oldpassword} />
                    </div>

                </div>
                <div class="row  ms-1">

                    <div class="col-md-12">
                        <label class="form-label">Enter New Password</label>
                        <input type="email" class="form-control" onChange={e => setnewpassword(e.target.value)} value={newpassword} />
                    </div>

                </div>
                <div class="row  ms-1">
                    <div class="col-md-12">
                        <label for="inputEmail4" class="form-label">Confirm New Password</label>
                        <input type="email" class="form-control" onChange={e => setconfirmpassword(e.target.value)} value={confirmpassword} />
                    </div>

                </div>

                <div class="col-12">
                    <center>
                        <button type="button" class="btn btn-primary " onClick={handlesubmit}>Update Password</button>
                    </center>
                </div>
            </form>
        </div>
    )
}

export default UpdateProfile;