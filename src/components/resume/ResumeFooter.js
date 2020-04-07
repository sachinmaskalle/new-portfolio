import React from 'react'

export default function ResumeFooter() {
    let resumeFooterMarkup = (
        <div className="resume-footer text-center">
			<ul className="resume-social-list list-inline mx-auto mb-0 d-inline-block">
				<li className="list-inline-item mb-lg-0 mr-3">
                    <span className="resume-link"><i className="fab fa-github-square fa-2x mr-2" data-fa-transform="down-4"></i>
                        <span className="d-none d-lg-inline-block">github.com/sachinmaskalle</span>
                    </span>
                </li>
			    <li className="list-inline-item mb-lg-0 mr-3">
                    <a className="resume-link"><i className="fab fa-linkedin fa-2x mr-2" data-fa-transform="down-4"></i>
                        <span className="d-none d-lg-inline-block">linkedin.com/in/sachin-suryakanth/</span>
                    </a>
                </li>
				<li className="list-inline-item mb-lg-0 mr-lg-3">
                    <a className="resume-link"><i className="fab fa-twitter-square fa-2x mr-2" data-fa-transform="down-4"></i>
                        <span className="d-none d-lg-inline-block">twitter.com/sachinmaskalle</span>
                    </a>
                </li>
			</ul>
	    </div>
    );

    return resumeFooterMarkup;
}
