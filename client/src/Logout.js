import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useProductContext } from "./context/ProductContext";
import { useCartContext } from "./context/cart_context";

const Logout = () => {
  const { setToggle } = useProductContext();
  const{clearCart} = useCartContext()

  const navigate = useNavigate();

  useEffect(() => {
    fetch("/logout", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
      .then((res) => {
        navigate("/login", { replace: true });
        setToggle(false);
        if (res.status !== 200) {
          const error = new Error(res.error);
          throw error;
        }
      })
      .catch((error) => {
        console.log({ error: "Error in logout" });
      });
  });

  return (
    <div onClick={clearCart}>
      <h1>Logout succesfully</h1>
    </div>
  );
};

export default Logout;
