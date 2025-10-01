/* @vitest-environment jsdom */
import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import Text from "./Text";

vi.mock("@utils/hooks/useResponsiveValue", () => ({
  useResponsiveValue: vi.fn((val) => val.desktop || val),
}));

describe("Text", () => {
  it("renders body text by default", () => {
    render(<Text>Hello World</Text>);
    expect(screen.getByText("Hello World")).toBeInTheDocument();
  });

  it("renders different variants", () => {
    render(<Text variant="h1">Heading</Text>);
    expect(screen.getByText("Heading")).toBeInTheDocument();
  });

  it("applies custom color", () => {
    render(<Text color="#FF0000">Colored</Text>);
    const el = screen.getByText("Colored");
    expect(el).toHaveStyle({ color: "#FF0000" });
  });
});
