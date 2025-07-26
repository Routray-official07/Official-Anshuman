import React from 'react'
import './hero.css'
import profile_img from '../../assets/profile_img.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className="hero">
        <img src={profile_img} alt="" />
        <h1><span>I'm Anshuman Routray,</span> Fontend developer based in India.</h1>
        <p>I'm a Front-End Developer and UI/UX Designer from Odisha, India, passionate about crafting clean, responsive interfaces and intuitive user experiences.</p>
        <div className="hero-action">
            <button className="hero-connect"><AnchorLink  className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></button>
            <button className="hero-resume">My Resume</button>
        </div>
    </div>
  )
}

export default Hero
