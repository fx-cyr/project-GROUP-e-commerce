const initialState = {};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ITEM": {
      const currentItemFromState = state[action.item._id];

      return {
        ...state,

        [action.item._id]: {
          ...action.item,
          quantity: currentItemFromState
            ? currentItemFromState.quantity + 1
            : 1,
        },
      };
    }

    case "REMOVE_ITEM": {
      const stateCopy = { ...state };
      delete stateCopy[action.item.id];
      return {
        ...stateCopy,
      };
    }

    case "UPDATE_QUANTITY": {
      return {
        ...state,
        [action.item.id]: {
          ...state[action.item.id],
          quantity: action.item.quantity,
        },
      };
    }

    case "REMOVE_ALL_ITEM": {
      let stateCopy = initialState;
      return stateCopy;
    }
    default:
      return state;
  }
};

export const getStoreItemArray = (state) => Object.values(state);
