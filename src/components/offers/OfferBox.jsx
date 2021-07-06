import React, { useState } from 'react';
import './boxes.css'
import { Box, Avatar, HStack, Heading, Stack, Text, Badge, Icon, ScaleFade } from '@chakra-ui/react'
import { GoVerified } from 'react-icons/go'
import dateFormat from 'dateformat';
import Pusher from 'pusher-js';
import { useEffect } from 'react';
import { BiUpvote } from 'react-icons/bi'
import { useHistory } from 'react-router-dom';


export default function OfferBox({ offer }) {

    const [bid, setBid] = useState(null);
    const history = useHistory();
    const id = offer.id;

    const handleProceed = (e) => {
        history.push(`/offer/${id}`);
    };

    const pusher = new Pusher('f856f46602ee2819adc2', {
        cluster: 'eu'
    });


    var channel = pusher.subscribe("add-Bid-Offer-" + offer.id);
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
    }, [channel])

    return (
        < Box className="magic-card text-center" borderRadius={4} my={4} >
            <button onClick={handleProceed} >
                <img src="https://images.unsplash.com/photo-1551913902-c92207136625?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80" alt="Single" className="magic-card__image" width="100%" />
                <div className="black-overlay"></div>
                <Box className="magic-card__text-no-wrapper">
                    <Box>
                        <HStack >
                            <Avatar name="Dan Abrahmov" src="https://bit.ly/sage-adebayo" />
                            <Heading size="xs" px={2} display="inline-block">{offer.nameSeller}</Heading><Icon color="blue.300" as={GoVerified} />
                        </HStack >
                        <Stack textAlign="left">
                            <Heading size="xs" mt={1}>{offer.name} | <StateOffer startedAt={offer.startedAt} />  </Heading>
                            <Text fontSize="14px" >{dateFormat(offer.startedAt)} | {dateFormat(offer.endAt)} </Text>
                            <HStack >
                                {bid !== null ?
                                    <ScaleFade initialScale={0.9} in={bid}>
                                        <Text fontWeight="bold"><Icon p={1} h={5} w={5} bgColor="green.300" as={BiUpvote} rounded={10} />  {bid.price} $</Text>
                                    </ScaleFade>
                                    :
                                    <Box>
                                        <Text fontWeight="bold"><Icon p={1} h={5} w={5} bgColor="green.300" as={BiUpvote} rounded={10} />  {offer.currentPrice} $</Text>
                                    </Box>
                                }
                            </HStack >
                        </Stack>
                    </Box>
                </Box>
            </button>
        </Box >
    );
}


function StateOffer({ startedAt }) {

    if (new Date() > new Date(startedAt)) {
        return <Badge mx={2} variant="solid" bg="red.600">LIVE</Badge>
    }

    return <Badge mx={2} variant="solid" bg="gray.600">Soon !</Badge>

}


