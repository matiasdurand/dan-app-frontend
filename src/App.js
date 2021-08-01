import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import CustomerHome from './components/customer/home/CustomerHome';
import EmployeeHome from './components/employee/home/EmployeeHome';
import EmployeeForm from './components/employee/EmployeeForm';
import Login from './components/login/Login';
import TruckForm from './components/truck/TruckForm';
import Truck from './components/truck/Truck';
import CustomerRegistration from './components/CustomerRegistration';
import { Route, Switch } from 'react-router-dom';
import ConstructionForm from './components/construction/ConstructionForm';
import Payments from './components/accounting/Payments'
import OrderGeneration from './components/order/OrderGeneration'

function App() {
  return (
 
    <ChakraProvider>
      <CSSReset /> 
      <Switch>

        <Route path='/login' exact component={Login}></Route>

        <Route path='/' exact component={EmployeeHome}></Route>

        <Route path='/login/registro' exact component={CustomerRegistration}></Route> 

        <Route path='/cliente/registro' exact component={CustomerRegistration}></Route> 

        <Route path='/pagos' exact component={Payments}></Route>

        <Route path='/pedidos/agregar' exact component={OrderGeneration}></Route>

        <Route path='/camiones' exact component={Truck}></Route>

      </Switch>

    </ChakraProvider>

  );
}
export default App;
