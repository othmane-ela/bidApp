import { React } from 'react';
import {
    Box,
    Stack,
    HStack,
    Heading,
    Text,
    VStack,
    useColorModeValue,
    List,
    ListItem,
    ListIcon,
    Button,
    Container
} from '@chakra-ui/react';
import { FaCheckCircle } from 'react-icons/fa'

function PriceWrapper({ children }) {
    return (
        <Box
            mb={4}
            shadow="base"
            borderWidth="1px"
            alignSelf={{ base: 'center', lg: 'flex-start' }}
            borderColor={useColorModeValue('gray.100', 'white.800')}
            borderRadius={'md'}>
            {children}
        </Box>
    );
}

export default function Subscriptions() {
    return (
        <Container maxW="container.xl" ml="14%">
            <Heading mt={20} fontSize="5xl" fontWeight="900" fontFamily={'Quattrocento'} textAlign="center">Join Auctionaruim !</Heading>
            <Text mb={5} color="gray.500" textAlign="center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae itaque iure inventore iusto rerum consequuntur aperiam minima consectetur.</Text>
            <Box w="100%" mt={20}>
                <VStack spacing={2} textAlign="center">
                    <Heading as="h1" fontSize="4xl" fontFamily={'Quattrocento'}>
                        Plans that fit your need
                    </Heading>
                    <Text fontSize="lg" color={'gray.500'}>
                        Start with 14-day free trial. No credit card needed. Cancel at
                        anytime.
                    </Text>
                </VStack>
                <Stack
                    direction={{ base: 'column', md: 'row' }}
                    textAlign="center"
                    justify="center"
                    spacing={{ base: 4, lg: 10 }}
                    py={10}>
                    <PriceWrapper>
                        <Box py={4} px={12}>
                            <Text fontWeight="500" fontSize="2xl">
                                Hobby
                            </Text>
                            <HStack justifyContent="center">
                                <Text fontSize="3xl" fontWeight="600">
                                    $
                                </Text>
                                <Text fontSize="5xl" fontWeight="900">
                                    79
                                </Text>
                                <Text fontSize="3xl" color="gray.500">
                                    /month
                                </Text>
                            </HStack>
                        </Box>
                        <VStack
                            bg={useColorModeValue('gray.50', '#1F1F1F')}
                            py={4}
                            borderBottomRadius={'md'}>
                            <List spacing={3} textAlign="start" px={12}>
                                <ListItem>
                                    <ListIcon as={FaCheckCircle} color="green.500" />
                                    unlimited build minutes
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={FaCheckCircle} color="green.500" />
                                    Lorem, ipsum dolor.
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={FaCheckCircle} color="green.500" />
                                    5TB Lorem, ipsum dolor.
                                </ListItem>
                            </List>
                            <Box w="80%" pt={7}>
                                <Button w="full" bg="green.300" variant="solid" _hover={{ backgroundColor: 'green.500' }} rounded={3}>
                                    Start trial
                                </Button>
                            </Box>
                        </VStack>
                    </PriceWrapper>

                    <PriceWrapper>
                        <Box position="relative">
                            <Box py={4} px={12}>
                                <Text fontWeight="500" fontSize="2xl">
                                    Growth
                                </Text>
                                <HStack justifyContent="center">
                                    <Text fontSize="3xl" fontWeight="600">
                                        $
                                    </Text>
                                    <Text fontSize="5xl" fontWeight="900">
                                        149
                                    </Text>
                                    <Text fontSize="3xl" color="gray.500">
                                        /month
                                    </Text>
                                </HStack>
                            </Box>
                            <VStack
                                bg={useColorModeValue('gray.50', '#1F1F1F')}
                                py={4}
                                borderBottomRadius={'md'}>
                                <List spacing={3} textAlign="start" px={12}>
                                    <ListItem>
                                        <ListIcon as={FaCheckCircle} color="green.500" />
                                        unlimited build minutes
                                    </ListItem>
                                    <ListItem>
                                        <ListIcon as={FaCheckCircle} color="green.500" />
                                        Lorem, ipsum dolor.
                                    </ListItem>
                                    <ListItem>
                                        <ListIcon as={FaCheckCircle} color="green.500" />
                                        5TB Lorem, ipsum dolor.
                                    </ListItem>
                                    <ListItem>
                                        <ListIcon as={FaCheckCircle} color="green.500" />
                                        5TB Lorem, ipsum dolor.
                                    </ListItem>
                                    <ListItem>
                                        <ListIcon as={FaCheckCircle} color="green.500" />
                                        5TB Lorem, ipsum dolor.
                                    </ListItem>
                                </List>
                                <Box w="80%" pt={7}>
                                    <Button w="full" bg="green.300" variant="solid" _hover={{ backgroundColor: 'green.500' }} rounded={3}>
                                        Start trial
                                    </Button>
                                </Box>
                            </VStack>
                        </Box>
                    </PriceWrapper>
                    <PriceWrapper>
                        <Box py={4} px={12}>
                            <Text fontWeight="500" fontSize="2xl">
                                Scale
                            </Text>
                            <HStack justifyContent="center">
                                <Text fontSize="3xl" fontWeight="600">
                                    $
                                </Text>
                                <Text fontSize="5xl" fontWeight="900">
                                    349
                                </Text>
                                <Text fontSize="3xl" color="gray.500">
                                    /month
                                </Text>
                            </HStack>
                        </Box>
                        <VStack
                            bg={useColorModeValue('gray.50', '#1F1F1F')}
                            py={4}
                            borderBottomRadius={'md'}>
                            <List spacing={3} textAlign="start" px={12}>
                                <ListItem>
                                    <ListIcon as={FaCheckCircle} color="green.500" />
                                    unlimited build minutes
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={FaCheckCircle} color="green.500" />
                                    Lorem, ipsum dolor.
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={FaCheckCircle} color="green.500" />
                                    5TB Lorem, ipsum dolor.
                                </ListItem>
                            </List>
                            <Box w="80%" pt={7}>
                                <Button w="full" bg="green.300" variant="solid" _hover={{ backgroundColor: 'green.500' }} rounded={3}>
                                    Start trial
                                </Button>
                            </Box>
                        </VStack>
                    </PriceWrapper>
                </Stack>
            </Box>
        </Container>
    );
}
