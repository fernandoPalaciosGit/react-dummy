const initAnimal = "dog";

export default function animal(state = initAnimal, action) {
  switch (action.type) {
    case "CHANGE_ANIMAL":
      return action.payload;
    default:
      return state;
  }
}
