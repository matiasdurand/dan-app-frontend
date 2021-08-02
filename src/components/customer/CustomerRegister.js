import { 
  useState
} from "react";
import { 
  Flex
} from "@chakra-ui/react";
import CustomerForm from "./CustomerForm";
import ConstructionForm from "../construction/ConstructionForm";

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
    <Flex h="100vh" justifyContent="center" p={8}>
     
      
      <CustomerForm customer={customer} setCustomer={setCustomer}></CustomerForm>
      
      <ConstructionForm construction={construction} setConstruction={setConstruction}></ConstructionForm>
      
    </Flex>
  );
}
export default CustomerRegistration;