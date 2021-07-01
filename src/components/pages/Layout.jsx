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

function Layout() {
    return (
        <Router>
            <Flex >
                <Navbar />
            </Flex>
            <Flex>
                <AsideNav />
                <Switch>
                    <Route exact path="/subscriptions">
                        <Subscriptions />
                    </Route>
                    <Route exact path="/">
                        <Intro />
                    </Route>
                    <Route exact path="/market">
                        <Market />
                    </Route>
                </Switch>

            </Flex>
        </Router>
    );
}

export default Layout;