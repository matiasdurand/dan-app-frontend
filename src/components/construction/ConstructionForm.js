import {
  Flex,
  Heading,
  FormControl,
  FormLabel,
  Button,
  Input,
  NumberInput,
  NumberInputField,
  Select,
  useColorModeValue
} from "@chakra-ui/react"

function ConstructionForm({construction, setConstruction, withButtons, postOrPut, goBack}) {

  const formBackground = useColorModeValue("gray.100", "gray.700");
  
  const handleInputChange = (event) => {

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
            <Input value={construction.description} name="description" onChange={handleInputChange} variant="filled" placeholder="Descripción"/>
          </FormControl>

          <FormControl id="constructionTypeId" mt={4} isRequired>
            <FormLabel>Tipo de Construcción</FormLabel>
            <Select value={construction.constructionTypeId} name="constructionTypeId" onChange={handleInputChange} variant="filled">
              <option value="1">Reforma</option>
              <option value="2">Casa</option>
              <option value="3">Edificio</option>
              <option value="4">Vial</option>
            </Select>
          </FormControl>

          <FormControl id="area" mt={4} isRequired>
            <FormLabel>Superficie</FormLabel>
            <NumberInput value={construction.area} min={0} max={100000} variant="filled">
              <NumberInputField name="area" onChange={handleInputChange} placeholder="Superficie"/>
            </NumberInput>
          </FormControl>

        </Flex>
        
        <Flex direction="column" p={8}>

          <FormControl id="address" mt={6} isRequired>
            <FormLabel>Dirección</FormLabel>
            <Input value={construction.address} name="address" onChange={handleInputChange} variant="filled" placeholder="Dirección"/>
          </FormControl>

          <FormControl id="latitude" mt={4} isRequired>
            <FormLabel>Latitud</FormLabel>
            <NumberInput value={construction.latitude} variant="filled">
              <NumberInputField name="latitude" onChange={handleInputChange} placeholder="Latitud"/>
            </NumberInput>
          </FormControl>

          <FormControl id="longitude"  mt={4} isRequired>
            <FormLabel>Longitud</FormLabel>
            <NumberInput value={construction.longitude} variant="filled" >
              <NumberInputField name="longitude" onChange={handleInputChange} placeholder="Longitud"/>
            </NumberInput>
          </FormControl>

        </Flex>
      </Flex>

      { withButtons &&
      <Flex direction="row-reverse">
        <Button mr={8} variant="solid" colorScheme="blue" onClick={(e) => {e.preventDefault(); postOrPut()}}>Aceptar</Button>
        <Button mr={8} variant="ghost" onClick={(e) => {e.preventDefault(); goBack()} }>Cancelar</Button>
      </Flex>
      }

    </Flex>
  );
}

export default ConstructionForm;