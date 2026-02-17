import React from 'react';
import './Competences.css';
import { Row } from 'react-bootstrap';
import Phaser from './images/phaser-logo.svg';

export default () => ((
		<div className='container-fluid competences'>
			<Row className='col-xs-12 col-sm-6 col-m-6 col-lg-6'>
				<div className='vertical-skills'>
					skills
				</div>
			</Row>
			<Row className='col-xs-12 col-sm-6 col-m-6 col-lg-6'>
				<div className='centeredIcons'>
					<ul className="list-inline list-icons">
						<li className="list-inline-item">
							<i className="devicon-html5-plain-wordmark colored"></i>
						</li>
						<li className="list-inline-item">
							<i className="devicon-css3-plain-wordmark colored"></i>
						</li>
						<li className="list-inline-item">
							<i className="devicon-bootstrap-plain-wordmark colored"></i>
						</li>
						<li className="list-inline-item">
							<i className="devicon-javascript-plain colored"></i>
						</li>
						<li className="list-inline-item">
							<i className="devicon-react-original-wordmark colored"></i>
						</li>
						<li className="list-inline-item">
							<i className="devicon-nodejs-plain-wordmark colored"></i>
						</li>
						<li className="list-inline-item">
							<i className="devicon-mysql-plain-wordmark colored"></i>
						</li>
						<li className="list-inline-item">
							<i className="devicon-mongodb-plain-wordmark colored"></i>
						</li>
						<li className="list-inline-item">
							<img src={Phaser} alt='phaser' />
						</li>
						<li className="list-inline-item">
							<i className="devicon-linux-plain colored"></i>
						</li>
						<li className="list-inline-item">
							<i className="devicon-ubuntu-plain-wordmark colored"></i>
						</li>
						<li className="list-inline-item">
							<i className="devicon-git-plain-wordmark colored"></i>
						</li>
						<li className="list-inline-item">
							<i className="devicon-github-plain-wordmark colored"></i>
						</li>
						<li className="list-inline-item">
							<i className="devicon-visualstudio-plain-wordmark colored"></i>
						</li>
						<li className="list-inline-item">
							<i className="devicon-travis-plain-wordmark colored"></i>
						</li>
						<li className="list-inline-item">
							<i className="devicon-trello-plain-wordmark colored"></i>
						</li>
						<li className="list-inline-item">
							<i className="devicon-express-original-wordmark colored"></i>
						</li>
						<li className="list-inline-item">
							<i className="devicon-d3js-plain colored"></i>
						</li>
					</ul>
				</div>
				<h2 className='boldSkills'>skills</h2>
			</Row>
		</div>
	));