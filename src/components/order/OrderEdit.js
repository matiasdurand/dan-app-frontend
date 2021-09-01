import {
  Flex,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Select,
  useColorModeValue
} from "@chakra-ui/react"
import axios from "axios";
import OrderItemTable from "./OrderItemTable"
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";

const OrderEdit = () => {

  const formBackgroud = useColorModeValue("gray.100", "gray.700");

  const history = useHistory();

  let { orderId } = useParams();

  const [orderItems, setOrderItems] = useState([]);
  const [orderStateInfo, setOrderStateInfo] = useState({ description: "" });
  const [newOrderStateId, setNewOrderStateId] = useState();

  useEffect(() => {

    axios
      .get("http://localhost:9100/orders/api/orders/" + orderId + "/items")
      .then((response) => { setOrderItems(response.data) })

    axios
      .get("http://localhost:9100/orders/api/orders/" + orderId)
      .then((response) => {
        console.log(response.data);
        setOrderStateInfo({ id: response.data.stateId, description: response.data.stateDescription });
        setNewOrderStateId(response.data.stateId);
      });

  }, []);

  const update = () => {

    if (newOrderStateId !== orderStateInfo.id) {

      let newOrderState = {
        id: parseInt(orderId),
        orderStateId: parseInt(newOrderStateId)
      }

      console.log(JSON.stringify(newOrderState));

      axios
        .patch("http://localhost:9100/orders/api/orders/" + orderId + "/update-state", JSON.stringify(newOrderState),
          { headers: {'Content-Type':'application/json'} })
        .then(() => {
          alert("El estado del pedido se actualizó correctamente.");
          history.goBack();
        })
        .catch((error) => {
          alert("Error al intentar actualizar el estado del pedido.");
          console.log(error.response.data);
        });
    }
    else {
      alert("El nuevo estado coincide con el estado actual.")
    }
  }

  return (
    <Flex justify="center" w="100vw" p={12}>

      <Flex 
        direction="column" 
        h="fit-content" 
        background={formBackgroud}  
        rounded={6} 
        w="30%"
        p={12}
        mt={4} mr={8}>

        <Heading>Pedido</Heading>

        <FormControl w="75%" ml={4} mt={8} readOnly>
          <FormLabel>Estado Actual</FormLabel>
          <Input 
            value={orderStateInfo.description} 
            readOnly 
            type="text" 
            variant="filled"/>
        </FormControl>

        {orderStateInfo.description === "Nuevo" &&
        <FormControl w="75%" ml={4} mt={4} isRequired>
          <FormLabel>Nuevo Estado</FormLabel>
          <Select value={newOrderStateId} onChange={(e) => setNewOrderStateId(e.target.value)} variant="filled">
            <option value="1">Nuevo</option>
            <option value="2">Confirmado</option>
            <option value="4">Cancelado</option>
          </Select>
        </FormControl>}

        {orderStateInfo.description === "Pendiente" &&
        <FormControl w="75%" ml={4} mt={4} isRequired>
          <FormLabel>Nuevo Estado</FormLabel>
          <Select value={newOrderStateId} onChange={(e) => setNewOrderStateId(e.target.value)} variant="filled">
            <option value="3">Pendiente</option>
            <option value="5">Aceptado</option>
            <option value="4">Cancelado</option>
            <option value="7">En Preparación</option>
          </Select>
        </FormControl>}

        {orderStateInfo.description === "En preparacion" &&
        <FormControl w="75%" ml={4} mt={4} isRequired>
          <FormLabel>Nuevo Estado</FormLabel>
          <Select value={newOrderStateId} onChange={(e) => setNewOrderStateId(e.target.value)} variant="filled">
            <option value="7">En Preparación</option>
            <option value="8">Entregado</option>
          </Select>
        </FormControl>}


        <Flex direction="row-reverse" mt={12}>
          <Button 
            variant="solid" 
            colorScheme="blue" 
            onClick={(e) => {e.preventDefault(); update()}}>
            Actualizar
          </Button>
          <Button 
            mr={4} 
            variant="ghost" 
            onClick={(e) => {e.preventDefault(); history.goBack()}}>
            Cancelar
          </Button>
        </Flex>

      </Flex>

      <Flex w="50%">
        <OrderItemTable items={orderItems}></OrderItemTable>
      </Flex>
      
    </Flex>

  );
}
export default OrderEdit;