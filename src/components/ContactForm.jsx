import React from "react";
import { useRef } from "react";
import emailjs from '@emailjs/browser';
import "./contactform.css";
const ContactForm=()=>{
    const form=useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_rqrnxen', 'template_zy1hime', form.current, 'RkARlZhP_PKyo2L_3')
          .then((result) => {
            console.log(result.text)
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
      };

    return(

        <div className="formbox">
        <form className="Contactform" ref={form} onSubmit={sendEmail}>
<input type="text" placeholder="Enter your name" name="user_name" autoComplete="off" required/>
<input type="number" placeholder="Enter your number" name="number" autoComplete="off" required/>
<input type="Email" placeholder="Enter your gmail" name="user_email" autoComplete="off" required/>
<textarea type="text" placeholder="Type Message..?" name="message" autoComplete="off" required/>
<p id="show"></p>
<input type="submit" value="send" className="button"/>
        </form></div>
    );
}
export default ContactForm;