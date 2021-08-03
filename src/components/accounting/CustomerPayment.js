import { 
  Flex, 
  useColorModeValue
} from "@chakra-ui/react";
import PaymentTable from "./PaymentTable";

function CustomerPayments() {
  const formBackground = useColorModeValue("gray.100", "gray.700")
  return (
    <Flex  direction="column" h="fit-content" background={formBackground} p={12} rounded={6} m={2}>

      <PaymentTable></PaymentTable>

    </Flex>
  );
}

export default CustomerPayments;