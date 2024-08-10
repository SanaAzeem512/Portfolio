import React from 'react'
import './intro.css';
import bg from '../../assets/image.png';
import btnImg from '../../assets/hireme.png';
import { Link } from 'react-scroll';

const Intro = () => {
  return (
    <section id="intro">
    <div className='introContent'>
      <span className='hello'>Hello,</span>
      <span className='introtext'>I'm <span className='introName'>Sana Azeem</span> <br/> Full stack Developer</span>
     <p className='introPara'>Experienced full-stack developer adept in building robust,<br/> scalable web applications with modern technologies.</p>
     <Link> <button className='btn'> <img src={btnImg} alt="" className='btnImg'/>Hire me</button></Link>
     </div>
     <img src={bg} alt="profile" className='bg'/>
    </section>
  )
}

export default Intro;
