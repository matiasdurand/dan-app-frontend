import { Flex, Heading } from "@chakra-ui/react";
import PaymentForm from "./PaymentForm";
import PaymentTable from "./PaymentTable";

function Payments() {
  return (
    <Flex direction="column" h="100vh" p="32px">
      <Heading size="lg" color="tomato" align="center" mb="32px">Pagos</Heading>
      <Flex justify="space-around" h="80%">
        <PaymentForm></PaymentForm>
        <PaymentTable></PaymentTable>
      </Flex>
    </Flex>
  );
}

export default Payments;