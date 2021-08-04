import { Flex } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import ProductForm from "./ProductForm";
import ProductTable from "./ProductTable";
import ProductFilter from "./ProductFilter";
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
    type: "name",
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

      console.log("put " + product);
      
      axios
        .put("http://localhost:9100/products/" + product.id, product)
        .then(() => {
          clean();
        });
    }
    else {
      
      console.log("post " + product);

      axios
        .post("http://localhost:9100/products", product)
        .then(response => {
          let updatedProducts = products.slice();
          updatedProducts.push(response.data);
          setProducts(updatedProducts);
          clean();
        });
    }
  };

  const remove = (productId) => {

    axios
      .delete("http://localhost:9100/products/" + productId)
      .then(() => {
        setProducts(products.slice().filter(p => p.id !== productId));
        clean();
      });

  };

  const filter = () => {

    if (productFilters.type === "name") {
        axios
          .get("http://localhost:9100/products?name=" + productFilters.name)
          .then(response => {
            console.log(response.data);
            setProducts(products);
          });
    }
    else if (productFilters.type === "stockRange") {
        axios
          .get("http://localhost:9100/products?minimumStock=" + productFilters.minimumStock
            + "&maximumStock=" + productFilters.maximumStock)
          .then(response => {
            console.log(response.data);
            setProducts(products);
          });
    }
    else if (productFilters.type === "priceRange") {
        axios
          .get("http://localhost:9100/products?minimumPrice=" + productFilters.minimumPrice
            + "&maximumPrice=" + productFilters.maximumPrice)
          .then(response => {
            console.log(response.data);
            setProducts(products);
          });
    }
  };

  useEffect(() => {

    axios
      .get("http://localhost:9100/products")
      .then(response => {
        console.log(response.data);
        setProducts(response.data);
      });
  }, []);

  return (
    <Flex h="100vh" justify="center" p={8}>

      <Flex p={4}>
        
        <Flex direction="column" p={4}>

          <ProductForm product={product} setProduct={setProduct} postOrPut={postOrPut} clean={clean}></ProductForm>
          
        </Flex>
        
        <Flex direction="column" p="16px">
          <ProductFilter productFilters={productFilters} setProductFilters={setProductFilters} filter={filter}></ProductFilter>
          <ProductTable products={products} edit={edit} remove={remove} options={true}></ProductTable>
        </Flex>

      </Flex>

    </Flex>
  );
}

export default Products;