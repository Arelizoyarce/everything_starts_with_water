const initialState = {
  isDisabled: false,
  openRanking: false,
};

// eslint-disable-next-line default-param-last
const generalReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'START_BUTTON_DISABLED':
      return {
        ...state,
        isDisabled: action.payload,
      };
      case 'OPEN_RANKING':
      return {
        ...state,
        openRanking: action.payload,
      };
    default:
      return state;
  }
};

export default generalReducer;
