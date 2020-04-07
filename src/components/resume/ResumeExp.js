import React from 'react'

export default function ResumeExp() {
    
        let resExpMarkup = (
            <section className="work-section py-3">
            <h3 className="text-uppercase resume-section-heading mb-3">Work Experiences</h3>
            <div className="item mb-3">
                <div className="item-heading row align-items-center mb-2">
                    <h4 className="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0">Senior Associate</h4>
                    <div className="item-meta col-12 col-md-6 col-lg-4 text-muted text-left text-md-right">PwC | 2017 - Present</div>
                </div>
                <div className="item-content">
                    <p>Building web apps by leveraging Full Stack JavaScript like <strong>MERN</strong></p>
                    <ul className="resume-list">
                        <li>Build single page web apps using <strong>React-Redux</strong> ecosystem</li>
                        <li>End to end application setup, development and deployment of web apps</li>
                        <li>Create mobile first pages and cross browser compatibility</li>
                        <li>Involve in practice level design discussion and build reusable components</li>
                    </ul>
                </div>
            </div>
            <div className="item mb-3">
                <div className="item-heading row align-items-center mb-2">
                    <h4 className="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0">Software Engineer - UI</h4>
                    <div className="item-meta col-12 col-md-6 col-lg-4 text-muted text-left text-md-right">Pegasystems Inc. | 2016 - 2017</div>
                    
                </div>
                <div className="item-content">
                    <p>Part of Engineering team worked on styling PRPC components and performance optimization</p>
                    <ul className="resume-list">
                        <li>Web page optimization using Gulp task runner</li>
                        <li>Generating HTML5 canvas based graphs using ChartJS</li>
                        <li>Cross browser compatibility and css bug fixes</li>
                    </ul>
                </div>
            </div>
            <div className="item mb-3">
                <div className="item-heading row align-items-center mb-2">
                    <h4 className="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0">Contractor</h4>
                    <div className="item-meta col-12 col-md-6 col-lg-4 text-muted text-left text-md-right">Cerner | 2015 - 2016</div>
                    
                </div>
                <div className="item-content">
                    <p>Redesign & web development of online supply chain order management pharmacy .exe application.</p>
                    <ul className="resume-list">
                        <li>Creating REST end points utilizing Node and Express framework</li>
                        <li>Sass css for supply chain inventory pages</li>
                        <li>Developing tabular based responsive grids using Bootstrap3</li>
                    </ul>
                </div>
            </div>
            <div className="item">
                <div className="item-heading row align-items-center mb-2">
                    <h4 className="item-title col-12 col-md-6 col-lg-8 mb-md-0">Web Developer</h4>
                    <div className="item-meta col-12 col-md-6 col-lg-4 text-muted text-left text-md-right">Integra Micro Software | 2013 - 2015</div>
                </div>
                <div className="item-content">
                    <p>Web application development, Dynamic dashboards and Res Web design for various clients</p>
                </div>
            </div>
            <section className="education-section py-2">
					<h3 className="text-uppercase resume-section-heading mb-3">Education</h3>
					<ul className="list-unstyled resume-education-list">
						<li className="mb-2">
							<div className="resume-degree font-weight-bold">B.E in Computer Science</div>
							<div className="resume-degree-org text-muted">University B.D.T College Davangere</div>
							<div className="resume-degree-time text-muted">2008 - 2012</div>
						</li>
						<li>
							<div className="resume-degree font-weight-bold">Intermediate</div>
							<div className="resume-degree-org text-muted">Vidya PU Coleege Bidar</div>
							<div className="resume-degree-time text-muted">2006 - 2008</div>
						</li>
					</ul>
			</section>
        </section>
				
        );
    return resExpMarkup;
}
