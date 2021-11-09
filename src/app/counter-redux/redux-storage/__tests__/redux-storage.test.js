import { afterEach, beforeEach, describe, expect, test } from "@jest/globals";
import AppCounter from "../../AppCounter";
import { render } from "@testing-library/react";

describe("test counter with redux storage", () => {
  let button;
  let appCounter;
  let resultCount;

  beforeEach(() => {
    appCounter = render(<AppCounter />);
  });

  afterEach(async () => {
    const counter = await appCounter.findByTestId("counter-CounterWithStorage");
    button.click();
    button.click();
    expect(counter.innerHTML).toBe(resultCount);
  });

  test("should increase counter", async () => {
    button = await appCounter.findByTestId(
      "increase-counter-CounterWithStorage"
    );
    resultCount = "2";
  });

  test("should decrease counter", async () => {
    button = await appCounter.findByTestId(
      "decrease-counter-CounterWithStorage"
    );
    resultCount = "0";
  });
});
