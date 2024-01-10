import React from "react";
import { Offcanvas, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext ";
import FormatCurrency from "./formatCurancy";
import storeItems from "../data/item.json";
import CartItem from "../Components/CartItem";

const ShoppingCart  = ({ isOpen }) => {
    const { closeCart, cartItems } = useShoppingCart();
  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
    <Offcanvas.Header closeButton>
      <Offcanvas.Title>Cart</Offcanvas.Title>
    </Offcanvas.Header>
    <Offcanvas.Body>
      <Stack gap={3}>
      {cartItems.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
        <div className="ms-auto fw-bold fs-5">
          Total{" "}
          {FormatCurrency(
            cartItems.reduce((total, cartItem) => {
              const item = storeItems.find((i) => i.id === cartItem.id);
              return total + (item?.price || 0) * cartItem.quantity;
            }, 0)
          )}
        </div>
      </Stack>
    </Offcanvas.Body>
  </Offcanvas>
  )
}

export default ShoppingCart 
