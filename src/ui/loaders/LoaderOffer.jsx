import React from 'react';
import { Box, HStack, SkeletonCircle, SkeletonText, useColorModeValue, SimpleGrid } from '@chakra-ui/react'


export function LoaderOffer() {

    const customeBackground = useColorModeValue("gray.50", "#1F1F1F");

    return (
        <Box pt="10" px="5" boxShadow="sm" bg={customeBackground} h="14rem" borderRadius={4} >
            <HStack>
                <SkeletonCircle size="10" />
                <SkeletonText mt="4" noOfLines={2} spacing="4" />
            </HStack>
            <SkeletonText mt="4" noOfLines={5} spacing="4" />
        </Box>
    );
}

export function LoaderOfferList() {

    return <SimpleGrid minChildWidth="250px" spacing="40px">
        <LoaderOffer />
        <LoaderOffer />
        <LoaderOffer />
        <LoaderOffer />
        <LoaderOffer />
        <LoaderOffer />
        <LoaderOffer />
        <LoaderOffer />
        <LoaderOffer />
        <LoaderOffer />
    </SimpleGrid>
}