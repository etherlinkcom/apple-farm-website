'use client'

import {
  Box,
  Text,
  VStack,
  Grid,
  GridItem,
  useColorModeValue
} from '@chakra-ui/react'

// TODO remove, just for tests
const users = [
  { rank: 1, name: "The intern", apples: 10000000 },
  { rank: 2, name: "Satoshi", apples: 9999999 },
  { rank: 3, name: "Vitalik B.", apples: 7000000 },
  { rank: 4, name: "Etherlonker", apples: 4000000 },
  { rank: 5, name: "XxCryptoDegenxX", apples: 3000000 }
]

const TopUsers = ({ numberOfPlayer }: { numberOfPlayer: number }) => {
  const boxShadow = useColorModeValue(
    '0 4px 6px rgba(0, 0, 0, 0.1)', // Light mode shadow
    '0 4px 6px rgba(255, 255, 255, 0.1)' // Dark mode shadow
  );

  const hoverBg = useColorModeValue("gray.100", "whiteAlpha.100");

  return (
    <Box
      mt={8}
      borderRadius="xl"
      overflow="hidden"
      boxShadow={boxShadow}
      borderWidth="1px"
      borderColor={useColorModeValue("gray.200", "gray.700")}
    >
      <Text fontSize="xl" fontWeight="bold" p={4}>
        Top {numberOfPlayer} Users
      </Text>
      <Grid
        templateColumns="1fr 2fr 1fr"
        gap={4}
        p={4}
        borderBottom="1px solid"
        borderColor="inherit"
      >
        <GridItem><Text opacity={0.6}>Rank</Text></GridItem>
        <GridItem><Text opacity={0.6}>Name</Text></GridItem>
        <GridItem><Text opacity={0.6} textAlign="right">Apples</Text></GridItem>
      </Grid>
      <VStack spacing={0} align="stretch">
        {users.slice(0, numberOfPlayer).map((user, index) => (
          <Grid
            key={index}
            templateColumns="1fr 2fr 1fr"
            gap={4}
            p={4}
            _hover={{ bg: hoverBg }}
            transition="background 0.2s"
            borderTop="1px solid"
            borderColor="inherit"
          >
            <GridItem>
              <Text>{user.rank}</Text>
            </GridItem>
            <GridItem>
              <Text fontWeight="bold">{user.name}</Text>
            </GridItem>
            <GridItem>
              <Text textAlign="right">{user.apples.toLocaleString()}</Text>
            </GridItem>
          </Grid>
        ))}
      </VStack>
    </Box>
  );
}

export default TopUsers;
