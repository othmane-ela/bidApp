import { VStack } from '@chakra-ui/layout'
import {
  Flex,
  Heading, Box, IconButton,
  useColorMode, Spacer, Wrap,
  WrapItem, Link, FormControl,
  Input, useColorModeValue,
  Stack, Button,
  useMediaQuery,
  Avatar, Menu, MenuButton, Portal,
  MenuList, MenuItem
} from '@chakra-ui/react'
import { SunIcon, MoonIcon, DragHandleIcon, Search2Icon } from '@chakra-ui/icons'


function App() {

  return (
    <div className="App">
      <Navbar />
    </div>
  );
}

export default App;


function Navbar() {

  const { colorMode, toggleColorMode } = useColorMode();
  const customeBackground = useColorModeValue("white", "#1F1F1F");
  const [isLargerThan1280] = useMediaQuery("(min-width: 1280px)")
  const isDark = colorMode === "dark";
  const user = true;

  return (
    <VStack >
      <Flex w="100%" p={2} bg={customeBackground} shadow="md" alignItems="center">
        <Box>
          <Heading ml="4" size="md" fontWeight="bold">
            Auction<Box as="span" color="green.300" >App</Box>
          </Heading>
        </Box>
        <Box>
          {isLargerThan1280 ?
            <Wrap ml={8} direction={["column", "row"]} spacing="24px">
              <WrapItem>
                <Link fontWeight="bold" textDecoration="none" _hover={{ color: 'green.300' }} >Market</Link>
              </WrapItem>
              <WrapItem>
                <Link _hover={{ color: 'green.300' }}  >Subscriptions</Link>
              </WrapItem>
              <WrapItem>
                <Link _hover={{ color: 'green.300' }} >Menu</Link>
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
                  <MenuItem><Link _hover={{ color: 'green.300' }} >Menu</Link></MenuItem>
                </MenuList>
              </Portal>
            </Menu>
          }
        </Box>
        {isLargerThan1280 ?
          <Box>
            <FormControl ml={4} id="search-global" isRequired>
              <Input placeholder="Search" borderRadius="10px" border="0" />
            </FormControl>
          </Box>
          :
          <Box>
            <IconButton mx={4} icon={<Search2Icon />} isRound="true"></IconButton>
          </Box>
        }
        <Spacer></Spacer>
        <Box>
          {user ?
            <AccountSection />
            :
            <Stack direction="row" spacing={4} align="center">
              <Button bg="green.300" variant="solid" _hover={{ backgroundColor: 'green.500' }}>
                Sign in
              </Button>
              <Button colorScheme="gray" variant="solid">
                Sign up
              </Button>
            </Stack>
          }

        </Box>
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

