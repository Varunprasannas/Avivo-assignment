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
  useColorModeValue,
} from '@chakra-ui/react';
import { SearchIcon, SmallCloseIcon, HamburgerIcon, DragHandleIcon } from '@chakra-ui/icons';

const SearchBar = ({ value, onChange, filteredCount, totalCount, viewMode, setViewMode }) => {
  const containerBg = useColorModeValue('white', '#111827');
  const inputBg = useColorModeValue('#f8fafc', 'rgba(255, 255, 255, 0.02)');
  const activeColor = useColorModeValue('brand.500', 'brand.400');
  const hoverClearColor = useColorModeValue('brand.500', 'brand.300');
  const barShadow = useColorModeValue('0 4px 20px rgba(0, 0, 0, 0.02)', '0 4px 20px rgba(0, 0, 0, 0.2)');

  return (
    <Box
      w="full"
      px={{ base: 4, md: 6 }}
      py={4}
      bg={containerBg}
      borderRadius="2xl"
      border="1px solid"
      borderColor="dark.border"
      boxShadow={barShadow}
      mb={6}
    >
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
            bg={inputBg}
            border="1px solid"
            borderColor="dark.border"
            color="dark.text"
            borderRadius="xl"
            _placeholder={{ color: 'dark.muted', fontSize: 'sm' }}
            _hover={{ borderColor: 'brand.400' }}
            _focus={{
              borderColor: 'brand.500',
              boxShadow: '0 0 0 2px rgba(79, 70, 229, 0.15)',
              bg: containerBg,
            }}
            transition="all 0.2s"
          />
          {value && (
            <InputRightElement>
              <IconButton
                aria-label="Clear search"
                icon={<SmallCloseIcon />}
                size="sm"
                variant="ghost"
                color="dark.muted"
                _hover={{ color: hoverClearColor, bg: 'transparent' }}
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
          <Text fontSize="sm" color="dark.muted" fontWeight="600">
            Showing{' '}
            <Text as="span" color={activeColor} fontWeight="800">
              {filteredCount}
            </Text>{' '}
            of{' '}
            <Text as="span" color="dark.text" fontWeight="800">
              {totalCount}
            </Text>{' '}
            users
          </Text>

          <ButtonGroup size="sm" variant="outline" spacing={2}>
            <IconButton
              aria-label="List View"
              icon={<HamburgerIcon />}
              onClick={() => setViewMode('list')}
              bg={viewMode === 'list' ? 'brand.500' : 'transparent'}
              color={viewMode === 'list' ? 'white' : activeColor}
              borderColor={viewMode === 'list' ? 'brand.500' : 'dark.border'}
              _hover={{ bg: viewMode === 'list' ? 'brand.600' : 'dark.hover' }}
              borderRadius="xl"
              w="36px"
              h="36px"
            />
            <IconButton
              aria-label="Grid View"
              icon={<DragHandleIcon />}
              onClick={() => setViewMode('grid')}
              bg={viewMode === 'grid' ? 'brand.500' : 'transparent'}
              color={viewMode === 'grid' ? 'white' : activeColor}
              borderColor={viewMode === 'grid' ? 'brand.500' : 'dark.border'}
              _hover={{ bg: viewMode === 'grid' ? 'brand.600' : 'dark.hover' }}
              borderRadius="xl"
              w="36px"
              h="36px"
            />
          </ButtonGroup>
        </Flex>
      </Flex>
    </Box>
  );
};

export default SearchBar;
