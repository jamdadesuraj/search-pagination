// create context ✅
// provider ✅
// consumer
import React, { createContext, useReducer, useEffect } from "react";
import reducer from "./Reducer";
import { useContext } from "react";
const globalInfo = createContext();

// create provider

const initialState = {
  isLoading: true,
  query: "HTML",
  nbPages: 0,
  page: 0,
  hits: [],
};
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchData = async (url) => {
    dispatch({ type: "SET_LOADING" });
    try {
      const res = await fetch("http://hn.algolia.com/api/v1/search?");
      const data = await res.json();
      console.log(data);
      dispatch({
        type: "GET_STORIES",
        payload: {
          hits: data.hits,
          nbPages: data.nbPages,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  //remove post

  const removePost = (post_ID) => {
    dispatch({ type: "REMOVE_POST", payload: post_ID });
  };

  //search

  const searchPost = (searchQuery) => {
    dispatch({ type: "SEARCH_QUERY", payload: searchQuery });
  };

  //pagination

  const getPrevPage = () => {
    dispatch({ type: "PREV_PAGE" });
  };
  const getNextPage = () => {
    dispatch({ type: "NEXT_PAGE" });
  };

  useEffect(() => {
    fetchData(
      `${"http://hn.algolia.com/api/v1/search?"}query=${state.query}&page=${
        state.page
      }`
    );
  }, [state.query, state.page]);

  return (
    <>
      <globalInfo.Provider
        value={{ ...state, removePost, searchPost, getPrevPage, getNextPage }}
      >
        {children}
      </globalInfo.Provider>
    </>
  );
};

//custom hook create
const useGlobalContext = () => {
  return useContext(globalInfo);
};
export { globalInfo, AppProvider, useGlobalContext };
