import { Flex } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import PaymentForm from "./PaymentForm";
import PaymentTable from "./PaymentTable";

function Payments() {

  const emptyPayment = {
    cuit: "",
    date: "2021-08-01",
  };

  const emptyPaymentMethod = {
    type: "cash",
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
      .then((response) => {
        
        let newPaymentMethod;
        
        if (paymentMethod.type === "cash") {
          newPaymentMethod = {
            type: paymentMethod.type,
            comment: paymentMethod.comment,
            billNumber: parseInt(paymentMethod.billNumber),
          }
        }
        else if (paymentMethod.type === "transfer") {
          newPaymentMethod = {
            type: paymentMethod.type,
            comment: paymentMethod.comment,
            cbuOrigin: paymentMethod.cbuOrigin,
            cbuDestination: "1010101010101010101011",
            code: parseInt(paymentMethod.code)
          }
        }
        else if (paymentMethod.type === "check") {
          newPaymentMethod = {
            type: paymentMethod.type,
            comment: paymentMethod.comment,
            number: parseInt(paymentMethod.number),
            paymentDate: paymentMethod.paymentDate + "T00:00:00Z",
            bank: paymentMethod.bank
          }
        }

        let newPayment = {
          customerId: parseInt(response.data.id),
          date: payment.date + "T00:00:00Z",
          method: newPaymentMethod,
        }
        
        console.log(JSON.stringify(newPayment));

        axios
          .post("http://localhost:9100/accounting", JSON.stringify(newPayment),
            { headers: {'Content-Type':'application/json'} })
          .then(() => {
            alert("Pago registrado correctamente.");
            window.location.href = window.location.href;
          })
          .catch((error) => {
            alert("Error al intentar registrar el pago.")
            console.log(error.response.data)
          });
      });
  };

  useEffect(() => {

    axios
      .get("http://localhost:9100/accounting")
      .then(response => { setPayments(response.data); });

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