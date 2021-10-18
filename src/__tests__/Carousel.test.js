import { render } from "@testing-library/react";
import { describe, test, expect } from "@jest/globals";
import Carousel from "../app/pets/components/Carousel";

describe("Test Carousel main image", () => {
  const getCarouselWithImages = (images) => <Carousel images={images} />;

  test("should update main image", async () => {
    const images = ["1.jpg", "2.jpg", "3.jpg"];
    const carousel = render(getCarouselWithImages(images));
    const mainImage = await carousel.findByTestId("main-image");

    expect(mainImage.src).toContain(images[0]);

    let idx = 0;
    for (const image of images) {
      const carouselThumb = await carousel.findByTestId(`thumbnail-${idx++}`);
      carouselThumb.click();

      expect(mainImage.src).toContain(image);
      expect(carouselThumb.src).toContain(image);
      expect(carouselThumb.classList).toContain("active");
    }
  });
});
