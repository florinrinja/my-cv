import React from 'react';
import { Row } from 'react-bootstrap';
import './WorksTwo.css';

const WorksOne = () => {
    return (
        <div className='container-fluid worksOne'>
            <Row className='col-xs-12 col-sm-6 col-m-6 col-lg-6'>
                <div className='vertical-work'>
                    works
                </div>
                <div className='centeredWorkOne col-md-12'>

                    <div className='meteoApp' >
                        <a className='scaneatApp' href="javascript:void(null)" >
                        </a>
                    </div>

                    <div className='textDescription'>
                        <p className='appDescription'>
                        {'\\'} web-app to scan barcodes on foods
                        <br></br>
                        {'\\'} it shows ingredients, it allows for a history of liked goods
                        <br></br>
                        {'\\'} using an APIXU API, QuaggaJS API and Materialize
                        <br></br>
                        </p>
                        <p className='contribText'>
                            <strong className='contribStrong'>{'//'}</strong> team made of four
                        <br></br>
                            <strong className='contribStrong'>{'//'}</strong> in about 80h, working scrum
                            <br></br>
                            <a className='gitLink' href='https://github.com/florinrinja/wild-yuka' target='_blank'  rel="noopener noreferrer">
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