import { 
  Flex,
  FormControl,
  Input,
  FormHelperText
} from "@chakra-ui/react";
import ProductTable from "../product/ProductTable";
import OrderItemTable from "./OrderItemTable"
import OrderForm from "./OrderForm";
import ConstructionTable from "../construction/ConstructionTable";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function OrderRegister() {

  let { cuit } = useParams();

  const [shippingDate, setShippingDate] = useState("2021-09-01");
  const [quantity, setQuantity] = useState(1);
  const [products, setProducts] = useState([]);
  const [productId, setProductId] = useState(0);
  const [constructions, setConstructions] = useState([]);
  const [constructionId, setConstructionId] = useState(0);
  const [items, setItems] = useState([]);

  useEffect(() => {

    axios
      .get("http://localhost:9100/products/api/products")
      .then(response => { setProducts(response.data); });

    if (cuit !== "0") {
      axios
        .get("http://localhost:9100/users/api/constructions?cuit=" + cuit)
        .then(response => { setConstructions(response.data); });
    }
    else {
      axios
        .get("http://localhost:9100/users/api/constructions")
        .then(response => { setConstructions(response.data); });
    }

  }, []);

  const filter = (name) => {
    
    if (name === "") {
      axios
        .get("http://localhost:9100/products/api/products")
        .then(response => { setProducts(response.data); });
    }
    else {
      axios
        .get("http://localhost:9100/products/api/products?name=" + name)
        .then((response) => { setProducts([response.data]); })
        .catch(() => { alert("No hay coincidencias.") });
    }
  };

  const addItem = () => {

    if (quantity < 1) {
      alert("Cantidad inválida.");
    }
    else if (productId === 0) {
      alert("Debes seleccionar un producto.");
    }
    else if (constructionId === 0) {
      alert("Debes seleccionar una construcción.");
    }
    else {

      let selectedProduct = products.filter(p => p.id === productId)[0];

      if (items.filter(i => i.productId === productId).length === 0) {

        let updatedItems = items.slice();

        updatedItems.push({
          quantity: parseInt(quantity),
          price: (parseFloat(selectedProduct.price) * parseInt(quantity)),
          productId: selectedProduct.id
        });

        setItems(updatedItems);
      }
      else {
        alert("El producto seleccionado ya forma parte del pedido.")
      }
      
      clean(false);
    }
  }

  const confirm = () => {

    let newOrder = {
      shippingDate: shippingDate  + "T00:00:00Z",
      constructionId: parseInt(constructionId),
      items: items
    };

    console.log(JSON.stringify(newOrder))
    
    axios
      .post("http://localhost:9100/orders/api/orders", JSON.stringify(newOrder),
        { headers: {'Content-Type':'application/json'} })
      .then(() => {
        alert("Pedido registrado correctamente.");
        clean(true);
      })
      .catch((error) => {
        alert("Error al intentar registrar el pedido.")
        console.log(error.response.data);
      });
  }

  const clean = (cleanItems) => {

    setProductId(0);
    setQuantity(1);

    if (cleanItems) { setItems([]); }
  }

  return (
    <Flex justify="space-around" h="100vh" p="32px">

      <Flex direction="column" align="center">

        <ConstructionTable 
          constructions={constructions} 
          edit={() => {}} 
          remove={() => {}} 
          options={false} 
          setContructionId={setConstructionId}>
        </ConstructionTable>

        <FormControl mt={8}>
          <Input 
            onKeyUp={(event) => { if (event.key === 'Enter') {filter(event.target.value)}}}
            variant="filled" 
            placeholder="Ingrese un Nombre">
          </Input>
          <FormHelperText mb={2} ml={2}>Presione enter para buscar el producto.</FormHelperText>
        </FormControl>
        
        <ProductTable 
          products={products} 
          edit={() => {}} 
          remove={() => {}} 
          options={false} 
          setProductId={setProductId}>
        </ProductTable>

      </Flex>
  
      <Flex direction="column" w="40%">
        
        <OrderForm 
          setShippingDate={setShippingDate}
          setQuantity={setQuantity}
          addItem={addItem}
          confirm={confirm}
          clean={clean}>
        </OrderForm>

        <OrderItemTable items={items}></OrderItemTable>

      </Flex>

    </Flex>
  );
}

export default OrderRegister;