import React, { useContext, useState } from 'react'
import { UserContext } from '../../hooks/contexts';
import { Alert, AlertIcon, useColorModeValue, Button, FormControl, FormLabel, Input, Modal, ModalHeader, ModalBody, ModalOverlay, ModalContent, ModalFooter, ModalCloseButton, useDisclosure } from '@chakra-ui/react'
import { ApiErrors, apiFetch } from '../../utils/api';
import SocialMedia from './../../ui/SoacialMedia'

export default function LoginForm() {

    /**
     * STYLE 
     */
    const customeBackground = useColorModeValue("gray.50", "#1F1F1F");
    const { isOpen, onOpen, onClose } = useDisclosure()
    const initialRef = React.useRef()
    const finalRef = React.useRef()

    /**
     * DATA
     */
    var { setAuthorization } = useContext(UserContext);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    /**
     * 
     * @param {object} e 
     */
    const handleSubmit = async function (e) {
        e.preventDefault();
        setLoading(true)
        setError(null);
        const data = JSON.stringify(Object.fromEntries(new FormData(e.target)));

        try {
            const token = await apiFetch("/login", {
                method: 'POST',
                body: data,
            });
            setAuthorization(token);
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


    return (
        <>
            <Button onClick={onOpen} bg="green.300" _hover={{ backgroundColor: 'green.500' }} rounded={3}>
                Sign in
            </Button>

            <Modal initialFocusRef={initialRef} finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent bg={customeBackground}>
                    <form onSubmit={handleSubmit}>
                        <ModalHeader>Login </ModalHeader>
                        <ModalCloseButton />
                        <ModalBody pb={6}>
                            {error && <AlertError>{error}</AlertError>}
                            <FormControl>
                                <FormLabel>Username</FormLabel>
                                <Input ref={initialRef} name="username" placeholder="user@auctionaruim.com" required />
                            </FormControl>

                            <FormControl mt={4}>
                                <FormLabel>Password</FormLabel>
                                <Input type="password" name="password" placeholder="********" required />
                            </FormControl>
                            <SocialMedia />
                        </ModalBody>
                        <ModalFooter>
                            <Button type="submit" isLoading={loading} mr={3} bg="green.300" colorScheme={'green'} variant="solid" _hover={{ backgroundColor: 'green.500' }} rounded={3}>
                                Login
                            </Button>
                            <Button onClick={onClose}>Cancel</Button>
                        </ModalFooter>
                    </form >
                </ModalContent>
            </Modal>
        </>
    )
}


function AlertError({ children }) {
    return <Alert status="error">
        <AlertIcon />
        {children}
    </Alert>
}
