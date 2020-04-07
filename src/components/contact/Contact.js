import React from 'react';

import Sidebar from '../layout/SideBar';
import SocialLinks from '../layout/SocialLinks';
import ContactForm from './ContactForm';
import Footer from '../footer/Footer';

export default function Contact() {
    let contactMarkup = (
      
      <div className="main-wrapper">
        <Sidebar/>
        <section className="cta-section theme-bg-light py-2">
          <div className="container text-center single-col-max-width">
            <h2><i className="fas fa-mug-hot"></i> Coffe with me.</h2>
            <div className="intro">
              <p>I am always excited to work on some awesome projects, message me and let's discuss over coffee.</p>
              <p>Want to get connected? Follow me on the social channels below.</p>
            </div>
            <SocialLinks />
          </div>
	      </section>

        <ContactForm/>
	      <Footer />
      </div>
    );

    return contactMarkup;
}
