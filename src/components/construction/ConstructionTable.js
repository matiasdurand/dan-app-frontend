import {
  useColorModeValue,
  Flex,
  IconButton,
  Table,
  Thead,
  Tbody,
  Tr,
  Td,
  Th,
  Heading
} from '@chakra-ui/react'
import { EditIcon, DeleteIcon } from '@chakra-ui/icons';

const ConstructionsTable = ({constructions, edit, remove, options, setContructionId}) => {

  const tableBackgroud = useColorModeValue("gray.100", "gray.700");
  const handleEditClick = (event, constructionId) => {
    event.preventDefault();
    edit(constructionId);
  };

  const handleDeleteClick = (event, constructionId) => {
    event.preventDefault();
    remove(constructionId);
  };

  const handleRowClick = (event, constructionId) => {
    event.preventDefault();
    setContructionId(constructionId);
  };

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

      <Heading as="h4" size="md" p={1}>Construcciones</Heading>
      
      <Table variant="simple" colorScheme="blue" size="lg">
      
        <Thead>
          <Tr>
            <Th>Descripción</Th>
            {options && <Th>Latitud</Th>}
            {options && <Th>Longitud</Th>}
            <Th>Dirección</Th>
            {options && <Th>Área</Th>}
            <Th>Cliente</Th>
          </Tr>
        </Thead>

        <Tbody>
          {!options && renderBody(constructions, handleRowClick)}
          {options && renderBodyWithOptions(constructions, handleEditClick, handleDeleteClick)}
        </Tbody>

      </Table>  

    </Flex>
  )
}

function renderBody(constructions, handleRowClick) {
  return constructions.map((construction) => {
    return (
      <Tr key={construction.id} _hover={{ bg: "gray.600" }} onClick={(event) => handleRowClick(event, construction.id)}>
        <Td>{construction.description}</Td>
        <Td>{construction.address}</Td>
        <Td>{construction.customerBusinessName}</Td>
      </Tr>
    )
  })
}

function renderBodyWithOptions(constructions, handleEditClick, handleDeleteClick) {
  return constructions.map((construction) => {
    return (
      <Tr key={construction.id}>
        <Td>{construction.description}</Td>
        <Td>{construction.latitude}</Td>
        <Td>{construction.logitude}</Td>
        <Td>{construction.address}</Td>
        <Td>{construction.area}</Td>
        <Td>{construction.customerBusinessName}</Td>
        <Td>
          <IconButton
            onClick={(event) => handleEditClick(event, construction.id)} 
            colorScheme="blue" 
            variant="ghost" 
            aria-label="Edit" 
            icon={<EditIcon/>}>
          </IconButton>
        </Td>
        <Td>
          <IconButton
            onClick={(event) => handleDeleteClick(event, construction.id)}
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

export default ConstructionsTable; 

