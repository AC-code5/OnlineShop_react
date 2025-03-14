import { useContext } from "react";
import { ShopContext } from "../../context/shopContext";

const Product = (props) => {
  const { cartItems, addToCart, removeFromCart } = useContext(ShopContext);
  const isInCart = cartItems.some((item) => item.id === props.data.id);
  return (
    <div className="product_wrapper">
      <img className="img_wrapper" src={props.data.productImg} />
      <h4 className="product_title">{props.data.productName}</h4>
      <p className="product_price"> price: {props.data.price}$</p>

      <button
        className="product_btn_plus"
        onClick={() => addToCart(props.data.id)}
      >
        +
      </button>
      <span>
        {cartItems?.filter((row) => row.id === props.data.id)[0]?.count}
      </span>

      {isInCart && (
        <button
          className="product_btn_minez"
          onClick={() => removeFromCart(props.data.id)}
        >
          -
        </button>
      )}
    </div>
  );
};

export default Product;
// {isInCart && (
//   <button
//     className="product_btn_minez"
//     onClick={() => removeFromCart(props.data.id)}
//   >
//     -
//   </button>
// )}
