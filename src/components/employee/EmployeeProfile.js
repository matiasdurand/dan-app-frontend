import { 
  Flex
 } from '@chakra-ui/react'
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import EmployeeForm from './EmployeeForm'


const EmployeeProfile = () => {

  const history = useHistory();
  
  let { employeeId } = useParams();

  const [employee, setEmployee] = useState({});

  const put = () => {

    let updatedEmployee = {
      id: parseInt(employee.id),
      name: employee.name,
      email: employee.email
    };
    
    console.log("updated employee = " + JSON.stringify(updatedEmployee));

    axios
      .put("http://localhost:9100/employees/" + updatedEmployee.id, JSON.stringify(updatedEmployee),
        { headers: {'Content-Type':'application/json'} })
      .then(() => {
        alert("Datos del empleado modificados.");
        window.location.href = window.location.href;
      })
      .catch((error) => {
        alert("Error al intenter modificar los datos del empleado.");
        console.log(error.response.data);
      });
  };

  const goBack = () => { history.goBack(); }

  useEffect(() => {

    axios
      .get("http://localhost:9100/employees/" + employeeId)
      .then((response) => { setEmployee(response.data); });

  }, []);

  return(
    <Flex h="100vh" w="70%" justifyContent="flex-end" p={8}>

      <EmployeeForm
        employee={employee} 
        setEmployee={setEmployee} 
        postOrPut={put} 
        clean={goBack}>
      </EmployeeForm>

    </Flex>
  )
}

export default EmployeeProfile;