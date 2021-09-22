import { useState } from "react";
import { Flex } from "@chakra-ui/react";
import CustomerForm from "./CustomerForm";
import ConstructionForm from "../construction/ConstructionForm";
import axios from "axios";
import { useHistory } from 'react-router'

function CustomerRegister() {
  
  const history = useHistory();

  const emptyCustomer = {
    businessName: "", 
    cuit: "", 
    email: "",
    maxCurrentAccount: "",
  };

  const emptyConstruction = {
    description: "",
    latitude: "", 
    longitude: "",
    area: "",
    constructionTypeId: ""
  };

  const [customer, setCustomer] = useState(emptyCustomer);
  const [construction, setConstruction] = useState(emptyConstruction);

  const post = () => {
    
    customer.maxCurrentAccount = parseFloat(customer.maxCurrentAccount);

    construction.latitude = parseFloat(construction.latitude);
    construction.longitude = parseFloat(construction.longitude);
    construction.area = parseInt(construction.area);
    construction.constructionTypeId = parseInt(construction.constructionTypeId);

    customer.constructions = [construction];

    console.log(JSON.stringify(customer));

    axios
      .post("http://localhost:9100/users/api/customers", JSON.stringify(customer), 
        { headers: {'Content-Type':'application/json'} })
      .then((response) => { history.push('/home/customer/' + response.data.cuit); })
      .catch((error) => {
        alert("Error en los datos ingresados.");
        console.log(error.response.data);
      });
  }

  const goBack = () => { history.goBack(); }

  return (
    <Flex h="100vh" justifyContent="center" p={8}>
     
      <CustomerForm 
        customer={customer} 
        setCustomer={setCustomer} 
        post={post} 
        goBack={goBack}>
      </CustomerForm>
      
      <ConstructionForm 
        construction={construction} 
        setConstruction={setConstruction} 
        withButtons={false} 
        put={() => {}} 
        goBack={() => {}}>
      </ConstructionForm>
      
    </Flex>
  );
}
export default CustomerRegister;