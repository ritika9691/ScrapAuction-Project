import { useEffect, useState } from 'react';
import './Topbar.css';
function Topbar() {
  const [TopbarContent, setTopbarContent] = useState();

  useEffect(()=>{
  if (localStorage.getItem("role") == "user") {
    setTopbarContent(<div class="top-bar">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-8">
            <div class="d-inline-block">
              <span class="mai-mail fg-primary"></span> <a>Welcome : {localStorage.getItem('email')} </a>
            </div>
            <div class="d-inline-block ml-2">
              <span class="mai-call fg-primary"></span> <a>{localStorage.getItem('mobile')}</a>
            </div>
          </div>
         
        </div>
      </div>
    </div>)
  }
  else if (localStorage.getItem("role") == "admin") {
    setTopbarContent(<div class="top-bar">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-8">
            <div class="d-inline-block">
              <span class="mai-mail fg-primary"></span> <a>Welcome : {localStorage.getItem('email')}</a>
            </div>
            <div class="d-inline-block ml-2">
              <span class="mai-call fg-primary"></span> <a>{localStorage.getItem('mobile')}</a>
            </div>
          </div>
         
        </div>
      </div>
    </div>)
  }
  else {
    setTopbarContent(<div class="top-bar">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-md-8">
          <div class="d-inline-block">
            <span class="mai-mail fg-primary"></span> <a>ScrapAuction@mail.com</a>
          </div>
          <div class="d-inline-block ml-2">
            <span class="mai-call fg-primary"></span> <a>+2585685785</a>
          </div>
        </div>
        <div class="col-md-4 text-right d-none d-md-block">
          <div class="social-mini-button">
            <a><span class="mai-logo-facebook-f"></span></a>
            <a><span class="mai-logo-twitter"></span></a>
            <a><span class="mai-logo-youtube"></span></a>
            <a><span class="mai-logo-linkedin"></span></a>
          </div>
        </div>
      </div>
    </div>
  </div>);
  }
})
return (
  <>
    {TopbarContent}
    {/* <h1>hii</h1> */}
    
  </>


)
}
export default Topbar;