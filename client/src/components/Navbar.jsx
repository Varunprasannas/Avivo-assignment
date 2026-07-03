import React from 'react';
import {
  Flex,
  Heading,
  Button,
  HStack,
  IconButton,
  Tooltip,
  useColorMode,
  useColorModeValue,
  Icon,
} from '@chakra-ui/react';
import { RepeatIcon, AddIcon, SunIcon, MoonIcon } from '@chakra-ui/icons';

// Custom User Directory Icon
const UserDirIcon = (props) => (
  <Icon viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </Icon>
);

const Navbar = ({ onRefresh, onAddClick, isLoading }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  
  const headerBg = useColorModeValue('rgba(255, 255, 255, 0.75)', 'rgba(9, 13, 22, 0.75)');
  const iconBg = useColorModeValue('rgba(79, 70, 229, 0.1)', 'rgba(165, 180, 252, 0.15)');
  const headingColor = useColorModeValue('#1e1b4b', '#f8fafc'); // Deep navy in light mode

  return (
    <Flex
      as="header"
      py={4}
      px={{ base: 4, md: 8 }}
      justifyContent="space-between"
      alignItems="center"
      bg={headerBg}
      borderBottom="1px solid"
      borderColor="dark.border"
      backdropFilter="blur(16px)"
      position="sticky"
      top="0"
      zIndex="10"
    >
      <Flex align="center" gap={3}>
        <Flex
          w="40px"
          h="40px"
          align="center"
          justify="center"
          borderRadius="xl"
          bg={iconBg}
          color="brand.500"
        >
          <UserDirIcon boxSize={5} />
        </Flex>
        <Heading fontSize={{ base: 'lg', sm: 'xl' }} fontWeight="900" color={headingColor} letterSpacing="-0.02em">
          User Directory
        </Heading>
      </Flex>

      <HStack spacing={{ base: 2, md: 3.5 }}>
        <Tooltip label="Refresh directory data" placement="bottom">
          <IconButton
            aria-label="Refresh users"
            icon={<RepeatIcon />}
            onClick={onRefresh}
            isLoading={isLoading}
            variant="ghost"
            color="dark.text"
            _hover={{ bg: 'dark.hover' }}
            _active={{ bg: 'dark.border' }}
            borderRadius="xl"
            size="sm"
          />
        </Tooltip>

        <Tooltip label={`Switch to ${colorMode === 'light' ? 'Dark' : 'Light'} mode`} placement="bottom">
          <IconButton
            aria-label="Toggle theme"
            icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            onClick={toggleColorMode}
            variant="ghost"
            color="dark.text"
            _hover={{ bg: 'dark.hover' }}
            _active={{ bg: 'dark.border' }}
            borderRadius="xl"
            size="sm"
          />
        </Tooltip>

        <Button
          leftIcon={<AddIcon />}
          onClick={onAddClick}
          colorScheme="brand"
          size="sm"
          borderRadius="xl"
          px={{ base: 3.5, md: 5 }}
          boxShadow="0 4px 14px rgba(79, 70, 229, 0.35)"
          _hover={{
            transform: 'translateY(-1px)',
            boxShadow: '0 6px 20px rgba(79, 70, 229, 0.45)',
          }}
          _active={{
            transform: 'translateY(1px)',
          }}
          transition="all 0.2s"
        >
          Add User
        </Button>
      </HStack>
    </Flex>
  );
};

export default Navbar;
