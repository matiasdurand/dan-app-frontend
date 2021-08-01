import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import { Route, Switch } from 'react-router-dom';
import Login from './components/login/Login'
import EmployeeHome from './components/home/employee/EmployeeHome';
import CustomerHome from './components/home/customer/CustomerHome';
import CustomerRegister from './components/customer/CustomerRegister';
import EmployeeRegister from './components/employee/EmployeeRegister';
import Payment from './components/accounting/Payment';
import OrderRegister from './components/order/OrderRegister';
import Truck from './components/truck/Truck';
import CustomerPayments from './components/accounting/CustomerPayment';

function App() {
  return (
 
    <ChakraProvider>
      <CSSReset /> 
      <Switch>

        <Route path='/login' exact component={Login}></Route>

        <Route path='/' exact component={CustomerHome}></Route>

        <Route path='/login/registro' exact component={CustomerRegister}></Route> 

        <Route path='/cliente/registro' exact component={CustomerRegister}></Route> 

        <Route path='/pagos' exact component={Payment}></Route>

        <Route path='/mis-pagos' exact component={CustomerPayments}></Route>

        <Route path='/pedidos/agregar' exact component={OrderRegister}></Route>

        <Route path='/camiones' exact component={Truck}></Route>

        <Route path='/empleados' exact component={EmployeeRegister}></Route>

      </Switch>

    </ChakraProvider>

  );
}
export default App;
