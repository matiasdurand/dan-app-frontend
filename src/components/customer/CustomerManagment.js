import {
  useState
} from 'react'
import { 
  Flex 
} from '@chakra-ui/react'
import CustomerForm from './CustomerForm'
import CustomerTable from './CustomerTable'
import CustomerFilter from './CustomerFilter'
import ConstructionTable from '../construction/ConstructionTable'

const CustomerManagment = () => {

  const emptyCustomer = {
    businessName: "", 
    cuit: "", 
    email: "",
    maxCurrentAccount: 0.0,
    constructions: null 
  };

  const emptyConstruction = {
    description: "",
    latitude: 0.0, 
    longitude: 0.0,
    area: 0,
    constructionTypeId: 0
  };

  const [customer, setCustomer] = useState(emptyCustomer);

  const [construction, setConstruction] = useState(emptyConstruction);

  return(

    <Flex h="100vh" justify="center" p={8}> 

      <Flex direction="column" align="center">

        <CustomerForm customer={customer} setCustomer={setCustomer}></CustomerForm>

        <ConstructionTable></ConstructionTable>

      </Flex>

      <Flex direction="column" align="center">

        <CustomerFilter></CustomerFilter>

        <CustomerTable></CustomerTable>

      </Flex>
      

    </Flex>



  )
}
export default CustomerManagment;