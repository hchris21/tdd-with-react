import { beforeEach, describe, expect, test } from "vitest";
import { act, fireEvent, render, screen } from "@testing-library/react";
import App from "../App";

describe("To Do List", () => {
  beforeEach(() => {
    render(<App />);
  });

  test("renders the input field and the button to add a new to do item", () => {
    const input = screen.getByPlaceholderText("Add a new to do item");
    const button = screen.getByRole("button", { name: "Add" });

    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  test("renders the list of default to do items and the button to remove a to do item", () => {
    const listItem = screen.getByText("Walk the dog");
    const removeButton = screen.getByRole("button", { name: "X" });

    expect(listItem).toBeInTheDocument();
    expect(removeButton).toBeInTheDocument();
  });

  test("adds a new to do item to the list", () => {
    const input = screen.getByPlaceholderText("Add a new to do item");
    const button = screen.getByRole("button", { name: "Add" });

    act(() => {
      fireEvent.input(input, { target: { value: "Check Chris's blog" } });
      fireEvent.click(button);
    });

    const listItem = screen.getByText("Check Chris's blog");

    expect(listItem).toBeInTheDocument();
  });

  test("clears the input field after adding a new to do item", () => {
    const input = screen.getByPlaceholderText("Add a new to do item");
    const button = screen.getByRole("button", { name: "Add" });

    act(() => {
      fireEvent.input(input, { target: { value: "Check Chris's blog" } });
      fireEvent.click(button);
    });

    expect(input).not.toHaveValue();
  });

  test("removes a to do item from the list", () => {
    const removeButton = screen.getByRole("button", { name: "X" });

    act(() => {
      fireEvent.click(removeButton);
    });

    const listItem = screen.queryByText("Walk the dog");

    expect(listItem).not.toBeInTheDocument();
  });
});
