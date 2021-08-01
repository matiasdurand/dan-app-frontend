import { 
  Flex,
} from '@chakra-ui/react'
import TruckForm from './TruckForm'
import TruckTable from './TrucksTable'


const Truck = () => {
  return (

    <Flex h="100vh" justifyContent="center" p={8}> 

      <TruckForm></TruckForm>

      <Flex alignItems="flex-start"> 
        <TruckTable>

        </TruckTable>
      </Flex>
        

    </Flex>
    


  )
}
export default Truck;