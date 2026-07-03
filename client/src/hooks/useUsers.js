import { useState, useEffect, useCallback, useMemo } from 'react';
import { fetchUsers, createUserApi, deleteUserApi } from '../api/users';

export const useUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [dataSource, setDataSource] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(12); // Divisible by 1, 2, 3, and 4 grid columns

  const loadUsers = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchUsers();
      setUsers(data.users);
      setDataSource(data.source);
    } catch (err) {
      setError(err.message || 'An error occurred while fetching users.');
    } finally {
      setLoading(false);
    }
  }, []);

  // Fetch users on initial mount
  useEffect(() => {
    loadUsers();
  }, [loadUsers]);

  // Reset to first page when search query changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);

  // Add user persists to MySQL backend API
  const addStaticUser = useCallback(async (newUser) => {
    try {
      const result = await createUserApi(newUser);
      if (result.success) {
        setUsers((prevUsers) => {
          let userWithId = result.user;
          // If fallback mode (locally mocked), generate an incremented temporary ID
          if (result.isFallback) {
            const maxId = prevUsers.reduce((max, u) => (u.id > max ? u.id : max), 0);
            userWithId = { ...newUser, id: maxId + 1 };
          }
          return [userWithId, ...prevUsers];
        });
        setCurrentPage(1); // Jump to first page to see the newly added user
      }
    } catch (err) {
      console.error('Failed to add user:', err);
    }
  }, []);

  // Delete user persists to MySQL backend API
  const deleteUser = useCallback(async (userId) => {
    try {
      const result = await deleteUserApi(userId);
      if (result.success) {
        setUsers((prevUsers) => prevUsers.filter((u) => u.id !== userId));
      }
    } catch (err) {
      console.error('Failed to delete user:', err);
    }
  }, []);

  // Filtered users based on search box (case-insensitive search in name, company, role, country)
  const filteredUsers = useMemo(() => {
    if (!searchQuery.trim()) return users;

    const query = searchQuery.toLowerCase();
    return users.filter((user) => {
      const firstName = user.firstName || '';
      const lastName = user.lastName || '';
      const fullName = `${firstName} ${lastName}`.toLowerCase();
      
      const companyName = user.company?.name || '';
      const jobTitle = user.company?.title || '';
      const role = user.role || '';
      const country = user.address?.country || '';

      return (
        fullName.includes(query) ||
        companyName.toLowerCase().includes(query) ||
        jobTitle.toLowerCase().includes(query) ||
        role.toLowerCase().includes(query) ||
        country.toLowerCase().includes(query)
      );
    });
  }, [users, searchQuery]);

  const totalPages = useMemo(() => {
    return Math.ceil(filteredUsers.length / pageSize) || 1;
  }, [filteredUsers.length, pageSize]);

  // Adjust page if current page exceeds total pages (e.g. after deletion)
  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

  // Slice users array for pagination
  const paginatedUsers = useMemo(() => {
    const startIndex = (currentPage - 1) * pageSize;
    return filteredUsers.slice(startIndex, startIndex + pageSize);
  }, [filteredUsers, currentPage, pageSize]);

  return {
    users: paginatedUsers,
    allFilteredUsers: filteredUsers,
    totalCount: users.length,
    filteredCount: filteredUsers.length,
    loading,
    error,
    dataSource,
    searchQuery,
    setSearchQuery,
    refreshUsers: loadUsers,
    addStaticUser,
    deleteUser,
    currentPage,
    setCurrentPage,
    pageSize,
    setPageSize,
    totalPages,
    startIndex: filteredUsers.length > 0 ? (currentPage - 1) * pageSize + 1 : 0,
    endIndex: Math.min(currentPage * pageSize, filteredUsers.length),
  };
};

