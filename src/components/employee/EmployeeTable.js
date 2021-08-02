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
  FormLabel,
  Input,
  useColorModeValue,
} from '@chakra-ui/react'
import { EditIcon, DeleteIcon } from '@chakra-ui/icons';
import { useHistory } from 'react-router-dom';

const EmployeeTable = () => {
  const tableBackgroud = useColorModeValue("gray.100", "gray.700")
  const history = useHistory();
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
        <Input variant="filled" placeholder="Buscar por nombre..."></Input>
      </FormControl>

      <Heading as="h4" size="md" p={1}>Personal</Heading>
      
      <Table variant="simple" colorScheme="blue" size="lg">
      
        <Thead>
          <Tr>
            <Th>Something</Th>
            <Th>Something</Th>
            <Th isNumeric>Something</Th>
          </Tr>
        </Thead>

        <Tbody>
          <Td>DATA</Td>
          <Td>DATA</Td>
          <Td>
            <IconButton
              onClick={()=>history.push("/clientes")} 
              colorScheme="blue" 
              variant="ghost" 
              aria-label="Edit" 
              icon={<EditIcon/>} 
            ></IconButton>

            <IconButton
              onClick
              colorScheme="blue" 
              variant="ghost" 
              aria-label="Delete" 
              icon={<DeleteIcon/>} 
            ></IconButton> 
            
          </Td>
        </Tbody>

      </Table>  

    </Flex>
  )
}
export default EmployeeTable;
