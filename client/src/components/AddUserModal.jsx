import React, { useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  Grid,
  GridItem,
  useToast,
} from '@chakra-ui/react';

const AddUserModal = ({ isOpen, onClose, onAdd }) => {
  const toast = useToast();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    companyName: '',
    jobTitle: '',
    role: 'user',
    country: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate inputs
    if (
      !formData.firstName.trim() ||
      !formData.lastName.trim() ||
      !formData.email.trim() ||
      !formData.companyName.trim() ||
      !formData.jobTitle.trim() ||
      !formData.country.trim()
    ) {
      toast({
        title: 'Validation Error',
        description: 'Please fill out all fields.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    // Construct the user object matching dummyjson layout
    const newUser = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      role: formData.role,
      company: {
        name: formData.companyName,
        title: formData.jobTitle,
      },
      address: {
        country: formData.country,
      },
      // Generate a random seed image matching name
      image: `https://dummyjson.com/icon/${formData.firstName.toLowerCase()}${formData.lastName.toLowerCase()}/128`,
    };

    onAdd(newUser);

    toast({
      title: 'User Added Successfully',
      description: `${formData.firstName} ${formData.lastName} was added successfully.`,
      status: 'success',
      duration: 3000,
      isClosable: true,
    });

    // Reset form and close
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      companyName: '',
      jobTitle: '',
      role: 'user',
      country: '',
    });
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered size="lg" scrollBehavior="inside">
      <ModalOverlay backdropFilter="blur(8px)" bg="rgba(0, 0, 0, 0.2)" />
      <ModalContent
        bg="dark.card"
        border="1px solid"
        borderColor="dark.border"
        color="dark.text"
        borderRadius="2xl"
        as="form"
        onSubmit={handleSubmit}
        mx={4}
        maxH="calc(100vh - 40px)"
      >
        <ModalHeader borderBottom="1px solid" borderColor="dark.border">
          Add User
        </ModalHeader>
        <ModalCloseButton />
        
        <ModalBody py={6}>
          <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap={4}>
            <GridItem>
              <FormControl isRequired>
                <FormLabel fontSize="sm" color="dark.muted">
                  First Name
                </FormLabel>
                <Input
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="e.g. John"
                  bg="dark.bg"
                  border="1px solid"
                  borderColor="dark.border"
                  _hover={{ borderColor: 'brand.400' }}
                  _focus={{ borderColor: 'brand.500' }}
                />
              </FormControl>
            </GridItem>
            
            <GridItem>
              <FormControl isRequired>
                <FormLabel fontSize="sm" color="dark.muted">
                  Last Name
                </FormLabel>
                <Input
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="e.g. Doe"
                  bg="dark.bg"
                  border="1px solid"
                  borderColor="dark.border"
                  _hover={{ borderColor: 'brand.400' }}
                  _focus={{ borderColor: 'brand.500' }}
                />
              </FormControl>
            </GridItem>

            <GridItem colSpan={{ base: 1, md: 2 }}>
              <FormControl isRequired>
                <FormLabel fontSize="sm" color="dark.muted">
                  Email Address
                </FormLabel>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="e.g. john.doe@example.com"
                  bg="dark.bg"
                  border="1px solid"
                  borderColor="dark.border"
                  _hover={{ borderColor: 'brand.400' }}
                  _focus={{ borderColor: 'brand.500' }}
                />
              </FormControl>
            </GridItem>

            <GridItem colSpan={{ base: 1, md: 2 }}>
              <FormControl isRequired>
                <FormLabel fontSize="sm" color="dark.muted">
                  Company Name
                </FormLabel>
                <Input
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  placeholder="e.g. Acme Corporation"
                  bg="dark.bg"
                  border="1px solid"
                  borderColor="dark.border"
                  _hover={{ borderColor: 'brand.400' }}
                  _focus={{ borderColor: 'brand.500' }}
                />
              </FormControl>
            </GridItem>

            <GridItem>
              <FormControl isRequired>
                <FormLabel fontSize="sm" color="dark.muted">
                  Job Title
                </FormLabel>
                <Input
                  name="jobTitle"
                  value={formData.jobTitle}
                  onChange={handleChange}
                  placeholder="e.g. Lead Engineer"
                  bg="dark.bg"
                  border="1px solid"
                  borderColor="dark.border"
                  _hover={{ borderColor: 'brand.400' }}
                  _focus={{ borderColor: 'brand.500' }}
                />
              </FormControl>
            </GridItem>

            <GridItem>
              <FormControl isRequired>
                <FormLabel fontSize="sm" color="dark.muted">
                  Role
                </FormLabel>
                <Select
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  bg="dark.bg"
                  border="1px solid"
                  borderColor="dark.border"
                  color="dark.text"
                  _hover={{ borderColor: 'brand.400' }}
                  _focus={{ borderColor: 'brand.500' }}
                >
                  <option value="user" style={{ background: '#ffffff', color: '#0f172a' }}>User</option>
                  <option value="moderator" style={{ background: '#ffffff', color: '#0f172a' }}>Moderator</option>
                  <option value="admin" style={{ background: '#ffffff', color: '#0f172a' }}>Admin</option>
                </Select>
              </FormControl>
            </GridItem>

            <GridItem colSpan={{ base: 1, md: 2 }}>
              <FormControl isRequired>
                <FormLabel fontSize="sm" color="dark.muted">
                  Country
                </FormLabel>
                <Input
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  placeholder="e.g. United States"
                  bg="dark.bg"
                  border="1px solid"
                  borderColor="dark.border"
                  _hover={{ borderColor: 'brand.400' }}
                  _focus={{ borderColor: 'brand.500' }}
                />
              </FormControl>
            </GridItem>
          </Grid>
        </ModalBody>

        <ModalFooter borderTop="1px solid" borderColor="dark.border">
          <Button variant="ghost" mr={3} onClick={onClose} color="dark.text" _hover={{ bg: 'dark.hover' }}>
            Cancel
          </Button>
          <Button type="submit" colorScheme="brand">
            Add User
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default AddUserModal;
