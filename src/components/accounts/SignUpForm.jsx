import React, { useContext, useState } from 'react'
import { AlertError, useColorModeValue, Button, FormControl, FormLabel, Input, Modal, ModalHeader, ModalBody, ModalOverlay, ModalContent, ModalFooter, ModalCloseButton, useDisclosure } from '@chakra-ui/react'
import { UserContext } from '../../hooks/contexts';
import { ApiErrors, apiFetch } from '../../utils/api';


export default function SignUpForm() {

    const customeBackground = useColorModeValue("gray.50", "#1F1F1F");
    const { isOpen, onOpen, onClose } = useDisclosure();



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
            const token = await apiFetch("/signup", {
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
            <Button onClick={onOpen} variant="solid" rounded={3}>
                Sign up
            </Button>
            <Modal
                isOpen={isOpen}
                onClose={onClose} >
                <ModalOverlay />
                <ModalContent bg={customeBackground}>
                    <form onSubmit={handleSubmit}>
                        <ModalHeader>Sign Up</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody pb={6}>
                            {error && <AlertError>{error}</AlertError>}
                            <FormControl mt={4} >
                                <FormLabel>Username</FormLabel>
                                <Input name="userName" placeholder="Auctionaruim" />
                            </FormControl>
                            <FormControl mt={4}>
                                <FormLabel>First Name</FormLabel>
                                <Input name="firstName" placeholder="Johattan" />
                            </FormControl>
                            <FormControl mt={4}>
                                <FormLabel>Last Name</FormLabel>
                                <Input name="lastName" placeholder="Laz" />
                            </FormControl>
                            <FormControl mt={4}>
                                <FormLabel>Email</FormLabel>
                                <Input name="email" placeholder="user@auctionaruim.com" />
                            </FormControl>

                            <FormControl mt={4}>
                                <FormLabel>Password</FormLabel>
                                <Input type="password" name="password" placeholder="********" />
                            </FormControl>

                            <FormControl mt={4}>
                                <FormLabel>Confirme Password</FormLabel>
                                <Input type="password" name="confirmePassword" placeholder="********" />
                            </FormControl>

                            <FormControl mt={4}>
                                <FormLabel>Phone</FormLabel>
                                <Input type="text" name="phoneNumber" placeholder="(301) 333 333 333" />
                            </FormControl>

                        </ModalBody>

                        <ModalFooter>
                            <Button type="submit" isLoading={loading} mr={3} colorScheme="green" variant="solid" _hover={{ backgroundColor: 'green.500' }} rounded={3}>
                                Sign up
                            </Button>
                            <Button onClick={onClose}>Cancel</Button>
                        </ModalFooter>
                    </form>
                </ModalContent>
            </Modal>
        </>
    )
}