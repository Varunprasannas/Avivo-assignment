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
  useColorModeValue,
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

  const inputBg = useColorModeValue('dark.bg', 'rgba(255,255,255,0.01)');
  const optionBg = useColorModeValue('#ffffff', '#111827');
  const optionColor = useColorModeValue('#0f172a', '#f8fafc');
  const headerBorder = useColorModeValue('gray.100', 'rgba(255, 255, 255, 0.05)');

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered size="lg" scrollBehavior="inside">
      <ModalOverlay backdropFilter="blur(12px)" bg="rgba(0, 0, 0, 0.3)" />
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
        boxShadow="0 20px 50px rgba(0, 0, 0, 0.3)"
      >
        <ModalHeader borderBottom="1px solid" borderColor={headerBorder} fontWeight="800" fontSize="lg">
          Add Directory Profile
        </ModalHeader>
        <ModalCloseButton borderRadius="xl" />
        
        <ModalBody py={6}>
          <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap={4}>
            <GridItem>
              <FormControl isRequired>
                <FormLabel fontSize="xs" fontWeight="700" color="dark.muted" textTransform="uppercase" letterSpacing="wider">
                  First Name
                </FormLabel>
                <Input
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="e.g. John"
                  bg={inputBg}
                  border="1px solid"
                  borderColor="dark.border"
                  borderRadius="xl"
                  _hover={{ borderColor: 'brand.400' }}
                  _focus={{ borderColor: 'brand.500', boxShadow: '0 0 0 1px rgba(139, 92, 246, 0.4)' }}
                />
              </FormControl>
            </GridItem>
            
            <GridItem>
              <FormControl isRequired>
                <FormLabel fontSize="xs" fontWeight="700" color="dark.muted" textTransform="uppercase" letterSpacing="wider">
                  Last Name
                </FormLabel>
                <Input
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="e.g. Doe"
                  bg={inputBg}
                  border="1px solid"
                  borderColor="dark.border"
                  borderRadius="xl"
                  _hover={{ borderColor: 'brand.400' }}
                  _focus={{ borderColor: 'brand.500', boxShadow: '0 0 0 1px rgba(139, 92, 246, 0.4)' }}
                />
              </FormControl>
            </GridItem>

            <GridItem colSpan={{ base: 1, md: 2 }}>
              <FormControl isRequired>
                <FormLabel fontSize="xs" fontWeight="700" color="dark.muted" textTransform="uppercase" letterSpacing="wider">
                  Email Address
                </FormLabel>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="e.g. john.doe@example.com"
                  bg={inputBg}
                  border="1px solid"
                  borderColor="dark.border"
                  borderRadius="xl"
                  _hover={{ borderColor: 'brand.400' }}
                  _focus={{ borderColor: 'brand.500', boxShadow: '0 0 0 1px rgba(139, 92, 246, 0.4)' }}
                />
              </FormControl>
            </GridItem>

            <GridItem colSpan={{ base: 1, md: 2 }}>
              <FormControl isRequired>
                <FormLabel fontSize="xs" fontWeight="700" color="dark.muted" textTransform="uppercase" letterSpacing="wider">
                  Company Name
                </FormLabel>
                <Input
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  placeholder="e.g. Acme Corporation"
                  bg={inputBg}
                  border="1px solid"
                  borderColor="dark.border"
                  borderRadius="xl"
                  _hover={{ borderColor: 'brand.400' }}
                  _focus={{ borderColor: 'brand.500', boxShadow: '0 0 0 1px rgba(139, 92, 246, 0.4)' }}
                />
              </FormControl>
            </GridItem>

            <GridItem>
              <FormControl isRequired>
                <FormLabel fontSize="xs" fontWeight="700" color="dark.muted" textTransform="uppercase" letterSpacing="wider">
                  Job Title
                </FormLabel>
                <Input
                  name="jobTitle"
                  value={formData.jobTitle}
                  onChange={handleChange}
                  placeholder="e.g. Lead Engineer"
                  bg={inputBg}
                  border="1px solid"
                  borderColor="dark.border"
                  borderRadius="xl"
                  _hover={{ borderColor: 'brand.400' }}
                  _focus={{ borderColor: 'brand.500', boxShadow: '0 0 0 1px rgba(139, 92, 246, 0.4)' }}
                />
              </FormControl>
            </GridItem>

            <GridItem>
              <FormControl isRequired>
                <FormLabel fontSize="xs" fontWeight="700" color="dark.muted" textTransform="uppercase" letterSpacing="wider">
                  Role
                </FormLabel>
                <Select
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  bg={inputBg}
                  border="1px solid"
                  borderColor="dark.border"
                  borderRadius="xl"
                  color="dark.text"
                  _hover={{ borderColor: 'brand.400' }}
                  _focus={{ borderColor: 'brand.500', boxShadow: '0 0 0 1px rgba(139, 92, 246, 0.4)' }}
                >
                  <option value="user" style={{ background: optionBg, color: optionColor }}>User</option>
                  <option value="moderator" style={{ background: optionBg, color: optionColor }}>Moderator</option>
                  <option value="admin" style={{ background: optionBg, color: optionColor }}>Admin</option>
                </Select>
              </FormControl>
            </GridItem>

            <GridItem colSpan={{ base: 1, md: 2 }}>
              <FormControl isRequired>
                <FormLabel fontSize="xs" fontWeight="700" color="dark.muted" textTransform="uppercase" letterSpacing="wider">
                  Country
                </FormLabel>
                <Input
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  placeholder="e.g. United States"
                  bg={inputBg}
                  border="1px solid"
                  borderColor="dark.border"
                  borderRadius="xl"
                  _hover={{ borderColor: 'brand.400' }}
                  _focus={{ borderColor: 'brand.500', boxShadow: '0 0 0 1px rgba(139, 92, 246, 0.4)' }}
                />
              </FormControl>
            </GridItem>
          </Grid>
        </ModalBody>

        <ModalFooter borderTop="1px solid" borderColor={headerBorder} gap={2}>
          <Button variant="ghost" onClick={onClose} color="dark.text" _hover={{ bg: 'dark.hover' }} borderRadius="xl" size="sm">
            Cancel
          </Button>
          <Button
            type="submit"
            colorScheme="brand"
            borderRadius="xl"
            size="sm"
            px={5}
            boxShadow="0 4px 12px rgba(139, 92, 246, 0.25)"
            _hover={{
              transform: 'translateY(-0.5px)',
              boxShadow: '0 6px 16px rgba(139, 92, 246, 0.35)',
            }}
            _active={{
              transform: 'translateY(0.5px)',
            }}
          >
            Create User
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default AddUserModal;
