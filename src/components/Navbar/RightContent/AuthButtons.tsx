import { Button, Flex } from '@chakra-ui/react';
import React, { useState } from 'react';

const AuthButtons:React.FC = () => {
    const [isSignedIn, setIsSignedIn] = useState(false);
    const handleSignIn = () => {
        setIsSignedIn(!isSignedIn);
    }
    return (
        <>
            <Flex direction='row' align='center'>
                <Button 
                    variant='outline'
                    height='28px'
                    display={{ base: "none", sm: " flex"}}
                    width={{ base: "70px", md: "110px"}}
                    mr={2}
                >
                    Sing-in
                </Button>
                <Button
                    height='28px'
                    display={{ base: "none", sm: " flex"}}
                    width={{ base: "70px", md: "110px"}}
                    mr={2}
                >
                    Login
                </Button>
            </Flex>
        </>
    )
}
export default AuthButtons;