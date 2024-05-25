const initialState = {
  products: [],
  cart: [],
  wishlist: [],
};

const listingReducer = (state = initialState, action) => {
  switch (action.type) {
    case "load_products":
      return {
        ...state,
        products: action.products,
      };
    case "add_to_cart":
      return {
        ...state,
        cart: [...state.cart, action.product],
      };
    case "add_to_wishlist":
      return {
        ...state,
        wishlist: [...state.wishlist, action.product],
      };
    default:
      return state;
  }
};

export default listingReducer;
