import React from 'react';
import { useMediaQuery } from '@chakra-ui/media-query';
import { Icon } from '@chakra-ui/react';
import { DiReact, DiJavascript1 } from 'react-icons/di'
import { FaAngular } from 'react-icons/fa'


import {  Box, Flex, Heading, Text } from '@chakra-ui/layout'



function Profil() {

    const { isNotSmallerScreen} = useMediaQuery('(min-width:600px)')
  return (
<Flex direction={isNotSmallerScreen ? 'row' : 'column'} w='100%' maxWidth={{base: '100vh', md:'130vh', lg:'130vh', xl:'130vh'}}>
<Box alignSelf='center' px='32' py='16'>
    <Heading fontWeight='extrabold' color='cyan.500' size='4xl'>
        7+
    </Heading>
    <Text fontSize='2xl' color='gray.400'>
Years of Experience
    </Text>
</Box>
<Box alignSelf='center' px='32' py='16'> 
<Text fontWeight='bold' fontSize='2xl' > Product Designer and Developer</Text>
<Flex direction={isNotSmallerScreen ? 'row' : 'column'} mt={8}>
    <Flex rounded='xl' direction='column' mt={4} bg='blue.400' h='30vh' w='30vh' justify='flex-end' _hover={{bg:'blue.200'}}>
    <Icon color='white' p ='4' as = {DiReact} w='24' h='24' />
    <Text color='white' p='4' fontSize='xl' fontWeight='semibold'>React Apps</Text>
</Flex>
<Flex rounded='xl' direction='column' mt={4} bg='red.400' h='30vh' w='30vh' justify='flex-end' _hover={{bg:'red.200'}}>
    <Icon color='white' p ='4' as = {FaAngular} w='24' h='24' />
    <Text color='white' p='4' fontSize='xl' fontWeight='semibold'>Angular Apps</Text>
</Flex>
<Flex rounded='xl' direction='column' mt={4} bg='yellow.400' h='30vh' w='30vh' justify='flex-end' _hover={{bg:'yellow.200'}}>
    <Icon color='white' p ='4' as = {DiJavascript1} w='24' h='24' />
    <Text color='white' p='4' fontSize='xl' fontWeight='semibold'>Javascript Apps</Text>
</Flex>
</Flex>
</Box>

    </Flex>
  )
}

export default Profil