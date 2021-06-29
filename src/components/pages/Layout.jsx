import React from 'react';
import Navbar from '../navs/Navbar'
import AsideNav from '../navs/AsideNav'
import Intro from './Intro'
import { Flex } from '@chakra-ui/react';

function Layout(props) {
    return (
        <div>
            <Flex >
                <Navbar />
            </Flex>
            <Flex >
                <AsideNav />
                <Intro />
            </Flex>
        </div>
    );
}

export default Layout;