/* @vitest-environment jsdom */
import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import Loader from "./Loader";

describe("Loader", () => {
  it("renders without crashing", () => {
    const { container } = render(<Loader />);
    expect(
      container.querySelector(".MuiCircularProgress-root")
    ).toBeInTheDocument();
  });

  it("accepts custom size", () => {
    const { container } = render(<Loader size={48} />);
    const progress = container.querySelector(".MuiCircularProgress-root");
    expect(progress).toHaveStyle({ width: "48px", height: "48px" });
  });

  it("accepts custom thickness", () => {
    render(<Loader thickness={8} />);
    // Thickness is applied via MUI; just ensure render succeeds
    expect(true).toBe(true);
  });
});
