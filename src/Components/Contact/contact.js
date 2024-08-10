import React, { useRef } from 'react';
import './contact.css';
import Linkedin from '../../assets/linkedin.png';
import Github from '../../assets/github-logo.png';
import Leetcode from '../../assets/leetcode.png';
import emailjs from '@emailjs/browser';


const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_uvvscek', 'template_1qzhqa8', form.current, 'Q5Sywf3O1N_nygewk'
      )
      .then(
        () => {
          console.log('SUCCESS!');
          e.target.reset();
          alert("Email Sent !")
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <section id='contactPage'>
     <div id='Contact'>
        <h1 className='contactPageTitle'>Contact Me</h1>
        <span className='contactDesc'>Feel Free to Contact. Just email me or fill your details in the form and send , i will reply you soon as possible.</span>
        <form className='contactForm' ref={form} onSubmit={sendEmail}>
          <input type='text' className='name' placeholder='Your Name'name='your_name'/>
          <input type='email' className='email' placeholder='Your Email'name='your_email'/>
          <textarea  className='msg' name='message' rows='5' placeholder='Your Message'></textarea>
          <button type='submit' value='Send' className='submitBtn'>Submit</button>
        
        <div className='links'>
        <a href="https://www.linkedin.com/in/sana-azeem-629967250/" class="social-link">
          <img src={Linkedin} alt="Linkedin" className='link'/>
          </a>
          <a href="https://github.com/SanaAzeem512" class="social-link">
          <img src={Github} alt="Github" className='link'/>
          </a> 
          <a href=" https://leetcode.com/u/Sanaazeem/ " class="social-link">
          <img src={Leetcode} alt="Leetcode" className='link'/>
          </a>
        </div>
        </form>
      </div>
    </section>
  )
}

export default Contact