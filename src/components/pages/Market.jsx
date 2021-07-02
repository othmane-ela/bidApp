import React from 'react';
import propTypes from 'prop-types';
import Offers from './../offers/Offers'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container, Box, SimpleGrid, useColorModeValue, Skeleton, Heading, Icon } from '@chakra-ui/react'
import { RiShieldUserLine } from 'react-icons/ri'


const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};


export default function Market({ offers, onDelete }) {

    return (
        <>
            <Box w="100%" ml="14%" mt={20} px={5}>
                <Trending />
                <Offers offers={offers} onDelete={onDelete} />
            </Box>
        </>
    );
}

Market.propTypes = {
    offers: propTypes.array
}


function Trending() {

    const customeBackground = useColorModeValue("gray.50", "#1F1F1F");

    return < Box >
        <Heading my={3} fontSize="xl" fontWeight="900" fontFamily={'Quattrocento'}><Icon as={RiShieldUserLine} w={10} h={10} p={2} />Auctionaruim Market</Heading>
        <Container maxW="container.5xl">
            <SimpleGrid minChildWidth="100%" mb={7}>
                <Carousel responsive={responsive} >
                    <Skeleton height="200px" bg={customeBackground}></Skeleton>
                    <Skeleton height="200px" bg={customeBackground}></Skeleton>
                    <Skeleton height="200px" bg={customeBackground}></Skeleton>
                    <Skeleton height="200px" bg={customeBackground}></Skeleton>
                </Carousel>
            </SimpleGrid>
        </Container>
    </Box >
}