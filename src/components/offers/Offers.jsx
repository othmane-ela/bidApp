import React, { useState } from 'react';
import propTypes from 'prop-types';
import { Box, SimpleGrid, useColorModeValue, Heading, Button, Icon } from '@chakra-ui/react'
import LoaderOffers from '../../ui/loaders/LoaderOffer';
import { SiMarketo } from 'react-icons/si'


/**
 * PARENT
 * @param {*} param0 
 * @returns 
 */

export default function Offers({ offers, onDelete }) {
    return (
        <div>
            <SimpleGrid minChildWidth="200px" spacing="40px"  >
                {offers === null ? <LoaderOffers /> : <OffersList offers={offers} onDelete={onDelete} />}
            </SimpleGrid>
        </div>
    );
}

/**
 *   CHILD
 *   PARENT
 * @param {*} param0 
 * @returns 
 */
function OffersList({ offers, onDelete }) {
    const customeBackground = useColorModeValue("gray.50", "#1F1F1F");
    return (<Box>
        <Heading my={3} fontSize="xl" fontWeight="900" fontFamily={'Quattrocento'}> <Icon as={SiMarketo} w={10} h={10} p={2} /> Auctionaruim Market</Heading>
        <Box padding="6" boxShadow="sm" bg={customeBackground} >
            <ul>
                {offers.map((offer) => <Offer key={offer.id} offer={offer} onDelete={onDelete} />)}
            </ul>
        </Box>
    </Box>
    );
}

OffersList.propTypes = {
    offers: propTypes.array
};

/**
 *  CHILD
 * @param {*} param0 
 * @returns 
 */
function Offer({ offer, onDelete }) {
    const [loading, setLoading] = useState(false);
    const handleDelete = async function (e) {
        e.preventDefault();
        setLoading(true)
        await onDelete(offer)
    }
    return <li>{offer.id}
        <Button isLoading={loading} onClick={handleDelete} colorScheme="teal" variant="solid">
            Delete
        </Button>
    </li>
}