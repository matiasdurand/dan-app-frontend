import { 
  Flex,
} from '@chakra-ui/react'
import TruckForm from './TruckForm'
import TruckTable from './TruckTable'

const Truck = () => {
  return (

    <Flex h="100vh" justifyContent="center" p={8}> 

      <Flex width="70%">
        <TruckForm></TruckForm>
      </Flex>
      
      <TruckTable></TruckTable>

    </Flex>
    


  )
}
export default Truck;