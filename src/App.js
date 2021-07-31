import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import CustomerHome from './components/customer/home/CustomerHome';
import EmployeeHome from './components/employee/home/EmployeeHome';
import EmployeeForm from './components/employee/EmployeeForm';
import Login from './components/login/Login';
import TruckForm from './components/truck/TruckForm';
import Truck from './components/truck/Truck';

function App() {
  return (
    <ChakraProvider>
      <CSSReset />
      <Truck></Truck>
    </ChakraProvider>
  );
}
export default App;
