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

    <div className="container-form">
        <form action="action_page.php">
      
          <label for="fname">First Name</label>
          <input type="text" id="fname" name="firstname" placeholder="Your name.." />
      
          <label for="lname">Last Name</label>
          <input type="text" id="lname" name="lastname" placeholder="Your last name.." />
      
          <label for="subject">Subject</label>
          <textarea id="subject" name="subject" placeholder="Write something.." style={{height:"200px"}}></textarea>
      
          <input type="button" value="Submit" /><button>Submit</button>
      
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;