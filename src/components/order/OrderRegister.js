import { 
  Flex, 
} from "@chakra-ui/react";
import ProductTable from "../product/ProductTable";
import ProductFilter from "../product/ProductFilter";
import OrderItemTable from "./OrderItemTable"
import OrderForm from "./OrderForm";

function OrderGeneration() {
  return (
    <Flex justify="space-between" h="100vh" p="32px">

      <Flex direction="column" align="center">

        <ProductFilter></ProductFilter>
        
        <ProductTable employeeUser={true} products={[]} edit={() => {}} remove={() => {}}></ProductTable>

      </Flex>
  
      <Flex direction="column" align="center">
        
        <OrderForm></OrderForm>

        <OrderItemTable></OrderItemTable>

      </Flex>

    </Flex>
  );
}

export default OrderGeneration;