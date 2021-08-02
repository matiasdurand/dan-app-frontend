import { 
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Button,
  useColorModeValue
} from '@chakra-ui/react'

const TruckForm = () => {
  const formBackground = useColorModeValue("gray.100", "gray.700")
  return (
    
    <Flex direction="column" h="fit-content" background={formBackground} p={12} rounded={6} m={2}>

      <Heading nb={6}>Camiones</Heading>
        
      <Flex>
        <Flex direction="column" p={8}>
            
          <FormControl id="registration" mt={6} isRequired>
            <FormLabel>Patente</FormLabel>
            <Input variant="filled" placeholder="Patente"></Input>
          </FormControl>

          <FormControl id="model" mt={4} isRequired>
            <FormLabel>Modelo</FormLabel>
            <Input variant="filled" placeholder="Modelo"></Input>
          </FormControl>

          <FormControl id="description" mt={4} isRequired>
            <FormLabel>Descripcion</FormLabel>
            <Input variant="filled" placeholder="Descripcion"></Input>
          </FormControl>

        </Flex>

        <Flex direction="column" p={8}>
          
          <FormControl id="tare" mt={6} isRequired>
            <FormLabel>Tara</FormLabel>
            <NumberInput variant="filled" defaultValue={45000} min={5000} max={100000} step={1000}>
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
              </NumberInput>
          </FormControl>

          <FormControl id="maxWeight" mt={4} isRequired>
            <FormLabel>Peso Máximo</FormLabel>
            <NumberInput variant="filled" defaultValue={30000} min={3000} max={100000} step={1000}>
              <NumberInputField/>
              <NumberInputStepper>
                <NumberIncrementStepper/>
                <NumberDecrementStepper/>
              </NumberInputStepper>
              </NumberInput>
          </FormControl>

          <FormControl id="maxVolume" mt={4} isRequired>
            <FormLabel>Volúmen Máximo</FormLabel>
            <NumberInput variant="filled" defaultValue={60} min={60} max={100} step={10}>
              <NumberInputField/>
              <NumberInputStepper>
                <NumberIncrementStepper/>
                <NumberDecrementStepper/>
              </NumberInputStepper>
              </NumberInput>
          </FormControl>

        </Flex>
      </Flex>

      <Flex direction="row-reverse">
        <Button mr={8} variant="solid" colorScheme="blue">Aceptar</Button>
        <Button mr={8} variant="ghost">Cancelar</Button>
      </Flex>
        
    </Flex>

  )
}
export default TruckForm;