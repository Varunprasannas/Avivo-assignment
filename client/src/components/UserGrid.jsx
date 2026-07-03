import React from 'react';
import { SimpleGrid, Box } from '@chakra-ui/react';
import UserCard from './UserCard';

const UserGrid = ({ users, onDelete }) => {
  return (
    <Box mx={{ base: 4, md: 8 }} mb={8}>
      <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} gap={6}>
        {users.map((user) => (
          <UserCard key={user.id} user={user} onDelete={onDelete} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default UserGrid;
