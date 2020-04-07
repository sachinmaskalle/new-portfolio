import React, { Fragment } from 'react';
import {Link} from 'react-dom';

import Nav from './Nav';
import Main from '../main/Main';

export default function SideBar() {
    let sidebarMarkup = (
        <Fragment>
            <header className="header text-center">
                <div className="force-overflow">
                    <Nav />
                </div>
            </header>
        </Fragment>

    );

    return sidebarMarkup;
}
