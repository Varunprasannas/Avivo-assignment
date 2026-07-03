import React from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Box,
  Text,
  Center,
  VStack,
} from '@chakra-ui/react';
import UserRow from './UserRow';
import { WarningIcon } from '@chakra-ui/icons';

const UserTable = ({ users, onDelete }) => {
  if (users.length === 0) {
    return (
      <Center py={16} px={4}>
        <VStack spacing={4}>
          <WarningIcon boxSize="40px" color="dark.muted" />
          <VStack spacing={1}>
            <Text fontSize="lg" fontWeight="bold" color="dark.text">
              No Users Found
            </Text>
            <Text fontSize="sm" color="dark.muted" textAlign="center">
              Try adjusting your search criteria or refresh the database.
            </Text>
          </VStack>
        </VStack>
      </Center>
    );
  }

  return (
    <Box
      mx={{ base: 4, md: 8 }}
      mb={8}
      bg="dark.card"
      borderRadius="2xl"
      border="1px solid"
      borderColor="dark.border"
      overflow="hidden"
      boxShadow="0 10px 30px rgba(0, 0, 0, 0.2)"
    >
      <TableContainer>
        <Table variant="simple">
          <Thead bg="rgba(241, 245, 249, 0.6)">
            <Tr borderColor="dark.border">
              <Th color="dark.muted" py={4} fontSize="xs" fontWeight="700">
                Name
              </Th>
              <Th color="dark.muted" py={4} fontSize="xs" fontWeight="700">
                Company Name
              </Th>
              <Th color="dark.muted" py={4} fontSize="xs" fontWeight="700">
                Role & Title
              </Th>
              <Th color="dark.muted" py={4} fontSize="xs" fontWeight="700">
                Country
              </Th>
              <Th color="dark.muted" py={4} fontSize="xs" fontWeight="700" isNumeric>
                Actions
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {users.map((user) => (
              <UserRow key={user.id} user={user} onDelete={onDelete} />
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default UserTable;
