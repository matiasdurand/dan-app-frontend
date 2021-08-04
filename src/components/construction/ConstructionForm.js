import {
  Flex,
  Heading,
  FormControl,
  FormLabel,
  Input,
  NumberInput,
  NumberInputField,
  Select,
  useColorModeValue
} from "@chakra-ui/react"

function ConstructionForm({construction, setConstruction}) {
  const formBackground = useColorModeValue("gray.100", "gray.700")
  const handleInputChange = (event) => {
    console.log(event.target.value)
    setConstruction({
      ...construction,
      [event.target.name] : event.target.value
    })
  };

  return (
    <Flex direction="column" h="fit-content" background={formBackground} p={12} rounded={6} m={2}>

      <Heading nb={6}>Obra</Heading>

      <Flex>
        <Flex direction="column" p={8}>

          <FormControl id="description" mt={6} isRequired>
            <FormLabel>Descripción</FormLabel>
            <Input name="description" onChange={handleInputChange} variant="filled" placeholder="Descripción"/>
          </FormControl>

          <FormControl id="constructionType" mt={4} isRequired>
            <FormLabel>Tipo de Construcción</FormLabel>
            <Select name="constructionType" onChange={handleInputChange} variant="filled">
              <option value="0">Reforma</option>
              <option value="1">Casa</option>
              <option value="2">Edificio</option>
              <option value="3">Vial</option>
            </Select>
          </FormControl>

          <FormControl id="area" mt={4} isRequired>
            <FormLabel>Superficie</FormLabel>
            <NumberInput defaultValue={10} min={0} max={100000}>
              <NumberInputField name="area" onChange={handleInputChange} variant="filled" placeholder="Superficie"/>
            </NumberInput>
          </FormControl>

        </Flex>
        
        <Flex direction="column" p={8}>

          <FormControl id="address" mt={6} isRequired>
            <FormLabel>Dirección</FormLabel>
            <Input name="address" onChange={handleInputChange} variant="filled" placeholder="Dirección"/>
          </FormControl>

          <FormControl id="latitude" mt={4} isRequired>
            <FormLabel>Latitud</FormLabel>
            <NumberInput variant="filled">
              <NumberInputField name="latitude" onChange={handleInputChange} placeholder="Latitud"/>
            </NumberInput>
          </FormControl>

          <FormControl id="longitude"  mt={4} isRequired>
            <FormLabel>Longitud</FormLabel>
            <NumberInput variant="filled" >
              <NumberInputField name="longitude" onChange={handleInputChange} placeholder="Longitud"/>
            </NumberInput>
          </FormControl>

        </Flex>
      </Flex>

      {
      //<Flex direction="row-reverse">
        //<Button mr={8} variant="solid" colorScheme="blue">Aceptar</Button>
        //<Button mr={8} variant="ghost">Cancelar</Button>
      //</Flex>
      }

    </Flex>
  );
}

export default ConstructionForm;