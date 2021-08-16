import { 
  Flex,
  Table,
  Heading,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  useColorModeValue,
  IconButton
} from "@chakra-ui/react";
import { DeleteIcon } from '@chakra-ui/icons';

function PackageTable({packages, remove, options}) {

  const tableBackgroud = useColorModeValue("gray.100", "gray.700");

  const handleDeleteClick = (event, packageId) => {
    event.preventDefault();
    remove(packageId);
  };

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

      <Heading as="h4" size="md" mt={4}>Paquetes</Heading>

      <Table variant="simple" colorScheme="blue" size="lg">

        <Thead>
          <Tr>
            <Th>Id</Th>
            <Th>Cuit</Th>
            <Th>Peso</Th>
            <Th>Volumen</Th>
            <Th>Estado</Th>
            <Th>Fecha arribo</Th>
          </Tr>
        </Thead>

        <Tbody>
          {!options && renderBody(packages)}
          {options && renderBodyWithOptions(packages, handleDeleteClick)}
        </Tbody>
        
      </Table>

    </Flex>
  );
}

function renderBody(packages) {
  return packages.map((p) => {
    return (
      <Tr key={p.id}>
        <Td>{p.id}</Td>
        <Td>{p.customerCuit}</Td>
        <Td>{p.weight}</Td>
        <Td>{p.volume}</Td>
        <Td>{p.state}</Td>
        <Td>{p.arrivalDate}</Td>
      </Tr>
    )
  })
}

function renderBodyWithOptions(packages, handleDeleteClick) {
  return packages.map((p) => {
    return (
      <Tr key={p.id}>
        <Td>{p.id}</Td>
        <Td>{p.customerCuit}</Td>
        <Td>{p.weight}</Td>
        <Td>{p.volume}</Td>
        <Td>{p.state}</Td>
        <Td>{p.arrivalDate}</Td>
        <Td>
          <IconButton 
            onClick={(event) => handleDeleteClick(event, p.id)} 
            variant="ghost" 
            aria-label="Delete" 
            icon={<DeleteIcon/>}>
          </IconButton>
        </Td>
      </Tr>
    )
  })
}

export default PackageTable;