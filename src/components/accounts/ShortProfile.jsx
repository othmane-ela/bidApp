import React, { useContext } from 'react'
import { UserContext } from '../../hooks/contexts';
import Deposit from './../deposit/Deposit';
import {
    Heading,
    Avatar,
    Box,
    Center,
    Text,
    Stack,
    Button,
    Badge,
    VStack,
} from '@chakra-ui/react';

export default function ShortProfile() {
    const { user } = useContext(UserContext);
    return (
        <VStack m={4} spacing={1} align="stretch" textAlign="left" borderWidth="1px" rounded={8}>
            <Center py={6}>
                <Box
                    maxW={'320px'}
                    w={'full'}

                    rounded={'lg'}
                    p={6}
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

                    <Stack align={'center'} justify={'center'} direction={'row'} mt={1} mb={3}>
                        <Badge
                            px={2}
                            py={1}
                            fontWeight={'400'}>
                            {user.type}
                        </Badge>
                    </Stack>
                    <Heading fontSize={'2xl'} fontFamily={'body'}>
                        {user.balance}$
                    </Heading>
                    <Text fontWeight={600} color={'gray.500'} mb={4}>
                        @{user.userName}
                    </Text>
                    <Stack mt={8} direction={'column'} spacing={4}>
                        <Deposit />
                        <Button p={1} colorScheme="green" variant="solid" _hover={{ backgroundColor: 'green.500' }} rounded={3}>
                            Withdraw
                        </Button>
                    </Stack>
                </Box>
            </Center>
        </VStack>
    );
}