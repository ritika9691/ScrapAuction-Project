import './Login.css';
import { useState } from "react";
import axios from "axios";
import { _apiurluser } from "../APIurls";
import { useNavigate } from 'react-router-dom';
function Login() {

  const [output, setOutput] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const navigate = useNavigate();
  const handleSubmit = (evt) => {
    evt.preventDefault();
    var userDetails = { email: email, password: password };
    axios.post(_apiurluser + "login", userDetails).then((result) => {
      if (result.data.token != "error") {
        let user = result.data.userDetails;

        localStorage.setItem('token', result.data.token);

        localStorage.setItem('_id', user._id)
        localStorage.setItem('name', user.name)
        localStorage.setItem('email', user.email)
        localStorage.setItem('mobile', user.mobile)
        localStorage.setItem('address', user.address)
        localStorage.setItem('city', user.city)
        localStorage.setItem('gender', user.gender)
        localStorage.setItem('role', user.role)
        localStorage.setItem('info', user.info)

        user.role == "user" ? navigate("/user") : navigate("/admin")

        // user.role == "admin" ? navigate("/admin") : navigate("/user");
      
      }
      else {
        setOutput('userDetails or password not correct')
        setEmail('');
        setPassword('');
      }
    }).catch((err) => {
      console.log('errror');
    })

    // alert('login succesfully')
  }


  return (
    <>
    <div class="page-section">
      <div class="container">
        <div class="row align-items-center">
          
          
          <div class="col-lg-6 py-3">
            {/* <div class="subhead">LogIn Now</div> */}
            <h2 class="title-section">LogIn <span class="fg-primary">Your </span> Account</h2>
                <h6 style={{ 'color': 'blue' }}>{output}</h6>

            <form class="ms-5 me-5 ">
        <br />
        <div class="mb-3 ">
          <label for="email" class="form-label">Email address</label>
          <input type="email" class="form-control" value={email} onChange={e => setEmail(e.target.value)} aria-describedby="emailHelp" />
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Password</label>
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} class="form-control" />
        </div>
        <button type="button" onClick={handleSubmit} class="btn btn-primary">LogIn</button>
      </form>
          </div>



          <div class="col-lg-6 py-3">
            <div class="about-img">
              <img src="../assets/img/login1.jpg" alt="" />

            </div>
          </div>
        </div>
      </div>
    </div>
      <p>{output}</p>
      

    </>
  )
}

export default Login;
