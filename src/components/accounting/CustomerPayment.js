import { 
  Flex, 
  useColorModeValue
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PaymentTable from "./PaymentTable";

function CustomerPayments() {

  const formBackground = useColorModeValue("gray.100", "gray.700");

  let { cuit } = useParams();

  const [payments, setPayments] = useState([]);

  useEffect(() => {

    axios
      .get("http://localhost:9100/accounting?cuit=" + cuit)
      .then(response => {
        console.log(response.data);
        setPayments(response.data);
      });

  }, []);

  return (
    <Flex  direction="column" h="fit-content" background={formBackground} p={12} rounded={6} m={2}>

      <PaymentTable payments={payments} customerUser={true}></PaymentTable>

    </Flex>
  );
}

export default CustomerPayments;