import React from 'react';

export default function WorkExperience() {
    let expMarkup = (

		<section className="testimonials-section p-3 p-lg-3">
			<div className="container">
				<h2 className="section-title font-weight-bold mb-4">Work History</h2>
					<div className="row">
                    <div className="col-md-4">
                        <div className="card border-dark">
                            <div className="card-header">PwC AC - Bangalore</div>
                            <div className="card-body">
                                <p className="card-text">
                                <i className="far fa-hand-point-right"></i> Building RIA’s and web apps - MERN <br/>
                                <i className="far fa-hand-point-right"></i> Responsive web design and Responsive web design<br/>
                                <i className="far fa-hand-point-right"></i> End to end application setup, development testing and deployment <br/>
                                <i className="far fa-hand-point-right"></i> Adoption of open source community changes/upgrades
                                </p>
                            </div>
                            <div className="card-footer">
                                <h6 className="text-muted">
                                    Current : March 2017 till date
                                </h6>
                            </div>
                        </div>
					</div>
                    <div className="col-md-4">
                        <div className="card border-dark">
                        <div className="card-header">Pegasystems Inc - Bangalore</div>
                        <div className="card-body">
                            <p className="card-text">
                                <i className="far fa-hand-point-right"></i> PRPC UI product enhancements for engineering team <br/>
                                <i className="far fa-hand-point-right"></i> Collaborating with UX team for visual designs, mockups & developing W3 compatible HTML pages <br/>
                                <i className="far fa-hand-point-right"></i> CSS3 animations and cross browser compatibility testing
                            </p>
                        </div>
                        <div className="card-footer">
                            <h6 className="text-muted">
                                Jan 2016 - Dec 2016
                            </h6>
                        </div>
                    </div>
					</div>
                    <div className="col-md-4">
                        <div className="card border-dark">
                            <div className="card-header">Integra Micro Software Services</div>
                            <div className="card-body">
                                <p className="card-text">
                                <i className="far fa-hand-point-right"></i> Built dynamic dashboards using HTML5/CSS3 , ECMAScript 5 and Bootstrap 3.x framework <br/>
                                <i className="far fa-hand-point-right"></i> Responsive web design using CSS3 media queries <br/>
                                <i className="far fa-hand-point-right"></i> E2E web application development and testing
                                </p>
                            </div>
                            <div className="card-footer">
                                <h6 className="text-muted">
                                    March 2013 - July 2015
                                </h6>
                            </div>
                        </div>
					</div>
                    </div>
			</div>
		</section>
    );

    return expMarkup;
}
