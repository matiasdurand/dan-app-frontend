import { Flex, Heading } from "@chakra-ui/react";
import Buttons from "./Buttons";
import EmployeeForm from "./employee/EmployeeForm";

function EmployeeRegistration() {
  return (
    <Flex direction="column" justify="space-between" h="65vh" p="32px">
      <Heading size="lg" color="tomato" align="center">Registro de Usuario</Heading>
      <Flex justify="center">
        <EmployeeForm></EmployeeForm>
      </Flex>
      <Buttons></Buttons>
    </Flex>
  );
}

export default EmployeeRegistration;