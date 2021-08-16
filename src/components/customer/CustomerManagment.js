import { useEffect, useState } from 'react'
import { Flex } from '@chakra-ui/react'
import CustomerTable from './CustomerTable'
import CustomerFilter from './CustomerFilter'
import ConstructionTable from '../construction/ConstructionTable'
import axios from 'axios';

const CustomerManagment = () => {

  const defaultFilters = {
    type: "cuit",
    value: ""
  };

  const [customers, setCustomers] = useState([]);
  const [filters, setFilters] = useState(defaultFilters);
  const [constructions, setConstructions] = useState([]);

  useEffect(() => {

    axios
      .get("http://localhost:9100/customers")
      .then((response) => { setCustomers(response.data); });

  }, []);

  const remove = (customerId) => {

    axios
      .delete("http://localhost:9100/customers/" + customerId)
      .then(() => {
        alert("Cliente dado de baja.");
        window.location.href = window.location.href;
      })
      .catch((error) => {
        alert("Se produjo un error al intentar eliminar el cliente.");
        console.log(error.response.data);
      });

    ;
  };

  const getConstructions = (customerId) => {

    console.log(customerId);
    axios
      .get("http://localhost:9100/constructions?customerId=" + customerId + "&constructionTypeId=")
      .then((response) => { setConstructions(response.data); });
  }

  const filter = () => {

    if (filters.type === "cuit") {
      axios
        .get("http://localhost:9100/customers?cuit=" + filters.value)
        .then((response) => { setCustomers([response.data]); })
        .catch(() => { alert("No hay coincidencias.") });
    }
    else if (filters.type === "businessName") {
      axios
        .get("http://localhost:9100/customers?businessName=" + filters.value)
        .then((response) => { setCustomers([response.data]); })
        .catch(() => { alert("No hay coincidencias.") });
    }

  };

  return(
    <Flex h="fit-content" w="100vw" p={12} wrap="wrap"> 

        <CustomerFilter 
          filters={filters} 
          setFilters={setFilters} 
          filter={filter}>
        </CustomerFilter>
        
        <Flex w="100%" mt={8}>
          <CustomerTable 
            customers={customers} 
            deleteCustomer={remove} 
            deleteOption={true} 
            getConstructions={getConstructions}>
          </CustomerTable>
          
          <Flex w="80%" pl={4}>
            <ConstructionTable 
              constructions={constructions} 
              edit={() => {}} 
              remove={() => {}} 
              options={false} 
              setContructionId={() => {}}>
            </ConstructionTable>
          </Flex>

        </Flex>

    </Flex>
  )
}
export default CustomerManagment;