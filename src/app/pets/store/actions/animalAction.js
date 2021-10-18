export default function updateAnimal(animal) {
  return { type: "CHANGE_ANIMAL", payload: animal };
}
