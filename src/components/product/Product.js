import { Flex } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import ProductForm from "./ProductForm";
import ProductTable from "./ProductTable";
import ProductFilter from "./ProductFilter";
import axios from 'axios';

function Product() {

  const emptyProduct = {
    name: "",
    description: "",
    price: "",
    currentStock: "",
    minimumStock: "",
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

      let updatedProduct = {
        id: parseInt(product.id),
        name: product.name,
        description: product.description,
        price: parseFloat(product.price),
        minimumStock: parseInt(product.minimumStock),
        unitId: parseInt(product.unitId)
      };

      console.log("put = " + JSON.stringify(updatedProduct));

      axios
        .put("http://localhost:9100/products/" + updatedProduct.id, JSON.stringify(updatedProduct),
          { headers: {'Content-Type':'application/json'} })
        .then(() => {
          alert("Datos del producto modificados.");
          window.location.href = window.location.href;
        })
        .catch((error) => {
          alert("Error al intentar modificar los datos del producto");
          console.log(error.response.data);
        });
    }
    else {
      
      let newProduct = {
        name: product.name,
        description: product.description,
        price: parseFloat(product.price),
        currentStock: parseInt(product.currentStock),
        minimumStock: parseInt(product.minimumStock),
        unitId: parseInt(product.unitId)
      };

      console.log("post = " + JSON.stringify(newProduct));

      axios
        .post("http://localhost:9100/products", JSON.stringify(newProduct), 
          { headers: {'Content-Type':'application/json'} })
        .then(() => {
          alert("Producto agregado correctamente.");
          window.location.href = window.location.href;
        })
        .catch((error) => {
          alert("Error al intentar registrar el producto.");
          console.log(error.response.data);
        });
    }
  };

  const remove = (productId) => {

    axios
      .delete("http://localhost:9100/products/" + productId)
      .then(() => {
        alert("Se eliminó el producto.");
        window.location.href = window.location.href;
      });

  };

  const filter = () => {

    if (productFilters.type === "name") {
        axios
          .get("http://localhost:9100/products?name=" + productFilters.name)
          .then(response => { setProducts([response.data]); })
          .catch(() => { alert("No hay coincidencias.") });
    }
    else if (productFilters.type === "stockRange") {
        axios
          .get("http://localhost:9100/products?minimumStock=" + productFilters.minimumStock
            + "&maximumStock=" + productFilters.maximumStock)
          .then((response) => { setProducts(response.data); });
    }
    else if (productFilters.type === "priceRange") {
        axios
          .get("http://localhost:9100/products?minimumPrice=" + productFilters.minimumPrice
            + "&maximumPrice=" + productFilters.maximumPrice)
          .then((response) => { setProducts(response.data); });
    }
  };

  useEffect(() => {

    axios
      .get("http://localhost:9100/products")
      .then(response => { setProducts(response.data); });

  }, []);

  return (
    <Flex h="100vh" justify="center" p={8}>

      <ProductForm 
        product={product} 
        setProduct={setProduct} 
        postOrPut={postOrPut} 
        clean={clean}>
      </ProductForm>
        
      <Flex direction="column">

        <ProductFilter 
          productFilters={productFilters} 
          setProductFilters={setProductFilters} 
          filter={filter}>
        </ProductFilter>

        <ProductTable 
          products={products} 
          edit={edit} 
          remove={remove} 
          options={true}>
        </ProductTable>

      </Flex>
      
    </Flex>
  );
}

export default Product;