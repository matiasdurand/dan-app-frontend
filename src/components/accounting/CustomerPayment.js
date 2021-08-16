import { Flex } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PaymentTable from "./PaymentTable";

function CustomerPayments() {

  let { cuit } = useParams();

  const [payments, setPayments] = useState([]);

  useEffect(() => {

    axios
      .get("http://localhost:9100/accounting?cuit=" + cuit)
      .then((response) => { setPayments(response.data); });

  }, []);

  return (
    <Flex h="100vh" w="100vw" justify="center">

      <Flex mt={12}>
        <PaymentTable 
          payments={payments} 
          customerUser={true}>
        </PaymentTable>
      </Flex>
    </Flex>
  );
}

export default CustomerPayments;