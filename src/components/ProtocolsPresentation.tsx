'use client'

import { ReactElement } from 'react'
import { Box, SimpleGrid, Text, VStack, Flex, Image } from '@chakra-ui/react'

interface FeatureProps {
  title: string
  text: string
  icon: ReactElement
}

const Feature = ({ title, text, icon }: FeatureProps) => {
  return (
    <VStack spacing={4} align="center">
      <Flex
        w={16}
        h={16}
        align={'center'}
        justify={'center'}
        rounded={'full'}
        bg={'gray.100'}
        mb={1}>
        {icon}
      </Flex>
      <Text fontWeight={600} textAlign="center">{title}</Text>
      <Text color={'gray.600'} textAlign="center">{text}</Text>
    </VStack>
  )
}

const ProtocolsPresentation = () => {
  return (
    <Box p={4}>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        <Feature
          icon={<Image src="plend-logo.jpg" alt="Plend logo" borderRadius="full" objectFit="cover" w="100%" h="100%" />}
          title={'Plend'}
          text={
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'
          }
        />
        <Feature
          icon={<Image src="hanji-logo.jpg" alt="Hanji logo" borderRadius="full" objectFit="cover" w="100%" h="100%" />}
          title={'Hanji'}
          text={
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'
          }
        />
        <Feature
          icon={<Image src="rivo-logo.jpg" alt="Rivo logo" borderRadius="full" objectFit="cover" w="100%" h="100%" />}
          title={'Rivo'}
          text={
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'
          }
        />
      </SimpleGrid>
    </Box>
  );
}

export default ProtocolsPresentation;
