import React from "react";
import { render, screen } from "@testing-library/react";
import { Lobby } from './components/Lobby'

test("renders learn react link", () => {
  render(<Lobby />);
  const linkElement = screen.getByText(/Click Here/i);
  expect(linkElement).toBeInTheDocument();
});
