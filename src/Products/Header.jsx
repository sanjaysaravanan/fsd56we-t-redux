import { useSelector } from "react-redux";

const Header = () => {
  const cart = useSelector((state) => state.listingReducer.cart);

  return (
    <header>
      <h1 style={{ display: "inline-block" }}>Sample Listing Applciation</h1>
      <span>Cart ({cart.length})</span>
      {console.log("Header Rednering")}
    </header>
  );
};

export default Header;
