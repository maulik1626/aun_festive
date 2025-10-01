/* @vitest-environment jsdom */
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Card from "./Card";

describe("Card", () => {
  it("renders children", () => {
    render(<Card>Card content</Card>);
    expect(screen.getByText("Card content")).toBeInTheDocument();
  });

  it("renders actions slot", () => {
    render(<Card actions={<button>Save</button>}>Content</Card>);
    expect(screen.getByText("Save")).toBeInTheDocument();
    expect(screen.getByText("Content")).toBeInTheDocument();
  });

  it("renders without actions", () => {
    render(<Card>No actions</Card>);
    expect(screen.getByText("No actions")).toBeInTheDocument();
  });
});
