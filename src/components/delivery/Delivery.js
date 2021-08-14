import { Flex, Heading, Button, Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import axios from 'axios';
import TruckTable from "../truck/TruckTable";
import PackageTable from "../package/PackageTable";
import EmployeeTable from "../employee/EmployeeTable";
import { useHistory } from "react-router-dom";

function Delivery() {

  const history = useHistory();

  const [trucks, setTrucks] = useState([]);
  const [employees, setEmployees] = useState([]);
  const [packages, setPackages] = useState([]);
  const [truckId, setTruckId] = useState(0);
  const [employeeId, setEmployeeId] = useState(0);

  const post = () => {

    if (truckId !== 0 && employeeId !== 0) {

      const newDelivery = {
        truckId: parseInt(truckId),
        employeeId: parseInt(employeeId)
      };
  
      console.log("post " + JSON.stringify(newDelivery));
  
      axios
        .post("http://localhost:9100/deliveries", JSON.stringify(newDelivery), 
          { headers: {'Content-Type':'application/json'} })
        .then(() => {
          alert("Envío registrado correctamente.");
          history.goBack();
        })
        .catch((error) => {
          alert("Se produjo un error al intentar registrar el envío.");
          console.log(error.response.data);
          history.goBack();
        });
    }
    else {
      alert("Debes seleccionar un camión y un conductor para generar el envío.")
    }
  };

  useEffect(() => {

    axios
      .get("http://localhost:9100/packages")
      .then((response) => { setPackages(response.data); });

    axios
      .get("http://localhost:9100/trucks/availables")
      .then((response) => { setTrucks(response.data); });

    axios
      .get("http://localhost:9100/employees")
      .then((response) => { setEmployees(response.data); });

  }, []);

  return (
    <Flex h="100vh" direction="column" p={8}>

      <Heading nb={6} m={2} align="center">Generar Envío</Heading>

      <Flex p={2}>
        <PackageTable 
          packages={packages} 
          remove={() => {}} 
          options={false}>
        </PackageTable>
      </Flex>

      <Text fontSize="md" m={4}>Debes seleccionar un camión y un conductor.</Text>

      <Flex>
        <TruckTable 
          trucks={trucks} 
          remove={() => {}} 
          options={false} 
          setTruckId={setTruckId}>
        </TruckTable>

        <EmployeeTable 
          employees={employees}
          edit={() => {}}
          remove={() => {}}
          filters={null}
          setFilters={() => {}}
          filter={() => {}}
          options={false}
          setEmployeeId={setEmployeeId}>
        </EmployeeTable>
      </Flex>

      <Flex justify="center" mt={12}>
        <Button 
          variant="solid" 
          colorScheme="blue" 
          w="15%"
          onClick={(event) => { event.preventDefault(); post(); }}>
          Generar
        </Button>
      </Flex>

    </Flex>
  );
}

export default Delivery;