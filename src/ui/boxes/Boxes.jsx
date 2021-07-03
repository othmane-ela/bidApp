import React from 'react';
import './boxes.css'
import { Box, Avatar, HStack, Heading, Stack, Text, Badge } from '@chakra-ui/react'

export function OfferBox() {
    return (
        <Box className="magic-card text-center" borderRadius={4} my={4}>
            <img src="https://images.unsplash.com/photo-1551913902-c92207136625?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80" alt="Single" className="magic-card__image" width="100%" />
            <div className="black-overlay"></div>
            <Box className="magic-card__text-no-wrapper">
                <Box>
                    <HStack >
                        <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
                        <Heading size="xs" px={2}>Mr John Matue</Heading>
                    </HStack >
                    <Stack textAlign="left">
                        <Heading size="sm" as="h2" display="block" my={1}>Old Car | Country<Badge mx={2} variant="solid" bg="red.600">LIVE</Badge></Heading>
                        <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum optio</Text>
                        <HStack >

                        </HStack >
                    </Stack>
                </Box>
            </Box>
        </Box>
    );
}

export function OfferBoxCarousel() {
    return (
        <Box className="magic-card text-center" borderRadius={4}>
            <img src="https://images.unsplash.com/photo-1551913902-c92207136625?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80" alt="Single" className="magic-card__image" width="100%" />
            <div className="black-overlay"></div>
        </Box>
    );
}