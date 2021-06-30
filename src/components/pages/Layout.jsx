import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import Navbar from '../navs/Navbar'
import AsideNav from '../navs/AsideNav'
import Intro from './Intro'
import Subscriptions from './Subscriptions'
import Market from './Market'

import { Flex } from '@chakra-ui/react';

function Layout(props) {
    return (
        <Router>
            <Flex >
                <Navbar />
            </Flex>
            <Switch>
                <Route exact path="/subscriptions">
                    <Subscriptions />
                </Route>
                <Flex>
                    <AsideNav />
                    <Route exact path="/">
                        <Intro />
                    </Route>
                    <Route exact path="/market">
                        <Market />
                    </Route>
                </Flex>
            </Switch>
        </Router>
    );
}

export default Layout;