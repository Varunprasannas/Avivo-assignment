import React from 'react';
import {
  Flex,
  Text,
  Button,
  ButtonGroup,
  Select,
  HStack,
  IconButton,
  Box,
} from '@chakra-ui/react';
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
} from '@chakra-ui/icons';

const Pagination = ({
  currentPage,
  setCurrentPage,
  pageSize,
  setPageSize,
  totalPages,
  totalCount,
  startIndex,
  endIndex,
}) => {
  // Generate the windowed page list
  const getPageNumbers = () => {
    const pages = [];
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);

      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);

      if (start > 2) {
        pages.push('ellipsis1');
      }

      for (let i = start; i <= end; i++) {
        pages.push(i);
      }

      if (end < totalPages - 1) {
        pages.push('ellipsis2');
      }

      pages.push(totalPages);
    }
    return pages;
  };

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const pageNumbers = getPageNumbers();

  return (
    <Flex
      direction={{ base: 'column', md: 'row' }}
      justifyContent="space-between"
      alignItems="center"
      gap={4}
      mx={{ base: 4, md: 8 }}
      my={6}
      px={6}
      py={4}
      bg="dark.card"
      borderRadius="xl"
      border="1px solid"
      borderColor="dark.border"
      boxShadow="0 4px 20px rgba(0, 0, 0, 0.02)"
    >
      {/* Entries Info */}
      <Text fontSize="sm" color="dark.muted" fontWeight="500">
        Showing{' '}
        <Text as="span" color="dark.text" fontWeight="bold">
          {startIndex}
        </Text>{' '}
        to{' '}
        <Text as="span" color="dark.text" fontWeight="bold">
          {endIndex}
        </Text>{' '}
        of{' '}
        <Text as="span" color="brand.600" fontWeight="bold">
          {totalCount}
        </Text>{' '}
        entries
      </Text>

      {/* Pagination Controls */}
      <Flex
        direction={{ base: 'column', sm: 'row' }}
        alignItems="center"
        gap={4}
        w={{ base: 'full', sm: 'auto' }}
        justifyContent="center"
      >
        {/* Page Size Selector */}
        <HStack spacing={2} minW="140px" justifyContent="center">
          <Text fontSize="xs" color="dark.muted" fontWeight="600" textTransform="uppercase">
            Show
          </Text>
          <Select
            size="sm"
            value={pageSize}
            onChange={(e) => {
              setPageSize(Number(e.target.value));
              setCurrentPage(1);
            }}
            borderRadius="md"
            bg="dark.bg"
            borderColor="dark.border"
            color="dark.text"
            w="75px"
            _hover={{ borderColor: 'brand.400' }}
            _focus={{ borderColor: 'brand.500', boxShadow: 'none' }}
          >
            <option value={8}>8</option>
            <option value={12}>12</option>
            <option value={24}>24</option>
            <option value={48}>48</option>
            <option value={100}>100</option>
          </Select>
          <Text fontSize="xs" color="dark.muted" fontWeight="600" textTransform="uppercase">
            per page
          </Text>
        </HStack>

        {/* Buttons */}
        <ButtonGroup isAttached size="sm" variant="outline" bg="dark.bg" borderRadius="md" overflow="hidden">
          {/* First Page */}
          <IconButton
            aria-label="First page"
            icon={<ArrowLeftIcon fontSize="8px" />}
            onClick={() => handlePageChange(1)}
            disabled={currentPage === 1}
            isDisabled={currentPage === 1}
            borderColor="dark.border"
            color="dark.text"
            _hover={{ bg: 'dark.hover' }}
          />

          {/* Previous Page */}
          <IconButton
            aria-label="Previous page"
            icon={<ChevronLeftIcon fontSize="16px" />}
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            isDisabled={currentPage === 1}
            borderColor="dark.border"
            color="dark.text"
            _hover={{ bg: 'dark.hover' }}
          />

          {/* Page Numbers */}
          {pageNumbers.map((page, index) => {
            if (page === 'ellipsis1' || page === 'ellipsis2') {
              return (
                <Button
                  key={`ellipsis-${index}`}
                  isDisabled
                  disabled
                  borderColor="dark.border"
                  color="dark.muted"
                  bg="transparent"
                  px={3}
                >
                  ...
                </Button>
              );
            }

            const isCurrent = page === currentPage;
            return (
              <Button
                key={page}
                onClick={() => handlePageChange(page)}
                colorScheme={isCurrent ? 'brand' : 'gray'}
                bg={isCurrent ? 'brand.500' : 'transparent'}
                color={isCurrent ? 'white' : 'dark.text'}
                _hover={{ bg: isCurrent ? 'brand.600' : 'dark.hover' }}
                borderColor="dark.border"
                fontWeight={isCurrent ? 'bold' : 'normal'}
                px={4}
              >
                {page}
              </Button>
            );
          })}

          {/* Next Page */}
          <IconButton
            aria-label="Next page"
            icon={<ChevronRightIcon fontSize="16px" />}
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            isDisabled={currentPage === totalPages}
            borderColor="dark.border"
            color="dark.text"
            _hover={{ bg: 'dark.hover' }}
          />

          {/* Last Page */}
          <IconButton
            aria-label="Last page"
            icon={<ArrowRightIcon fontSize="8px" />}
            onClick={() => handlePageChange(totalPages)}
            disabled={currentPage === totalPages}
            isDisabled={currentPage === totalPages}
            borderColor="dark.border"
            color="dark.text"
            _hover={{ bg: 'dark.hover' }}
          />
        </ButtonGroup>
      </Flex>
    </Flex>
  );
};

export default Pagination;
