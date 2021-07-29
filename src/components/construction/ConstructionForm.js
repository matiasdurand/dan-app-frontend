import {
  VStack,
  Heading,
  FormControl,
  FormLabel,
  Input,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Select
} from "@chakra-ui/react"

function ConstructionForm() {
  return (
    <VStack w="40%" spacing={3}>

      <Heading as="h5" size="md" mb="16px">Datos de la Obra</Heading>

      <FormControl id="description" isRequired>
        <FormLabel fontSize="xs">Descripción</FormLabel>
        <Input size="sm"/>
      </FormControl>

      <FormControl id="constructionType" isRequired>
        <FormLabel fontSize="xs">Tipo de Construcción</FormLabel>
        <Select size="sm">
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>
      </FormControl>

      <FormControl id="area" isRequired>
        <FormLabel fontSize="xs">Superficie</FormLabel>
        <NumberInput size="sm" defaultValue={10} min={0} max={100000}>
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
          </NumberInput>
      </FormControl>

      <FormControl id="address" isRequired>
        <FormLabel fontSize="xs">Dirección</FormLabel>
        <Input size="sm"/>
      </FormControl>

      <FormControl id="latitude" isRequired>
        <FormLabel fontSize="xs">Latitud</FormLabel>
        <NumberInput size="sm">
          <NumberInputField />
        </NumberInput>
      </FormControl>

      <FormControl id="longitude" isRequired>
        <FormLabel fontSize="xs">Longitud</FormLabel>
        <NumberInput size="sm">
          <NumberInputField />
        </NumberInput>
      </FormControl>

  </VStack>
  );
}

export default ConstructionForm;