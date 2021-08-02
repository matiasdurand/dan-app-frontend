import { Button, Flex } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import ProductForm from "./ProductForm";
import ProductTable from "./ProductTable";
import ProductTableFilter from "./ProductTableFilter";
import axios from 'axios';

function Products() {

  const emptyProduct = {
    id: null,
    name: "",
    description: "",
    price: 0,
    currentStock: 0,
    minimumStock: 0,
    unitId: 1
  };

  const defaultFilters = {
    name: "",
    minimumPrice: 0,
    maximumPrice: 1000,
    minimumStock: 0,
    maximumStock: 1000
  };

  const [product, setProduct] = useState(emptyProduct);

  const [products, setProducts] = useState([]);

  const [productFilters, setProductFilters] = useState(defaultFilters);

  const [editMode, setEditMode] = useState(false);

  const clean = () => {

    setProduct(emptyProduct);

    if (editMode) setEditMode(false);
  };

  const edit = (productId) => {

    setProduct(products.filter(p => p.id === productId)[0]);

    setEditMode(true);
  };

  const postOrPut = () => {

    if (editMode) {
      axios
        .put("url/id", product)
        .then(response => {
          let updatedProducts = products.slice();
          updatedProducts.push(response.data);
          setProducts(updatedProducts);
        });
    }
    else {
      axios
        .post("url", product)
        .then(response => {
          let updatedProducts = products.slice();
          updatedProducts.push(response.data);
          setProducts(updatedProducts);
        });
    }
  };

  const remove = (productId) => {

    axios.delete("url/id");

    setProducts(products.slice().filter(p => p.id !== productId));

    clean();
  };

  const filter = () => {

    // get by filters
    // axios
    //   .post('http://localhost:8100/products/api/products', product)
    //   .then(response => console.log(response.data));
  };

  useEffect(() => {

    // get all
    // axios
    //   .get('http://localhost:8100/products/api/products')
    //   .then(response => console.log(response.data));

    // For testing
    const products = [
      {
        id: 1,
        name: "name",
        description: "desc",
        unitDescription: "Litros",
        price: 10,
        minimumStock: 1,
        currentStock: 10,
        unitId: 2
      },
      {
        id: 2,
        name: "name2",
        description: "desc2",
        unitDescription: "Metros",
        price: 11,
        minimumStock: 2,
        currentStock: 20,
        unitId: 3
      }
    ];

    setProducts(products);

  }, []);

  return (
    <Flex h="100vh" justify="center" p={8}>

      <Flex p={4}>
        
        <Flex direction="column" w="40%" p={4}>

          <ProductForm product={product} setProduct={setProduct}></ProductForm>

          <Flex direction="row-reverse" mt="32px">
            <Button variant="solid" colorScheme="blue" onClick={postOrPut}>Aceptar</Button>
            <Button mr="16px" variant="ghost" onClick={clean}>Cancelar</Button>
          </Flex>
          
        </Flex>
        
        <Flex direction="column" p="16px">
          <ProductTableFilter productFilters={productFilters} setProductFilters={setProductFilters}></ProductTableFilter>
          <Button size="sm" variant="link" colorScheme="blue" m="16px" onClick={filter}>Buscar</Button>
          <ProductTable employeeUser={true} products={products} edit={edit} remove={remove}></ProductTable>
        </Flex>

      </Flex>

    </Flex>
  );
}

export default Products;