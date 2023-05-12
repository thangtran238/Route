import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";

export default function Lifecycle() {
  const [listProduct, setListProduct] = useState([]);
  const [type, setType] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://61bc131bd8542f0017824588.mockapi.io/a/arrayproducts"
        );
        setListProduct(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const filteredList = type ? listProduct.filter((product) => product.type === type) : listProduct;

  return (
    <div>
      {filteredList.map((product) => (
        <Card key={product.id} image={product.avatar} name={product.name} price={product.price} />
      ))}
    </div>
  );
}
