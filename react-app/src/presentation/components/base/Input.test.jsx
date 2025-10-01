/* @vitest-environment jsdom */
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Input from "./Input";

describe("Input", () => {
  it("renders with placeholder", () => {
    render(<Input placeholder="enter name" />);
    expect(screen.getByPlaceholderText("enter name")).toBeInTheDocument();
  });

  it("renders helper text", () => {
    render(<Input helperText="Required field" />);
    expect(screen.getByText("Required field")).toBeInTheDocument();
  });

  it("shows error state", () => {
    render(<Input error helperText="Error message" />);
    expect(screen.getByText("Error message")).toBeInTheDocument();
  });

  it("supports different input types", () => {
    const { container } = render(<Input type="email" placeholder="email" />);
    const input = container.querySelector('input[type="email"]');
    expect(input).toBeInTheDocument();
  });
});
