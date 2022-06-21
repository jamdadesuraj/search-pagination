import React, { useState } from "react";
import mockData from "./mockData.json";
import "./search.css";
const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="search-data">
      <input
        type="text"
        placeholder="search...."
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
      />

      {mockData
        .filter((val) => {
          if (searchTerm === "") {
            return val;
          } else if (
            val.first_name.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return val;
          }
        })
        .map((val, key) => {
          return (
            <>
              <div className="search-data">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">First-Name :- {val.first_name}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">
                      Last-Name :- {val.last_name}
                    </h6>
                    <p class="card-text">Email :-{val.email}</p>
                    <a href="#" class="card-link">
                      {val.gender}
                    </a>
                    <a href="#" class="card-link">
                      {val.ip_address}
                    </a>
                  </div>
                </div>
              </div>
            </>
          );
        })}
    </div>
  );
};

export default Search;
