import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Stack, Flex, Container, Image, Heading, Text, Avatar, Tabs, TabList, Tab, TabPanels, TabPanel, useColorModeValue, Icon, StatGroup, Stat, StatLabel, StatNumber, StatHelpText, StatArrow } from '@chakra-ui/react'
import { apiFetch } from './../../../utils/api'
import { IoAnalyticsSharp, IoSearchSharp } from 'react-icons/io5'
import { AiOutlineDollar } from 'react-icons/ai'
import Pusher from 'pusher-js';


export default function OfferDetails() {

    const [bid, setBid] = useState(null);
    const [offer, setOffer] = useState(null)
    const { id } = useParams();
    const pusher = new Pusher('f856f46602ee2819adc2', {
        cluster: 'eu'
    });

    const idOffer = offer ? offer.id : null;

    var channel = pusher.subscribe("add-Bid-Offer-" + idOffer);
    useEffect(function () {
        try {
            channel.bind('newBid', function (data) {
                setBid(data.Bid);
            })
        }
        catch (e) {
            setBid(false);
            console.error(e);
        }
    }, [offer, channel])

    useEffect(() => {
        apiFetch("/offer/" + id)
            .then(setOffer)
            .catch((e) => { setOffer(false) })
    }, [id])

    if (offer === null) {
        return null;
    }


    return (
        <Box w="100%" ml="14%" mt={20} >
            <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}  >
                <Flex flex={1}>
                    <Container minW="xl">
                        <Image
                            width="100%"
                            rounded={5}
                            objectFit="cover"
                            src="https://images.unsplash.com/photo-1584254520639-ea67b9b108de?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTR8fGF1Y3Rpb25zfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60"
                            alt="Segun Adebayo"
                        />
                    </Container>
                </Flex>
                <Flex flex={1} >
                    <Stack as={Box}>
                        <Box>
                            <Heading fontFamily={'Quattrocento'}
                                fontWeight={600}
                                lineHeight={'110%'} display="inline">
                                {offer.name}
                            </Heading>

                        </Box>

                        <Box py={3} width="70%" textAlign="justify" mx="auto" >
                            <Text fontWeight="bold"><Text as="span"></Text>{offer.description}</Text>
                        </Box>
                        <BidOption currentPrice={offer.currentPrice} lastBid={bid} />
                        <Box py={3} width="70%" textAlign="justify" mx="auto">
                            <Discover offer={offer} bid={bid} />
                        </Box>
                    </Stack>
                </Flex>
            </Stack>
        </Box >
    );
}



function Discover({ offer, bid }) {
    return <Tabs variant="soft-rounded" colorScheme="green">
        <TabList borderWidth="1px" rounded={10} p={5}>
            <Tab>Info</Tab>
            <Tab>Owner</Tab>
            <Tab>History</Tab>
            <Tab>Bids</Tab>
            <Tab>Comments</Tab>
        </TabList>
        <TabPanels py={5}>
            <TabPanel>
                <Information currentPrice={offer.currentPrice} lastBid={bid} />
            </TabPanel>
            <TabPanel >
                <Owner seller={offer.nameSeller} />
            </TabPanel>
            <TabPanel>
                <History description={offer.description} />
            </TabPanel>
            <TabPanel>
                {<Bids offerId={offer.id} />}
            </TabPanel>
            <TabPanel>

            </TabPanel>
        </TabPanels>
    </Tabs >
}


function Bids({ offerId }) {

    const [bids, setBids] = useState([]);

    useEffect(() => {
        apiFetch("/offer/" + offerId + "/bid")
            .then(setBids)
            .catch((e) => { setBids(false) })
    }, [offerId])


    return <Container maxW={'5xl'} p={3} >
        <Stack spacing={4} width="100%">
            <Text
                color={'blue.400'}
                fontWeight={600}
                fontSize={'sm'}
                bg={useColorModeValue('blue.50', 'blue.900')}
                p={2}
                alignSelf={'flex-start'}
                rounded={'md'}>
                Bids
            </Text>
            {bids && bids.map((bid) =>
                <Flex key={bid.id} direction="row">
                    <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />
                    <Heading fontSize="md" px={3} >{bid.nameBuyer}
                        <Text fontSize="3xl" fontWeight="900">
                            {bid.price} $
                        </Text>
                    </Heading>
                </Flex>
            ).reverse()}

        </Stack>
    </Container>
}





/**
 *  CHILDS OF TABS
 * @returns 
 */


function History({ description }) {
    return <Container maxW={'5xl'} p={3} >

        <Stack spacing={4} width="100%">
            <Text
                color={'blue.400'}
                fontWeight={600}
                fontSize={'sm'}
                bg={useColorModeValue('blue.50', 'blue.900')}
                p={2}
                alignSelf={'flex-start'}
                rounded={'md'}>
                History
            </Text>
            <Text fontWeight="bold"><Text as="span"></Text>{description}</Text>
        </Stack>

    </Container>
}





function Owner({ seller }) {
    return <Container maxW={'5xl'} p={3} >

        <Stack spacing={4}>
            <Text

                color={'blue.400'}
                fontWeight={600}
                fontSize={'sm'}
                bg={useColorModeValue('blue.50', 'blue.900')}
                p={2}
                alignSelf={'flex-start'}
                rounded={'md'}>
                Owner
            </Text>
            <Flex direction="row">
                <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />
                <Heading fontSize="md" p={3} >{seller}</Heading>
            </Flex>
        </Stack>

    </Container>
}


function Information({ currentPrice, lastBid }) {

    const price = lastBid !== null ? lastBid.price : currentPrice;

    return <Container maxW={'5xl'} p={3} >
        <Stack spacing={4}>
            <Text
                color={'blue.400'}
                fontWeight={600}
                fontSize={'sm'}
                bg={useColorModeValue('blue.50', 'blue.900')}
                p={2}
                alignSelf={'flex-start'}
                rounded={'md'}>
                Our Story
            </Text>
            <Feature
                icon={<Icon as={IoAnalyticsSharp} color={'green.900'} w={5} h={5} />}
                iconBg={useColorModeValue('yellow.100', 'yellow.500')}
                text={'Cuurent Price ' + price + '$'}
            />
            <Feature
                icon={<Icon as={AiOutlineDollar} color={'green.500'} w={5} h={5} />}
                iconBg={useColorModeValue('green.100', 'green.900')}
                text={'Start Price '}
            />
            <Feature
                icon={
                    <Icon as={IoSearchSharp} color={'purple.500'} w={5} h={5} />
                }
                iconBg={useColorModeValue('purple.100', 'purple.900')}
                text={'Market Analysis'}
            />
        </Stack>

    </Container>
}



function Feature({ text, icon, iconBg }) {
    return (
        <Stack direction={'row'} align={'center'}>
            <Flex
                w={8}
                h={8}
                align={'center'}
                justify={'center'}
                rounded={'full'}
                bg={iconBg}>
                {icon}
            </Flex>
            <Text >
                {text}
            </Text>
        </Stack>
    );
};

function BidOption({ currentPrice, lastBid }) {

    const price = lastBid !== null ? lastBid.price : currentPrice;


    return <Box w="100%" ml="14%" mt={20}>
        <StatGroup >
            <Stat>
                <StatLabel>Dollars</StatLabel>
                <StatNumber>{price}</StatNumber>
                <StatHelpText>
                    <StatArrow type="increase" />
                    23.36%
                </StatHelpText>
            </Stat>

            <Stat>
                <StatLabel>Clicked</StatLabel>
                <StatNumber>45</StatNumber>
                <StatHelpText>
                    <StatArrow type="decrease" />
                    9.05%
                </StatHelpText>
            </Stat>
        </StatGroup>
    </Box>
}