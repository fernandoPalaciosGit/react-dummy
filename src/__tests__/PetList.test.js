import { describe, test, expect } from "@jest/globals";
import { create } from "react-test-renderer"; // para testear snapshots de componentes Dumy o hijos
import { createRenderer } from "react-test-renderer/shallow"; // para testear snapshopts de primer nivel
import { StaticRouter } from "react-router-dom";
import PetList from "../app/pets/components/PetList";
import petListMock from "./mocks/petlist";

// react-test-renderer
// allow us to compare templates to rendered Components as snapshot auto created by jest execution
describe("Test Pets list", () => {
  test("should return empty list", async () => {
    // first time launched, will create de new entry on __snapshot__
    // si modificamos el template del componente y volvemos a e jecutar, posiblemente falle, porque estaria macheando con un snapshot que acabamos de actualizar con un nuevo estado
    // lo que hay que hacer es indicar a jest que actualize los snapshots
    // npm jest -u
    const petlist = create(<PetList />);
    expect(petlist.toJSON()).toMatchSnapshot("testing1");
  });

  test("should return pet list", async () => {
    // la diferencia entre react-test-renderer y react-test-renderer/shallow
    // es que este ultimo permite centrarse solo en el nivel mas proximo del render,
    // y los componentes hijo solo se renderizaran en el snapshot como declaracion de componente, NO ejecutara el componente
    // de esta manera [/shallow -> createRender()] nos permite centrarnos en la logica del componente de primer nivel y dejar a los componente hijo su propio testing
    const petlist = createRenderer();
    petlist.render(
      <StaticRouter>
        <PetList list={petListMock} />
      </StaticRouter>
    );
    expect(petlist.getRenderOutput()).toMatchSnapshot();
  });
});
