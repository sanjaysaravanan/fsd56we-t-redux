import { useDispatch, useSelector } from "react-redux";

const Counter = () => {
  // const countReducer = useSelector((state) => state.countReducer);
  const { count } = useSelector((state) => state.countReducer);

  const dispatch = useDispatch();

  return (
    <div>
      <h1>Simple Counter App</h1>
      {/* <h2>{countReducer.count}</h2> */}
      <h2>{count}</h2>
      <button onClick={() => dispatch({ type: "count_inc" })}>Inc</button>
      <button onClick={() => dispatch({ type: "count_dec" })}>Dec</button>
      <button onClick={() => dispatch({ type: "count_reset" })}>Reset</button>
    </div>
  );
};

export default Counter;
