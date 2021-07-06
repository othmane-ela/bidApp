import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../hooks/contexts';
import { useColorModeValue, Box, VStack, Heading, useMediaQuery, IconButton, Icon } from '@chakra-ui/react'
import { MdLocalOffer } from 'react-icons/md'
import ShortProfile from '../accounts/ShortProfile'
import { GiFiles } from 'react-icons/gi'
import { SiMarketo } from 'react-icons/si'
import { RiShieldUserLine } from 'react-icons/ri'
import { FaWarehouse, FaFileInvoiceDollar, FaBoxes } from 'react-icons/fa'
import { RiCompassDiscoverFill } from 'react-icons/ri'



function DefaultPanel() {

    /**
     * STYLE
     */
    const customeBackground = useColorModeValue("gray.50", "#1F1F1F");
    const [isLargerThan1280] = useMediaQuery("(min-width: 1200px)")
    /**
     * DATA
     */

    return (
        <>
            {isLargerThan1280 ?
                <Box>
                    {/* BUYER AND DEFAULT PANEL  */}
                    <VStack m={3} p={3} spacing={1} align="stretch" textAlign="left" borderWidth="0px" rounded={8}>
                        <Heading as="h6" size="md" p={3}>
                            <Icon as={RiCompassDiscoverFill} w={10} h={10} p={2} />Discovery
                        </Heading>
                        <Box p={2} textDecoration="none" _hover={{ backgroundColor: customeBackground }} rounded={3} >
                            <Link to="/market">
                                <Icon as={SiMarketo} w={10} h={10} p={2} />Market
                            </Link>
                        </Box>
                        <Box p={2} textDecoration="none" _hover={{ backgroundColor: customeBackground }} rounded={3} >
                            <Link to="/subscriptions">
                                <Icon as={GiFiles} w={10} h={10} p={2} />Subscriptions
                            </Link>
                        </Box>
                        <Box p={2} textDecoration="none" _hover={{ backgroundColor: customeBackground }} rounded={3} >
                            <Link to="/sellers">
                                <Icon as={RiShieldUserLine} w={10} h={10} p={2} />Sellers
                            </Link>
                        </Box>
                    </VStack>
                    <VStack m={3} p={3} spacing={1} align="stretch" textAlign="left" borderWidth="0px" rounded={8}>
                        <Heading as="h6" size="md" p={3}>
                            <Icon as={RiCompassDiscoverFill} w={10} h={10} p={2} />Discovery
                        </Heading>
                        <Box p={2} textDecoration="none" _hover={{ backgroundColor: customeBackground }} rounded={3} >
                            <Link to="/market">
                                <Icon as={SiMarketo} w={10} h={10} p={2} />Market
                            </Link>
                        </Box>
                        <Box p={2} textDecoration="none" _hover={{ backgroundColor: customeBackground }} rounded={3} >
                            <Link to="/subscriptions">
                                <Icon as={GiFiles} w={10} h={10} p={2} />Subscriptions
                            </Link>
                        </Box>
                        <Box p={2} textDecoration="none" _hover={{ backgroundColor: customeBackground }} rounded={3} >
                            <Link to="/sellers">
                                <Icon as={RiShieldUserLine} w={10} h={10} p={2} />Sellers
                            </Link>
                        </Box>
                    </VStack>
                    <Box bgGradient="linear(to-l,  teal.500, green.700)" my={20} mx={5} p={3} rounded={8} >
                        <Heading as="h6" size="md" p={3}>
                            Subscribe Now
                        </Heading>
                        <Heading size="xl" p={3}>25$ per Mounth</Heading>
                    </Box>
                </Box>
                : <VStack m={3} p={3}>
                    <Box>
                        <IconButton mx={4} icon={SiMarketo} isRound="true"></IconButton>
                    </Box>
                    <Box>
                        <IconButton mx={4} icon={MdLocalOffer} isRound="true"></IconButton>
                    </Box>
                    <Box>
                        <IconButton mx={4} icon={GiFiles} isRound="true"></IconButton>
                    </Box>
                </VStack>
            }
        </>
    );
}


function SellerPanel() {

    const customeBackground = useColorModeValue("gray.50", "#1F1F1F");
    const [isLargerThan1280] = useMediaQuery("(min-width: 1200px)")


    return <VStack mb={20} p={3} spacing={1} align="stretch" textAlign="left" borderWidth="0px" rounded={8}>
        {isLargerThan1280 ?
            <Box>
                < ShortProfile />
                <Heading as="h6" size="md" p={3}>
                    <Icon as={FaWarehouse} w={10} h={10} p={2} />Warehouse
                </Heading>

                <Box p={2} textDecoration="none" _hover={{ backgroundColor: customeBackground }} rounded={3} >
                    <Link to="/subscriptions">
                        <Icon as={GiFiles} w={10} h={10} p={2} />Offers
                    </Link>
                </Box>

                <Box p={2} textDecoration="none" _hover={{ backgroundColor: customeBackground }} rounded={3} >
                    <Link to="/market">
                        <Icon as={FaBoxes} w={10} h={10} p={2} />Items
                    </Link>
                </Box>

                <Box p={2} textDecoration="none" _hover={{ backgroundColor: customeBackground }} rounded={3} >
                    <Link to="/sellers">
                        <Icon as={FaFileInvoiceDollar} w={10} h={10} p={2} />Orders
                    </Link>
                </Box>
            </Box>
            :
            <VStack m={3} p={3}>
                <Box>
                    <IconButton mx={4} icon={SiMarketo} isRound="true"></IconButton>
                </Box>
                <Box>
                    <IconButton mx={4} icon={MdLocalOffer} isRound="true"></IconButton>
                </Box>
                <Box>
                    <IconButton mx={4} icon={GiFiles} isRound="true"></IconButton>
                </Box>
            </VStack>
        }

    </VStack>
}


function BuyerPanel() {
    return < ShortProfile />
}

export default function AsideNav() {
    const { user } = useContext(UserContext);
    const customeBackground = useColorModeValue("gray.50", "#151515");
    const customeScrollBackground = useColorModeValue("#e2e2e2", "#2a2a2a");
    return (
        <Box width={"14%"} height="100vh" position="fixed" zIndex="0" mt="56px" bg={customeBackground} overflow="auto" css={{
            '&::-webkit-scrollbar': {
                width: '10px',
            },
            '&::-webkit-scrollbar-track': {
                width: '10px',
                boxShadow: 'inset 0 0 5px ' + customeScrollBackground,
            },
            '&::-webkit-scrollbar-thumb': {
                background: customeScrollBackground,
                borderRadius: '24px',
            },
        }} >
            {user && user.type === 'Seller' && <SellerPanel />}
            {user && user.type === 'Buyer' && <><BuyerPanel /><DefaultPanel /></>}
            {!user && < DefaultPanel />}
        </Box >
    );
}



