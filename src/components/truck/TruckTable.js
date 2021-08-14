import { 
  Flex,
  Heading,
  Table,
  Thead,
  Tr,
  Td,
  Th,
  Tbody,
  useColorModeValue,
  IconButton
} from '@chakra-ui/react'
import { DeleteIcon } from '@chakra-ui/icons';

const TruckTable = ({trucks, remove, options, setTruckId}) => {

  const tableBackgroud = useColorModeValue("gray.100", "gray.700");

  const handleDeleteClick = (event, truckId) => {
    event.preventDefault();
    remove(truckId);
  };

  const handleRowClick = (event, truckId) => {
    event.preventDefault();
    setTruckId(truckId);
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
      wrap="wrap">

      <Heading as="h4" size="md" mt={4}>Camiones</Heading>

      <Table variant="simple" colorScheme="blue" size="lg">

        <Thead>
          <Tr>
            <Th>Id</Th>
            <Th>Descripción</Th>
            <Th>Patente</Th>
            <Th>Tara</Th>
            <Th>Peso Max.</Th>
            <Th>Volumen Max.</Th>
            <Th>Estado</Th>
          </Tr>
        </Thead>

        <Tbody>
          {!options && renderBody(trucks, handleRowClick)}
          {options && renderBodyWithOptions(trucks, handleDeleteClick)}
        </Tbody>

      </Table>

    </Flex>
  )
}

function renderBody(trucks, handleRowClick) {
  return trucks.map((truck) => {
    return (
      <Tr 
        key={truck.id} 
        _hover={{ bg: "gray.600" }} 
        onClick={(event) => handleRowClick(event, truck.id)}>
        <Td>{truck.id}</Td>
        <Td>{truck.description}</Td>
        <Td>{truck.license}</Td>
        <Td>{truck.tare}</Td>
        <Td>{truck.maxWeight}</Td>
        <Td>{truck.maxVolume}</Td>
        <Td>{truck.truckState}</Td>
      </Tr>
    )
  })
}

function renderBodyWithOptions(trucks, handleDeleteClick) {
  return trucks.map((truck) => {
    return (
      <Tr 
        key={truck.id}>
        <Td>{truck.id}</Td>
        <Td>{truck.description}</Td>
        <Td>{truck.license}</Td>
        <Td>{truck.tare}</Td>
        <Td>{truck.maxWeight}</Td>
        <Td>{truck.maxVolume}</Td>
        <Td>{truck.truckState}</Td>
        <Td>
          <IconButton 
            onClick={(event) => handleDeleteClick(event, truck.id)} 
            variant="ghost" 
            aria-label="Delete" 
            icon={<DeleteIcon/>}>
          </IconButton>
        </Td>
      </Tr>
    )
  })
}

export default TruckTable;