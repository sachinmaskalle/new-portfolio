import React , {Fragment} from 'react';

import Sidebar from '../layout/SideBar';
import ResumeHeader from './ResumeHeader';
import ResumeIntro from './ResumeIntro';
import ResumeExp from './ResumeExp';
import ResumeSkills from './ResumeSkills';
import ResumeFooter from './ResumeFooter';

export default function Resume() {
    let resumeMarkup = (
      <Fragment>
        <Sidebar/>
        <div className="main-wrapper">
            <div className="container px-3 px-lg-5">
			          <article className="resume-wrapper mx-auto theme-bg-light p-5 mb-5 my-4 shadow-lg">
                    <ResumeHeader/>
                    <hr/>
                    <ResumeIntro/>
                    <hr/>
                    <div className="resume-body">
					                <div className="row">
						                  <div className="resume-main col-12 col-lg-8 col-xl-9 pr-0 pr-lg-5">
                                <ResumeExp />
                                
                              </div>
                              <ResumeSkills />
                          </div>
                    </div>
                    <hr/>
                    <ResumeFooter/>
                </article>
            </div>
        </div>
      </Fragment>
    );

    return resumeMarkup;
}
