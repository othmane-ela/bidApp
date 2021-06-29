import { VStack } from '@chakra-ui/layout'
import {
    Flex,
    Box, IconButton,
    useColorMode, Spacer, Wrap,
    WrapItem, Link,
    Input, useColorModeValue,
    Stack,
    useMediaQuery,
    Avatar, Menu, MenuButton, Portal,
    MenuList, MenuItem,
    Heading, InputLeftElement, InputGroup
} from '@chakra-ui/react'
import { SunIcon, MoonIcon, DragHandleIcon, Search2Icon, BellIcon, ChatIcon, CalendarIcon } from '@chakra-ui/icons'
import LoginForm from './LoginForm';
import SingupForm from './SignUpForm'

export default function Navbar() {

    const { colorMode, toggleColorMode } = useColorMode();
    const customeBackground = useColorModeValue("gray.50", "#1F1F1F");
    const SerachBackground = useColorModeValue("white", "#0F0F0F");
    const [isLargerThan1280] = useMediaQuery("(min-width: 1280px)")
    const isDark = colorMode === "dark";
    const user = true;

    return (

        <VStack width="100%">
            <Flex w="100%" p={2} bg={customeBackground} shadow="sm" alignItems="center" position="fixed" zIndex="1" >
                <Box>
                    <Heading ml="4" size="md" fontWeight="bold" fontFamily={'Quattrocento'}> Auctionarium </Heading>
                </Box>
                <Box>
                    {isLargerThan1280 ?
                        <Wrap ml={8} direction={["column", "row"]} spacing="24px">
                            <WrapItem>
                                <Link fontWeight="bold" textDecoration="none" _hover={{ color: 'green.300' }} >Market</Link>
                            </WrapItem>
                            <WrapItem>
                                <Link fontWeight="bold" _hover={{ color: 'green.300' }}>Subscriptions</Link>
                            </WrapItem>
                        </Wrap>
                        :
                        <Menu >
                            <MenuButton ml={4}>
                                <DragHandleIcon />
                            </MenuButton>
                            <Portal>
                                <MenuList bg={customeBackground}>
                                    <MenuItem><Link fontWeight="bold" textDecoration="none" _hover={{ color: 'green.300' }} >Market</Link></MenuItem>
                                    <MenuItem><Link _hover={{ color: 'green.300' }}  >Subscriptions</Link></MenuItem>
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


                {user ? <>
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
    return <Menu >
        <MenuButton ml={8}>
            <Avatar size="sm" name="Dan Abrahmov" src="https://bit.ly/sage-adebayo" />
        </MenuButton>
        <Portal>
            <MenuList bg={customeBackground}>
                <MenuItem>Profile</MenuItem>
                <MenuItem>Payment</MenuItem>
                <MenuItem>Settings</MenuItem>
                <MenuItem>Disconnect</MenuItem>
            </MenuList>
        </Portal>
    </Menu>
}




