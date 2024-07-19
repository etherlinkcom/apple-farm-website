'use client'

import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon, AddIcon } from '@chakra-ui/icons'
import { ConnectButton } from "thirdweb/react";
import { client } from "@/app/client";

const Links = ['Home', 'Dashboard', 'Leaderboard'];
const Pages = ['/', '/dashboard', '/leaderboard']; // be sure the pages correspond to the good link above

const NavLink = (props: {title: string, link: string}) => {
  const { title, link } = props
  return (
    <Box
      fontWeight='semibold'
      fontSize="large"
      as="a"
      px={2}
      py={1}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('gray.200', 'gray.700'),
      }}
      href={link}>
      {title}
    </Box>
  )
}

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Box /*bg={useColorModeValue('gray.100', 'gray.900')}*/ px={10}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box>Logo</Box>
            <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
              {Links.map((link, index) => (
                <NavLink key={index} title={link} link={Pages[index]} />
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <ConnectButton
              client={client}
              appMetadata={{
                name: "Apple Farm",
                url: "https://example.com", // TODO modify with the production link
              }}
            />
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link, index) => (
                <NavLink key={index} title={link} link={Pages[index]} />
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  )
}