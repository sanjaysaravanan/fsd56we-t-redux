import { useSelector } from "react-redux";

const ViewCart = () => {
  const cart = useSelector((state) => state.listingReducer.cart);
  return <span>Cart ({cart.length})</span>;
};

const Header = () => {
  return (
    <header>
      <h1 style={{ display: "inline-block" }}>Sample Listing Applciation</h1>
      <ViewCart />
      {console.log("Header Rednering")}
    </header>
  );
};

export default Header;
