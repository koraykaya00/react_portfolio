import { useColorMode } from '@chakra-ui/react';
import { useMediaQuery, Button } from '@chakra-ui/react';
import { Image } from '@chakra-ui/image'
import { Stack, Circle, Flex, Box, Text, } from '@chakra-ui/layout'
import React from 'react'

function Header() {


    const { colorMode } = useColorMode();
    const isDark = colorMode === 'dark';

    const { isNotSmallerScreen } = useMediaQuery('(min-width: 500px)');
    return (
        <Stack>
            <Circle position='absolute' bg='blue.100' opacity='0.1' w='300px' h='300px' alignSelf='flex-end' />
            <Flex direction={isNotSmallerScreen ? 'row' : 'column'}
                spacing='200px' p={isNotSmallerScreen ? '32' : '0'} alignSelf='flex-start'>
                <Box mt={isNotSmallerScreen ? '0' : 16} align='flex-start'>
                    <Text fontSize='5xl' fontWeight='semibold'>Hi, I am </Text>
                    <Text fontSize='7xl' fontWeight='bold' bgGradient='linear(to-r, cyan.400, blue.500, purple.600)' bgClip='text'>Koray Kaya</Text>
                    <Text color={isDark ? 'gray.200' : 'gray.500'}>GDE - Flutter, Firebase, Founder of </Text>
                    <Button mt={8} colorScheme='blue' onClick={()=>
                window.open('https://pawan.live')}>Hire Me</Button>
                </Box>
                <Image alignSelf='center' mt={isNotSmallerScreen ? '0' :'12'} mb ={isNotSmallerScreen ? '0' : '12'} borderRadius='full' backgroundColor='transparent' boxShadow='lg' boxSize='300px' src='https://avatars.https://github.com/koraykaya00' />
            </Flex>
        </Stack>
    )
}

export default Header