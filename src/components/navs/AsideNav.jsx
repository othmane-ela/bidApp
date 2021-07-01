import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../hooks/Contexts';
import { useColorModeValue, Box, VStack, Heading, useMediaQuery, IconButton, Icon, Spacer } from '@chakra-ui/react'
import { MdLocalOffer } from 'react-icons/md'
import ShortProfile from '../accounts/ShortProfile'
import { GiFiles } from 'react-icons/gi'
import { SiMarketo } from 'react-icons/si'
import { RiShieldUserLine } from 'react-icons/ri'




function DefaultPanel() {

    /**
     * STYLE
     */
    const customeBackground = useColorModeValue("gray.50", "#1F1F1F");
    const [isLargerThan1280] = useMediaQuery("(min-width: 1200px)")
    /**
     * DATA
     */
    const { user } = useContext(UserContext);

    return (
        <>
            {isLargerThan1280 ?
                <Box>
                    {user != null &&
                        < ShortProfile />
                    }
                    <VStack m={3} p={3} spacing={1} align="stretch" textAlign="left" borderWidth="0px" rounded={8}>
                        <Heading as="h6" size="md" p={3}>
                            Discovery
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
                                <Icon as={RiShieldUserLine} w={10} h={10} p={2} />Seller
                            </Link>
                        </Box>
                    </VStack>
                    <Spacer></Spacer>
                    <Box bgGradient="linear(to-l,  teal.500, green.500)" m={3} p={3} rounded={8} >
                        <Heading as="h6" size="md" p={3}>
                            Subscribe Now !
                        </Heading>
                        <Heading size="xl">25$ per Mounth</Heading>
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

function AsideNav() {

    const asideBackground = useColorModeValue("gray.50", "#151515");

    return (
        <Box width={"14%"} height="auto" bg={asideBackground} shadow="md" position="fixed" zIndex="0" mt="56px">
            < DefaultPanel />
        </Box >
    );
}

export default AsideNav;



