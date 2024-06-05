import React from "react";
import { useDispatch } from "react-redux";
import { removeFromCart, updateQuantity } from "../../store/slices/cart";
import formatToINR from "../../utils/formatToINR";
import { RiDeleteBin6Line } from "react-icons/ri";
import { toast } from "react-toastify";

const CartCard = ({ item }) => {
  const dispatch = useDispatch();

  const handleQuantityChange = (e) => {
    dispatch(
      updateQuantity({ id: item.id, quantity: parseInt(e.target.value) })
    );
  };

  const handleRemove = () => {
    dispatch(removeFromCart(item));
    toast.success(`${item.name} Removed from Cart`);
  };

  return (
    <div className="border border-gray-200 rounded-md px-4 py-2 flex justify-between items-center my-2">
      <div className="flex flex-col">
        <h2 className="text-lg text-left font-semibold mb-2">{item.name}</h2>
        <div className="flex items-center">
          <label htmlFor={`quantity-${item.id}`} className="mr-2">
            Quantity:
          </label>
          <input
            id={`quantity-${item.id}`}
            type="number"
            value={item.quantity}
            onChange={handleQuantityChange}
            className="border border-gray-300 rounded p-1 w-16"
          />
        </div>
      </div>
      <p className="text-gray-600 mb-2">{formatToINR(item.price)}</p>
      <button
        onClick={handleRemove}
        className="text-red-600 hover:text-red-700 flex items-center"
      >
        <RiDeleteBin6Line className="mr-1" />
        Remove
      </button>
    </div>
  );
};

export default CartCard;
