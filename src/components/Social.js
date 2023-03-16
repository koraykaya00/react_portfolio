import React from 'react';
import { IconButton } from '@chakra-ui/react';
import { HStack } from '@chakra-ui/layout';
import { FaSun, FaMoon, FaInstagram,FaGithub, FaLinkedin } from 'react-icons/fa' ;
import { BsMedium } from 'react-icons/bs';
import { SiGmail } from 'react-icons/si';
import { useColorMode } from '@chakra-ui/react';


function Social() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <HStack spacing='24'>
      <IconButton icon={<FaLinkedin/>} isRound='true' onClick={() => window.open("https://www.linkedin.com/in/koraykaya00/")}/>
      <IconButton ml={2} icon={<SiGmail/>} isRound='true' onClick={() => window.open("mailto:i.korayykaya@gmail.com")}/>
      <IconButton ml={2} icon={<FaGithub/>} isRound='true' onClick={() => window.open("https://github.com/koraykaya00")}/>
      <IconButton ml={2} icon={<BsMedium/>} isRound='true' onClick={() => window.open("https://medium.com/@koray00")}/>
    </HStack>

  )
}

export default Social