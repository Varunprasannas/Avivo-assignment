import React from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  TableContainer,
  Box,
  Text,
  Center,
  VStack,
  useColorModeValue,
} from '@chakra-ui/react';
import UserRow from './UserRow';
import { WarningIcon } from '@chakra-ui/icons';

const UserTable = ({ users, onDelete }) => {
  const headColor = useColorModeValue('dark.muted', 'gray.400');

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
    <Box mb={8}>
      <TableContainer overflowX="auto" style={{ overflowY: 'hidden' }}>
        <Table variant="unstyled" style={{ borderCollapse: 'separate', borderSpacing: '0 12px', marginTop: '-12px' }}>
          <Thead>
            <Tr>
              <Th color={headColor} py={2} px={6} fontSize="xs" fontWeight="800" textTransform="uppercase" letterSpacing="wider">
                Name
              </Th>
              <Th color={headColor} py={2} px={6} fontSize="xs" fontWeight="800" textTransform="uppercase" letterSpacing="wider">
                Company Name
              </Th>
              <Th color={headColor} py={2} px={6} fontSize="xs" fontWeight="800" textTransform="uppercase" letterSpacing="wider">
                Role & Title
              </Th>
              <Th color={headColor} py={2} px={6} fontSize="xs" fontWeight="800" textTransform="uppercase" letterSpacing="wider">
                Country
              </Th>
              <Th color={headColor} py={2} px={6} fontSize="xs" fontWeight="800" textTransform="uppercase" letterSpacing="wider" isNumeric>
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
