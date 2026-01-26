import React from 'react'
import { Link } from 'react-router-dom'

import ProfilePicture from '../../../assets/img/sachin.png'

export default function About() {
  let aboutMarkup = (
    <section className="about-me-section p-3 p-lg-5 theme-bg-light">
      <div className="container">
        <div className="profile-teaser media flex-column flex-lg-row">
          <div className="media-body">
            <h1 className="display-4 title mb-0">Sachin Suryakanth</h1>
            <div className="tagline mb-3">Staff Engineer</div>
            <div className="bio mb-3">
              From covid pandemic I work{' '}
              <i className="fas fa-map-marker-alt"></i> Remotely.If I had to
              describe myself in precise, it would probably be passionate and
              focused. I value a healthy work/life balance. I&rsquo;m a hard
              worker and enjoy what I get to do everyday.
            </div>
            <div className="bio mb-3">
              Currently I&rsquo;m working as Staff Engineer at GoTo Inc. I've
              been here for a while working on Communication & Collaboration
              products (GoTo/Meeting/Training/Webinars) using WebSockets,WebRTC,
              React, and Typescript.
            </div>
            <div className="">
              <Link className="btn btn-primary mr-2 mb-3" to="/portfolio">
                <i className="fas fa-arrow-alt-circle-right mr-2"></i>
                <span className="d-none d-md-inline">View</span> Portfolio
              </Link>
              <Link className="btn btn-secondary mb-3" to="/resume">
                <i className="fas fa-file-alt mr-2"></i>
                <span className="d-none d-md-inline">View</span> Resume
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )

  return aboutMarkup
}
