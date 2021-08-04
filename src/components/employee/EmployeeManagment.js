import { Flex } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import EmployeeForm from "./EmployeeForm";
import EmployeeTable from "./EmployeeTable";

function EmployeeManagment() {

  const emptyEmployee = {
    id: null,
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

      console.log("put " + employee);
      
      axios
        .put("http://localhost:9100/employees/" + employee.id, employee)
        .then(() => {
          clean();
        });
    }
    else {
      
      console.log("post " + employee);

      axios
        .post("http://localhost:9100/employees", employee)
        .then(response => {
          let updatedEmployees = employees.slice();
          updatedEmployees.push(response.data);
          setEmployees(updatedEmployees);
          clean();
        });
    }
  };

  const remove = (employeeId) => {

    console.log("delete " + employeeId);

    axios
      .delete("http://localhost:9100/employees/" + employeeId)
      .then(() => {
        setEmployees(employees.slice().filter(e => e.id !== employeeId));
        clean();
      });
  };

  const filter = () => {

    console.log("get name = " + filters.name);

    axios
      .get("http://localhost:9100/employees?name=" + filters.name)
      .then(response => {
        setEmployees(response.data);
      });
  };

  useEffect(() => {

    axios
      .get("http://localhost:9100/employees")
      .then(response => {
        console.log(response.data);
        setEmployees(response.data);
      });

  }, []);

  return (
    <Flex  h="100vh" justify="center" p={8}>
      
      <EmployeeForm employee={employee} setEmployee={setEmployee} postOrPut={postOrPut} clean={clean}></EmployeeForm>

      <EmployeeTable 
        employees={employees} 
        edit={edit} 
        remove={remove} 
        filters={filters} 
        setFilters={setFilters} 
        filter={filter}>
      </EmployeeTable>

    </Flex>
  );
}
export default EmployeeManagment;