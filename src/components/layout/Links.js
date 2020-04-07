import React from 'react';
import { Link } from 'react-router-dom';

export default function Links() {
    let linksMarkup = (
        <ul className="navbar-nav flex-column text-left">
			<li className="nav-item active">
				<Link className="nav-link" to='/'><i className="fas fa-user fa-fw mr-2"></i>About Me
                    <span className="sr-only">(current)</span>
				</Link>
			</li>
			{/* <li className="nav-item">
				<Link className="nav-link" to='/portfolio'>
					<i className="fas fa-laptop-code fa-fw mr-2"></i>Portfolio
				</Link>
			</li> */}
			<li className="nav-item">
				<Link className="nav-link" to='/resume'>
					<i className="fas fa-file-alt fa-fw mr-2"></i>Resume
				</Link>
			</li>
			{/* <li className="nav-item">
				<Link className="nav-link" to='/blog'>
					<i className="fas fa-blog fa-fw mr-2"></i>Blog
				</Link>
			</li> */}
			<li className="nav-item">
				<Link className="nav-link" to='/contact'>
					<i className="fas fa-envelope-open-text fa-fw mr-2"></i>Contact
				</Link>
			</li>
		</ul>
    );

    return linksMarkup;
}
