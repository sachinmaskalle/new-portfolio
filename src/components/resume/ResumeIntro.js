import React from 'react'

import ProfilePicture from '../../../assets/img/sachin.png';

export default function ResumeIntro() {
    let resIntroMarkup = (
        <div className="resume-intro py-3">
			<div className="media flex-column flex-md-row align-items-center">
				<img className="resume-profile-image mb-3 mb-md-0 mr-md-5 ml-md-0 rounded mx-auto" src={ProfilePicture} alt="ProfilePicture" />
					<div className="media-body text-left">
						<p className="mb-2">
						An ambitious Full Stack Developer with a passion for creating rich Internet and Single Page Applications (SPA), and who would like to join a team of like-minded developers & bring quality to the table. Sachin has 6+ years of experience of creating logical and innovative solutions to complex problems. He has a keen interest in web, mobile-first applications and have extensive experience in developing end to end applications with cutting edge quality platforms and tools.
						</p>
						<p>
						Right now, Sachin is looking for a suitable position with a company where
						outstanding performance is recognized and where he can work on a variety of
						high profile projects.
						</p>
					</div>
			</div>
		</div>
    );

    return resIntroMarkup;
}
