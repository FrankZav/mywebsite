import React from 'react';
import LandingPage from './landingpage';
import { Switch, Route } from 'react-router-dom';
import AboutMe from './aboutme';


const Main = () => (
    <switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/aboutme" component={AboutMe} />
    </switch>
)

export default Main;