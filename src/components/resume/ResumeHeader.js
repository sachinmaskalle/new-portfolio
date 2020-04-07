import React from 'react'

export default function ResumeHeader() {
    
        let resHeaderMarkup = (
            <div className="resume-header">
					<div className="row align-items-center">
						<div className="resume-title col-12 col-md-6 col-lg-8 col-xl-9">
							<h2 className="resume-name mb-0 text-uppercase">Sachin</h2>
							<div className="resume-tagline mb-3 mb-md-0">Full Stack Engineer</div>
						</div>
						<div className="resume-contact col-12 col-md-6 col-lg-4 col-xl-3">
							<ul className="list-unstyled mb-0">
                                <li className="mb-2"><i className="fas fa-phone-square fa-fw fa-lg mr-2 "></i>
                                    <span className="resume-linkn font-weight-bold">+91-8310634460</span>
                                </li>
                                <li className="mb-2"><i className="fas fa-envelope-square fa-fw fa-lg mr-2"></i>
                                    <span className="resume-link font-weight-bold">sachinmaskalle@gmail.com</span>
                                </li>
                                <li className="mb-2"><i className="fas fa-globe fa-fw fa-lg mr-2"></i>
                                    <span className="resume-link">https://sachinmaskalle.netlify.com/</span>
                                </li>
                                <li className="mb-0"><i className="fas fa-map-marker-alt fa-fw fa-lg mr-2"></i>Bangalore, India</li>
							</ul>
						</div>
					</div>
					
				</div>
				
        );
    return resHeaderMarkup;
}
