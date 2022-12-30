import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import App from "./App";

test("button has correct initial color", () => {
  render(<App />);
  const button = screen.getByRole("button", { name: "Change to blue" });

  expect(button).toHaveStyle({ backgroundColor: "red" });
});

test("button turns blue and the button name changes when clicked", () => {
  render(<App />);
  const button = screen.getByRole("button", { name: "Change to blue" });

  fireEvent.click(button);

  expect(button).toHaveStyle({ backgroundColor: "blue" });
  expect(button).toHaveTextContent("Change to red");
});

test("checkbox is not checked and button enabled when starts out", () => {
  render(<App />);
  const button = screen.getByRole("button", { name: "Change to blue" });
  const checkbox = screen.getByRole("checkbox", { name: "Check the button" });

  expect(button).toBeEnabled();
  expect(checkbox).not.toBeChecked();
});

test("checkbox is checked and button disabled when clicked", () => {
  render(<App />);
  const button = screen.getByRole("button", { name: "Change to blue" });
  const checkbox = screen.getByRole("checkbox", { name: "Check the button" });

  fireEvent.click(checkbox);

  expect(checkbox).toBeChecked();
  expect(button).toBeDisabled();
});

test("button is enabled and checkbox is not checked when unchecked", () => {
  render(<App />);
  const button = screen.getByRole("button", { name: "Change to blue" });
  const checkbox = screen.getByRole("checkbox", { name: "Check the button" });

  fireEvent.click(checkbox);
  fireEvent.click(checkbox);

  expect(checkbox).not.toBeChecked();
  expect(button).toBeEnabled();
});

test("red button is grey when checkbox checked", () => {
  render(<App />);
  const button = screen.getByRole("button", { name: "Change to blue" });
  const checkbox = screen.getByRole("checkbox", { name: "Check the button" });

  fireEvent.click(checkbox);

  expect(button).toHaveStyle({ backgroundColor: "grey" });

  fireEvent.click(checkbox);

  expect(button).toHaveStyle({ backgroundColor: "red" });
});

test("blue button is grey when checkbox checked", () => {
  render(<App />);
  const button = screen.getByRole("button", { name: "Change to blue" });
  const checkbox = screen.getByRole("checkbox", { name: "Check the button" });

  fireEvent.click(button);
  fireEvent.click(checkbox);

  expect(button).toHaveStyle({ backgroundColor: "grey" });

  fireEvent.click(checkbox);

  expect(button).toHaveStyle({ backgroundColor: "blue" });
});
