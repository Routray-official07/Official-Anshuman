import React from 'react'
import './about.css'
import theme_patten from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.jpg'

const About = () => {
  return (
    <div id='about' className="about">
        <div className="about-title">
            <h1>About me</h1>
            <img src={theme_patten} alt="" />
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={profile_img} height={480} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>I'm a Front-End Developer and UI/UX Designer from Odisha, India, passionate about creating responsive and user-friendly websites. I specialize in HTML, CSS, JavaScript, and modern frameworks.</p>
                    <p>
                        I focus on blending visual design with usability to build interfaces that feel intuitive and engaging.
                    </p>
                </div>
                <div className="about-skills">
                    <div className="about-skill">
                        <p>HTML & CSS</p><hr style={{width: "80%"}} />
                    </div>
                    <div className="about-skill">
                        <p>React.js</p><hr style={{width: "50%"}} />
                    </div>
                    <div className="about-skill">
                        <p>UI/UX</p><hr style={{width: "70%"}} />
                    </div>
                    <div className="about-skill">
                        <p>Javascript</p><hr style={{width: "40%"}} />
                    </div>
                </div>
            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>3+</h1>
                <p>YEARS OF EXPERIENCE</p>
            </div>
            <hr />
             <div className="about-achievement">
                <h1>20+</h1>
                <p>PROJECTS COMPLETED</p>
            </div>
            <hr />
             <div className="about-achievement">
                <h1>15+</h1>
                <p>HAPPY CLIENTS</p>
            </div>
        </div>
    </div>
  )
}

export default About
