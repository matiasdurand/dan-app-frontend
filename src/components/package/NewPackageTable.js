import { 
  useColorModeValue,
  Flex,
  Table,
  Thead,
  Tbody,
  Tr,
  Td,
  Th,
  Heading
} from '@chakra-ui/react'

const NewPackageTable = ({ordersToDispatch}) => {

  const tableBackgroud = useColorModeValue("gray.100", "gray.700");

  return (
    <Flex 
      background={tableBackgroud} 
      border="1px" 
      borderColor={tableBackgroud} 
      rounded={6} 
      w="100%"
      h="fit-content" 
      ml={2}
      boxSizing="border-box"
      justify="center"
      alignItems="center" 
      wrap="wrap">

      <Heading as="h4" size="md" mt={4} mb={2}>Nuevo Paquete</Heading>
      
      <Table variant="simple" colorScheme="blue" size="lg">

        <Thead>
          <Tr>
            <Th>Id</Th>
            <Th>Fecha envío</Th>
            <Th>Estado</Th>
            <Th>Costrucción</Th>
          </Tr>
        </Thead>

        <Tbody>
          {renderBody(ordersToDispatch)}
        </Tbody>

      </Table>

    </Flex>
  )
}

function renderBody(ordersToDispatch) {
  return ordersToDispatch.map((order) => {
    return (
      <Tr 
        key={order.id}>
        <Td>{order.id}</Td>
        <Td>{order.shippingDate.replace("T00:00:00Z", "")}</Td>
        <Td>{order.stateDescription}</Td>
        <Td>{order.constructionDescription}</Td>
      </Tr>
    )
  })
}

export default NewPackageTable;