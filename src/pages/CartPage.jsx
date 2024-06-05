import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import CartCard from "../components/Cart/CartCard";
import UserForm from "../components/Cart/UserForm";
import formatToINR from "../utils/formatToINR";
import { emptyCart } from "../store/slices/cart";
import { toast } from "react-toastify";

const CartPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const [userDetails, setUserDetails] = useState({
    firstName: "",
    lastName: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({ ...userDetails, [name]: value });
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const onSubmitFormHandler = async () => {
    try {
      const response = await axios.post("http://localhost:4000/orders", {
        userDetails,
        cartItems,
      });
      console.log(response.data);
      dispatch(emptyCart());
      setUserDetails({
        firstName: "",
        lastName: "",
        address: "",
      });
      toast.success("Order placed successfully");
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className="w-full flex gap-12 mx-auto py-4 px-20">
      <div className="w-2/3">
        <h1 className="text-2xl font-bold mb-4">Cart</h1>
        {cartItems.length > 0 ? (
          <div>
            {cartItems.map((item) => (
              <CartCard key={item.id} item={item} />
            ))}
            <div className="mt-4">
              <h2 className="text-xl font-bold">
                Total: {formatToINR(totalPrice)}
              </h2>
            </div>
          </div>
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>
      <div className="w-1/3">
        <h2 className="text-xl font-bold mb-2">User Details</h2>
        <UserForm userDetails={userDetails} handleChange={handleChange} />
        {cartItems.length > 0 && (
          <button
            onClick={onSubmitFormHandler}
            className="bg-black text-white py-2 px-4 rounded-md mt-4 hover:bg-gray-900 transition duration-300"
          >
            Place Order
          </button>
        )}
      </div>
    </div>
  );
};

export default CartPage;
