import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import { Route, Switch } from 'react-router-dom';
import Login from './components/login/Login'
import EmployeeHome from './components/home/employee/EmployeeHome';
import CustomerHome from './components/home/customer/CustomerHome';
import CustomerRegister from './components/customer/CustomerRegister';
import Payment from './components/accounting/Payment';
import OrderRegister from './components/order/OrderRegister';
import Truck from './components/truck/Truck';
import CustomerPayments from './components/accounting/CustomerPayment';
import EmployeeProfile from './components/employee/EmployeeProfile';
import CustomerManagment from './components/customer/CustomerManagment';
import EmployeeManagment from './components/employee/EmployeeManagment';
import Products from './components/product/Products'
import CustomerProfile from './components/customer/CustomerProfile';

function App() {
  return (
 
    <ChakraProvider>
      <CSSReset /> 
      <Switch>

        <Route path='/login' exact component={Login}></Route>

        <Route path='/' exact component={CustomerHome}></Route>

        <Route path='/login/registro' exact component={CustomerRegister}></Route>

        <Route path='/mis-pagos' exact component={CustomerPayments}></Route>

        <Route path='/mi-perfil' exact component={CustomerProfile}></Route>

        <Route path='/perfil' exact component={EmployeeProfile}></Route>

        <Route path='/clientes' exact component={CustomerManagment}></Route>

        <Route path='/pagos' exact component={Payment}></Route>

        <Route path='/camiones' exact component={Truck}></Route>

        <Route path='/productos' exact component={Products}></Route>

        <Route path='/empleados' exact component={EmployeeManagment}></Route> 

        <Route path='/cliente/registro' exact component={CustomerRegister}></Route> 

        <Route path='/pedidos/agregar' exact component={OrderRegister}></Route>
        
      </Switch>

    </ChakraProvider>

  );
}
export default App;
