import { 
  Flex,
  IconButton,
  Heading,
  Table,
  Thead,
  Tr,
  Td,
  Th,
  Tbody,
  useColorModeValue,
} from '@chakra-ui/react'
import { DeleteIcon } from '@chakra-ui/icons';

const CustomerTable = ({customers, deleteCustomer, deleteOption, getConstructions}) => {

  const tableBackgroud = useColorModeValue("gray.100", "gray.700");

  const handleRowClick = (event, customerId) => {
    event.preventDefault();
    getConstructions(customerId);
  };

  const handleDeleteClick = (event, customerId) => {
    event.preventDefault();
    deleteCustomer(customerId);
  };

  return(
    <Flex 
      background={tableBackgroud} 
      border="1px" 
      borderColor={tableBackgroud} 
      rounded={6} 
      w="100%"
      h="fit-content" 
      boxSizing="border-box"
      align="center" 
      direction="column"
      justify="center" 
      wrap="wrap">

      <Heading as="h4" size="md" mt={4} mb={2}>Clientes</Heading>
      
      <Table variant="simple" colorScheme="blue" size="lg">
      
        <Thead>
          <Tr>
            <Th>Razón social</Th>
            <Th>Cuit</Th>
            <Th>Email</Th>
            <Th>Max. monto desc.</Th>
          </Tr>
        </Thead>

        <Tbody>
          {!deleteOption && renderBody(customers)}
          {deleteOption && renderBodyWithDeleteOption(customers, handleRowClick, handleDeleteClick)}
        </Tbody>

      </Table>  

    </Flex>
  )
}

function renderBody(customers) {
  return customers.map((customer) => {
    return (
      <Tr key={customer.id}>
        <Td>{customer.businessName}</Td>
        <Td>{customer.cuit}</Td>
        <Td>{customer.email}</Td>
        <Td>{customer.maxCurrentAccount}</Td>
      </Tr>
    )
  })
}

function renderBodyWithDeleteOption(customers, handleRowClick, handleDeleteClick) {
  return customers.map((customer) => {
    return (
      <Tr key={customer.id} 
        _hover={{ bg: "gray.600" }} 
        onClick={(event) => handleRowClick(event, customer.id)}>
        <Td>{customer.businessName}</Td>
        <Td>{customer.cuit}</Td>
        <Td>{customer.email}</Td>
        <Td>{customer.maxCurrentAccount}</Td>
        <Td p={1}>
          <IconButton
            onClick={(event) => handleDeleteClick(event, customer.id)}
            colorScheme="blue" 
            variant="ghost" 
            aria-label="Delete" 
            icon={<DeleteIcon/>}>
          </IconButton> 
        </Td>
      </Tr>
    )
  })
}

export default CustomerTable;