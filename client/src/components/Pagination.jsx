import React from 'react';
import {
  Flex,
  Text,
  Button,
  Select,
  HStack,
  IconButton,
  useColorModeValue,
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
  const pagShadow = useColorModeValue('0 4px 20px rgba(0, 0, 0, 0.02)', '0 4px 20px rgba(0, 0, 0, 0.15)');
  const selectBg = useColorModeValue('white', '#111827');
  const optionBg = useColorModeValue('#ffffff', '#111827');
  const optionColor = useColorModeValue('#0f172a', '#f8fafc');
  const btnBg = useColorModeValue('white', 'rgba(255, 255, 255, 0.03)');

  return (
    <Flex
      direction={{ base: 'column', md: 'row' }}
      justifyContent="space-between"
      alignItems="center"
      gap={4}
      my={6}
      px={6}
      py={4}
      bg="dark.card"
      borderRadius="2xl"
      border="1px solid"
      borderColor="dark.border"
      boxShadow={pagShadow}
    >
      {/* Entries Info */}
      <Text fontSize="sm" color="dark.muted" fontWeight="500">
        Showing{' '}
        <Text as="span" color="dark.text" fontWeight="700">
          {startIndex}
        </Text>{' '}
        to{' '}
        <Text as="span" color="dark.text" fontWeight="700">
          {endIndex}
        </Text>{' '}
        of{' '}
        <Text as="span" color="brand.500" fontWeight="700">
          {totalCount}
        </Text>{' '}
        entries
      </Text>

      {/* Pagination Controls */}
      <Flex
        direction={{ base: 'column', sm: 'row' }}
        alignItems="center"
        gap={5}
        w={{ base: 'full', sm: 'auto' }}
        justifyContent="center"
      >
        {/* Page Size Selector */}
        <HStack spacing={2} minW="140px" justifyContent="center">
          <Text fontSize="xs" color="dark.muted" fontWeight="700" textTransform="uppercase" letterSpacing="wider">
            Show
          </Text>
          <Select
            size="sm"
            value={pageSize}
            onChange={(e) => {
              setPageSize(Number(e.target.value));
              setCurrentPage(1);
            }}
            borderRadius="xl"
            bg={selectBg}
            borderColor="dark.border"
            color="dark.text"
            w="75px"
            _hover={{ borderColor: 'brand.400' }}
            _focus={{ borderColor: 'brand.500', boxShadow: '0 0 0 1px rgba(139, 92, 246, 0.4)' }}
          >
            <option value={8} style={{ background: optionBg, color: optionColor }}>8</option>
            <option value={12} style={{ background: optionBg, color: optionColor }}>12</option>
            <option value={24} style={{ background: optionBg, color: optionColor }}>24</option>
            <option value={48} style={{ background: optionBg, color: optionColor }}>48</option>
            <option value={100} style={{ background: optionBg, color: optionColor }}>100</option>
          </Select>
          <Text fontSize="xs" color="dark.muted" fontWeight="700" textTransform="uppercase" letterSpacing="wider">
            per page
          </Text>
        </HStack>

        {/* Buttons */}
        <HStack spacing={1.5} justifyContent="center">
          {/* First Page */}
          <IconButton
            aria-label="First page"
            icon={<ArrowLeftIcon fontSize="8px" />}
            onClick={() => handlePageChange(1)}
            isDisabled={currentPage === 1}
            variant="outline"
            bg={btnBg}
            borderColor="dark.border"
            color="dark.text"
            _hover={{ bg: 'dark.hover' }}
            borderRadius="xl"
            size="sm"
          />

          {/* Previous Page */}
          <IconButton
            aria-label="Previous page"
            icon={<ChevronLeftIcon fontSize="16px" />}
            onClick={() => handlePageChange(currentPage - 1)}
            isDisabled={currentPage === 1}
            variant="outline"
            bg={btnBg}
            borderColor="dark.border"
            color="dark.text"
            _hover={{ bg: 'dark.hover' }}
            borderRadius="xl"
            size="sm"
          />

          {/* Page Numbers */}
          {pageNumbers.map((page, index) => {
            if (page === 'ellipsis1' || page === 'ellipsis2') {
              return (
                <Button
                  key={`ellipsis-${index}`}
                  isDisabled
                  variant="ghost"
                  color="dark.muted"
                  px={1}
                  minW={8}
                  size="sm"
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
                variant={isCurrent ? 'solid' : 'outline'}
                bg={isCurrent ? 'brand.500' : btnBg}
                color={isCurrent ? 'white' : 'dark.text'}
                _hover={{ bg: isCurrent ? 'brand.600' : 'dark.hover' }}
                borderColor="dark.border"
                fontWeight="700"
                borderRadius="xl"
                size="sm"
                minW={8}
                px={3}
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
            isDisabled={currentPage === totalPages}
            variant="outline"
            bg={btnBg}
            borderColor="dark.border"
            color="dark.text"
            _hover={{ bg: 'dark.hover' }}
            borderRadius="xl"
            size="sm"
          />

          {/* Last Page */}
          <IconButton
            aria-label="Last page"
            icon={<ArrowRightIcon fontSize="8px" />}
            onClick={() => handlePageChange(totalPages)}
            isDisabled={currentPage === totalPages}
            variant="outline"
            bg={btnBg}
            borderColor="dark.border"
            color="dark.text"
            _hover={{ bg: 'dark.hover' }}
            borderRadius="xl"
            size="sm"
          />
        </HStack>
      </Flex>
    </Flex>
  );
};

export default Pagination;
