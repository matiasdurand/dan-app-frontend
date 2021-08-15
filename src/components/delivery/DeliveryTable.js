import { 
  useColorModeValue,
  Flex,
  Table,
  Thead,
  Tbody,
  Tr,
  Td,
  Th,
  IconButton,
  Heading
} from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons';

const DeliveryTable = ({deliveries, generateDelivery, showAdd}) => {

  const tableBackgroud = useColorModeValue("gray.100", "gray.700");

  return (
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

      <Flex direction="row-reverse" alignItems="center" w="100%">
        {showAdd &&
        <IconButton 
          onClick={() => generateDelivery()} 
          m={1} 
          colorScheme="blue" 
          variant="ghost" 
          aria-label="Add" 
          icon={<AddIcon/>}>
        </IconButton>
        }
        
        <Heading as="h4" size="md" width="50%" mt={3}>Envíos</Heading>
      </Flex>

      <Table variant="simple" colorScheme="blue" size="lg">

        <Thead>
          <Tr>
            {showAdd && <Th>Id</Th>}
            <Th>Fecha partida</Th>
            <Th>Camión</Th>
            <Th>Conductor</Th>
          </Tr>
        </Thead>

        <Tbody>
          {renderBody(deliveries, showAdd)}
        </Tbody>
 
      </Table>

    </Flex>
    
  )
}

function renderBody(deliveries, showAdd) {
  return deliveries.map((delivery) => {
    return (
      <Tr 
        key={delivery.id}>
        {showAdd && <Td>{delivery.id}</Td>}
        <Td>{delivery.departure}</Td>
        <Td>{delivery.truckDescription}</Td>
        <Td>{delivery.employeeName}</Td>
      </Tr>
    )
  })
}

export default DeliveryTable;