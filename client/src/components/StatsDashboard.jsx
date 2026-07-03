import React from 'react';
import { Box, SimpleGrid, Text, Flex, Icon, useColorModeValue } from '@chakra-ui/react';

// Custom modern SVG icons
const UsersIcon = (props) => (
  <Icon viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </Icon>
);

const ShieldIcon = (props) => (
  <Icon viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </Icon>
);

const LayersIcon = (props) => (
  <Icon viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <polygon points="12 2 2 7 12 12 22 7 12 2" />
    <polyline points="2 17 12 22 22 17" />
    <polyline points="2 12 12 17 22 12" />
  </Icon>
);

const GlobeIcon = (props) => (
  <Icon viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </Icon>
);

const WaveGraphic = ({ color }) => (
  <svg
    viewBox="0 0 100 100"
    preserveAspectRatio="none"
    style={{
      position: 'absolute',
      bottom: 0,
      right: 0,
      width: '130px',
      height: '65px',
      opacity: 0.15,
      pointerEvents: 'none',
      zIndex: 0,
    }}
  >
    <path
      d="M0,100 C30,40 70,75 100,25 L100,100 Z"
      fill={`url(#${color}-grad)`}
    />
    <defs>
      <linearGradient id={`${color}-grad`} x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor={color} stopOpacity="0.05" />
        <stop offset="100%" stopColor={color} stopOpacity="0.9" />
      </linearGradient>
    </defs>
  </svg>
);

const StatsDashboard = ({ users = [] }) => {
  // Compute dashboard metrics
  const totalUsers = users.length;
  const adminCount = users.filter((u) => u.role?.toLowerCase() === 'admin').length;
  
  const roles = new Set(users.map((u) => u.role).filter(Boolean));
  const distinctRoles = roles.size;
  
  const countries = new Set(users.map((u) => u.address?.country).filter(Boolean));
  const distinctCountries = countries.size;

  const cardShadow = useColorModeValue(
    '0 4px 20px rgba(0, 0, 0, 0.02)',
    '0 4px 20px rgba(0, 0, 0, 0.25)'
  );

  const stats = [
    {
      label: 'Directory Size',
      value: totalUsers,
      icon: UsersIcon,
      accentColor: '#3b82f6',
      iconBg: 'rgba(59, 130, 246, 0.1)',
      iconColor: 'blue.500',
      description: 'Active member profiles'
    },
    {
      label: 'Administrators',
      value: adminCount,
      icon: ShieldIcon,
      accentColor: '#8b5cf6',
      iconBg: 'rgba(139, 92, 246, 0.1)',
      iconColor: 'purple.500',
      description: 'Directory coordinators'
    },
    {
      label: 'Access Roles',
      value: distinctRoles,
      icon: LayersIcon,
      accentColor: '#10b981',
      iconBg: 'rgba(16, 185, 129, 0.1)',
      iconColor: 'green.500',
      description: 'Unique permissions'
    },
    {
      label: 'Global Offices',
      value: distinctCountries,
      icon: GlobeIcon,
      accentColor: '#f97316',
      iconBg: 'rgba(249, 115, 22, 0.1)',
      iconColor: 'orange.500',
      description: 'Countries represented'
    }
  ];

  return (
    <SimpleGrid columns={{ base: 2, lg: 4 }} gap={{ base: 3, md: 5 }} mb={6}>
      {stats.map((stat, index) => (
        <Box
          key={index}
          bg="dark.card"
          borderRadius="2xl"
          border="1px solid"
          borderColor="dark.border"
          p={{ base: 3.5, md: 5 }}
          position="relative"
          overflow="hidden"
          boxShadow={cardShadow}
          transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
          _hover={{
            transform: 'translateY(-3px)',
            boxShadow: '0 10px 25px rgba(0, 0, 0, 0.05)',
            borderColor: stat.accentColor,
          }}
        >
          {/* SVG Wave at bottom-right corner */}
          <WaveGraphic color={stat.accentColor} />

          <Flex align="center" justify="space-between" zIndex={1} position="relative">
            <Box>
              <Text fontSize={{ base: '9px', md: '10px' }} fontWeight="800" color={stat.accentColor} textTransform="uppercase" letterSpacing="wider" noOfLines={1}>
                {stat.label}
              </Text>
              <Text fontSize={{ base: '2xl', md: '3xl' }} fontWeight="900" color="dark.text" mt={1.5} lineHeight="1">
                {stat.value}
              </Text>
              <Text fontSize={{ base: '10px', md: '11px' }} color="dark.muted" mt={1.5} fontWeight="500" noOfLines={1}>
                {stat.description}
              </Text>
            </Box>
            
            <Flex
              w={{ base: 10, sm: 12, md: 14 }}
              h={{ base: 10, sm: 12, md: 14 }}
              align="center"
              justify="center"
              borderRadius="full"
              bg={stat.iconBg}
              color={stat.iconColor}
              flexShrink={0}
            >
              <stat.icon boxSize={{ base: 5, md: 6 }} />
            </Flex>
          </Flex>
        </Box>
      ))}
    </SimpleGrid>
  );
};

export default StatsDashboard;
