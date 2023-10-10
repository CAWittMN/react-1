import { render, screen } from "@testing-library/react";
import Madlib from "./Madlib";

test("renders Madlib component", () => {
  render(<Madlib />);
  const linkElement = screen.getByText(/Madlibs/i);
  expect(linkElement).toBeInTheDocument();

  const selectElement = screen.getByText(/Select a story/i);
  expect(selectElement).toBeInTheDocument();
});
