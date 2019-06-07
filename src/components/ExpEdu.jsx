import React from 'react';
import { Row } from 'react-bootstrap';
import './ExpEdu.css';


const ExpEdu = () => {
    return (
        <div className='container-fluid'>
            <Row >

                <div className='col-xs-12 col-sm-12 col-m-6 col-lg-6 colorLeft'>
                    <div className='vertical-edu'>
                        education
                    </div>
                    <h2 className='boldEdu'>{'\\'}education</h2>
                    <div className='centeredRandom'>

                        <div className="firstEduc">
                            <p className='educ'>august 2008 - june 2010</p>
                            <p className='educ'>Master 2 (Bac + 7)</p>
                            <p className='educ'>Product and system design</p>
                            <p className='educ'>NTNU Ålesund, Norway</p>
                        </div>
                        <div className="secondEduc">
                            <p className='educ'>october 2003 - june 2008</p>
                            <p className='educ'>Bachelor's degree (Bac + 7)</p>
                            <p className='educ'>Naval equipments and systems</p>
                            <p className='educ'>Ovidius University of Constanța, Romania</p>
                        </div>
                    </div>



                </div>
                <div className='col-xs-12 col-sm-12 col-m-6 col-lg-6 colorRight'>

                    <h2 className='boldExp'>{'\\'}experience</h2>
                    <div className='centeredSelect'>
                        <div className="firstExperience">
                            <p className='educ'>september 2012 - august 2018 </p>
                            <p className='educ'>Naval Engineer</p>
                            <p className='educ'>OCEA, Les Sables d'Olonne, France</p>
                        </div>
                        <div className="secondExperience">
                            <p className='educ'>june 2010 - august 2012</p>
                            <p className='educ'>Naval Engineer</p>
                            <p className='educ'>(STX) VARD, Tulcea, Romania</p>
                        </div>
                    </div>
                    <div className='vertical-exp'>
                        experience
                </div>
                </div>
            </Row>
        </div>
    )
}

export default ExpEdu;