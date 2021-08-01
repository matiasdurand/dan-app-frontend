import { 
  useState
} from "react";
import { 
  Flex, 
  Heading,
  Button
} from "@chakra-ui/react";
import CustomerForm from "./customer/CustomerForm";
import ConstructionForm from "./construction/ConstructionForm";

function CustomerRegistration() {
  
  const emptyCustomer = {
    businessName: "", 
    cuit: "", 
    email: "",
    maxCurrentAccount: 0.0,
    constructions: null 
  };

  const emptyConstruction = {
    description: "",
    latitude: 0.0, 
    longitude: 0.0,
    area: 0,
    constructionTypeId: 0
  };

  const [customer, setCustomer] = useState(emptyCustomer);

  const [construction, setConstruction] = useState(emptyConstruction);

  const post = () => {
    customer.constructions = construction; 
  }

  const clean = () => {
  
  }

  return (
    <Flex direction="column" justify="space-between" h="100vh" p="32px">
      <Heading size="lg" color="tomato" align="center">Registro de Usuario</Heading>
      <Flex justify="space-around">
        <CustomerForm customer={customer} setCustomer={setCustomer}></CustomerForm>
        <ConstructionForm construction={construction} setConstruction={setConstruction}></ConstructionForm>
      </Flex>
      <Flex direction="row-reverse">
        <Button onClick={post} mr="32px" variant="solid" colorScheme="blue">Aceptar</Button>
        <Button onCancel={clean} mr="32px" variant="ghost">Cancelar</Button>
      </Flex>
    </Flex>
  );
}
export default CustomerRegistration;