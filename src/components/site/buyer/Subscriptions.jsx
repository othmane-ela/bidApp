import { React, useState, useEffect, useRef, useContext } from 'react';
import {
    Box,
    Stack,
    HStack,
    Heading,
    Text,
    VStack,
    List,
    ListItem,
    ListIcon,
    useColorModeValue,
    Button,
    Container,
    Image,
    Alert, AlertIcon, AlertTitle, AlertDescription
} from '@chakra-ui/react';
import { FaCheckCircle } from 'react-icons/fa'
import { apiFetch, ApiErrors } from '../../../utils/api'
import { UserContext } from '../../../hooks/contexts';
import { loadStripe } from '@stripe/stripe-js';
import { CardElement, useStripe, useElements, Elements } from '@stripe/react-stripe-js';



function PriceWrapper({ children }) {
    return (
        <Box
            mb={4}
            shadow="base"
            borderWidth="1px"
            alignSelf={{ base: 'center', lg: 'flex-start' }}
            borderRadius={'md'}>
            {children}
        </Box>
    );
}

export default function Subscriptions() {

    const [packs, setPacks] = useState(null);
    const [chosenPack, setChosenPack] = useState(null);
    const inputPackId = useRef(null);

    useEffect(() => {
        apiFetch("/pack/")
            .then(setPacks)
            .catch((e) => { setPacks(false) })
    }, [])


    const handleClick = async function (e) {
        e.preventDefault();
        setChosenPack(inputPackId.current.value);
    }


    if (packs === null) {
        return null;
    }


    return (
        <Container maxW="container.xl" ml="14%">
            {!chosenPack ?
                <Box>
                    <Heading mt={20} fontSize="5xl" fontWeight="900" fontFamily={'Quattrocento'} textAlign="center">Join Auctionaruim !</Heading>
                    <Text mb={5} color="gray.500" textAlign="center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae itaque iure inventore iusto rerum consequuntur aperiam minima consectetur.</Text>
                    <Box w="100%" mt={20}>
                        <VStack spacing={2} textAlign="center">
                            <Heading as="h1" fontSize="4xl" fontFamily={'Quattrocento'}>
                                Plans that fit your need
                            </Heading>
                            <Text fontSize="lg" color={'gray.500'}>
                                Start with 14-day free trial. Cancel at
                                anytime.
                            </Text>
                        </VStack>
                        <Stack
                            direction={{ base: 'column', md: 'row' }}
                            textAlign="center"
                            justify="center"
                            spacing={{ base: 4, lg: 10 }}
                            py={10}>

                            {packs && packs.map((pack) => (
                                <PriceWrapper key={pack.id}>
                                    <Box py={4} px={12}>
                                        <Text fontWeight="500" fontSize="2xl">
                                            {pack.name}
                                        </Text>
                                        <HStack justifyContent="center">
                                            <Text fontSize="3xl" fontWeight="600">
                                                $
                                            </Text>
                                            <Text fontSize="5xl" fontWeight="900">
                                                {pack.price}
                                            </Text>
                                            <Text fontSize="3xl" color="gray.500">
                                                /month
                                            </Text>
                                        </HStack>
                                    </Box>
                                    <VStack
                                        py={4}
                                        borderBottomRadius={'md'}>
                                        <List spacing={3} textAlign="start" px={12}>
                                            <ListItem>
                                                <ListIcon as={FaCheckCircle} color="green.500" />
                                                10 Products per Offer
                                            </ListItem>
                                            <ListItem>
                                                <ListIcon as={FaCheckCircle} color="green.500" />
                                                5 Offers per day
                                            </ListItem>
                                            <ListItem>
                                                <ListIcon as={FaCheckCircle} color="green.500" />
                                                Support h24
                                            </ListItem>
                                        </List>
                                        <input ref={inputPackId} type="hidden" value={pack.id} />
                                        <Box w="80%" pt={7}>
                                            <Button onClick={handleClick} w="full" bg="green.300" variant="solid" _hover={{ backgroundColor: 'green.500' }} rounded={3}>
                                                Subscribe Now
                                            </Button>
                                        </Box>
                                    </VStack>
                                </PriceWrapper>)
                            )}
                        </Stack>
                    </Box>
                </Box>
                :
                <Box>
                    <Box w="100%" mt={20}>
                        <SubscriptionForm id={chosenPack} />
                    </Box>
                </Box>
            }
        </Container >
    );
}


function SubscriptionForm({ id }) {

    const stripePromise = loadStripe("pk_test_51J2IzxCCXlvNqL8Wx6SdK4CyahdJUVuRUWAlR4NKYmtAaH1RL9tk6iXh1bXsji5bFLfm0X8XyElteximaH7EsTBM00SG9t2N76");

    return <Box fontSize="lg" >
        <Box w="100%" mt={20}>
            <VStack spacing={2} textAlign="center">
                <Heading as="h1" fontSize="4xl" fontFamily={'Quattrocento'}>
                    Plan {id}
                </Heading>
                <Text fontSize="lg" color={'gray.500'}>
                    Start with 14-day free trial. Cancel at
                    anytime.
                </Text>
            </VStack>
        </Box>
        <Elements stripe={stripePromise}>
            <CheckoutForm id={id} />
        </Elements>
    </Box>

}



<CardElement
    options={{
        style: {
            base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                    color: '#aab7c4',
                },
            },
            invalid: {
                color: '#9e2146',
            },
        },
    }}
/>

const CheckoutForm = ({ id }) => {

    const customeBackground = useColorModeValue("gray.50", "#1F1F1F");
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(null);
    const { setAuthorization } = useContext(UserContext);

    const handleSubmit = async (event) => {
        setLoading(true)
        // Block native form submission.
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }

        // Get a reference to a mounted CardElement. Elements knows how
        // to find your CardElement because there can only ever be one of
        // each type of element.
        const cardElement = elements.getElement(CardElement);

        stripe.createToken(cardElement).then(function (result) {
            if (result.error) {
                setLoading(false)
                // Inform the user if there was an error.
                var errorElement = document.getElementById('card-errors');
                errorElement.textContent = result.error.message;
            } else {
                // Send the token to your server.
                var token = result.token.id;
                console.log(token);
                checkout(id, token);
                setSuccess(true);
            }
        });
    };

    const checkout = async function (id, token) {
        try {
            const response = await apiFetch("/subscription/new", {
                method: 'POST',
                body: JSON.stringify({ packId: id, token: token }),
            });
            setAuthorization(response);
        }
        catch (e) {
            if (e instanceof ApiErrors) {
                setError(e.message)
            }
            else {
                console.error(e)
            }
        }
    }

    return <Box bg={customeBackground} w="50%" mx="auto" rounded={5} p={10} my={10}>
        {!success ?
            <form onSubmit={handleSubmit}>
                {error}
                <CardElement />
                <Button type="submit" w="100%" mr={3} my={6} isLoading={loading} disabled={!stripe} colorScheme="green" variant="solid" _hover={{ backgroundColor: 'green.500' }} rounded={3}>
                    Subscribe !
                </Button>
                <Image src="/logos/stripe.png.png" w="30%" py={3} />
            </form>
            :
            <Alert
                status="success"
                variant="subtle"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                textAlign="center"
                height="200px" >
                <AlertIcon boxSize="40px" mr={0} />
                <AlertTitle mt={4} mb={1} fontSize="lg">
                    Subscription submitted!
                </AlertTitle>
                <AlertDescription maxWidth="sm">
                    Thanks , Our team will get back to you soon.
                </AlertDescription>
            </Alert>
        }
    </Box>
}
