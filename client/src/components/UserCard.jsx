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
  useColorModeValue,
  Icon,
} from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';

// Custom modern SVG icons matching reference image
const BuildingIcon = (props) => (
  <Icon viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="2" ry="2" />
    <path d="M7 21v-4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v4" />
    <path d="M9 8h.01" />
    <path d="M15 8h.01" />
    <path d="M9 12h.01" />
    <path d="M15 12h.01" />
  </Icon>
);

const MapPinIcon = (props) => (
  <Icon viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </Icon>
);

// SVG wave decoration at the top of the card
const CardWave = ({ color }) => (
  <svg
    viewBox="0 0 100 100"
    preserveAspectRatio="none"
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '95px',
      pointerEvents: 'none',
      zIndex: 0,
    }}
  >
    <path
      d="M0,0 L100,0 L100,70 C70,90 30,55 0,78 Z"
      fill={color}
      opacity="0.06"
    />
  </svg>
);

const UserCard = ({ user, onDelete, index = 0 }) => {
  const firstName = user.firstName || '';
  const lastName = user.lastName || '';
  const fullName = `${firstName} ${lastName}` || 'Unknown User';
  const email = user.email || '';
  const companyName = user.company?.name || 'Not Available';
  const jobTitle = user.company?.title || '';
  const role = (user.role || 'user').toUpperCase();
  const country = user.address?.country || 'Unknown';
  const image = user.image || '';

  // Theme definition cycling through index % 4
  const themes = [
    {
      name: 'blue',
      color: '#3b82f6',
      lightBg: 'rgba(59, 130, 246, 0.08)',
      badgeBg: 'rgba(59, 130, 246, 0.08)',
      badgeColor: '#2563eb',
    },
    {
      name: 'purple',
      color: '#8b5cf6',
      lightBg: 'rgba(139, 92, 246, 0.08)',
      badgeBg: 'rgba(139, 92, 246, 0.08)',
      badgeColor: '#7c3aed',
    },
    {
      name: 'green',
      color: '#10b981',
      lightBg: 'rgba(16, 185, 129, 0.08)',
      badgeBg: 'rgba(16, 185, 129, 0.08)',
      badgeColor: '#059669',
    },
    {
      name: 'orange',
      color: '#f97316',
      lightBg: 'rgba(249, 115, 22, 0.08)',
      badgeBg: 'rgba(249, 115, 22, 0.08)',
      badgeColor: '#ea580c',
    }
  ];

  const currentTheme = themes[index % 4];

  const borderHover = useColorModeValue(currentTheme.color, 'brand.500');
  const dividerBg = useColorModeValue('gray.100', 'rgba(255, 255, 255, 0.06)');
  const cardShadow = useColorModeValue(
    '0 4px 20px rgba(0, 0, 0, 0.02)',
    '0 4px 20px rgba(0, 0, 0, 0.15)'
  );
  const cardHoverShadow = useColorModeValue(
    '0 12px 30px rgba(79, 70, 229, 0.06)',
    '0 12px 30px rgba(0, 0, 0, 0.25)'
  );

  return (
    <Box
      bg="dark.card"
      borderRadius="2xl"
      border="1px solid"
      borderColor="dark.border"
      borderBottom="4px solid"
      borderBottomColor={currentTheme.color}
      p={6}
      position="relative"
      overflow="hidden"
      boxShadow={cardShadow}
      transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
      _hover={{
        transform: 'translateY(-6px)',
        boxShadow: cardHoverShadow,
        borderColor: borderHover,
        borderBottomColor: borderHover,
      }}
    >
      {/* Decorative top wave shape */}
      <CardWave color={currentTheme.color} />

      <Flex justify="flex-end" position="absolute" top={4} right={4} zIndex={2}>
        <Tooltip label="Delete user" placement="top">
          <IconButton
            aria-label="Delete user"
            icon={<DeleteIcon fontSize="13px" />}
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
      </Flex>

      <VStack spacing={4} align="center" textAlign="center" pt={2} position="relative" zIndex={1}>
        <Box position="relative">
          <Avatar
            name={fullName}
            src={image}
            size="xl"
            border="4px solid"
            borderColor={currentTheme.lightBg}
            boxShadow="0 4px 10px rgba(0,0,0,0.05)"
          />
          {/* Active status indicator dot */}
          <Box
            position="absolute"
            bottom="2px"
            right="5px"
            w="14px"
            h="14px"
            bg="green.400"
            border="2.5px solid"
            borderColor="dark.card"
            borderRadius="full"
          />
        </Box>

        <VStack spacing={1}>
          <Text fontWeight="800" color="dark.text" fontSize="lg" noOfLines={1} letterSpacing="-0.02em">
            {fullName}
          </Text>
          <Text fontSize="xs" color="dark.muted" noOfLines={1} maxW="200px" fontWeight="500">
            {email}
          </Text>
        </VStack>

        <Badge
          fontSize="10px"
          bg={currentTheme.badgeBg}
          color={currentTheme.badgeColor}
          variant="subtle"
          borderRadius="full"
          px={3.5}
          py={0.5}
          fontWeight="800"
          letterSpacing="0.02em"
          textTransform="uppercase"
        >
          {role}
        </Badge>

        <Box w="full" h="1px" bg={dividerBg} />

        <VStack spacing={3.5} w="full" align="stretch" pt={1}>
          {/* Company Info */}
          <HStack spacing={3.5} align="flex-start">
            <Flex
              w="32px"
              h="32px"
              align="center"
              justify="center"
              borderRadius="xl"
              bg={currentTheme.lightBg}
              color={currentTheme.color}
              flexShrink={0}
            >
              <BuildingIcon boxSize={4} />
            </Flex>
            <VStack spacing={0} align="left" textAlign="left" overflow="hidden">
              <Text fontSize="8px" color="dark.muted" fontWeight="800" textTransform="uppercase" letterSpacing="wider">
                Workplace
              </Text>
              <Text fontSize="xs" fontWeight="700" color="dark.text" noOfLines={1}>
                {companyName}
              </Text>
              <Text fontSize="11px" color="dark.muted" noOfLines={1} fontWeight="500">
                {jobTitle || 'No Title'}
              </Text>
            </VStack>
          </HStack>

          {/* Location Info */}
          <HStack spacing={3.5} align="flex-start">
            <Flex
              w="32px"
              h="32px"
              align="center"
              justify="center"
              borderRadius="xl"
              bg={currentTheme.lightBg}
              color={currentTheme.color}
              flexShrink={0}
            >
              <MapPinIcon boxSize={4} />
            </Flex>
            <VStack spacing={0} align="left" textAlign="left">
              <Text fontSize="8px" color="dark.muted" fontWeight="800" textTransform="uppercase" letterSpacing="wider">
                Location
              </Text>
              <Text fontSize="xs" color="dark.text" fontWeight="700">
                {country}
              </Text>
            </VStack>
          </HStack>
        </VStack>
      </VStack>
    </Box>
  );
};

export default UserCard;
