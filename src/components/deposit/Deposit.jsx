import React, { useState, useContext } from 'react'
import { useColorModeValue, Button, FormControl, FormLabel, Input, Modal, ModalHeader, ModalBody, ModalOverlay, ModalContent, ModalFooter, ModalCloseButton, useDisclosure } from '@chakra-ui/react'
import { ApiErrors, apiFetch } from '../../utils/api';
import { loadStripe } from '@stripe/stripe-js';
import { CardElement, useStripe, useElements, Elements } from '@stripe/react-stripe-js';
import { UserContext } from '../../hooks/contexts';

export default function Deposit() {
    /**
     *  STYLE
     */
    const customeBackground = useColorModeValue("gray.50", "#1F1F1F");
    const { isOpen, onOpen, onClose } = useDisclosure()
    const initialRef = React.useRef()
    const finalRef = React.useRef()

    /**
     * 
     * DATA
     */
    const [error, setError] = useState(null);
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
            // SUCCESS CASE  J'ATT ZAKI
            console.log(response)
            setApiKey(response);
        }
        catch (e) {
            if (e instanceof ApiErrors) {
                setError(e.message)
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

        <Modal bg={customeBackground} initialFocusRef={initialRef} finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
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
    return <ModalContent >
        <form onSubmit={onSubmit}>
            <ModalHeader>Deposit </ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
                <FormControl>
                    <FormLabel>Price</FormLabel>
                    <Input name="price" placeholder="" required />
                </FormControl>
            </ModalBody>
            <ModalFooter>
                <Button isLoading={loading} type="submit" mr={3} colorScheme="green" variant="solid" _hover={{ backgroundColor: 'green.500' }} rounded={3}>
                    Deposit
                </Button>
                <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
        </form>
    </ModalContent>
}



function InsertCadrInfo({ apiKey }) {

    const stripePromise = loadStripe(apiKey.publicKey);

    return <Elements stripe={stripePromise}>
        <ModalContent >
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


const CheckoutForm = ({ amount }) => {

    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState(null);
    const { setAuthorization } = useContext(UserContext);

    const handleSubmit = async (event) => {
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
                var errorElement = document.getElementById('card-errors');
                errorElement.textContent = result.error.message;
            } else {
                // Send the token to your server.
                var token = result.token.id;
                checkout(amount, token);
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
        <form onSubmit={handleSubmit}>
            {error}
            <CardElement />
            <button type="submit" disabled={!stripe}>
                Pay
            </button>
        </form>
    );
};