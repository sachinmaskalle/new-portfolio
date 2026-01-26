import React from 'react'

import ProfilePicture from '../../../assets/img/sachin.png'

export default function ResumeIntro() {
  let resIntroMarkup = (
    <div className="resume-intro py-3">
      <div className="media flex-column flex-md-row align-items-center">
        <img
          className="resume-profile-image mb-3 mb-md-0 mr-md-5 ml-md-0 rounded mx-auto"
          src={ProfilePicture}
          alt="ProfilePicture"
        />
        <div className="media-body text-left">
          <p className="mb-2">
            Staff Software Engineer with 12 years of experience building
            large-scale, React-based frontend platforms for SaaS products.
            Expertise in JavaScript/TypeScript, React internals, and
            micro-frontend architectures.
          </p>
          <p>
            Right now, Sachin is looking for a suitable position with a company
            where outstanding performance is recognized and where he can work on
            a variety of high profile projects.
          </p>
        </div>
      </div>
    </div>
  )

  return resIntroMarkup
}
