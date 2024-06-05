import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/slices/cart";
import formatToINR from "../../utils/formatToINR";
import { toast } from "react-toastify";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const onClickAddToCartHandler = () => {
    dispatch(addToCart(product));
    toast.success(`${product.name} added to Cart Successfully`);
  };

  return (
    <div
      key={product.id}
      className="border border-gray-300 rounded-lg p-4 shadow-lg text-center"
    >
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover rounded-lg mb-2"
      />
      <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
      <p className="text-gray-700 text-base text-justify mb-2">{product.description}</p>
      <p className="text-lg font-bold mb-2">{formatToINR(product.price)}</p>
      <button
        onClick={onClickAddToCartHandler}
        className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
