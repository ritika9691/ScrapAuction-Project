import './Contact.css';
function Contact() {
    return (          
<>
  <div class="page-section">
      <div class="container">
        <div class="text-center">
          <div class="subhead">Contact Us</div>
          <h2 class="title-section">The Expert Team on <h2 className='title-section fg-primary'>ScrapAuction</h2></h2>
        </div>

        <div class="owl-carousel team-carousel mt-5 row"  >
          <div class="team-wrap col-sm-4">
            <div class="team-profile">
              <img src="../assets/img/team_12.jpg" alt=""  />
            </div>
            <div class="team-content">
              <h5>John Wan
              </h5>
              <div class="text-sm fg-grey">Chief Technology Officer</div>

              <div class="social-button">
                <a ><span class="mai-logo-facebook-messenger"></span></a>
                <a ><span class="mai-call"></span></a>
                <a ><span class="mai-mail"></span></a>
              </div>
            </div>
          </div>

          <div class="team-wrap col-sm-4">
            <div class="team-profile">
              <img src="../assets/img/team_2.jpg" alt="" />
            </div>
            <div class="team-content">
              <h5>Sarah Johanson</h5>
              <div class="text-sm fg-grey">Chief Executive Officer</div>

              <div class="social-button">
                <a><span class="mai-logo-facebook-messenger"></span></a>
                <a><span class="mai-call"></span></a>
                <a><span class="mai-mail"></span></a>
              </div>
            </div>
          </div>

          <div class="team-wrap col-sm-4">
            <div class="team-profile">
              <img src="../assets/img/team_3.jpg" alt="" />
            </div>
            <div class="team-content">
              <h5>Anna Anderson</h5>
              <div class="text-sm fg-grey">Product Manager</div>

              <div class="social-button">
                <a><span class="mai-logo-facebook-messenger"></span></a>
                <a><span class="mai-call"></span></a>
                <a><span class="mai-mail"></span></a>
              </div>
            </div>
          </div>

        </div>
      </div> 
    </div> 
    </>
    )
}
export default Contact;
    
