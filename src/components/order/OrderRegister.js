import { 
  Flex, 
  FormControl,
  FormLabel,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Select,
  Heading,
  Input,
  Button
} from "@chakra-ui/react";
import ProductTable from "../product/ProductTable";
import ProductTableFilter from "../product/ProductTableFilter";
import OrderItemTable from "./OrderItemTable"

function OrderGeneration() {
  return (
    <Flex direction="column" justify="space-between" h="100vh" p="32px">

      <Heading size="lg" color="tomato" align="center">Nuevo Pedido</Heading>

      <Flex>
        <FormControl id="constructionType" isRequired w="25%" mr="32px">
          <FormLabel fontSize="xs">Tipo de Construcción</FormLabel>
          <Select size="sm">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
        </FormControl>

        <FormControl id="constructionType" isRequired w="25%">
          <FormLabel fontSize="xs">Fecha de envío</FormLabel>
          <Input type="date" size="sm"/>
        </FormControl>
      </Flex>

      <ProductTableFilter></ProductTableFilter>

      <Flex h="45%">
        <ProductTable></ProductTable>

        <Flex direction="column" pl="32px" pr="32px" pt="16px" w="20%">
          <FormControl id="quantity" mb="32px">
            <FormLabel fontSize="xs">Cantidad de producto</FormLabel>
            <NumberInput size="sm" defaultValue={1} min={1} max={1000}>
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </FormControl>
          <Button size="sm" variant="outline" colorScheme="blue">Añadir</Button>
        </Flex>

        <OrderItemTable></OrderItemTable>
      </Flex>

      <Flex direction="row-reverse">
        <Button mr="32px" variant="solid" colorScheme="blue">Aceptar</Button>
        <Button mr="32px" variant="ghost">Cancelar</Button>
      </Flex>

    </Flex>
  );
}

export default OrderGeneration;