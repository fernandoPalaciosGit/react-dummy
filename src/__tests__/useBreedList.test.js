import { describe, test, expect, afterEach } from "@jest/globals";
import { render } from "@testing-library/react";
import { renderHook } from "@testing-library/react-hooks";
import useBreedList from "../app/pets/hooks/useBreedList";

describe("Test useBreedList of custom hoook", () => {
  let animal;
  let breedListHook;
  let breedListResult;

  describe("should return an empty array as breeds", () => {
    animal = "";
    breedListResult = [];

    afterEach(() => {
      const [breeds, statusBreeds] = breedListHook;
      expect(breeds).toHaveLength(breedListResult.length);
      expect(statusBreeds).toBe("unloaded");
    });

    test("test with [custom Test component]", async () => {
      // los hooks solo pueden instanciarse dentro de componentes de React
      const getUseBreedList = (animal) => {
        let breedList;
        const TestComponent = ({ animal }) => {
          breedList = useBreedList(animal);
          return null;
        };
        render(<TestComponent />);
        return breedList;
      };
      breedListHook = getUseBreedList(animal);
    });

    test("test with [@testing-library/react-hooks]", async () => {
      const { result } = renderHook(() => useBreedList(animal));
      breedListHook = result.current;
    });
  });
});

describe("Should return a list of breeds", () => {
  const animal = "dog";
  const breedListResult = ["Havanise", "Brison"];

  // we need to implementn in jest environment the API of fdetch browser and use it to mock API REST service of /pets

  test("with fetch /pets API rest", async () => {
    // we are mocking any response of any HTTP request -> we could define iin setupJest.js, I mean, it could be specific for /pets
    fetch.mockResponseOnce(
      JSON.stringify({
        animal,
        breeds: breedListResult,
      })
    );

    const { result, waitForNextUpdate } = renderHook(() =>
      useBreedList(animal)
    );
    await waitForNextUpdate();
    const [breeds, statusBreeds] = result.current;
    expect(breeds).toHaveLength(breedListResult.length);
    expect(statusBreeds).toBe("loaded");
  });
});
