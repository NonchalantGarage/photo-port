import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Contact from "..";

afterEach(cleanup);

describe("Contact component", () => {
  // baseline test
  it("renders", () => {
    render(<Contact />);
  });

  it("matches snapshot", () => {
    const { asFragment } = render(<Contact />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("inserts text into the links", () => {
    // Arrange
    const { getByTestId } = render(<Contact />);
    // Assert
    expect(getByTestId("form")).toHaveTextContent("Submit");
  });
});
