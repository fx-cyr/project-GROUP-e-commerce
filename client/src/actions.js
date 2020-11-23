//Shopping items data
export const requestItems = () => ({
  type: "REQUEST_ITEMS_DATA",
});
export const requestItemsSuccess = (data) => ({
  type: "REQUEST_ITEMS_DATA_SUCCESS",
  data,
});
export const requestItemsError = () => ({
  type: "REQUEST_ITEMS_DATA_ERROR",
});

//Manage cart items
export const addItems = (item) => ({
  type: "ADD_ITEM",
  item,
});
export const removeItem = (item) => ({
  type: "REMOVE_ITEM",
  item,
});

export const updateQuantity = (item) => ({
  type: "UPDATE_QUANTITY",
  item,
});

//Companies data
export const requestCompaniesData = () => ({
  type: "REQUEST_COMPANIES_DATA",
});
export const requestCompaniesSuccess = (data) => ({
  type: "REQUEST_COMPANIES_DATA_SUCCESS",
  data,
});
export const requestCompaniesError = () => ({
  type: "REQUEST_COMPANIES_DATA_ERROR",
});
