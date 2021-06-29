import React from 'react';
import { useColorModeValue, Box, VStack, Link, Heading, useMediaQuery, IconButton } from '@chakra-ui/react'
import { CopyIcon, BellIcon, ChatIcon, CalendarIcon } from "@chakra-ui/icons"
import ShortProfile from '../accounts/ShortProfile'


function AsideNav() {

    const asideBackground = useColorModeValue("gray.50", "#151515");

    return (
        <Box width={"14%"} h="100vh" bg={asideBackground} shadow="md" position="fixed" zIndex="0" mt="56px">
            < DefaultPanel />
        </Box >
    );
}

export default AsideNav;


function DefaultPanel() {

    const customeBackground = useColorModeValue("gray.50", "#1F1F1F");
    const [isLargerThan1280] = useMediaQuery("(min-width: 1200px)")
    const user = true;

    return (
        <>
            {isLargerThan1280 ?
                <Box>
                    {user &&
                        < ShortProfile />
                    }
                    <VStack m={3} p={3} spacing={1} align="stretch" textAlign="left" borderWidth="1px" rounded={8}>
                        <Heading as="h6" size="md" p={3}>
                            Discovery
                        </Heading>

                        <Link p={2} textDecoration="none" _hover={{ backgroundColor: customeBackground }} rounded={3} >
                            <CopyIcon />  Market
                        </Link>
                        <Link p={2} textDecoration="none" _hover={{ backgroundColor: customeBackground }} rounded={3}>
                            <CopyIcon />  Subscriptions
                        </Link>
                        <Link p={2} textDecoration="none" _hover={{ backgroundColor: customeBackground }} rounded={3}>
                            <CopyIcon />  Offers
                        </Link>
                    </VStack>

                </Box>
                : <VStack m={3} p={3}>
                    <Box>
                        <IconButton mx={4} icon={<BellIcon />} isRound="true"></IconButton>
                    </Box>
                    <Box>
                        <IconButton mx={4} icon={<ChatIcon />} isRound="true"></IconButton>
                    </Box>
                    <Box>
                        <IconButton mx={4} icon={<CalendarIcon />} isRound="true"></IconButton>
                    </Box>
                </VStack>

            }
        </>


    );
}