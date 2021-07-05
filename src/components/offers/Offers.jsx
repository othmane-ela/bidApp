import React, { } from 'react';
import OfferBox from './../../ui/boxes/OfferBox'
import propTypes from 'prop-types';
import {
    Box, SimpleGrid, Heading, Icon, Badge
} from '@chakra-ui/react'
import { LoaderOfferList } from '../../ui/loaders/LoaderOffer';
import { SiMarketo } from 'react-icons/si'
import dateFormat from 'dateformat'

/**
 * PARENT
 * @param {*} param0 
 * @returns 
 */

export default function Offers({ offers }) {
    return (
        <Box>
            {offers === null ? < LoaderOfferList /> : <> <LiveOffersList offers={offers} /> <SoonOffersList offers={offers} /> </>}
        </Box>
    );
}

/**
 *   CHILD
 *   PARENT
 * @param {*} param0 
 * @returns 
 */
function LiveOffersList({ offers }) {

    return (
        <>
            <Heading my={3} fontSize="xl" fontWeight="900" fontFamily={'Quattrocento'}> <Icon as={SiMarketo} w={10} h={10} p={2} /> Offers <Badge mx={2} py={1} px={2} variant="solid" bg="red.600">LIVE</Badge></Heading>
            <SimpleGrid minChildWidth="250px" >
                {offers.filter(offer => dateFormat(new Date()) >= dateFormat(offer.startedAt)).map(liveOffer =>
                    <OfferBox key={liveOffer.id} offer={liveOffer} />
                )}
            </SimpleGrid>
        </>
    );
}


function SoonOffersList({ offers }) {
    return (
        <>
            <Heading my={3} fontSize="xl" fontWeight="900" fontFamily={'Quattrocento'}> <Icon as={SiMarketo} w={10} h={10} p={2} /> Offers <Badge mx={2} py={1} px={2} variant="solid" bg="gray.600">Soon !</Badge></Heading>
            <SimpleGrid minChildWidth="250px" >
                {offers.filter(offer => dateFormat(new Date()) <= dateFormat(offer.startedAt)).map(soonOffer =>
                    <OfferBox key={soonOffer.id} offer={soonOffer} />
                )}
            </SimpleGrid>
        </>
    );
}

LiveOffersList.propTypes = {
    offers: propTypes.array
};


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