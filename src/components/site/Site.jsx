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
import Subscriptions from './buyer/Subscriptions'
import Market from './shared/Market'
import OfferDetails from './shared/OfferDetails'

import { Flex } from '@chakra-ui/react';
import { useOffers } from '../../hooks/offers';
import { useEffect } from 'react';
import Purchases from './shared/Purchases';

import SellerOffers from './seller/SellerOffers'
import SellerItems from './seller/SellerItems';
import SellerOrders from './seller/SellerOrders';
import SellerSubscription from './seller/SellerSubscription';
import FollowedSellers from './shared/FollowedSellers';
import Sellers from './shared/Sellers';
import Profile from './shared/Profile';

function Layout() {

    const { user } = useContext(UserContext);
    const { offers, fetchOffers } = useOffers();

    const checkSeller = function () {
        return user !== null && user !== false && user.type === "Seller" ? true : false;
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

                    {/* OPEN ROOTS */}
                    <Route exact path="/market">
                        <Market offers={offers} />
                    </Route>
                    <Route exact path="/">
                        <Redirect to="/market" />
                    </Route>
                    <Route exact path="/offer/:id">
                        <OfferDetails />
                    </Route>
                    <Route exact path="/sellers">
                        <Sellers />
                    </Route>


                    {/* SELLER ROOTS */}
                    <Route exact path="/offers">
                        {checkSeller() ? <SellerOffers /> : <Redirect to="/market" />}
                    </Route>
                    <Route exact path="/items">
                        {checkSeller() ? <SellerItems /> : <Redirect to="/market" />}
                    </Route>
                    <Route exact path="/orders">
                        {checkSeller() ? <SellerOrders /> : <Redirect to="/market" />}
                    </Route>
                    <Route exact path="/subscription">
                        {checkSeller() ? <SellerSubscription /> : <Redirect to="/market" />}
                    </Route>



                    {/* BUYER ROOTS */}
                    <Route exact path="/subscriptions">
                        {!checkSeller() ? <Subscriptions /> : <Redirect to="/market" />}
                    </Route>


                    {/* SHARED ROOTS */}
                    <Route exact path="/purchases">
                        {user !== null && user !== false ? < Purchases /> : <Redirect to="/market" />}
                    </Route>
                    <Route exact path="/sellers/follow">
                        {user !== null && user !== false ? <FollowedSellers /> : <Redirect to="/market" />}
                    </Route>
                    <Route exact path="/profile">
                        {user !== null && user !== false ? <Profile /> : <Redirect to="/market" />}
                    </Route>
                </Switch>

            </Flex>
        </Router>
    );
}

export default Layout;