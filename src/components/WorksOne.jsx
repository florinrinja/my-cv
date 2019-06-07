import React from 'react';
import { Row } from 'react-bootstrap';
import './WorksOne.css';

const WorksOne = () => {
    return (
        <div className='container-fluid worksOne'>
            <Row className='col-xs-12 col-sm-6 col-m-6 col-lg-6'>
                <div className='vertical-work'>
                    works
                </div>
                <div className='centeredWorkOne col-md-12'>

                    <div className='meteoApp' >
                        <a className='weatherApp' href="javascript:void(0)" >
                        </a>
                    </div>

                    <div className='textDescription'>
                        <p className='appDescription'>
                        {'\\'} small weather app developped with React
                        <br></br>
                        {'\\'} it shows the weather by geolocating the device in use
                        <br></br>
                        {'\\'} and by using an APIXU API
                        <br></br>
                        </p>
                        <p className='contribText'>
                            <strong className='contribStrong'>{'//'}</strong> self-made project
                        <br></br>
                            <strong className='contribStrong'>{'//'}</strong> in about a day
                            <br></br>
                            <a className='gitLink' href='https://github.com/florinrinja/weather-app' target='_blank'  rel="noopener noreferrer">
                                <strong className='contribStrong'>{'//'}</strong> github repository
                            </a>
                        </p>
                    </div>
                </div>

            </Row>

            <Row className='col-xs-12 col-sm-6 col-m-6 col-lg-6'>
                <h2 className='boldWork'>works</h2>

            </Row>
        </div>
    )
}
export default WorksOne;