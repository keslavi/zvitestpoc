import { render, screen } from "@testing-library/react";
//import {toBeVisible} from "@testing-library/jest-dom/matchers"; 
import { App as Test}  from "./App";

it("renders without crashing", () => {
  render(<Test id="nothing"/>) ;
  expect(screen.getByText(/hello/i)).toBeVisible(); 
});

it("tests deliberate failure", () => {
  render(<Test />);
  expect(true).toBe(false); 
})


// this will fail
  //expect(screen.getByText(/hello/i)).toBeVisible();
  //expect(screen.getByText(/hello/i)).toBeVisible(); // this will fail
  //expect(screen.getByText(/hello/i)).not.toBeVisible(); // this will fail
  //expect(screen.getByText(/hello/i)).toBeInTheDocument(); // this will pass
  //expect(screen.getByText(/hello/i)).not.toBeInTheDocument(); // this will fail