import React from 'react';
import {
    Box, Heading, Icon, Tabs, TabList, Tab, TabPanels, Center,
    TabPanel,
} from '@chakra-ui/react'
import { SiMarketo } from 'react-icons/si'
import { LoaderOffer } from '../../../ui/loaders/LoaderOffer';

function SellerOrders(props) {
    return (
        <Box ml="14%" mt={20} px={5} width="100%">
            <Heading my={3} fontSize="xl" fontWeight="900" fontFamily={'Quattrocento'}> <Icon as={SiMarketo} w={10} h={10} p={2} /> My Orders</Heading>
            <Center>
                <Tabs variant="soft-rounded" colorScheme="green" width="100%">
                    <TabList borderWidth="1px" rounded={10} p={5}>
                        <Tab>All Orders</Tab>
                        <Tab>Pending Orders</Tab>
                        <Tab>Valid Orders</Tab>
                    </TabList>
                    <TabPanels py={5}>
                        <TabPanel>
                            <LoaderOffer />
                            <LoaderOffer />
                            <LoaderOffer />
                            <LoaderOffer />
                        </TabPanel>
                        <TabPanel>

                        </TabPanel>
                        <TabPanel >

                        </TabPanel>
                        <TabPanel>

                        </TabPanel>
                        <TabPanel>

                        </TabPanel>
                    </TabPanels>
                </Tabs >
            </Center>
        </Box>
    );
}

export default SellerOrders;