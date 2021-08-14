import { Flex } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import TruckForm from './TruckForm'
import TruckTable from './TruckTable'

const Truck = () => {

  const emptyTruck = {
    description: "",
    license: "",
    tare: "",
    maxWeight: "",
    maxVolume: "",
  };

  const [truck, setTruck] = useState(emptyTruck);
  const [trucks, setTrucks] = useState([]);

  useEffect(() => {

    axios
      .get("http://localhost:9100/trucks")
      .then((response) => { setTrucks(response.data); });
    
  }, []);

  const post = () => {

    let newTruck = {
      description: truck.description,
      license: truck.license,
      tare: parseFloat(truck.tare),
      maxWeight: parseFloat(truck.maxWeight),
      maxVolume: parseFloat(truck.maxVolume)
    };

    console.log("post " + JSON.stringify(newTruck));

    axios
      .post("http://localhost:9100/trucks", JSON.stringify(newTruck), 
        { headers: {'Content-Type':'application/json'} })
      .then(() => {
        alert("Camión registrado correctamente.");
        window.location.href = window.location.href;
      })
      .catch((error) => {
        alert("Se produjo un error al intentar registrar el camión.");
        console.log(error.response.data);
      });
    
  };

  const remove = (truckId) => {

    axios
      .delete("http://localhost:9100/trucks/" + truckId)
      .then(() => {
        alert("Se eliminó el camión.");
        window.location.href = window.location.href;
      })
      .catch((error) => {
        alert("Se produjo un error al intentar eliminar el camión.");
        console.log(error.response.data);
      });

  };

  const clean = () => { setTruck(emptyTruck); };

  return (
    <Flex h="100vh" justifyContent="center" p={8}>

      <Flex width="100%"> {/* TODO check this flex */}
        <TruckForm 
          truck={truck} 
          setTruck={setTruck} 
          post={post} 
          clean={clean}>
        </TruckForm>
      </Flex>

      <TruckTable 
        trucks={trucks} 
        remove={remove} 
        options={true} 
        setTruckId={() => {}}>
      </TruckTable>

    </Flex>
  )
}

export default Truck;