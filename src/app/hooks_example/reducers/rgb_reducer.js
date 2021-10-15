const initialState = { r: 0, g: 0, b: 0 };
const limitRGB = (num) => (num < 0 ? 0 : num > 255 ? 255 : num);
const step = 100;

export const rgbActions_R = {
  "➕ R": "INCREMENT_R",
  "➖ R": "DECREMENT_R",
};
export const rgbActions_G = {
  "➕ G": "INCREMENT_G",
  "➖ G": "DECREMENT_G",
};
export const rgbActions_B = {
  "➕ B": "INCREMENT_B",
  "➖ B": "DECREMENT_B",
};
const rgbActions = { ...rgbActions_R, ...rgbActions_G, ...rgbActions_B };

export const rgbReducer = (state, action) => {
  state = state || initialState;
  switch (action.type) {
    case rgbActions["➕ R"]:
      return Object.assign({}, state, { r: limitRGB(state.r + step) });
    case rgbActions["➖ R"]:
      return Object.assign({}, state, { r: limitRGB(state.r - step) });
    case rgbActions["➕ G"]:
      return Object.assign({}, state, { g: limitRGB(state.g + step) });
    case rgbActions["➖ G"]:
      return Object.assign({}, state, { g: limitRGB(state.g - step) });
    case rgbActions["➕ B"]:
      return Object.assign({}, state, { b: limitRGB(state.b + step) });
    case rgbActions["➖ B"]:
      return Object.assign({}, state, { b: limitRGB(state.b - step) });
    default:
      return state;
  }
};
