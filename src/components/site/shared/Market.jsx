import React from 'react';
import propTypes from 'prop-types';
import Offers from '../../offers/Offers'
// import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Box } from '@chakra-ui/react'

//import { Box, SimpleGrid, Heading, Icon, Image } from '@chakra-ui/react'
//import { RiShieldUserLine } from 'react-icons/ri'

/*
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
*/

export default function Market({ offers, onDelete }) {

    return (
        <>
            <Box w="100%" ml="14%" mt={20} px={5} >
                <Offers offers={offers} onDelete={onDelete} />
            </Box>
        </>
    );
}

Market.propTypes = {
    offers: propTypes.array
}

/*
function Trending() {

    return < Box >
        <Heading my={3} fontSize="xl" fontWeight="900" fontFamily={'Quattrocento'}><Icon as={RiShieldUserLine} w={10} h={10} p={2} />Auctionaruim Market</Heading>
        <SimpleGrid mb={7}>
            <Carousel responsive={responsive}  >
                <Image
                    width="90%"
                    objectFit="cover"
                    src="https://images.unsplash.com/photo-1584254520639-ea67b9b108de?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTR8fGF1Y3Rpb25zfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60"
                    alt="Segun Adebayo"
                />
                <Image
                    width="90%"
                    objectFit="cover"
                    src="https://images.unsplash.com/photo-1606885118474-c8baf907e998?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGF1Y3Rpb25zfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60"
                    alt="Segun Adebayo"
                />
                <Image
                    width="90%"
                    objectFit="cover"
                    src="https://images.unsplash.com/photo-1551913902-c92207136625?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80"
                    alt="Segun Adebayo"
                />
                <Image
                    width="90%"
                    objectFit="cover"
                    src="https://images.unsplash.com/photo-1551913902-c92207136625?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80"
                    alt="Segun Adebayo"
                />
            </Carousel>
        </SimpleGrid>
    </Box >
}
*/