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
} from '@chakra-ui/react';
import Navbar from './components/Navbar';
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

  return (
    <Box minH="100vh" bg="dark.bg" color="dark.text" pb={12}>
      <Navbar
        onRefresh={refreshUsers}
        onAddClick={onOpen}
        isLoading={loading}
      />

      <Container maxW="container.xl" pt={6}>
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
          <>
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
          </>
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

