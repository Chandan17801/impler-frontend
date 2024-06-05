import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import ProductCard from "../components/Products/ProductCard";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:4000/products");
        setProducts(response.data.products);
      } catch (error) {
        console.log(error);
        toast.error("Internal Server Error");
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
