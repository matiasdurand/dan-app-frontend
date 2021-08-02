import { Flex } from "@chakra-ui/react";
import PaymentForm from "./PaymentForm";
import PaymentTable from "./PaymentTable";

function Payments() {
  return (
    <Flex h="100vh" justifyContent="center" p={8}>
     
      <PaymentForm></PaymentForm>
      
      <PaymentTable></PaymentTable>

    </Flex>
  );
}

export default Payments;