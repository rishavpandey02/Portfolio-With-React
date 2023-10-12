import React, { useRef } from 'react'
import './contact.css'
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_u5v46ec', 'template_tour4fh', form.current, 'ej9sAcRQwzIBqgDjVSOS_')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <section id="contact">
        <h2 class="contactTitle">Contact Me</h2>
        <span class="contactText1">Please fill out the form below to discuss any enquires.</span>
        <form class="contactForm" ref={form} onSubmit={sendEmail}>
            <input type="text" class="name" placeholder="Your Name" name="your_name" />
            <input type="text" class="email" placeholder="Your Email" name="your_email" />
            <textarea name="message" rows="5" placeholder="Your Message" class="msg" />
            <button class="submitBtn" type="submit" value="send">Submit</button>
        </form>
    </section>
  )
}

export default Contact