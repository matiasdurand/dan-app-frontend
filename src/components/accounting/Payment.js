import { Flex } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import PaymentForm from "./PaymentForm";
import PaymentTable from "./PaymentTable";

function Payments() {

  const emptyPayment = {
    cuit: "",
    date: "",
    method: null
  };

  const emptyPaymentMethod = {
    type: "",
    comment: "",
    billNumber: 0, //cash
    number: 0, //check
    paymentDate: "", //check
    bank: "", //check
    cbuOrigin: "", //transfer
    cbuDestination: "", //transfer
    code: 0 //transfer
  }

  const [payment, setPayment] = useState(emptyPayment);

  const [paymentMethod, setPaymentMethod] = useState(emptyPaymentMethod);

  const [payments, setPayments] = useState([]);

  const clean = () => {

    setPayment(emptyPayment);

    setPaymentMethod(emptyPaymentMethod);
  };

  const post = () => {

    axios
      .get("http://localhost:9100/customers?cuit=" + payment.cuit)
      .then(response => {
        console.log(response.data);
        
        let newPaymentMethod;

        if (paymentMethod.type === "cash") {
          newPaymentMethod = {
            type: paymentMethod.type,
            comment: paymentMethod.comment,
            billNumber: paymentMethod.billNumber,
          }
        }
        else if (paymentMethod.type === "transfer") {
          newPaymentMethod = {
            type: paymentMethod.type,
            comment: paymentMethod.comment,
            cbuOrigin: paymentMethod.cbuOrigin.toString(),
            cbuDestination: "1010101010101010101010",
            code: paymentMethod.code
          }
        }
        else if (paymentMethod.type === "check") {
          newPaymentMethod = {
            type: paymentMethod.type,
            comment: paymentMethod.comment,
            number: paymentMethod.number,
            paymentDate: paymentMethod.date,
            bank: paymentMethod.bank
          }
        }

        let newPayment = {
          id: null,
          customerId: response.customerId,
          date: payment.date,
          method: newPaymentMethod,
        }
        
        console.log(newPayment);

        axios
          .post("http://localhost:9100/accounting", newPayment)
          .then(response => {
            let updatedPayments = payments.slice();
            updatedPayments.push(response.data);
            setPayments(updatedPayments);
          });
      });
  };

  useEffect(() => {

    axios
      .get("http://localhost:9100/accounting")
      .then(response => {
        console.log(response.data);
        setPayments(response.data);
      });

  }, []);

  return (
    <Flex h="100vh" justifyContent="center" p={8}>
     
      <PaymentForm 
        payment={payment}
        setPayment={setPayment}
        paymentMethod={paymentMethod}
        setPaymentMethod={setPaymentMethod}
        post={post}
        clean={clean}>
      </PaymentForm>
        
      
      <PaymentTable payments={payments}></PaymentTable>

    </Flex>
  );
}

export default Payments;