import { render } from "@testing-library/react";
import { test, expect, describe, afterEach } from "@jest/globals";
import Pet from "../app/pets/components/Pet";
import { StaticRouter } from "react-router-dom";

function getPetWithImages(images) {
  return (
    <StaticRouter>
      <Pet pet={{ images }} />
    </StaticRouter>
  );
}

describe("Test thumbnail Pet image", () => {
  let images;
  let expectedThumb;

  afterEach(async () => {
    const pet = render(getPetWithImages(images));
    const thumbnail = await pet.findByTestId("thumbnail");

    expect(thumbnail.src).toContain(expectedThumb);
  });

  test("should display a default image", async () => {
    images = [];
    expectedThumb = "none.jpg";
  });

  test("should display first image", async () => {
    images = ["1.jpg", "2.jpg"];
    expectedThumb = images[0];
  });
});
