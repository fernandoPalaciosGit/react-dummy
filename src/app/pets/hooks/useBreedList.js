import { useState, useEffect } from "react";

const API = "https://pets-v2.dev-apis.com/breeds";
let breedCached = {};

async function requestBreedList(animal) {
  const getter = await fetch(`${API}?animal=${animal}`).then((pets) =>
    pets.json()
  );
  breedCached[animal] = getter.breeds || [];
}

export default function useBreedList(animal) {
  // IMP: los efectos deben estar embebidos en funciones que se llamen desde dentro de componentes de React
  const [state, setState] = useState("unloaded");
  const [breedList, setBreedList] = useState([]);

  useEffect(() => {
    if (!animal) {
      setBreedList([]);
      setState("unloaded");
    } else if (breedCached[animal]) {
      setBreedList(breedCached[animal]);
      setState("loaded");
    } else {
      setBreedList([]);
      setState("loading");
      requestBreedList(animal).then(() => {
        setBreedList(breedCached[animal]);
        setState("loaded");
      });
    }
  }, [animal]);

  return [breedList, state];
}
