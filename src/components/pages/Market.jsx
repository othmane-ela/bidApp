import React from 'react';
import { Box, SimpleGrid, HStack, useColorModeValue, SkeletonCircle, SkeletonText, Container, Skeleton, Heading, Icon } from '@chakra-ui/react'
import { SiMarketo } from 'react-icons/si'
import { RiShieldUserLine } from 'react-icons/ri'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
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


function Market() {

    const customeBackground = useColorModeValue("gray.50", "#1F1F1F");

    return (
        <>
            <Box w="100%" ml="14%" mt={20} px={5}>
                <Container maxW="container.xxl">
                    <Heading my={3} fontSize="xl" fontWeight="900" fontFamily={'Quattrocento'}> <Icon as={SiMarketo} w={10} h={10} p={2} /> Auctionaruim Market</Heading>
                    <SimpleGrid minChildWidth="100%" mb={7}>
                        <Carousel responsive={responsive} >

                            {/* 
                                 <Box height="200px">
                                   <Image
                                    alt={'Login Image'}
                                    objectFit={'cover'}
                                    src={
                                        'https://images.unsplash.com/photo-1567890477042-a7e2db09265f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80'
                                    }
                                />
                                 </Box>
                                */}

                            <Skeleton height="200px" bg={customeBackground}></Skeleton>
                            <Skeleton height="200px" bg={customeBackground}></Skeleton>
                            <Skeleton height="200px" bg={customeBackground}></Skeleton>
                            <Skeleton height="200px" bg={customeBackground}></Skeleton>
                            <Skeleton height="200px" bg={customeBackground}></Skeleton>

                        </Carousel>
                    </SimpleGrid>
                    <Heading my={3} fontSize="xl" fontWeight="900" fontFamily={'Quattrocento'}><Icon as={RiShieldUserLine} w={10} h={10} p={2} />Auctionaruim Market</Heading>
                    <SimpleGrid minChildWidth="200px" spacing="40px"  >
                        <Box padding="6" boxShadow="sm" bg={customeBackground} >
                            <HStack>
                                <SkeletonCircle size="10" />
                                <SkeletonCircle size="10" />
                                <SkeletonCircle size="10" />
                            </HStack>
                            <SkeletonText mt="4" noOfLines={3} spacing="4" />
                        </Box>
                        <Box padding="6" boxShadow="sm" bg={customeBackground} rounded={3} >
                            <HStack>
                                <SkeletonCircle size="10" />
                                <SkeletonCircle size="10" />
                                <SkeletonCircle size="10" />
                            </HStack>
                            <SkeletonText mt="4" noOfLines={3} spacing="4" />
                        </Box>
                        <Box padding="6" boxShadow="sm" bg={customeBackground} rounded={3} >
                            <HStack>
                                <SkeletonCircle size="10" />
                                <SkeletonCircle size="10" />
                                <SkeletonCircle size="10" />
                            </HStack>
                            <SkeletonText mt="4" noOfLines={3} spacing="4" />
                        </Box>
                        <Box padding="6" boxShadow="sm" bg={customeBackground} rounded={3} >
                            <HStack>
                                <SkeletonCircle size="10" />
                                <SkeletonCircle size="10" />
                                <SkeletonCircle size="10" />
                            </HStack>
                            <SkeletonText mt="4" noOfLines={3} spacing="4" />
                        </Box>
                        <Box padding="6" boxShadow="sm" bg={customeBackground} rounded={3} >
                            <HStack>
                                <SkeletonCircle size="10" />
                                <SkeletonCircle size="10" />
                                <SkeletonCircle size="10" />
                            </HStack>
                            <SkeletonText mt="4" noOfLines={3} spacing="4" />
                        </Box>
                        <Box padding="6" boxShadow="sm" bg={customeBackground} rounded={3} >
                            <HStack>
                                <SkeletonCircle size="10" />
                                <SkeletonCircle size="10" />
                                <SkeletonCircle size="10" />
                            </HStack>
                            <SkeletonText mt="4" noOfLines={3} spacing="4" />
                        </Box>
                        <Box padding="6" boxShadow="sm" bg={customeBackground} rounded={3} >
                            <HStack>
                                <SkeletonCircle size="10" />
                                <SkeletonCircle size="10" />
                                <SkeletonCircle size="10" />
                            </HStack>
                            <SkeletonText mt="4" noOfLines={3} spacing="4" />
                        </Box>
                        <Box padding="6" boxShadow="sm" bg={customeBackground} rounded={3} >
                            <HStack>
                                <SkeletonCircle size="10" />
                                <SkeletonCircle size="10" />
                                <SkeletonCircle size="10" />
                            </HStack>
                            <SkeletonText mt="4" noOfLines={3} spacing="4" />
                        </Box>
                    </SimpleGrid>
                </Container>
            </Box>
        </>
    );
}


export default Market;

