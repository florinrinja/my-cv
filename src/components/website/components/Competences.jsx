import React from 'react';
import './Competences.css';
import { Row } from 'react-bootstrap';
import Phaser from './images/phaser-logo.svg';

const Competences = () => {
    return (
        <div className='container-fluid competences'>
            <Row className='col-xs-12 col-sm-6 col-m-6 col-lg-6'>
                <div className='vertical-skills'>
                    skills
                </div>
            </Row>
            <Row className='col-xs-12 col-sm-6 col-m-6 col-lg-6'>
                <div className='centeredIcons'>
                    <ul class="list-inline list-icons">
                        <li class="list-inline-item">
                            <i class="devicon-html5-plain-wordmark colored"></i>
                        </li>
                        <li class="list-inline-item">
                            <i class="devicon-css3-plain-wordmark colored"></i>
                        </li>
                        <li class="list-inline-item">
                            <i class="devicon-bootstrap-plain-wordmark colored"></i>
                        </li>
                        <li class="list-inline-item">
                            <i class="devicon-javascript-plain colored"></i>
                        </li>
                        <li class="list-inline-item">
                            <i class="devicon-react-original-wordmark colored"></i>
                        </li>
                        <li class="list-inline-item">
                            <i class="devicon-nodejs-plain-wordmark colored"></i>
                        </li>
                        <li class="list-inline-item">
                            <i class="devicon-mysql-plain-wordmark colored"></i>
                        </li>
                        <li class="list-inline-item">
                            <i class="devicon-mongodb-plain-wordmark colored"></i>
                        </li>
                        <li class="list-inline-item">
                            <img src={Phaser} alt='phaser' />
                        </li>
                        <li class="list-inline-item">
                            <i class="devicon-linux-plain colored"></i>
                        </li>
                        <li class="list-inline-item">
                            <i class="devicon-ubuntu-plain-wordmark colored"></i>
                        </li>
                        <li class="list-inline-item">
                            <i class="devicon-git-plain-wordmark colored"></i>
                        </li>
                        <li class="list-inline-item">
                            <i class="devicon-github-plain-wordmark colored"></i>
                        </li>
                        <li class="list-inline-item">
                            <i class="devicon-visualstudio-plain-wordmark colored"></i>
                        </li>
                        <li class="list-inline-item">
                            <i class="devicon-travis-plain-wordmark colored"></i>
                        </li>
                        <li class="list-inline-item">
                            <i class="devicon-trello-plain-wordmark colored"></i>
                        </li>
                        <li class="list-inline-item">
                            <i class="devicon-express-original-wordmark colored"></i>
                        </li>
                        <li class="list-inline-item">
                            <i class="devicon-d3js-plain colored"></i>
                        </li>
                    </ul>
                </div>
                <h2 className='boldSkills'>skills</h2>
            </Row>
        </div>
    )
}
export default Competences;