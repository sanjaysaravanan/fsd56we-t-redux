import PropTypes from "prop-types";
import { memo, useEffect, useState } from "react";
import { getChars } from "./apis";

const Buttons = () => {
  return (
    <div>
      <button>Load Next</button>
      <button>Load Prev</button>
    </div>
  );
};

const AppHeader = () => {
  return (
    <header>
      {console.log("App Header Rendering")}
      <h2>Simple Listing Page</h2>
    </header>
  );
};

const MemoziedHeader = memo(AppHeader);

const Character = ({ name, imageUrl, index, addToFav = () => undefined }) => {
  return (
    <div style={{ padding: 8, border: "1px solid", margin: 8, flexShrink: 0 }}>
      {console.log("rendering index", index)}
      <img
        style={{ height: 200, width: 300, objectFit: "contain" }}
        alt={name}
        src={imageUrl}
      />
      <h2>{name}</h2>
      <button onClick={() => addToFav({ name, imageUrl })}>Add To Fav</button>
    </div>
  );
};

Character.propTypes = {
  name: PropTypes.string,
  imageUrl: PropTypes.string,
  index: PropTypes.number,
  addToFav: PropTypes.func,
};

const Characters = () => {
  const [chars, setChars] = useState([]);
  const [page, setPage] = useState(1);
  const [favs, setFavs] = useState([]);

  const loadChars = async () => {
    const { data } = await getChars(page);

    setChars([...chars, ...data]);
  };

  const loadMore = async () => {
    setPage(page + 1);
  };

  useEffect(() => {
    loadChars();
  }, [page]);

  return (
    <>
      <MemoziedHeader />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {console.log("Parent for Characters")}
        {chars.map((ch, i) => (
          <Character
            key={ch["name"]}
            index={i}
            name={ch["name"]}
            imageUrl={ch.imageUrl}
          />
        ))}
      </div>
      <button onClick={loadMore}>Load More</button>
    </>
  );
};

export default Characters;
