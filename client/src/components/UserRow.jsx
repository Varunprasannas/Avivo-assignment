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
  useColorModeValue,
} from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';

const UserRow = ({ user, onDelete }) => {
  const firstName = user.firstName || '';
  const lastName = user.lastName || '';
  const fullName = `${firstName} ${lastName}` || 'Unknown User';
  const email = user.email || '';
  const companyName = user.company?.name || 'Not Available';
  const jobTitle = user.company?.title || '';
  const role = (user.role || 'user').toLowerCase();
  const country = user.address?.country || 'Unknown';
  const image = user.image || '';

  // Role styling helper
  let roleColor = 'brand.400';
  let badgeScheme = 'purple';
  let ringBg = 'rgba(139, 92, 246, 0.15)';

  if (role === 'admin') {
    roleColor = 'red.400';
    badgeScheme = 'red';
    ringBg = 'rgba(239, 68, 68, 0.15)';
  } else if (role === 'moderator') {
    roleColor = 'orange.400';
    badgeScheme = 'orange';
    ringBg = 'rgba(245, 158, 11, 0.15)';
  }

  const cardBg = useColorModeValue('white', '#111827');
  const cardHoverBg = useColorModeValue('gray.50', 'rgba(255, 255, 255, 0.03)');
  const rowShadow = useColorModeValue('0 2px 8px rgba(0, 0, 0, 0.015)', '0 4px 12px rgba(0,0,0,0.15)');

  return (
    <Tr role="group">
      <Td
        py={4}
        px={6}
        bg={cardBg}
        borderLeft="1px solid"
        borderTop="1px solid"
        borderBottom="1px solid"
        borderColor="dark.border"
        borderTopLeftRadius="xl"
        borderBottomLeftRadius="xl"
        boxShadow={rowShadow}
        _groupHover={{ bg: cardHoverBg }}
        transition="all 0.2s"
      >
        <HStack spacing={3}>
          <Box position="relative">
            <Avatar
              name={fullName}
              src={image}
              size="sm"
              border="2px solid"
              borderColor={ringBg}
              bg="dark.border"
            />
            {/* Status dot */}
            <Box
              position="absolute"
              bottom="-1px"
              right="-1px"
              w="8px"
              h="8px"
              bg="green.400"
              border="1.5px solid"
              borderColor="dark.card"
              borderRadius="full"
            />
          </Box>
          <Box>
            <Text fontWeight="700" color="dark.text" fontSize="sm" letterSpacing="-0.01em">
              {fullName}
            </Text>
            <Text fontSize="xs" color="dark.muted" fontWeight="500">
              {email}
            </Text>
          </Box>
        </HStack>
      </Td>
      
      <Td
        py={4}
        px={6}
        bg={cardBg}
        borderTop="1px solid"
        borderBottom="1px solid"
        borderColor="dark.border"
        boxShadow={rowShadow}
        _groupHover={{ bg: cardHoverBg }}
        transition="all 0.2s"
      >
        <Text fontSize="sm" fontWeight="600" color="dark.text">
          {companyName}
        </Text>
      </Td>

      <Td
        py={4}
        px={6}
        bg={cardBg}
        borderTop="1px solid"
        borderBottom="1px solid"
        borderColor="dark.border"
        boxShadow={rowShadow}
        _groupHover={{ bg: cardHoverBg }}
        transition="all 0.2s"
      >
        <Box>
          <Text fontSize="sm" fontWeight="600" color="dark.text">
            {jobTitle || 'No Title'}
          </Text>
          {role && (
            <Badge
              mt={1}
              fontSize="9px"
              colorScheme={badgeScheme}
              variant="subtle"
              borderRadius="full"
              px={2.5}
              py={0.5}
              fontWeight="700"
              textTransform="uppercase"
            >
              {role}
            </Badge>
          )}
        </Box>
      </Td>

      <Td
        py={4}
        px={6}
        bg={cardBg}
        borderTop="1px solid"
        borderBottom="1px solid"
        borderColor="dark.border"
        boxShadow={rowShadow}
        _groupHover={{ bg: cardHoverBg }}
        transition="all 0.2s"
      >
        <Text fontSize="sm" color="dark.text" fontWeight="500">
          {country}
        </Text>
      </Td>

      <Td
        py={4}
        px={6}
        bg={cardBg}
        borderRight="1px solid"
        borderTop="1px solid"
        borderBottom="1px solid"
        borderColor="dark.border"
        borderTopRightRadius="xl"
        borderBottomRightRadius="xl"
        boxShadow={rowShadow}
        _groupHover={{ bg: cardHoverBg }}
        transition="all 0.2s"
        isNumeric
      >
        <Tooltip label="Delete user" placement="left">
          <IconButton
            aria-label="Delete user"
            icon={<DeleteIcon fontSize="14px" />}
            size="sm"
            color="dark.muted"
            variant="ghost"
            _hover={{ bg: 'red.50', color: 'red.500' }}
            _dark={{ _hover: { bg: 'rgba(239, 68, 68, 0.15)', color: 'red.400' } }}
            onClick={() => onDelete(user.id)}
            borderRadius="xl"
            transition="all 0.2s"
          />
        </Tooltip>
      </Td>
    </Tr>
  );
};

export default UserRow;
