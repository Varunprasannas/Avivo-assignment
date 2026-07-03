import React from 'react';
import {
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  IconButton,
  Box,
  Text,
  Flex,
  ButtonGroup,
  HStack,
} from '@chakra-ui/react';
import { SearchIcon, SmallCloseIcon, HamburgerIcon, DragHandleIcon } from '@chakra-ui/icons';

const SearchBar = ({ value, onChange, filteredCount, totalCount, viewMode, setViewMode }) => {
  return (
    <Box w="full" px={{ base: 4, md: 8 }} py={4}>
      <Flex
        direction={{ base: 'column', md: 'row' }}
        justifyContent="space-between"
        alignItems={{ base: 'stretch', md: 'center' }}
        gap={4}
      >
        <InputGroup maxW={{ base: 'full', md: 'md' }}>
          <InputLeftElement pointerEvents="none">
            <SearchIcon color="dark.muted" />
          </InputLeftElement>
          <Input
            placeholder="Search by name, company, role, country..."
            value={value}
            onChange={(e) => onChange(e.target.value)}
            bg="dark.card"
            border="1px solid"
            borderColor="dark.border"
            color="dark.text"
            borderRadius="xl"
            _placeholder={{ color: 'dark.muted' }}
            _hover={{ borderColor: 'brand.400' }}
            _focus={{
              borderColor: 'brand.500',
              boxShadow: '0 0 0 1px rgba(59, 130, 246, 0.6)',
            }}
          />
          {value && (
            <InputRightElement>
              <IconButton
                aria-label="Clear search"
                icon={<SmallCloseIcon />}
                size="sm"
                variant="ghost"
                color="dark.muted"
                _hover={{ color: 'white', bg: 'transparent' }}
                onClick={() => onChange('')}
              />
            </InputRightElement>
          )}
        </InputGroup>

        <Flex
          justifyContent="space-between"
          alignItems="center"
          gap={6}
        >
          <Text fontSize="sm" color="dark.muted" fontWeight="500">
            Showing{' '}
            <Text as="span" color="brand.600" fontWeight="bold">
              {filteredCount}
            </Text>{' '}
            of{' '}
            <Text as="span" color="dark.text" fontWeight="bold">
              {totalCount}
            </Text>{' '}
            users
          </Text>

          <ButtonGroup isAttached size="sm" variant="outline" bg="dark.card" borderRadius="lg" overflow="hidden">
            <IconButton
              aria-label="List View"
              icon={<HamburgerIcon />}
              onClick={() => setViewMode('list')}
              colorScheme={viewMode === 'list' ? 'brand' : 'gray'}
              bg={viewMode === 'list' ? 'brand.500' : 'transparent'}
              color={viewMode === 'list' ? 'white' : 'dark.text'}
              _hover={{ bg: viewMode === 'list' ? 'brand.600' : 'dark.hover' }}
              borderColor="dark.border"
            />
            <IconButton
              aria-label="Grid View"
              icon={<DragHandleIcon />}
              onClick={() => setViewMode('grid')}
              colorScheme={viewMode === 'grid' ? 'brand' : 'gray'}
              bg={viewMode === 'grid' ? 'brand.500' : 'transparent'}
              color={viewMode === 'grid' ? 'white' : 'dark.text'}
              _hover={{ bg: viewMode === 'grid' ? 'brand.600' : 'dark.hover' }}
              borderColor="dark.border"
            />
          </ButtonGroup>
        </Flex>
      </Flex>
    </Box>
  );
};

export default SearchBar;
