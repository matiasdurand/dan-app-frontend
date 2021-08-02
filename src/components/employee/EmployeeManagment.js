import { Flex } from "@chakra-ui/react";
import EmployeeForm from "./EmployeeForm";
import EmployeeTable from "./EmployeeTable";

function EmployeeManagment() {
  return (
    <Flex  h="100vh" justify="center" p={8}>
      
      <EmployeeForm></EmployeeForm>

      <EmployeeTable></EmployeeTable>

    </Flex>
  );
}
export default EmployeeManagment;