import React from 'react'
import { useColorModeValue, Button, FormControl, FormLabel, Input, Modal, ModalHeader, ModalBody, ModalOverlay, ModalContent, ModalFooter, ModalCloseButton, useDisclosure } from '@chakra-ui/react'


export default function LoginForm() {
    const customeBackground = useColorModeValue("gray.50", "#1F1F1F");
    const { isOpen, onOpen, onClose } = useDisclosure()
    const initialRef = React.useRef()
    const finalRef = React.useRef()

    return (
        <>
            <Button onClick={onOpen} bg="green.300" colorScheme={'green'} variant="solid" _hover={{ backgroundColor: 'green.500' }} rounded={3}>
                Sign in
            </Button>
            <Modal
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent bg={customeBackground}>
                    <ModalHeader>Login </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <FormControl>
                            <FormLabel>Username</FormLabel>
                            <Input ref={initialRef} placeholder="user@auctionaruim.com" />
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>Password</FormLabel>
                            <Input type="password" placeholder="********" />
                        </FormControl>
                    </ModalBody>

                    <ModalFooter>
                        <Button mr={3} bg="green.300" colorScheme={'green'} variant="solid" _hover={{ backgroundColor: 'green.500' }} rounded={3}>
                            Login
                        </Button>
                        <Button onClick={onClose}>Cancel</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}