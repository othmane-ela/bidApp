import React, { useContext } from "react"
import { UserContext } from "../../../hooks/contexts";
import {
    Heading,
    Avatar,
    Box,
    Center,
    Text,
    Stack,
    Link,
    Badge,
    useColorModeValue, Tabs, TabList, Tab, TabPanels, TabPanel
} from '@chakra-ui/react';
import { LoaderOfferList } from "../../../ui/loaders/LoaderOffer";

export default function Profile() {

    const customeBackground = useColorModeValue("white", "#1F1F1F");
    const { user } = useContext(UserContext);
    return (
        <Box ml="14%" mt={19} w="100%">
            <Center pt={6}>
                <Box
                    w={'full'}
                    bg={customeBackground}
                    rounded={'lg'}
                    p={10}
                    textAlign={'center'}>
                    {user.type === 'Seller' ?
                        <Avatar
                            size={'xl'}

                            src={
                                'https://bit.ly/sage-adebayo'

                            }
                            alt={'Avatar Alt'}
                            mb={4}
                            pos={'relative'}
                            _after={{
                                content: '""',
                                w: 4,
                                h: 4,
                                bg: 'green.300',
                                border: '2px solid white',
                                rounded: 'full',
                                pos: 'absolute',
                                bottom: 0,
                                right: 3,
                            }}
                        />
                        :
                        <Avatar
                            size={'xl'}

                            src={
                                'https://bit.ly/kent-c-dodds'
                            }
                            alt={'Kent Dodds'}
                            mb={4}
                            pos={'relative'}
                            _after={{
                                content: '""',
                                w: 4,
                                h: 4,
                                bg: 'green.300',
                                border: '2px solid white',
                                rounded: 'full',
                                pos: 'absolute',
                                bottom: 0,
                                right: 3,
                            }}
                        />

                    }
                    <Heading fontSize={'2xl'} fontFamily={'body'}>
                        {user.firstName} {user.lastName}
                    </Heading>
                    <Text fontWeight={600} color={'gray.500'} mb={4}>
                        @{user.userName}
                    </Text>
                    <Stack align={'center'} justify={'center'} direction={'row'} mt={1} mb={3}>
                        <Badge
                            px={2}
                            py={1}
                            fontWeight={'400'}>
                            {user.type}
                        </Badge>
                    </Stack>
                    <Text
                        textAlign={'center'}
                        color={useColorModeValue('gray.700', 'gray.400')}
                        px={3}>
                        Developer, musician, and artist. PM for work inquires or{' '}
                        <Link href={'#'} color={'blue.400'}>
                            #tag
                        </Link>{' '}
                        me in your posts
                    </Text>

                    <Stack direction={'row'} justify={'center'} spacing={6}>
                        <Stack spacing={0} align={'center'}>
                            <Text fontWeight={600}>23k</Text>
                            <Text fontSize={'sm'} color={'gray.500'}>
                                Followers
                            </Text>
                        </Stack>
                        <Stack spacing={0} align={'center'}>
                            <Text fontWeight={600}>50</Text>
                            <Text fontSize={'sm'} color={'gray.500'}>
                                Offers
                            </Text>
                        </Stack>
                    </Stack>
                </Box>
            </Center>
            <Center>
                <Tabs width="100%" colorScheme="green">
                    <TabList bg={customeBackground} px="37%">
                        <Tab>Bio</Tab>
                        <Tab>Offers</Tab>
                        <Tab>Items</Tab>
                        <Tab>Followers</Tab>
                        <Tab>Orders</Tab>
                    </TabList>

                    <TabPanels>
                        <TabPanel>
                            <p>Bio!</p>
                        </TabPanel>
                        <TabPanel>
                            <LoaderOfferList />
                        </TabPanel>
                        <TabPanel>
                            <p>Items!</p>
                        </TabPanel>
                        <TabPanel>
                            <p>Followers!</p>
                        </TabPanel>
                        <TabPanel>
                            <p>Orders!</p>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Center>
        </Box>
    );
}
