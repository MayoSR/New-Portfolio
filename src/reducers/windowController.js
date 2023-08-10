const initialState = {
  currentTopLayer: 99999,
  reference: -1,
};

const windowState = (state = initialState, action) => {
  switch (action.type) {
    case "TOP_LAYER_Z_INDEX":
        return {
            ...state,
            currentTopLayer: state.currentTopLayer + 1,
            reference: action.reference,
        };
    default:
      return state;
  }
};

export default windowState;
