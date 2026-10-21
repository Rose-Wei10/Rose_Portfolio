import { render, screen, within } from "@testing-library/react";
import App from "./App";

beforeEach(() => {
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: jest
      .fn()
      .mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(),
        removeListener: jest.fn(),
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
  });
  global.IntersectionObserver = class {
    observe() {}
    unobserve() {}
    disconnect() {}
  } as unknown as typeof IntersectionObserver;
});
test("renders résumé-backed experience, projects, and accessible navigation", () => {
  render(<App />);
  expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
    "Rong Wei",
  );
  expect(screen.getByRole("heading", { name: "MehtA+" })).toBeInTheDocument();
  expect(
    screen.getByRole("heading", { name: "Interview Tracker" }),
  ).toBeInTheDocument();
  const navigation = screen.getByRole("navigation", {
    name: "Main navigation",
  });
  within(navigation)
    .getAllByRole("link")
    .forEach((link) => {
      const id = link.getAttribute("href")!.slice(1);
      expect(document.querySelectorAll(`[id="${id}"]`)).toHaveLength(1);
    });
  expect(screen.getByLabelText("Name")).toBeInTheDocument();
  expect(screen.getByLabelText("Email")).toBeInTheDocument();
  expect(screen.getByLabelText("Message")).toBeInTheDocument();
  expect(screen.queryByText(/95%/)).not.toBeInTheDocument();
  expect(document.querySelector('a[href*="your-demo"]')).toBeNull();
});
