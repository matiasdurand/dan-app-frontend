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
import { AddIcon } from '@chakra-ui/icons';

const TruckTable = () => {
  const tableBackgroud = useColorModeValue("gray.100", "gray.700")
  return(
    <Flex 
    background={tableBackgroud} 
    border="1px" 
    borderColor={tableBackgroud} 
    rounded={6}  
    alignItems="center" 
    direction="row-reverse" 
    wrap="wrap"
    m={2}
    >

      <IconButton m={1} colorScheme="teal" variant="ghost" aria-label="Add" icon={<AddIcon/>} >
      </IconButton>

      <Heading as="h4" size="md" width="50%">Camiones</Heading>
      
      <Table variant="simple" colorScheme="teal" size="lg">
      
        <Thead>
          <Tr>
            <Th>Something</Th>
            <Th>Something</Th>
            <Th isNumeric>Something</Th>
          </Tr>
        </Thead>

        <Tbody>
          <Tr>
            <Td>Data</Td>
            <Td>Data</Td>
            <Td>Data</Td>
          </Tr>
          <Tr>
            <Td>Data</Td>
            <Td>Data</Td>
            <Td>Data</Td>
          </Tr>
          <Tr>
            <Td>Data</Td>
            <Td>Data</Td>
            <Td>Data</Td>
          </Tr>
          <Tr>
            <Td>Data</Td>
            <Td>Data</Td>
            <Td>Data</Td>
          </Tr>
        </Tbody>

      </Table>  

    </Flex>
  )
}
export default TruckTable;