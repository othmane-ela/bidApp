import React, { useEffect, useState } from 'react';
import { Box, Stack, Flex, Container, Image, Heading, Text, Tabs, TabList, Tab, TabPanels, TabPanel } from '@chakra-ui/react'
import { useParams } from 'react-router-dom';
import { apiFetch } from './../../../utils/api'


export default function OfferDetails() {

    const [offer, setOffer] = useState(null)
    const { id } = useParams();


    useEffect(() => {
        apiFetch("/offer/" + id)
            .then(setOffer)
            .catch((e) => { setOffer(false) })
    }, [id])

    if (offer === null) {
        return null;
    }


    return (
        <Box ml="14%" p={36}>
            <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}  >
                <Flex flex={1}>
                    <Container minW="xl">
                        <Image
                            rounded={5}
                            objectFit="cover"
                            src="https://images.unsplash.com/photo-1584254520639-ea67b9b108de?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTR8fGF1Y3Rpb25zfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60"
                            alt="Segun Adebayo"
                        />
                    </Container>
                </Flex>
                <Flex flex={1} justify={'center'} px={10}>
                    <Stack as={Box}>
                        <Heading fontFamily={'Quattrocento'}
                            fontWeight={600}
                            lineHeight={'110%'}>
                            {offer.name}
                        </Heading>
                        <Box py={3}>
                            <Text fontWeight="bold">Description : {offer.description}</Text>
                        </Box>
                        <Box>
                            <Discover offer={offer} />
                        </Box>
                    </Stack>
                </Flex>
            </Stack>
        </Box >
    );
}



function Discover({ offer }) {
    return <Tabs variant="soft-rounded" colorScheme="green" mx="auto">
        <TabList>
            <Tab>Info</Tab>
            <Tab>Owner</Tab>
            <Tab>History</Tab>
            <Tab>Bids</Tab>
        </TabList>
        <TabPanels py={5}>
            <TabPanel borderWidth="1px" rounded={'lg'}>
                <p>Info!</p>
            </TabPanel>
            <TabPanel borderWidth="1px" rounded={'lg'}>
                <p>Owner!</p>
            </TabPanel>
            <TabPanel borderWidth="1px" rounded={'lg'}>
                <p>History!</p>
            </TabPanel>
            <TabPanel borderWidth="1px" rounded={'lg'}>
                <p>Bids!</p>
            </TabPanel>
        </TabPanels>
    </Tabs >
}