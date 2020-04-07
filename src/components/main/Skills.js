import React from 'react';
import { Link } from 'react-router-dom';

export default function Skills() {
    let skillsMarkup = (
        
		<section className="overview-section p-3 p-lg-3">
			<div className="container">
				<h2 className="section-title font-weight-bold mb-3">What I do</h2>
				<div className="section-intro mb-3">I have more than <strong>6+</strong> years of experience building web apps leveraging modern platforms and tools. Below is a quick overview of technologies I use. Want to find out more about my experience? Check out my <Link to='/resume'>online resume</Link> and <Link to='/portfolio'>project portfolio</Link>.</div>
				<div className="skills-list">
                <div><i className="fab fa-js-square"></i> JavaScript</div>
                <div><i className="fab fa-node-js"></i> ES6+</div>
                <div><i className="fab fa-html5"></i> HTML 5</div>
                <div><i className="fab fa-css3-alt"></i> CSS 3</div>
                <div><i className="fab fa-react"></i> React</div>
                <div><i className="fab fa-node"></i> Node</div>
                <div><i className="fab fa-sass"></i> Sass</div>
                <div><i className="fab fa-docker"></i> Docker</div>
                <div><i className="fab fa-bootstrap"></i> Bootstrap 4.x</div>
                <div><i className="fas fa-database"></i> Mongo DB </div>
                <div><i className="fab fa-salesforce"></i> SLDS</div>
                <div><i className="fab fa-github"></i> Git</div>
                <div><i className="fab fa-npm"></i> NPM/Yarn</div>
                <div><i className="fab fa-gulp"></i> Gulp</div>
                <div>Redux</div>
                <div>Express</div>
                <div>Webpack/Parcel</div>
                <div>Babel</div>
                <div>Microservice Architecture</div>
                <div>Agile</div>
              </div>
			</div>
		</section>
    );

    return skillsMarkup;
}
