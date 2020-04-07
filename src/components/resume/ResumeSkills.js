import React from 'react'

export default function ResumeSkills() {
    let resumeSikllsMarkup = (
        <aside className="resume-aside col-12 col-lg-4 col-xl-3 px-lg-4 pb-lg-4">
           <section className="skills-section py-3">
				<h3 className="text-uppercase resume-section-heading mb-3">Skills</h3>
				<div className="item">
					<h4 className="item-title">Technical</h4>
					<ul className="list-unstyled resume-skills-list">
						<li className="mb-2">JavaScript/ES2015/ES+</li>
						<li className="mb-2">React-Redux/Thunk/Sagas</li>
						<li className="mb-2">HTML5/CSS3/Sass/JSON</li>
						<li className="mb-2">Node/Express/Socket.io/JWT</li>
						<li className="mb-2">Mongo DB/mongoose/Atlas</li>
						<li className="mb-2">Webpack/Babel/Parcel</li>
						<li className="mb-2">Bootstrap/Materialize/SLDS</li>
						<li className="mb-2">Jest/Cypress.io</li>
						<li className="mb-2">Docker</li>
						<li className="mb-2">Microservice Architecture</li>
						<li className="mb-2">Git/Postman/VS Code</li>
					</ul>
				</div>
				<div className="item">
					<h4 className="item-title">Learning/Trying</h4>
					<ul className="list-unstyled resume-skills-list">
						<li className="mb-2">CI/CD</li>
						<li className="mb-2">PWA</li>
						<li className="mb-2">React Native</li>
						<li>UI Testing</li>
					</ul>
				</div>
			</section>
			<section className="skills-section py-3">
					<h3 className="text-uppercase resume-section-heading mb-2">Interests</h3>
					<ul className="list-unstyled resume-interests-list mb-0">
						<li className="mb-2">Open source</li>
						<li className="mb-2">Cooking</li>
						<li>Travelling</li>
				    </ul>
			</section>
		</aside>
    );

    return resumeSikllsMarkup;
}
