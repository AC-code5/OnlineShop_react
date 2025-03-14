import { Link } from "react-router-dom";

const ProductHome = (props) => {
  return (
    <div className="product_home_wrapper">
      <img className="home_img_wrapper" src={props.data.productImg} />
      <Link to="/shop" className="home_product_link">
        click me
      </Link>
      <h4 className="home_product_title">{props.data.productName}</h4>
      <p className="home_product_price"> price: {props.data.price}$</p>
    </div>
  );
};

export default ProductHome;
