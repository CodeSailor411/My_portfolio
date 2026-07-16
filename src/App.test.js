import { render, screen } from "@testing-library/react";
import App from "./App";

jest.mock("./components/Particle", () => () => (
  <div data-testid="particle-field" aria-hidden="true" />
));
jest.mock("typewriter-effect", () => ({ options }) => (
  <span>{options.strings[0]}</span>
));
jest.mock("react-parallax-tilt", () => ({ children }) => <div>{children}</div>);
jest.mock("./components/About/About", () => () => <div>About page</div>);
jest.mock("./components/Projects/Projects", () => () => <div>Projects page</div>);
jest.mock("./components/Resume/ResumeNew", () => () => <div>Resume page</div>);

test("keeps the original illustrated home composition and navigation", () => {
  render(<App />);

  expect(
    screen.getByRole("heading", { name: /i'm elyes thabet/i })
  ).toBeInTheDocument();
  expect(
    screen.getByRole("img", {
      name: /biomedical engineering and software development illustration/i,
    })
  ).toBeInTheDocument();
  expect(
    screen.getByText(/biosignal processing, wearable ai, and embedded systems/i)
  ).toBeInTheDocument();
  expect(screen.getByRole("link", { name: /about/i })).toHaveAttribute(
    "href",
    "/about"
  );
  expect(screen.getByRole("link", { name: /projects/i })).toHaveAttribute(
    "href",
    "/project"
  );
  expect(screen.getByRole("link", { name: /resume/i })).toHaveAttribute(
    "href",
    "/resume"
  );
});
