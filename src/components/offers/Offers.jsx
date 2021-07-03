import React, { } from 'react';
import { OfferBox } from './../../ui/boxes/Boxes'
import propTypes from 'prop-types';
import {
    Box, SimpleGrid, Heading, Icon, Badge
} from '@chakra-ui/react'
import { LoaderOfferList } from '../../ui/loaders/LoaderOffer';
import { SiMarketo } from 'react-icons/si'


/**
 * PARENT
 * @param {*} param0 
 * @returns 
 */

export default function Offers({ offers, onDelete }) {
    return (
        <Box>
            <Heading my={3} fontSize="xl" fontWeight="900" fontFamily={'Quattrocento'}> <Icon as={SiMarketo} w={10} h={10} p={2} /> Offers <Badge mx={2} py={1} px={2} variant="solid" bg="red.600">LIVE</Badge></Heading>
            {offers === null ? < LoaderOfferList /> : <OffersList offers={offers} onDelete={onDelete} />}
        </Box>
    );
}

/**
 *   CHILD
 *   PARENT
 * @param {*} param0 
 * @returns 
 */
function OffersList({ offers, onDelete }) {

    return (
        <SimpleGrid minChildWidth="250px" >
            {offers.map((offer) => <Offer key={offer.id} offer={offer} onDelete={onDelete} />)}
        </SimpleGrid>
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

    return <OfferBox />

}



/*
          const [loading, setLoading] = useState(false);
            const handleDelete = async function (e) {
        e.preventDefault();
        setLoading(true)
        await onDelete(offer)
    }
            {JSON.stringify(offer)}
        <Button isLoading={loading} onClick={handleDelete} colorScheme="teal" variant="solid">
            Delete
        </Button>
        Box
    **/