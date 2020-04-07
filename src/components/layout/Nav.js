import React from 'react';
import { Link } from 'react-router-dom';

import ProfilePhoto from '../../../assets/img/sachin.png';
import Links from './Links';
import SocialLinks from './SocialLinks';

export default function Nav() {
    let navMarkup = (
        <nav className="navbar navbar-expand-lg navbar-dark" >
				
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				
				<div id="navigation" className="collapse navbar-collapse flex-column" >
					<div className="profile-section pt-3 pt-lg-0">
						<img className="profile-image mb-3 rounded-circle mx-auto" src={ProfilePhoto} alt="image" />
						
						<div className="bio mb-3">Hey, my name is <strong className="text-uppercase text-monospace custom-text-font">Sachin</strong> and I'm a Full stack engineer. Welcome to my personal website!</div>
						<SocialLinks />
						<hr /> 
					</div>
                    <Links />
				</div>

                
			</nav>
    );

    return navMarkup;
}
