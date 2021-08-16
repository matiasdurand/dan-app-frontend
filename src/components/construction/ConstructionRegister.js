import { Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import ConstructionForm from "../construction/ConstructionForm";
import axios from "axios";
import { useHistory } from 'react-router'
import { useParams } from "react-router-dom";

function ConstructionRegister() {
  
  let { cuit, constructionId } = useParams();

  const history = useHistory();

  const emptyConstruction = {
    description: "",
    latitude: "",
    longitude: "",
    address: "",
    area: "",
    constructionTypeId: 1
  }

  const [construction, setConstruction] = useState(emptyConstruction);

  useEffect(() => {

    if (constructionId !== "0") {
      axios
        .get("http://localhost:9100/constructions/" + constructionId)
        .then(response => { setConstruction(response.data); });
    }
    
  }, []);

  const postOrPut = () => {

    if (constructionId !== "0") {

      let updatedConstruction = {
        id: parseInt(constructionId),
        description: construction.description,
        latitude: parseFloat(construction.latitude),
        longitude: parseFloat(construction.longitude),
        address: construction.address,
        area: parseInt(construction.area),
        constructionTypeId: parseInt(construction.constructionTypeId)
      };

      console.log("updated construction = " + JSON.stringify(updatedConstruction));

      axios
        .put("http://localhost:9100/constructions/" + constructionId, JSON.stringify(updatedConstruction),
          { headers: {'Content-Type':'application/json'} })
        .then(() => {
          alert("Datos de la construcción modificados.");
          goBack();
        })
        .catch((error) => {
          alert("Se produjo un error al intentar modificar la construcción.");
          console.log(error.response.data);
        });
    }
    else {

      axios
        .get("http://localhost:9100/customers?cuit=" + cuit)
        .then((response) => {

          let newConstruction = {
            description: construction.description,
            latitude: parseFloat(construction.latitude),
            longitude: parseFloat(construction.longitude),
            address: construction.address,
            area: parseInt(construction.area),
            constructionTypeId: parseInt(construction.constructionTypeId),
            customerId: response.data.id
          };

          console.log("new construction = " + JSON.stringify(newConstruction));

          axios
            .post("http://localhost:9100/constructions", JSON.stringify(newConstruction),
              { headers: {'Content-Type':'application/json'} })
            .then(() => {
              alert("Construcción registrada correctamente.");
              goBack();
            })
            .catch((error) => {
              alert("Se produjo un error al intentar registrar la construcción..");
              console.log(error.response.data);
            });;
        })
    }
  }

  const goBack = () => { history.goBack(); }

  return (
    <Flex h="100vh" justifyContent="center" pt={12}>
      
      <ConstructionForm 
        construction={construction} 
        setConstruction={setConstruction} 
        withButtons={true} 
        postOrPut={postOrPut} 
        goBack={goBack}>
      </ConstructionForm>
      
    </Flex>
  );
}

export default ConstructionRegister;