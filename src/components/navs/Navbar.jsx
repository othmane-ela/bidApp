import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { apiFetch } from './../../utils/api'
import { UserContext } from '../../hooks/contexts'
import { VStack } from '@chakra-ui/layout'
import {
    Flex,
    Box, IconButton,
    useColorMode, Spacer, Wrap,
    WrapItem,
    Input, useColorModeValue,
    Stack,
    useMediaQuery,
    Avatar, Menu, MenuButton, Portal,
    MenuList, MenuItem,
    Heading, InputLeftElement, InputGroup
} from '@chakra-ui/react'
import { SunIcon, MoonIcon, DragHandleIcon, Search2Icon, BellIcon, ChatIcon, CalendarIcon } from '@chakra-ui/icons'
import LoginForm from '../accounts/LoginForm';
import SingupForm from '../accounts/SignUpForm'




export default function Navbar() {

    /**
     * STYLE
     */
    const { colorMode, toggleColorMode } = useColorMode();
    const customeBackground = useColorModeValue("gray.50", "#1F1F1F");
    const SerachBackground = useColorModeValue("white", "#0F0F0F");
    const [isLargerThan1280] = useMediaQuery("(min-width: 1280px)")
    const isDark = colorMode === "dark";
    const primarycolor = useColorModeValue("#38a169", "#9ae6b4");

    const hoverStyle = {
        fontWeight: "bold",
        color: primarycolor
    }
    /**
    * DATA
    */
    const { user } = useContext(UserContext);

    return (
        <VStack width="100%">
            <Flex w="100%" p={2} bg={customeBackground} shadow="sm" alignItems="center" position="fixed" zIndex="1" >
                <Box>

                    <Heading ml="4" size="md" fontWeight="900" fontFamily={'Quattrocento'}><Link to="/">Auctionaruim</Link></Heading>
                </Box>
                <Box>
                    {isLargerThan1280 ?
                        <Wrap ml={8} direction={["column", "row"]} spacing="24px">
                            <WrapItem>
                                <NavLink to="/market" activeStyle={hoverStyle}  >
                                    Market
                                </NavLink>
                            </WrapItem>
                            {user !== null && user !== false ?
                                <>
                                    <WrapItem>
                                        <NavLink to="/sellers" activeStyle={hoverStyle} >
                                            Sellers
                                        </NavLink>
                                    </WrapItem>
                                </>
                                :
                                <WrapItem>
                                    <NavLink to="/subscriptions" activeStyle={hoverStyle}  >
                                        Subscriptions
                                    </NavLink>
                                </WrapItem>
                            }

                        </Wrap>
                        :
                        <Menu >
                            <MenuButton ml={4}>
                                <DragHandleIcon />
                            </MenuButton>
                            <Portal>
                                <MenuList bg={customeBackground}>
                                    <MenuItem><Link to="/market" >Market</Link></MenuItem>
                                    <MenuItem><Link to="/subscriptions" >Subscriptions</Link></MenuItem>
                                </MenuList>
                            </Portal>
                        </Menu>
                    }
                </Box>
                {isLargerThan1280 ?
                    <Spacer>
                        <Box >
                            <InputGroup ml={4} id="search-global">
                                <InputLeftElement
                                    pointerEvents="none"
                                    children={<Search2Icon />} />
                                <Input placeholder="Search" borderRadius="10px" border="0" bg={SerachBackground} />
                            </InputGroup>
                        </Box>
                    </Spacer>
                    :
                    <Box>
                        <IconButton mx={4} icon={<Search2Icon />} isRound="true">S</IconButton>
                    </Box>
                }
                <Spacer></Spacer>


                {user != null && user !== false ? <>
                    {isLargerThan1280 &&
                        <>
                            <Box>
                                <IconButton mx={4} icon={<BellIcon />} isRound="true"></IconButton>
                            </Box>
                            <Box>
                                <IconButton mx={4} icon={<ChatIcon />} isRound="true"></IconButton>
                            </Box>
                            <Box>
                                <IconButton mx={4} icon={<CalendarIcon />} isRound="true"></IconButton>
                            </Box>
                        </>
                    }
                    <Box>
                        <AccountSection />
                    </Box>

                </>
                    :
                    <Stack direction="row" spacing={4} align="center">
                        <LoginForm />
                        <SingupForm />
                    </Stack>
                }

                <Box>
                    <IconButton mx={4} icon={isDark ? <SunIcon /> : <MoonIcon />} isRound="true" onClick={toggleColorMode}></IconButton>
                </Box>

            </Flex>
        </VStack>
    );
}


function AccountSection() {
    const customeBackground = useColorModeValue("white", "#1F1F1F");
    const { setAuthorization, user } = useContext(UserContext);

    const handleClick = function (e) {
        e.preventDefault();
        apiFetch("/logoff", { method: 'POST' })
            .then(setAuthorization)
            .catch((message) => console.log(message))
    }
    return <Menu >
        <MenuButton ml={8}>
            {
                user.type === 'Seller' ? <Avatar size="sm" name="Dan Abrahmov" src="https://bit.ly/sage-adebayo" />
                    :
                    <Avatar size="sm" name="Dan Abrahmov" src="https://bit.ly/kent-c-dodds" />
            }
        </MenuButton>
        <Portal>
            <MenuList bg={customeBackground}>
                <Link to="/profile">
                    <MenuItem>
                        Profile
                    </MenuItem>
                </Link>
                <MenuItem>Payment</MenuItem>
                <MenuItem>Settings</MenuItem>
                <form>
                    <MenuItem onClick={handleClick}>Disconnect</MenuItem>
                </form>
            </MenuList>
        </Portal>
    </Menu>
}




