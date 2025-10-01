/* @vitest-environment jsdom */
import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import Modal from "./Modal";

vi.mock("@utils/hooks/useResponsive", () => ({
  useResponsive: vi.fn(() => ({
    isMobile: false,
    isTablet: false,
    isDesktop: true,
  })),
}));

describe("Modal", () => {
  it("renders dialog on desktop with title and content", () => {
    render(
      <Modal open={true} onClose={() => {}} title="Test Modal">
        Modal body
      </Modal>
    );
    expect(screen.getByText("Test Modal")).toBeInTheDocument();
    expect(screen.getByText("Modal body")).toBeInTheDocument();
  });

  it("does not render when closed", () => {
    render(
      <Modal open={false} onClose={() => {}} title="Hidden">
        Hidden content
      </Modal>
    );
    expect(screen.queryByText("Hidden")).not.toBeInTheDocument();
  });

  it("renders actions slot", () => {
    render(
      <Modal open={true} onClose={() => {}} actions={<button>OK</button>}>
        Content
      </Modal>
    );
    expect(screen.getByText("OK")).toBeInTheDocument();
  });
});
