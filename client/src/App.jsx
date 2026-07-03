import React, { useState } from 'react';
import {
  Box,
  Container,
  Spinner,
  Center,
  VStack,
  Text,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Button,
  useDisclosure,
  SlideFade,
  useColorModeValue,
} from '@chakra-ui/react';
import Navbar from './components/Navbar';
import StatsDashboard from './components/StatsDashboard';
import SearchBar from './components/SearchBar';
import UserTable from './components/UserTable';
import UserGrid from './components/UserGrid';
import AddUserModal from './components/AddUserModal';
import Pagination from './components/Pagination';
import { useUsers } from './hooks/useUsers';

function App() {
  const [viewMode, setViewMode] = useState('grid');
  const {
    users,
    allFilteredUsers,
    totalCount,
    filteredCount,
    loading,
    error,
    dataSource,
    searchQuery,
    setSearchQuery,
    refreshUsers,
    addStaticUser,
    deleteUser,
    currentPage,
    setCurrentPage,
    pageSize,
    setPageSize,
    totalPages,
    startIndex,
    endIndex,
  } = useUsers();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const bgImg = useColorModeValue(
    'radial-gradient(rgba(79, 70, 229, 0.07) 1.5px, transparent 1.5px)',
    'radial-gradient(rgba(255, 255, 255, 0.02) 1.5px, transparent 1.5px)'
  );

  return (
    <Box
      minH="100vh"
      bg="dark.bg"
      bgImage={bgImg}
      bgSize="24px 24px"
      color="dark.text"
      pb={12}
      position="relative"
      overflow="hidden"
    >
      {/* Decorative organic gradient blobs */}
      <Box
        position="absolute"
        top="-10%"
        left="-10%"
        w="50vw"
        h="50vw"
        borderRadius="full"
        bg="linear-gradient(135deg, rgba(79, 70, 229, 0.16) 0%, rgba(139, 92, 246, 0.16) 100%)"
        filter="blur(110px)"
        zIndex="0"
        pointerEvents="none"
      />
      <Box
        position="absolute"
        top="25%"
        right="-10%"
        w="40vw"
        h="40vw"
        borderRadius="full"
        bg="linear-gradient(135deg, rgba(236, 72, 153, 0.14) 0%, rgba(79, 70, 229, 0.14) 100%)"
        filter="blur(130px)"
        zIndex="0"
        pointerEvents="none"
      />
      <Box
        position="absolute"
        bottom="-10%"
        left="15%"
        w="35vw"
        h="35vw"
        borderRadius="full"
        bg="linear-gradient(135deg, rgba(59, 130, 246, 0.13) 0%, rgba(79, 70, 229, 0.13) 100%)"
        filter="blur(110px)"
        zIndex="0"
        pointerEvents="none"
      />

      <Navbar
        onRefresh={refreshUsers}
        onAddClick={onOpen}
        isLoading={loading}
      />

      <Container maxW="container.xl" pt={6} position="relative" zIndex={1}>
        {error ? (
          <Center py={16}>
            <Alert
              status="error"
              variant="subtle"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              textAlign="center"
              borderRadius="2xl"
              bg="rgba(239, 68, 68, 0.1)"
              border="1px solid"
              borderColor="red.500"
              p={8}
              maxW="lg"
            >
              <AlertIcon boxSize="40px" mr={0} />
              <AlertTitle mt={4} mb={1} fontSize="lg" color="dark.text">
                Error Loading Users
              </AlertTitle>
              <AlertDescription color="dark.muted" mb={6}>
                {error}
              </AlertDescription>
              <Button colorScheme="red" onClick={refreshUsers}>
                Try Again
              </Button>
            </Alert>
          </Center>
        ) : loading && users.length === 0 ? (
          <Center py={24}>
            <VStack spacing={4}>
              <Spinner
                thickness="4px"
                speed="0.8s"
                emptyColor="dark.border"
                color="brand.500"
                size="xl"
              />
              <Text color="dark.muted" fontSize="sm" fontWeight="500">
                Fetching directory database...
              </Text>
            </VStack>
          </Center>
        ) : (
          <SlideFade in={!loading} offsetY="15px">
            <StatsDashboard users={allFilteredUsers} />
            <SearchBar
              value={searchQuery}
              onChange={setSearchQuery}
              filteredCount={filteredCount}
              totalCount={totalCount}
              viewMode={viewMode}
              setViewMode={setViewMode}
            />
            {viewMode === 'list' ? (
              <UserTable users={users} onDelete={deleteUser} />
            ) : (
              <UserGrid users={users} onDelete={deleteUser} />
            )}
            <Pagination
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              pageSize={pageSize}
              setPageSize={setPageSize}
              totalPages={totalPages}
              totalCount={filteredCount}
              startIndex={startIndex}
              endIndex={endIndex}
            />
          </SlideFade>
        )}
      </Container>

      <AddUserModal
        isOpen={isOpen}
        onClose={onClose}
        onAdd={addStaticUser}
      />
    </Box>
  );
}

export default App;

