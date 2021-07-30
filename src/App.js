import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import CustomerHome from './components/customer/home/CustomerHome';
import EmployeeHome from './components/employee/home/EmployeeHome';
import Login from './components/login/Login';

function App() {
  return (
    <ChakraProvider>
      <CSSReset />
      <EmployeeHome></EmployeeHome>
    </ChakraProvider>
  );
}
export default App;
