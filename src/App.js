import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import Login from './components/login/Login';

function App() {
  return (
    <ChakraProvider>
      <CSSReset />
      <Login />
    </ChakraProvider>
  );
}

export default App;
