import { useEffect, useState } from "react";

import axios from 'axios';
import { _apiurluser } from '../APIurls.js';
// import { useNavigate } from "react-router-dom";

function UpdateProfile() {
    const [email, setEmail] = useState();
    const [name, setName] = useState();
    const [address, setAddress] = useState();
    const [mobile, setMobile] = useState();
    const [city, setCity] = useState();
    const [gender, setGender] = useState();

    const [output, setOuput] = useState();

    // const navigate = useNavigate();


    useEffect(() => {
        axios.get(_apiurluser + "fetch?email="+localStorage.getItem('email')).then((result) => {
            setEmail(result.data[0].email)
            setName(result.data[0].name)
            setAddress(result.data[0].address)
            setMobile(result.data[0].mobile)
            setCity(result.data[0].city)
        })
    }, [])


    const handlesubmit = (evt) => {
        evt.preventDefault();
        var conditon = { 'condition_obj': { '_id': localStorage.getItem('_id') }, 'content_obj': { name: name, email: email, mobile: mobile, address: address, city: city, gender: gender } }
        axios.patch(_apiurluser + "update", conditon).then((result) => {
            setOuput('Profile Update Successfully..')
        })
        // setOuput('Data Update succecfully ')

    }



    return (
        <>


            <form class="row g-3 border w-50 mb-5 mt-5 shadow-lg p-3 mb-5 bg-body rounded" style={{ "marginLeft": "350px", "height": "500px" }}>
                <h4 class="title-section">Update<span class="fg-primary">Your </span> Profile</h4>

                <h6 style={{ 'color': 'blue' }}>{output}</h6>

                <div class="row ms-1">
                    <div class="col-md-6">
                        <label class="form-label"> Email</label>
                        <input type="email" class="form-control" readOnly onChange={e => setEmail(e.target.value)} value={email} />
                    </div>
                    <div class="col-md-6">
                        <label class="form-label">Name</label>
                        <input type="text" class="form-control" onChange={e => setName(e.target.value)} value={name} />
                    </div>
                </div>
                <div class="row  ms-1">

                    <div class="col-md-6">
                        <label class="form-label">Contact</label>
                        <input type="email" class="form-control" onChange={e => setMobile(e.target.value)} value={mobile} />
                    </div>
                    <div class="col-md-6">
                        <label class="form-label">Address</label>
                        <input type="text" class="form-control" onChange={e => setAddress(e.target.value)} value={address} />
                    </div>
                </div>
                <div class="row  ms-1">
                    <div class="col-md-6 ">
                        <label for="inputState" class="form-label">City  </label> <br />
                        <select value={city} onChange={e => setCity(e.target.value)} class="form-control" >
                            <option >Choose City</option>
                            <option >Indore</option>
                            <option >Bhopal</option>
                            <option >Mumbai</option>
                            <option >Pune</option>
                            <option>Ujjain</option>
                        </select>
                    </div>
                    <div class="col-md-6  ">
                        <label for="Gender" class="form-label" >Gender</label>
                        <br />
                        Male &nbsp;<input type="radio" class='mt-3' name='gender' checked onChange={e => setGender(e.target.value)} value='male' /> &nbsp;
                        Female &nbsp;<input type="radio" onChange={e => setGender(e.target.value)} name='gender' value='female' />
                    </div>
                </div>

                <div class="col-12">
                    <center>
                        <button type="button" class="btn btn-primary " onClick={handlesubmit}>Update Profile</button>
                    </center>
                </div>
            </form>
        </>
    )
}

export default UpdateProfile;