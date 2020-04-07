import React from 'react';

export default function SocialLinks() {
   
        let socialMarkup = (
            <ul className="social-list list-inline py-2 mx-auto">
				<li className="list-inline-item">
                    <a href="https://twitter.com/sachinmaskalle">
                        <i className="fab fa-twitter fa-fw"></i>
                    </a>
                </li>
				<li className="list-inline-item">
                    <a href="https://www.linkedin.com/in/sachin-suryakanth">
                        <i className="fab fa-linkedin-in fa-fw"></i>
                    </a>
                </li>
				<li className="list-inline-item">
                    <a href="https://github.com/sachinmaskalle">
                        <i className="fab fa-github-alt fa-fw"></i>
                    </a>
                </li>
				<li className="list-inline-item">
                    <a href="https://stackoverflow.com/users/12859793/sachin-suryakanth">
                        <i className="fab fa-stack-overflow fa-fw"></i>
                    </a>
                </li>
			</ul>
        );
    return socialMarkup;
}
