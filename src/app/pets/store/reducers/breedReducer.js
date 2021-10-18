const initBreed = "Havanese";

export default function breed(state = initBreed, action) {
  switch (action.type) {
    case "CHANGE_BREED":
      return action.payload;
    default:
      return state;
  }
}
