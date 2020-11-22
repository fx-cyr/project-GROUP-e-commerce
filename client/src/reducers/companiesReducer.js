const initialState = {
  companiesList: null,
  status: "idle",
  error: null,
};

export const companiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "REQUEST_COMPANIES_DATA":
      return {
        ...state,
        status: "loading",
        error: null,
      };
    case "REQUEST_COMPANIES_DATA_SUCCESS":
      return {
        ...state,
        companiesList: action.data,
        status: "idle",
        error: null,
      };
    case "REQUEST_COMPANIES_DATA_ERROR":
      return {
        ...state,
        status: "error",
        error: true,
      };
  }
};
