import { 
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Button
} from "@chakra-ui/react";

function ProductTable({employeeUser, products, edit, remove}) {

  const handleEditClick = (event, productId) => {
    event.preventDefault();
    edit(productId);
  };

  const handleDeleteClick = (event, productId) => {
    event.preventDefault();
    remove(productId);
  };

  return (
    <Table variant="simple" colorScheme="blue" size="sm">
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
        <Td><Button variant="link" onClick={(event) => handleEditClick(event, product.id)}>Editar</Button></Td>
        <Td><Button variant="link" onClick={(event) => handleDeleteClick(event, product.id)}>Eliminar</Button></Td>
      </Tr>
    )
  })
}

export default ProductTable;