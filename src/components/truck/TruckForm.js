import { 
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  NumberInput,
  NumberInputField,
  Button,
  useColorModeValue
} from '@chakra-ui/react'

const TruckForm = ({truck, setTruck, post, clean}) => {

  const formBackground = useColorModeValue("gray.100", "gray.700");

  const handleInputChange = (event) => {
    setTruck({...truck, [event.target.name] : event.target.value});
  };

  return (
    <Flex 
      direction="column" 
      h="fit-content" 
      background={formBackground} 
      m={2} 
      p={12} 
      rounded={6}>

      <Heading nb={6}>Camiones</Heading>

      <Flex>
        <Flex direction="column" mt={8} mr={8}>
          <FormControl isRequired>
            <FormLabel>Patente</FormLabel>
            <Input 
              value={truck.license} 
              variant="filled" 
              name="license" 
              onChange={handleInputChange}>
            </Input>
          </FormControl>
          <FormControl mt={4} isRequired>
            <FormLabel>Descripcion</FormLabel>
            <Input 
              value={truck.description} 
              variant="filled" 
              name="description" 
              onChange={handleInputChange}>
            </Input>
          </FormControl>
        </Flex>

        <Flex direction="column" mt={8}>
          <FormControl isRequired>
            <FormLabel>Tara</FormLabel>
            <NumberInput 
              value={truck.tare} 
              variant="filled" 
              defaultValue={45000} 
              min={5000} max={100000}>
              <NumberInputField 
                name="tare" 
                onChange={handleInputChange}/>
            </NumberInput>
          </FormControl>
          <FormControl mt={4} isRequired>
            <FormLabel>Peso Máximo</FormLabel>
            <NumberInput 
              value={truck.maxWeight} 
              variant="filled" 
              defaultValue={30000} 
              min={3000} max={100000}>
              <NumberInputField 
                name="maxWeight" 
                onChange={handleInputChange}/>
            </NumberInput>
          </FormControl>
          <FormControl mt={4} isRequired>
            <FormLabel>Volumen Máximo</FormLabel>
            <NumberInput 
              value={truck.maxVolume} 
              variant="filled" 
              defaultValue={60} 
              min={60} max={100}>
              <NumberInputField 
                name="maxVolume" 
                onChange={handleInputChange}/>
            </NumberInput>
          </FormControl>
        </Flex>
      </Flex>

      <Flex direction="row-reverse" mt={10}>
        <Button 
          mr={8} 
          variant="solid" 
          colorScheme="blue" 
          onClick={(event) => { event.preventDefault(); post(); }}>
          Aceptar
        </Button>
        <Button 
          mr={8} 
          variant="ghost"
          onClick={(event) => { event.preventDefault(); clean(); }}>
          Cancelar
        </Button>
      </Flex>

    </Flex>
  )
}

export default TruckForm;