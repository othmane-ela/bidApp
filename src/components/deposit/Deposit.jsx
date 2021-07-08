import React, { useState, useContext } from 'react'
import {
    useColorModeValue, Button,
    FormControl, Select, Image,
    FormLabel, Input, Modal,
    ModalHeader, ModalBody, ModalOverlay,
    ModalContent, ModalFooter, ModalCloseButton,
    useDisclosure, Box, Alert, AlertIcon, AlertTitle, AlertDescription
} from '@chakra-ui/react'
import { ApiErrors, apiFetch } from '../../utils/api';
import { loadStripe } from '@stripe/stripe-js';
import { CardElement, useStripe, useElements, Elements } from '@stripe/react-stripe-js';
import { UserContext } from '../../hooks/contexts';

export default function Deposit() {
    /**
     *  STYLE
     */
    const { isOpen, onOpen, onClose } = useDisclosure()
    const initialRef = React.useRef()
    const finalRef = React.useRef()

    /**
     * 
     * DATA
     */
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(null);
    const [apiKey, setApiKey] = useState(null);

    const handleSubmit = async function (e) {
        e.preventDefault();
        const data = (Object.fromEntries(new FormData(e.target)));

        try {
            const response = await apiFetch("/checkout/" + data.price, {
                method: 'POST',
                body: data,
            });
            // SUCCESS CASE 
            console.log(response)
            setApiKey(response);
        }
        catch (e) {
            if (e instanceof ApiErrors) {
                setError(e.message)
                console.log(error);
            }
            else {
                console.error(e)

            }
            setLoading(false);
        }


    }

    return <>
        <Button p={1} onClick={onOpen} colorScheme="green" variant="solid" _hover={{ backgroundColor: 'green.500' }} rounded={3}>
            Deposit  +
        </Button>

        <Modal initialFocusRef={initialRef} finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            {!apiKey ?
                <InsertAmount onSubmit={handleSubmit} loading={loading} />
                :
                <InsertCadrInfo apiKey={apiKey} />
            }
        </Modal>
    </>
}


function InsertAmount({ onSubmit, loading, onClose }) {

    const customeBackground = useColorModeValue("gray.50", "#1F1F1F");

    return <ModalContent bg={customeBackground}>
        <form onSubmit={onSubmit}>
            <ModalHeader>Fund Your Account </ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
                <FormControl my={3}>
                    <FormLabel>Amount</FormLabel>
                    <Input name="price" placeholder="10$" required />
                </FormControl>
                <FormControl my={3} pt={3}>
                    <FormLabel>Payment Methode</FormLabel>
                    <Select variant="filled" placeholder="Credit/Debit Card" />
                </FormControl>
            </ModalBody>
            <ModalFooter>
                <Button isLoading={loading} type="submit" mr={3} colorScheme="green" variant="solid" _hover={{ backgroundColor: 'green.500' }} rounded={3}>
                    Next
                </Button>
                <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
        </form>
    </ModalContent>
}



function InsertCadrInfo({ apiKey }) {

    const stripePromise = loadStripe(apiKey.publicKey);
    const customeBackground = useColorModeValue("gray.50", "#1F1F1F");

    return <Elements stripe={stripePromise} >
        <ModalContent bg={customeBackground} >
            <ModalHeader>Deposit </ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
                <CheckoutForm amount={apiKey.amount} />
            </ModalBody>
        </ModalContent>
    </Elements>

}

<CardElement
    options={{
        style: {
            base: {
                color: '#6c7a8f',
                fontSize: '24px',
                fontFamily: '"Open Sans", sans-serif',
                fontSmoothing: 'antialiased',
                '::placeholder': {
                    color: '#6c7a8f',
                },
            },
            invalid: {
                color: '#e5424d',
                ':focus': {
                    color: '#303238',
                },
            }
        }
    }}
/>


const CheckoutForm = ({ amount }) => {

    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);
    const [success, setSuccess] = useState(null);
    const { setAuthorization } = useContext(UserContext);

    const handleSubmit = async (event) => {
        setLoading(true);
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
                // Inform the user if there was an error.
                setLoading(false);
                var errorElement = document.getElementById('card-errors');
                errorElement.textContent = result.error.message;
            } else {
                // Send the token to your server.
                var token = result.token.id;
                checkout(amount, token);
                setSuccess(true);
            }
        });
    };

    const checkout = async function (amount, token) {
        try {
            const response = await apiFetch("/charge", {
                method: 'POST',
                body: JSON.stringify({ amount: amount, stripeToken: token }),
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

    return (
        <Box>
            {!success ?
                <form onSubmit={handleSubmit}>
                    {error}
                    <CardElement />
                    <Button type="submit" w="100%" mr={3} my={6} isLoading={loading} disabled={!stripe} colorScheme="green" variant="solid" _hover={{ backgroundColor: 'green.500' }} rounded={3}>
                        Pay
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
                    height="200px"
                >
                    <AlertIcon boxSize="40px" mr={0} />
                    <AlertTitle mt={4} mb={1} fontSize="lg">
                        Deposit submitted!
                    </AlertTitle>
                    <AlertDescription maxWidth="sm">
                        Thanks , Our team will get back to you soon.
                    </AlertDescription>
                </Alert>

            }
        </Box>

    );
};