import { Flex, Button } from "@chakra-ui/react";

function Buttons() {
  return (
    <Flex direction="row-reverse">
      <Button mr="32px" variant="solid" colorScheme="blue">Aceptar</Button>
      <Button mr="32px" variant="ghost">Cancelar</Button>
    </Flex>
  );
}

export default Buttons;