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
    screen.getByRole("heading", { name: "Career Path" }),
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
  expect(screen.getByText("App Development Mentor (Contract)")).toBeInTheDocument();
  expect(screen.getByText("Master of Computer Science")).toBeInTheDocument();
  expect(screen.getByRole("link", { name: /Download résumé/ })).toHaveAttribute("href", "/Rong_Resume.pdf");
  expect(screen.getByRole("link", { name: /Download résumé/ })).toHaveAttribute("download");
  screen.getAllByRole("link", { name: /LinkedIn/ }).forEach((link) => {
    expect(link).toHaveAttribute("href", "https://www.linkedin.com/in/rong-wei10/");
  });
  expect(screen.getByRole("link", { name: /weir0210@gmail.com/ })).toHaveAttribute("href", "mailto:weir0210@gmail.com");
  expect(screen.queryByRole("textbox")).not.toBeInTheDocument();
  const cards = document.querySelectorAll(".project-card");
  expect(Array.from(cards, (card) => card.querySelector("h3")?.textContent)).toEqual([
    "Career Path", "Weight Tracker – Forma", "Anniversary Report Tool – GeoEngineers", "Academic World Dashboard",
  ]);
  cards.forEach((card) => {
    const details = card.querySelector("details")!;
    expect(details).not.toHaveAttribute("open");
    expect(details.querySelector("summary")).toHaveAccessibleName(/project details/);
    expect(details.querySelectorAll("li").length).toBeGreaterThan(0);
    expect(card.querySelector(".tags")).not.toBeNull();
  });
  expect(screen.queryByText(/95%/)).not.toBeInTheDocument();
  expect(document.querySelector('a[href*="your-demo"]')).toBeNull();
});
