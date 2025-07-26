import React from 'react'
import './contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'
const Contact = () => {

    const [result, setResult] = React.useState("");

   const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "d4c1fb78-fcb4-4177-8a35-2507485344e1");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      alert("Form Submitted Successfully");
      event.target.reset();
    } else {
      alert("Error", data);
      setResult(data.message);
    }
  };
  return (
  <div id='contact' className="contact">
    <div className="contact-title">
        <h1>Get in Touch</h1>
        <img src={theme_pattern} alt="" />
    </div>
    <div className="contact-section">
        <div className="contact-left">
           <h1>Let's talk</h1> 
           <p>I'm currently avaliable to take on new projects, so feel free to send me a message about anything that you want me to work on.</p>
           <div className="contact-details">
            <div className="contact-detail">
                <img src={mail_icon} alt="" />
                <p>anshumanroutray64@gmail.com</p>
            </div>
             <div className="contact-detail">
               <img src={call_icon} alt="" />
               <p>+91 7978983218</p>
            </div>
             <div className="contact-detail">
                <img src={location_icon} alt="" />
                <p>Kendrapara, Odisha India</p>
            </div>

           </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
            <label htmlFor="Your Name">Your name</label>
            <input type="text" placeholder='Enter your name' name='name' required/>
            <label htmlFor="Your Email" >Your Email</label>
            <input type="email" placeholder='Enter Email' name='email'required/>
            <label htmlFor="Your message here">Your message here</label>
            <textarea name="message" id="" rows="8" placeholder='Write your message here' required></textarea>
            <button type='submit' className="contact-submit">Submit now!</button>
        </form>
    </div>
  </div>
  )
}

export default Contact
