import React from "react";
import Footer from "../components/footer"
import Header from "../components/header"

function Contact() {
  return (
    <div>
    <Header />
    <br />
    <h3>It would be great to hear from you!  Feel free to reach out!</h3>
    <h4>Phone Number : 425-457-1617</h4>
    <h4><a href="mailto:dobbe2@gmail.com" className="personal-link">Email Address : dobbe2@gmail.com</a></h4>
    <br />

    <div className="container-form" style={{width:"100%", height:"900px"}}>
    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSe_J3KQrj_nF6-NuLuGiamKNhVelGkvAK3NAHXofC3kk4aYlg/viewform?embedded=true" width="100%" height="100%" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
        {/* <form action="action_page.php">
      
          <label for="fname">First Name</label>
          <input type="text" id="fname" name="firstname" placeholder="Your name.." />
      
          <label for="lname">Last Name</label>
          <input type="text" id="lname" name="lastname" placeholder="Your last name.." />
      
          <label for="subject">Subject</label>
          <textarea id="subject" name="subject" placeholder="Write something.." style={{height:"200px"}}></textarea>
      
          <input type="button" value="Submit" /><button>Submit</button>
      
        </form> */}
      </div>
      <Footer />
    </div>
  );
}

export default Contact;