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
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";

const OrderEdit = () => {

  const formBackgroud = useColorModeValue("gray.100", "gray.700");

  const history = useHistory();

  let { orderId } = useParams();

  const [orderStateInfo, setOrderStateInfo] = useState({ id: null, description: "" });

  const [newOrderStateId, setNewOrderStateId] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:9100/orders/" + orderId)
      .then(response => {
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
        .patch("http://localhost:9100/orders/" + orderId, JSON.stringify(newOrderState),
          { headers: {'Content-Type':'application/json'} })
        .then(response => {
          alert("El estado se actualizó correctamente.");
          history.goBack();
        })
        .catch((error) => {
          console.log(error.response.data);
        });
    }
    else {
      alert("El nuevo estado coincide con el estado actual.")
    }
  }
  return (
    <Flex direction="column" h="fit-content" background={formBackgroud} p={12} rounded={6} m={2}>

      <Heading nb={6}>Editar Pedido</Heading>

      <FormControl id="currentState" mt={4} readOnly>
          <FormLabel>Estado Actual</FormLabel>
          <Input value={orderStateInfo.description} readOnly type="text" variant="filled"/>
        </FormControl>

      {orderStateInfo.description === "Confirmado" &&
      <FormControl id="orderStateId" mt={4} isRequired>
        <FormLabel>Nuevo Estado</FormLabel>
        <Select value={newOrderStateId} onChange={(e) => setNewOrderStateId(e.target.value)} variant="filled">
          <option value="2">Confirmado</option>
          <option value="4">Cancelado</option>
        </Select>
      </FormControl>}

      {orderStateInfo.description === "Nuevo" &&
      <FormControl id="orderStateId" mt={4} isRequired>
        <FormLabel>Nuevo Estado</FormLabel>
        <Select value={newOrderStateId} onChange={(e) => setNewOrderStateId(e.target.value)} variant="filled">
          <option value="1">Nuevo</option>
          <option value="2">Confirmado</option>
          <option value="4">Cancelado</option>
        </Select>
      </FormControl>}

      {orderStateInfo.description === "Pendiente" &&
      <FormControl id="orderStateId" mt={4} isRequired>
        <FormLabel>Nuevo Estado</FormLabel>
        <Select value={newOrderStateId} onChange={(e) => setNewOrderStateId(e.target.value)} variant="filled">
          <option value="3">Pendiente</option>
          <option value="5">Aceptado</option>
          <option value="4">Cancelado</option>
          <option value="7">En Preparación</option>
        </Select>
      </FormControl>}

      {orderStateInfo.description === "En preparacion" &&
      <FormControl id="orderStateId" mt={4} isRequired>
        <FormLabel>Nuevo Estado</FormLabel>
        <Select value={newOrderStateId} onChange={(e) => setNewOrderStateId(e.target.value)} variant="filled">
          <option value="7">En Preparación</option>
          <option value="8">Entregado</option>
        </Select>
      </FormControl>}


      <Flex direction="row-reverse" mt={12}>
        <Button mr={8} variant="solid" colorScheme="blue" onClick={(e) => {e.preventDefault(); update()}}>Actualizar</Button>
        <Button mr={8} variant="ghost" onClick={(e) => {e.preventDefault(); history.goBack()}}>Cancelar</Button>
      </Flex>
      
    </Flex>
  );
}
export default OrderEdit;