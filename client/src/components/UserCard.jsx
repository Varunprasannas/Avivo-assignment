import React from 'react';
import {
  Box,
  VStack,
  HStack,
  Avatar,
  Text,
  Badge,
  IconButton,
  Tooltip,
  Flex,
} from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';

const UserCard = ({ user, onDelete }) => {
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
    <Box
      bg="dark.card"
      borderRadius="2xl"
      border="1px solid"
      borderColor="dark.border"
      p={6}
      position="relative"
      boxShadow="0 4px 20px rgba(0, 0, 0, 0.05)"
      transition="all 0.3s ease"
      _hover={{
        transform: 'translateY(-4px)',
        boxShadow: '0 12px 30px rgba(0, 0, 0, 0.08)',
        borderColor: 'brand.300',
      }}
    >
      <Flex justify="flex-end" position="absolute" top={4} right={4}>
        <Tooltip label="Delete user" placement="top">
          <IconButton
            aria-label="Delete user"
            icon={<DeleteIcon />}
            size="sm"
            colorScheme="red"
            variant="ghost"
            _hover={{ bg: 'red.50', color: 'red.500' }}
            onClick={() => onDelete(user.id)}
            borderRadius="lg"
          />
        </Tooltip>
      </Flex>

      <VStack spacing={4} align="center" textAlign="center" pt={2}>
        <Avatar
          name={fullName}
          src={image}
          size="xl"
          border="4px solid"
          borderColor="brand.100"
          boxShadow="0 4px 10px rgba(0,0,0,0.05)"
        />

        <VStack spacing={1}>
          <Text fontWeight="700" color="dark.text" fontSize="md" noOfLines={1}>
            {fullName}
          </Text>
          <Text fontSize="xs" color="dark.muted" noOfLines={1} maxW="180px">
            {email}
          </Text>
        </VStack>

        <Box w="full" h="1px" bg="dark.border" />

        <VStack spacing={2} w="full" align="center">
          <VStack spacing={0.5}>
            <Text fontSize="xs" color="dark.muted" fontWeight="600" textTransform="uppercase" letterSpacing="wider">
              Company
            </Text>
            <Text fontSize="sm" fontWeight="600" color="dark.text" noOfLines={1} px={2}>
              {companyName}
            </Text>
          </VStack>

          <VStack spacing={0.5}>
            <Text fontSize="xs" color="dark.muted" fontWeight="600" textTransform="uppercase" letterSpacing="wider">
              Role & Title
            </Text>
            <Text fontSize="sm" fontWeight="500" color="dark.text" noOfLines={1} px={2}>
              {jobTitle || 'No Title'}
            </Text>
            {role && (
              <Badge
                mt={1}
                fontSize="9px"
                colorScheme={role === 'admin' ? 'red' : role === 'moderator' ? 'orange' : 'blue'}
                variant="subtle"
                borderRadius="full"
                px={2.5}
                py={0.5}
              >
                {role}
              </Badge>
            )}
          </VStack>

          <VStack spacing={0.5} mt={1}>
            <Text fontSize="xs" color="dark.muted" fontWeight="600" textTransform="uppercase" letterSpacing="wider">
              Country
            </Text>
            <Text fontSize="sm" color="dark.text" fontWeight="500">
              {country}
            </Text>
          </VStack>
        </VStack>
      </VStack>
    </Box>
  );
};

export default UserCard;
