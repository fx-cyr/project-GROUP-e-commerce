const initialState = {
  itemList: null,
  status: "idle",
  error: null,
};

export const itemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "REQUEST_ITEMS_DATA":
      return {
        ...state,
        status: "loading",
        error: null,
      };
    case "REQUEST_ITEMS_DATA_SUCCESS":
      return {
        ...state,
        itemList: action.data,
        status: "idle",
        error: null,
      };
    case "REQUEST_ITEMS_DATA_ERROR":
      return {
        ...state,
        status: "error",
        error: true,
      };
  }
};
