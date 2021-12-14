import React from 'react';
import ProfileImage from './Pikachu.jpg';
import './AboutMe.css'
export const AboutMe = () =>{
    return(
        <div className="Section">
            <img src={ProfileImage} className="ProfileImg"/>
            <div className="textSection">
                <span className="Name">Navdeep Kaur</span><br/>
                <p className="Desc">A Software Engineer with 2+ years of Experience in .net technologies and in web development!!</p>
            </div>
            <div className="mcdaSection">
                <span className="course">Why MCDA Course?</span><br/>
                <p>Mcda Course is very popular. I choose this Course because of the diversity in the course.</p>
            </div>
        </div>
    )
}