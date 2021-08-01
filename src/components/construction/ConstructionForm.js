import {
  VStack,
  Heading,
  FormControl,
  FormLabel,
  Input,
  NumberInput,
  NumberInputField,
  Select
} from "@chakra-ui/react"

function ConstructionForm({construction, setConstruction}) {

  const handleInputChange = (event) => {
    console.log(event.target.value)
    setConstruction({
      ...construction,
      [event.target.name] : event.target.value
    })
  };

  return (
    <VStack w="40%" spacing={3}>

      <Heading as="h5" size="md" mb="16px">Datos de la Obra</Heading>

      <FormControl id="description" isRequired>
        <FormLabel fontSize="xs">Descripción</FormLabel>
        <Input name="description" onChange={handleInputChange} size="sm"/>
      </FormControl>

      <FormControl id="constructionType" isRequired>
        <FormLabel fontSize="xs">Tipo de Construcción</FormLabel>
        <Select name="constructionType" onChange={handleInputChange} size="sm">
          <option value="0">Reforma</option>
          <option value="1">Casa</option>
          <option value="2">Edificio</option>
          <option value="3">Vial</option>
        </Select>
      </FormControl>

      <FormControl id="area" isRequired>
        <FormLabel fontSize="xs">Superficie</FormLabel>
        <NumberInput size="sm" defaultValue={10} min={0} max={100000}>
          <NumberInputField name="area" onChange={handleInputChange}/>
        </NumberInput>
      </FormControl>

      <FormControl id="address" isRequired>
        <FormLabel fontSize="xs">Dirección</FormLabel>
        <Input name="address" onChange={handleInputChange} size="sm"/>
      </FormControl>

      <FormControl id="latitude" isRequired>
        <FormLabel fontSize="xs">Latitud</FormLabel>
        <NumberInput size="sm">
          <NumberInputField name="latitude" onChange={handleInputChange}/>
        </NumberInput>
      </FormControl>

      <FormControl id="longitude" isRequired>
        <FormLabel fontSize="xs">Longitud</FormLabel>
        <NumberInput size="sm">
          <NumberInputField name="longitude" onChange={handleInputChange}/>
        </NumberInput>
      </FormControl>

  </VStack>
  );
}

export default ConstructionForm;