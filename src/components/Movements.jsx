import { useDispatch, useSelector } from "react-redux";

const Movements = () => {
  const { top, left } = useSelector((state) => state.movementReducer);

  const dispatch = useDispatch();

  return (
    <>
      <div
        style={{
          height: "450px",
          width: "450px",
          border: "1px solid",
          position: "relative",
        }}
      >
        <div
          style={{
            height: "150px",
            width: "150px",
            backgroundColor: "blue",
            position: "absolute",
            top: `${top}px`,
            left: `${left}px`,
          }}
        ></div>
      </div>
      <button onClick={() => dispatch({ type: "move_up" })}>Up</button>
      <button onClick={() => dispatch({ type: "move_down" })}>Down</button>
      <button onClick={() => dispatch({ type: "move_right" })}>Right</button>
      <button onClick={() => dispatch({ type: "move_left" })}>Left</button>
      <button onClick={() => dispatch({ type: "move_reset" })}>Reset</button>
    </>
  );
};

export default Movements;
