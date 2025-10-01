/* @vitest-environment jsdom */
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Icon from "./Icon";

describe("Icon", () => {
  it("renders icon with src", () => {
    render(<Icon src="/test.svg" alt="test icon" />);
    const img = screen.getByAltText("test icon");
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("src", "/test.svg");
  });

  it("applies medium size by default", () => {
    render(<Icon src="/icon.svg" alt="icon" />);
    const img = screen.getByAltText("icon");
    expect(img).toHaveAttribute("width", "24");
    expect(img).toHaveAttribute("height", "24");
  });

  it("applies small size", () => {
    render(<Icon src="/icon.svg" size="small" alt="small" />);
    const img = screen.getByAltText("small");
    expect(img).toHaveAttribute("width", "16");
  });

  it("accepts custom numeric size", () => {
    render(<Icon src="/icon.svg" size={40} alt="custom" />);
    const img = screen.getByAltText("custom");
    expect(img).toHaveAttribute("width", "40");
  });
});
