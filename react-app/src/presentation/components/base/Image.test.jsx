/* @vitest-environment jsdom */
import { describe, it, expect } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import { act } from "react";
import Image from "./Image";

describe("Image", () => {
  it("renders with src and alt", () => {
    render(<Image src="/test.jpg" alt="test" />);
    const img = screen.getByAltText("test");
    expect(img).toBeInTheDocument();
  });

  it("shows placeholder on error", async () => {
    render(<Image src="/broken.jpg" alt="broken" />);
    const img = screen.getByAltText("broken");
    img.dispatchEvent(new Event("error"));
    await waitFor(() => {
      expect(img.src).toContain("aun_festivals_img_placeholder.svg");
    });
  });

  it("transitions opacity on load", () => {
    render(<Image src="/valid.jpg" alt="valid" />);
    const img = screen.getByAltText("valid");
    expect(img).toHaveStyle({ opacity: "0.5" });
    act(() => {
      img.dispatchEvent(new Event("load"));
    });
    expect(img).toHaveStyle({ opacity: "1" });
  });
});
