import { 
  Flex,
  Heading,
  FormHelperText,
  Button,
  FormControl,
  NumberInput,
  NumberInputField 
  } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import axios from 'axios';
import OrderTable from '../order/OrderTable';
import PackageTable from "./PackageTable";
import NewPackageTable from "./NewPackageTable";

function Package() {

  const [packages, setPackages] = useState([]);
  const [orders, setOrders] = useState([]);
  const [ordersToDispatch, setOrdersToDispatch] = useState([]);
  const [cuit, setCuit] = useState("");
  const [orderId, setOrderId] = useState(0);

  const post = () => {

    if (ordersToDispatch.length !== 0) {

      let ordersIds = [];

      ordersToDispatch.map((o) => ordersIds.push(o.id));

      let newPackage = {
        cuit: cuit,
        ordersIds: ordersIds
      };

      console.log("post " + JSON.stringify(newPackage));

      axios
        .post("http://localhost:9100/packages", JSON.stringify(newPackage), 
          { headers: {'Content-Type':'application/json'} })
        .then(() => {
          alert("Paquete generado correctamente.");
          window.location.href = window.location.href;
        })
        .catch((error) => {
          alert("Se produjo un error al intentar generar el paquete.");
          console.log(error.response.data);
        });

    }
    else {
      alert("Primero debes seleccionar los pedidos que formarán parte del paquete.");
    }
  };

  const filter = (cuit) => {

    console.log("filter by cuit = " + cuit);

    setOrdersToDispatch([]);
    setOrderId(0);
    setCuit(cuit);

    axios
      .get("http://localhost:9100/orders?cuit=" + cuit)
      .then((response) => { setOrders(response.data); })
      .catch(() => { alert("No hay coincidencias."); });
  };

  const add = () => {

    if (orderId !== 0) {
      let selectedOrder = orders.filter(o => o.id === orderId)[0];

      if (ordersToDispatch.filter(o => o.id === orderId).length === 0) {
  
        let copy = ordersToDispatch.slice();
  
        copy.push(selectedOrder);
  
        setOrdersToDispatch(copy);
      }
      else {
        alert("La orden seleccionada ya forma parte del paquete.");
      }
    }
    else {
      alert("Primero debes seleccionar un pedido.");
    }
  }

  const remove = (packageId) => {

    axios
      .delete("http://localhost:9100/packages/" + packageId)
      .then(() => {
        alert("El paquete ha sido eliminado.");
        window.location.href = window.location.href;
      })
  }

  useEffect(() => {

    axios
      .get("http://localhost:9100/packages")
      .then(response => { setPackages(response.data); });
    
  }, []);

  return (
    <Flex direction="column" h="100vh" p={4}>

      <Heading nb={6} mb={2} align="center">Paquetes</Heading>

      <FormControl w="25%" mt={4} isRequired>
        <NumberInput ml={4} mr={4} variant="filled">
          <NumberInputField 
            placeholder="Ingrese CUIT" 
            onKeyUp={(event) => { if (event.key === 'Enter') { filter(event.target.value); }}}/>  
        </NumberInput>
        <FormHelperText ml={6} mb={4}>Presione enter para buscar los pedidos.</FormHelperText>
      </FormControl>

      <Flex w="100%">

        <OrderTable 
          orders={orders} 
          generateOrder={() => {}} 
          options={true} 
          edit={() => {}} 
          setOrderId={setOrderId}
          showAdd={false}>
        </OrderTable>

        <NewPackageTable ordersToDispatch={ordersToDispatch}></NewPackageTable>

      </Flex>

      <Flex direction="row-reverse" m={4}>
        <Button 
          mr={8}
          variant="solid" 
          colorScheme="blue" 
          onClick={(event) => { event.preventDefault(); post(); }}>
          Confirmar
        </Button>
        <Button 
          mr={12}
          variant="outline" 
          colorScheme="blue" 
          onClick={(event) => { event.preventDefault(); add(); }}>
          Agregar
        </Button>
      </Flex>

      <PackageTable packages={packages} remove={remove} options={true}></PackageTable>

    </Flex>
  );
}

export default Package;