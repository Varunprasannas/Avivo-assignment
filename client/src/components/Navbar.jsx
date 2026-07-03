import React from 'react';
import {
  Flex,
  Heading,
  Button,
  HStack,
  Text,
  Badge,
  IconButton,
  Tooltip,
} from '@chakra-ui/react';
import { RepeatIcon, AddIcon } from '@chakra-ui/icons';

const Navbar = ({ dataSource, onRefresh, onAddClick, isLoading }) => {
  return (
    <Flex
      as="header"
      position="sticky"
      top="0"
      zIndex="10"
      backdropFilter="blur(12px)"
      bg="rgba(255, 255, 255, 0.8)"
      borderBottom="1px solid"
      borderColor="dark.border"
      py={4}
      px={{ base: 3, md: 8 }}
      justifyContent="space-between"
      alignItems="center"
      transition="all 0.3s ease"
    >
      <Flex direction="column">
        <HStack spacing={{ base: 1.5, sm: 2 }} align="center">
          <Heading size="md" fontSize={{ base: 'md', sm: 'lg' }} fontWeight="800" bgGradient="linear(to-r, brand.500, brand.700)" bgClip="text">
            AVIVO
          </Heading>
          <Text fontWeight="600" color="dark.text" fontSize={{ base: 'sm', sm: 'md' }} whiteSpace="nowrap">
            User Directory
          </Text>
        </HStack>
      </Flex>

      <HStack spacing={{ base: 1.5, md: 3 }}>
        <Tooltip label="Refresh user list" placement="bottom">
          <IconButton
            aria-label="Refresh users"
            icon={<RepeatIcon />}
            onClick={onRefresh}
            isLoading={isLoading}
            variant="ghost"
            color="dark.text"
            _hover={{ bg: 'dark.hover' }}
            _active={{ bg: 'dark.border' }}
            borderRadius="lg"
            size="sm"
          />
        </Tooltip>

        <Button
          leftIcon={<AddIcon />}
          onClick={onAddClick}
          colorScheme="brand"
          size="sm"
          borderRadius="lg"
          px={{ base: 3, md: 4 }}
          boxShadow="0 4px 12px rgba(59, 130, 246, 0.3)"
          _hover={{
            transform: 'translateY(-1px)',
            boxShadow: '0 6px 20px rgba(59, 130, 246, 0.4)',
          }}
          _active={{
            transform: 'translateY(1px)',
          }}
        >
          Add User
        </Button>
      </HStack>
    </Flex>
  );
};

export default Navbar;
