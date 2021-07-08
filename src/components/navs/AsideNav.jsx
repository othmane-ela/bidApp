import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../../hooks/contexts';
import { useColorModeValue, Box, VStack, Heading, useMediaQuery, IconButton, Icon } from '@chakra-ui/react'
import { MdLocalOffer } from 'react-icons/md'
import ShortProfile from '../accounts/ShortProfile'
import { GiFiles } from 'react-icons/gi'
import { SiMarketo } from 'react-icons/si'
import { RiShieldUserLine, RiUserFollowLine } from 'react-icons/ri'
import { FaWarehouse, FaFileInvoiceDollar, FaBoxes } from 'react-icons/fa'
import { RiCompassDiscoverFill } from 'react-icons/ri'
import { BiPurchaseTagAlt } from 'react-icons/bi'
import { CgShortcut } from 'react-icons/cg'
import { AiOutlineFileDone } from 'react-icons/ai'


function DefaultPanel() {

    /**
     * STYLE
     */
    const customeBackground = useColorModeValue("gray.50", "#1F1F1F");
    const [isLargerThan1280] = useMediaQuery("(min-width: 1200px)")
    const primarycolor = useColorModeValue("#38a169", "#9ae6b4");

    const hoverStyle = {
        fontWeight: "bold",
        color: primarycolor
    }
    /**
     * DATA
     */

    return (
        <>
            {isLargerThan1280 ?
                <Box>
                    {/* BUYER AND DEFAULT PANEL  */}
                    <VStack spacing={1} align="stretch" textAlign="left" borderWidth="0px" rounded={8}>
                        <Heading as="h6" size="md" p={3}>
                            <Icon as={RiCompassDiscoverFill} w={10} h={10} p={2} />Discovery
                        </Heading>
                        <Box p={3} textDecoration="none" _hover={{ backgroundColor: customeBackground }} rounded={3} >
                            <NavLink to="/market" activeStyle={hoverStyle} >
                                <Icon as={SiMarketo} w={10} h={10} p={2} />Market
                            </NavLink>
                        </Box>
                        <Box p={3} textDecoration="none" _hover={{ backgroundColor: customeBackground }} rounded={3} >
                            <NavLink to="/sellers" activeStyle={hoverStyle}>
                                <Icon as={RiShieldUserLine} w={10} h={10} p={2} />Sellers
                            </NavLink>
                        </Box>
                        <Box p={3} textDecoration="none" _hover={{ backgroundColor: customeBackground }} rounded={3} >
                            <NavLink to="/subscriptions" activeStyle={hoverStyle} >
                                <Icon as={GiFiles} w={10} h={10} p={2} />Subscriptions
                            </NavLink>
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
    const primarycolor = useColorModeValue("#38a169", "#9ae6b4");

    const hoverStyle = {
        fontWeight: "bold",
        color: primarycolor
    }

    return <VStack mb={20} spacing={1} align="stretch" textAlign="left" borderWidth="0px" rounded={8}>
        {isLargerThan1280 ?
            <Box>
                <Heading as="h6" size="md" p={3}>
                    <Icon as={FaWarehouse} w={10} h={10} p={2} />Warehouse
                </Heading>

                <Box p={3} textDecoration="none" _hover={{ backgroundColor: customeBackground }} rounded={3} >
                    <NavLink to="/offers" activeStyle={hoverStyle}>
                        <Icon as={GiFiles} w={10} h={10} p={2} />My Offers
                    </NavLink>
                </Box>

                <Box p={3} textDecoration="none" _hover={{ backgroundColor: customeBackground }} rounded={3} >
                    <NavLink to="/items" activeStyle={hoverStyle}>
                        <Icon as={FaBoxes} w={10} h={10} p={2} />Items
                    </NavLink>
                </Box>

                <Box p={3} textDecoration="none" _hover={{ backgroundColor: customeBackground }} rounded={3} >
                    <NavLink to="/orders" activeStyle={hoverStyle}>
                        <Icon as={FaFileInvoiceDollar} w={10} h={10} p={2} />Orders
                    </NavLink>
                </Box>
                <Box p={3} textDecoration="none" _hover={{ backgroundColor: customeBackground }} rounded={3} >
                    <NavLink to="/subscription" activeStyle={hoverStyle}>
                        <Icon as={AiOutlineFileDone} w={10} h={10} p={2} />My Subscription
                    </NavLink>
                </Box>
                <BuyerPanel />
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


    const customeBackground = useColorModeValue("gray.50", "#1F1F1F");
    const [isLargerThan1280] = useMediaQuery("(min-width: 1200px)")
    const primarycolor = useColorModeValue("#38a169", "#9ae6b4");

    const hoverStyle = {
        fontWeight: "bold",
        color: primarycolor
    }



    return <VStack spacing={1} align="stretch" textAlign="left" borderWidth="0px" rounded={8}>
        {isLargerThan1280 ?
            <Box>
                <Heading as="h6" size="md" p={3}>
                    <Icon as={CgShortcut} w={10} h={10} p={2} />Shortcuts
                </Heading>

                <Box p={3} textDecoration="none" _hover={{ backgroundColor: customeBackground }} rounded={3} >
                    <NavLink to="/purchases" activeStyle={hoverStyle}>
                        <Icon as={BiPurchaseTagAlt} w={10} h={10} p={2} /> Purchases
                    </NavLink>
                </Box>

                <Box p={3} textDecoration="none" _hover={{ backgroundColor: customeBackground }} rounded={3} >
                    <NavLink to="/sellers/follow" activeStyle={hoverStyle}>
                        <Icon as={RiUserFollowLine} w={10} h={10} p={2} /> Sellers
                    </NavLink>
                </Box>
            </Box>
            :
            <VStack p={3}>
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

            {user && user.type === 'Seller' && <> <ShortProfile /><SellerPanel /> </>}
            {user && user.type === 'Buyer' && <> <ShortProfile /> <BuyerPanel /> <DefaultPanel /></>}
            {!user && < DefaultPanel />}
        </Box >
    );
}



