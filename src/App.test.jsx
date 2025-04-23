//import { render, screen } from "@testing-library/react";
//import {toBeVisible} from "@testing-library/jest-dom/matchers"; 
import { App} from "./App";

it("renders without crashing", () => {
  render(<App />);
  expect(screen.getByText(/hello/i)).toBeVisible(); 
});
