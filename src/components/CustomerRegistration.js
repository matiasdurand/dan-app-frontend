import { Flex, Heading } from "@chakra-ui/react";
import CustomerForm from "./customer/CustomerForm";
import ConstructionForm from "./construction/ConstructionForm";
import Buttons from "./Buttons";

function CustomerRegistration() {
  return (
    <Flex direction="column" justify="space-between" h="100vh" p="32px">
      <Heading size="lg" color="tomato" align="center">Registro de Usuario</Heading>
      <Flex justify="space-around">
        <CustomerForm></CustomerForm>
        <ConstructionForm></ConstructionForm>
      </Flex>
      <Buttons></Buttons>
    </Flex>
  );
}

export default CustomerRegistration;