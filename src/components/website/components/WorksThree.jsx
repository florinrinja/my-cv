import React from 'react';
import { Row } from 'react-bootstrap';
import './WorksThree.css';

const WorksOne = () => {
    return (
        <div className='container-fluid worksOne'>
            <Row className='col-xs-12 col-sm-6 col-m-6 col-lg-6'>
                <div className='vertical-work'>
                    works
                </div>
                <div className='centeredWorkOne col-md-12'>

                    <div className='meteoApp' >
                        <a className='blogApp' href="https://florinrinja.website/apps/movieblog" >
                        </a>
                    </div>

                    <div className='textDescription'>
                        <p className='movieappDescription'>{'\\'} fullstack web-app for a movie blog
                        <br></br>
                        {'\\'} it has <em>front-end</em> components to randomise and select movies
                        <br></br>
                        {'\\'} it has <em>back-end</em> utilities in front to get/post/put/delete items in a database
                        <br></br>
                        {'\\'} makes use of React, NodeJS, Express, mySQL
                        <br></br>
                        </p>
                        <p className='contribText'>
                            <strong className='contribStrong'>{'//'}</strong> self-made project
                        <br></br>
                            <strong className='contribStrong'>{'//'}</strong> in about two weeks, working on and off
                            <br></br>
                            <a className='gitLink' href='https://github.com/florinrinja/phlo-cine' target='_blank' rel="noopener noreferrer">
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