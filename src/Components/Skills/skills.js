import React from 'react';
import './skills.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';

const Skills = () => {
  return (
    <section id='skills'>
      <span className='skillTitle'>What I do</span>
      <span className='skillDesc'>I am a skilled and passionate web designer and full stack developer with extensive experience in both frontend and backend technologies. I specialize in creating responsive and visually appealing web interfaces while building robust and scalable backend systems.</span>
      <div className='skillBars'>
      <div className='skillBar'>
         <img src={WebDesign} alt='WebDesign' className='skillsBarImg' />
         <div className='skillBarText'>
            <h2>Web Development</h2>
            <p>I specialize in creating dynamic and responsive web solutions that are tailored to your specific requirements. From sophisticated front-end designs to powerful back-end functionality, I transform your ideas into seamless, stunning web experiences. Elevate your online presence with my expert web development services and make a lasting impression.</p>
         </div>
      </div>
      <div className='skillBar'>
         <img src={AppDesign} alt='AppDesign' className='skillsBarImg' />
         <div className='skillBarText'>
            <h2>App Development</h2>
            <p>I specialize in custom development across a range of platforms, including iOS, Android, and cross-platform solutions. By coding intuitive and feature-rich applications, I create solutions that truly resonate with your audience. Let’s turn your ideas into accessible, impactful experiences for users worldwide.</p>
         </div>
      </div>
      <div className='skillBar'>
         <img src={UIDesign} alt='UIDesign' className='skillsBarImg' />
         <div className='skillBarText'>
            <h2>Content Writing</h2>
            <p>Elevate your brand with captivating and SEO-optimized content. From engaging blog posts to compelling website copy, I specialize in creating content that not only tells your story but also boosts your online presence. Let words work wonders for your business – let's craft a narrative that resonates.</p>
         </div>
      </div>
      </div>
    </section>
  )
}

export default Skills;
