import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import CustomerHome from './components/login/home/CustomerHome';
import Login from './components/login/Login';

function App() {
  return (
    <ChakraProvider>
      <CSSReset />
      <CustomerHome></CustomerHome>
    </ChakraProvider>
  );
}

export default App;
