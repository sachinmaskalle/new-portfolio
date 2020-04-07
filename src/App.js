import React, {Fragment} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Resume from './components/resume/Resume';
import Portfolio from './components/portfolio/Portfolio';
import Blog from './components/blog/Blog';
import Contact from './components/contact/Contact';
import Main from './components/main/Main';

const App = () => {

    let AppMarkup = (
        // Set up routing here
        <div className="App">
            
            <Fragment>
                <Router>
                    <Route exact path="/" component={Main} />
                    <Route exact path="/resume" component={Resume} />
                    <Route exact path="/contact" component={Contact} />
                    <Route exact path="/portfolio" component={Portfolio} />
                    <Route exact path="/blog" component={Blog} />
                </Router>
            </Fragment>
        </div>
    );

    return AppMarkup;
}

export default App;
