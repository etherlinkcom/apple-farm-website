'use client'

import {
  TableContainer,
  Table,
  TableCaption,
  Thead,
  Tr,
  Th,
  Td,
  Tbody,
  Box,
  Text
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
  const raw = ({ rank, name, apples }: { rank: number, name: string, apples: number }) => (
    <Tr key={rank}>
      <Td>{rank}</Td>
      <Td>{name}</Td>
      <Td isNumeric>{apples}</Td>
    </Tr>
  );

  return (
    <Box m={5} mt={7}>
      <Text textAlign={'center'} fontSize={'large'} fontWeight={'bold'}>Top {numberOfPlayer} Users</Text>
      <TableContainer mt={1}>
        <Table size={['sm', 'md', 'lg']} variant='simple'>
          <Thead>
            <Tr>
              <Th>Rank</Th>
              <Th>Name</Th>
              <Th isNumeric>Apples</Th>
            </Tr>
          </Thead>
          <Tbody>
            {users.map((user) => raw(user))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default TopUsers;