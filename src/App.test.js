import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Elyes Thabet's portfolio identity and primary work link", () => {
  window.history.pushState({}, "", "/");
  render(<App />);

  expect(
    screen.getByRole("heading", { name: /engineering systems that listen to the body/i })
  ).toBeInTheDocument();
  expect(screen.getByRole("link", { name: /explore selected work/i })).toHaveAttribute(
    "href",
    "/project"
  );
  const githubLinks = screen.getAllByRole("link", { name: /elyes thabet on github/i });
  expect(githubLinks).not.toHaveLength(0);
  githubLinks.forEach((link) => {
    expect(link).toHaveAttribute("href", "https://github.com/CodeSailor411");
  });
});

test.each([
  ["/project", /research and engineering built around real human signals/i],
  ["/about", /physiology, computation, and real-world constraints meet/i],
  ["/resume", /research experience, engineering practice, and the evidence behind the work/i],
])("renders the %s route", (path, heading) => {
  window.history.pushState({}, "", path);
  render(<App />);

  expect(screen.getByRole("heading", { level: 1, name: heading })).toBeInTheDocument();
});
