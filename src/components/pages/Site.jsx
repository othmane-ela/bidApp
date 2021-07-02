import React, { useContext } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import { UserContext } from '../../hooks/contexts';

import Navbar from '../navs/Navbar'
import AsideNav from '../navs/AsideNav'
import Intro from './Intro'
import Subscriptions from './Subscriptions'
import Market from './Market'

import { Flex } from '@chakra-ui/react';
import { useOffers } from '../../hooks/offers';
import { useEffect } from 'react';

function Layout() {

    const { user } = useContext(UserContext);
    const { offers, fetchOffers, deleteOffer } = useOffers();

    const checkUser = function () {
        return user !== null && user !== false ? true : false;
    }

    useEffect(function () {
        fetchOffers()
    }, [fetchOffers])


    return (

        <Router>
            <Flex >
                <Navbar />
            </Flex>
            <Flex>
                <AsideNav />
                <Switch>
                    <Route exact path="/subscriptions">
                        {checkUser() ? <Redirect to="/market" /> : <Subscriptions />}
                    </Route>
                    <Route exact path="/">
                        {checkUser() ? <Redirect to="/market" /> : <Intro />}
                    </Route>
                    <Route exact path="/market">
                        <Market offers={offers} onDelete={deleteOffer} />
                    </Route>
                </Switch>

            </Flex>
        </Router>
    );
}

export default Layout;