import React from 'react';

import Sidebar from '../layout/SideBar';
import About from './About';
import Skills from './Skills';
import WorkExperience from './WorkExperience';
import Footer from '../footer/Footer'

export default function Main() {
    let mainMarkup = (
        <div className="main-wrapper">
            <Sidebar/>  
            <About/>
            <Skills/>
            <WorkExperience/>
            <Footer/>
        </div>
    );

    return mainMarkup;
}
