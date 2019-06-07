import React from 'react';
import './About.css';
import ProfilePic from './images/imgonline.png';
import { Row } from 'react-bootstrap';

const About = () => {
    return (
        <div className='container-fluid about'>
            <Row className='col-xs-12 col-sm-6 col-m-6 col-lg-6'>
                <div className='imageName'>
                    <img src={ProfilePic} alt='my profile' />
                    <div className='nameProfile'>
                        <h3 className='name'>Florin RINJA</h3>
                        <h4 className='fullstack'>Fullstack web developer</h4>
                        <h4 className='fullstackAdress'>NANTES · 0680854259 · florinrinja@outlook.com</h4>
                    </div>
                </div>
                <div className='textMotivation'>
                        <p className='motivText'> 
                        <strong className='strongMotiv'>{'//'}</strong> in professional reconversion after 10 years of experience as a naval engineer
                            <br></br>
                            <br></br>
                        <strong className='strongMotiv'>{'//'}</strong> autodidact, very motivated by new technologies, i embarked a coding school adventure - Wild Code School by it's name 
                        </p>
                </div>
                <div className='vertical-about'>
                    about
                </div>
            </Row>
            <Row className='col-xs-12 col-sm-6 col-m-6 col-lg-6'>
                <h2 className='boldAbout'>about</h2>
            </Row>
        </div>
    )
}
export default About;