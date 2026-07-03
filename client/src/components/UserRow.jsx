import React from 'react';
import {
  Tr,
  Td,
  Avatar,
  Text,
  Badge,
  HStack,
  IconButton,
  Tooltip,
  Box,
} from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';

const UserRow = ({ user, onDelete }) => {
  const firstName = user.firstName || '';
  const lastName = user.lastName || '';
  const fullName = `${firstName} ${lastName}` || 'Unknown User';
  const email = user.email || '';
  const companyName = user.company?.name || 'Not Available';
  const jobTitle = user.company?.title || '';
  const role = user.role || 'user';
  const country = user.address?.country || 'Unknown';
  const image = user.image || '';

  return (
    <Tr
      _hover={{ bg: 'dark.hover' }}
      transition="background-color 0.2s"
      borderColor="dark.border"
    >
      <Td py={4}>
        <HStack spacing={3}>
          <Avatar
            name={fullName}
            src={image}
            size="sm"
            border="2px solid"
            borderColor="brand.400"
            bg="dark.border"
          />
          <Box>
            <Text fontWeight="600" color="dark.text" fontSize="sm">
              {fullName}
            </Text>
            <Text fontSize="xs" color="dark.muted">
              {email}
            </Text>
          </Box>
        </HStack>
      </Td>
      
      <Td py={4}>
        <Text fontSize="sm" fontWeight="500" color="dark.text">
          {companyName}
        </Text>
      </Td>

      <Td py={4}>
        <Box>
          <Text fontSize="sm" fontWeight="500" color="dark.text">
            {jobTitle || 'No Title'}
          </Text>
          {role && (
            <Badge
              mt={0.5}
              fontSize="9px"
              colorScheme={role === 'admin' ? 'red' : role === 'moderator' ? 'orange' : 'blue'}
              variant="outline"
              borderRadius="sm"
            >
              {role}
            </Badge>
          )}
        </Box>
      </Td>

      <Td py={4}>
        <Text fontSize="sm" color="dark.text">
          {country}
        </Text>
      </Td>

      <Td py={4} isNumeric>
        <Tooltip label="Delete user (local state only)" placement="left">
          <IconButton
            aria-label="Delete user"
            icon={<DeleteIcon />}
            size="sm"
            colorScheme="red"
            variant="ghost"
            _hover={{ bg: 'red.900', color: 'red.200' }}
            onClick={() => onDelete(user.id)}
          />
        </Tooltip>
      </Td>
    </Tr>
  );
};

export default UserRow;
