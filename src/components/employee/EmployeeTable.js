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
  FormControl,
  Input,
  useColorModeValue,
} from '@chakra-ui/react'
import { EditIcon, DeleteIcon } from '@chakra-ui/icons';

const EmployeeTable = ({employees, edit, remove, filters, setFilters, filter}) => {

  const tableBackgroud = useColorModeValue("gray.100", "gray.700");

  const handleEditClick = (event, employeeId) => {
    event.preventDefault();
    edit(employeeId);
  };

  const handleDeleteClick = (event, employeeId) => {
    event.preventDefault();
    remove(employeeId);
  };

  const handleInputChange = (event) => {
    setFilters({
      ...filters,
      [event.target.name] : event.target.value
    });
  };

  const handleKeyUp = (event) => {
    event.preventDefault();
    if (event.key === 'Enter') filter();
  }

  return(
    <Flex 
    background={tableBackgroud} 
    border="1px" 
    borderColor={tableBackgroud} 
    rounded={6} 
    w="100%"
    h="fit-content" 
    m={2}
    boxSizing="border-box"
    align="center" 
    direction="column"
    justify="center" 
    wrap="wrap"
    >

      <FormControl id="name" p={2}>
        <Input 
          name="name" 
          onChange={handleInputChange} 
          onKeyUp={handleKeyUp}
          variant="filled" 
          placeholder="Buscar por nombre...">
        </Input>
      </FormControl>

      <Heading as="h4" size="md" p={1}>Personal</Heading>
      
      <Table variant="simple" colorScheme="blue" size="lg">
      
        <Thead>
          <Tr>
            <Th>Nombre</Th>
            <Th>Email</Th>
          </Tr>
        </Thead>

        <Tbody>
          {renderBody(employees, handleEditClick, handleDeleteClick)}
        </Tbody>

      </Table>  

    </Flex>
  )
}

function renderBody(employees, handleEditClick, handleDeleteClick) {
  return employees.map((employee) => {
    return (
      <Tr key={employee.id}>
        <Td>{employee.name}</Td>
        <Td>{employee.email}</Td>
        <Td>
          <IconButton
            onClick={(event) => handleEditClick(event, employee.id)} 
            colorScheme="blue" 
            variant="ghost" 
            aria-label="Edit" 
            icon={<EditIcon/>}>
          </IconButton>
        </Td>
        <Td>
          <IconButton
            onClick={(event) => handleDeleteClick(event, employee.id)}
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

export default EmployeeTable;