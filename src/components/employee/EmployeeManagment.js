import { Flex } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import EmployeeForm from "./EmployeeForm";
import EmployeeTable from "./EmployeeTable";

function EmployeeManagment() {

  const emptyEmployee = {
    name: "",
    email: "",
  };

  const defaultFilters = {
    name: ""
  };

  const [employee, setEmployee] = useState(emptyEmployee);
  const [employees, setEmployees] = useState([]);
  const [filters, setFilters] = useState(defaultFilters);
  const [editMode, setEditMode] = useState(false);

  const clean = () => {

    setEmployee(emptyEmployee);

    if (editMode) setEditMode(false);
  };

  const edit = (employeeId) => {

    setEmployee(employees.filter(e => e.id === employeeId)[0]);

    setEditMode(true);
  };

  const postOrPut = () => {

    if (editMode) {

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
          alert("Error al intentar modificar los datos del empleado");
          console.log(error.response.data);
        });
    }
    else {
      
      let newEmployee = {
        name: employee.name,
        email: employee.email
      };

      axios
        .post("http://localhost:9100/employees", JSON.stringify(newEmployee), 
          { headers: {'Content-Type':'application/json'} })
        .then(() => {
          alert("Empleado agregado correctamente.");
          window.location.href = window.location.href;
        })
        .catch((error) => {
          alert("Error al intentar registrar el empleado");
          console.log(error.response.data);
        });
    }
  };

  const remove = (employeeId) => {

    axios
      .delete("http://localhost:9100/employees/" + employeeId)
      .then(() => {
        alert("Se eliminó el empleado.");
        window.location.href = window.location.href;
      });
  };

  const filter = () => {

    if (filters.name !== "") {
      axios
        .get("http://localhost:9100/employees?name=" + filters.name)
        .then(response => { setEmployees([response.data]); })
        .catch(() => { alert("No hay coincidencias."); });
    }
    else {
      axios
        .get("http://localhost:9100/employees")
        .then(response => { setEmployees(response.data); });
    }

  };

  useEffect(() => {

    axios
      .get("http://localhost:9100/employees")
      .then(response => { setEmployees(response.data); });

  }, []);

  return (
    <Flex  h="100vh" justify="space-around" p={12}>
      
      <EmployeeForm 
        employee={employee} 
        setEmployee={setEmployee} 
        postOrPut={postOrPut} 
        clean={clean}>
      </EmployeeForm>

      <EmployeeTable 
        employees={employees} 
        edit={edit} 
        remove={remove} 
        filters={filters} 
        setFilters={setFilters} 
        filter={filter}
        options={true}
        setEmployeeId={() => {}}>
      </EmployeeTable>

    </Flex>
  );
}

export default EmployeeManagment;