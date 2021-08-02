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
import { EditIcon, DeleteIcon } from '@chakra-ui/icons';

function ProductTable({employeeUser, products, edit, remove}) {
  const tableBackgroud = useColorModeValue("gray.100", "gray.700")
  const handleEditClick = (event, productId) => {
    event.preventDefault();
    edit(productId);
  };

  const handleDeleteClick = (event, productId) => {
    event.preventDefault();
    remove(productId);
  };

  return (
    <Flex background={tableBackgroud} 
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

      <Heading as="h4" size="md" p={1}>Productos</Heading>

      <Table variant="simple" colorScheme="blue" size="lg">
        <Thead>
          <Tr>
            <Th>Nombre</Th>
            <Th>Descripción</Th>
            <Th>Unidad</Th>
            <Th isNumeric>Precio</Th>
            {employeeUser && <Th isNumeric>Stock mínimo</Th>}
            {employeeUser && <Th isNumeric>Stock actual</Th>}
          </Tr>
        </Thead>
        <Tbody>
          {renderBody(products, handleEditClick, handleDeleteClick)}
        </Tbody>
      </Table>

    </Flex>
  );
}

function renderBody(products, handleEditClick, handleDeleteClick) {
  return products.map((product) => {
    return (
      <Tr key={product.id}>
        <Td>{product.name}</Td>
        <Td>{product.description}</Td>
        <Td>{product.unitDescription}</Td>
        <Td>{product.price}</Td>
        <Td>{product.minimumStock}</Td>
        <Td>{product.currentStock}</Td>
        <Td><IconButton onClick={(event) => handleEditClick(event, product.id)} variant="ghost" aria-label="Edit" icon={<EditIcon/>}>Editar</IconButton></Td>
        <Td><IconButton onClick={(event) => handleDeleteClick(event, product.id)} variant="ghost" aria-label="Delete" icon={<DeleteIcon/>}>Eliminar</IconButton></Td>
      </Tr>
    )
  })
}

export default ProductTable;