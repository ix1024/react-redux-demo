const Couter = (state = 0, action = {}) => {
  switch (action.type) {
    case "ADD":
      return state + 1;
      break;
    default:
      return state;
  }
};

export default Couter;
