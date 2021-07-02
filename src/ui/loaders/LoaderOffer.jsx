import React from 'react';
import { Box, HStack, SkeletonCircle, SkeletonText, useColorModeValue } from '@chakra-ui/react'


function LoaderOffer() {

    const customeBackground = useColorModeValue("gray.50", "#1F1F1F");

    return (
        <Box padding="6" boxShadow="sm" bg={customeBackground} >
            <HStack>
                <SkeletonCircle size="10" />
                <SkeletonCircle size="10" />
                <SkeletonCircle size="10" />
            </HStack>
            <SkeletonText mt="4" noOfLines={3} spacing="4" />
        </Box>
    );
}

export default LoaderOffer;