const Reducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
      };
    case "GET_STORIES":
      return {
        ...state,
        isLoading: false,
        hits: action.payload.hits,
        nbPages: action.payload.nbPages,
      };
    case "REMOVE_POST":
      return {
        ...state,
        hits: state.hits.filter((curElm) => curElm.objectID !== action.payload),
      };
    case "SEARCH_QUERY":
      return {
        ...state,
        query: action.payload,
      };
    case "PREV_PAGE":
      let pageNum = state.page - 1;

      if (pageNum <= 0) {
        pageNum = 0;
      }
      return {
        ...state,
        page: pageNum,
      };
    case "NEXT_PAGE":
      let pageNumIncr = state.page + 1;

      if (pageNumIncr >= state.nbPages) {
        pageNumIncr = 0;
      }
      return {
        ...state,
        page: pageNumIncr,
      };
    default:
      break;
  }
};

export default Reducer;
