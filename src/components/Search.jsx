import React from "react";
import { useGlobalContext } from "./Context";

const Search = () => {
  const { query, searchPost } = useGlobalContext();

  return (
    <>
      <h1 className="text-center">search page </h1>
      <div className="d-flex justify-content-center flex-direction-row">
        <form onSubmit={(e) => e.preventDefault()}>
          <div>
            <input
              type="text"
              placeholder="search here..."
              style={{
                border: "none",
                padding: "10px",
                borderRadius: "8px",
                borderBottom: "1px solid black",
              }}
              value={query}
              onChange={(e) => searchPost(e.target.value)}
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default Search;
