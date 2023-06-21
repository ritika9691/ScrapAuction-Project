
import { useState } from 'react';
import axios from 'axios';
import { _apiurluser } from '../APIurls.js';

function Register() {
  const [output, setOuput] = useState();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [mobile, setMobile] = useState();
  const [address, setAddress] = useState();
  const [city, setCity] = useState();
  const [gender, setGender] = useState();


  const handleSubmit = (evt) => {
    evt.preventDefault();

    
    var userDetails = { name: name, email: email, password: password, mobile: mobile, address: address, city: city, gender: gender }
    axios.post(_apiurluser + "save", userDetails).then((result) => {
      setOuput('Data inserted sucecfully......')
    }).catch((errr) => {
      console.log(errr);
    })
    alert('Form submited successfully......')
  }


  return (
    <>
    <div className='text-center'>
     <h3 class="title-section ">Register <span class="fg-primary">Now </span></h3>
      
     </div>
     <p>{output}</p>
      <form class="row g-3 mt-2 frm container-fluid shadow-lg p-3 mb-5 bg-body rounded w-75 " style={{"marginLeft":"175px"}}>
        <div class="col-md-6 mt-4">
          <label for="inputEmail4" class="form-label" >Name</label>
          <input type="text" class="form-control" value={name} onChange={e => setName(e.target.value)} placeholder='Enter Your Name' />
        </div>
        <div class="col-md-6 mt-4 ">

          <label for="inputEmail4" class="form-label">Email</label>
          <input type="email" class="form-control" value={email} onChange={e => setEmail(e.target.value)} placeholder='Enter Your Email Address' />
        </div>
        <div class="col-md-6 mt-4">
          <label for="inputPassword4" class="form-label">Mobile</label>
          <input type="text" class="form-control" value={mobile} onChange={e => setMobile(e.target.value)} placeholder='Enter Your Mobile Number' />
        </div>

        <div class="col-md-6 mt-4">
          <label for="inputPassword4" class="form-label">Password</label>
          <input type="password" class="form-control" value={password} onChange={e => setPassword(e.target.value)} placeholder='Enter Your Password' />
        </div>
        <div class="col-12 mt-4">
          <label for="inputAddress" class="form-label">Address</label>
          <textarea type="text" class="form-control" value={address} onChange={e => setAddress(e.target.value)} placeholder="Enter Address" />
        </div>
        
        <div class="col-md-6 mt-4">
          <label for="inputState" class="form-label">City  </label> <br/>
          <select  style={{"width":"300px","height":"40px"}} value={city} onChange={e => setCity(e.target.value)} class="form-select selectBorder">
            <option selected>Choose City</option>
            <option >Indore</option>
            <option >Bhopal</option>
            <option >Mumbai</option>
            <option >Pune</option>
            <option>Ujjain</option>
          </select>
        </div>
        <div class="col-md-6 mt-4 ">
          <label for="Gender" class="form-label" >Gender</label>
          <br />
          Male &nbsp;<input type="radio" class='mt-3' name='gender' onChange={e => setGender(e.target.value)} value='male' /> &nbsp;
          Female &nbsp;<input type="radio" onChange={e => setGender(e.target.value)} name='gender' value='female' />
        </div>
        <div class="col-12 mt-4 mb-4">
          <button type="button" onClick={handleSubmit} class="btn btn-primary float-right">Register</button>
        </div>
      </form>
      {/* <div style={{"width":"200px","height":"20px","color":"blue",'backgroundColor':'teal'}}>{output}</div> */}

    </>
  )
}
export default Register;