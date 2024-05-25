/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import prodStyles from "./Product.module.css";

const Product = (props) => {
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch({ type: "add_to_cart", product: props });
  };

  return (
    <div className={prodStyles.root}>
      <img src={props.image} alt={props.title} />
      <h2>{props.title}</h2>
      <h4>{props.description}</h4>
      <h3>{props.price}</h3>
      <button onClick={addToCart}>Add To Cart</button>
    </div>
  );
};

const Listing = () => {
  const products = useSelector((state) => state.listingReducer.products);
  return (
    <div>
      {console.log("Listing Re-Render")}
      {(products || []).map((pd) => (
        <Product {...pd} key={pd.id} />
      ))}
    </div>
  );
};

export default Listing;
