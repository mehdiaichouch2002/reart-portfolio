import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

describe("App smoke test", () => {
  test("renders all main sections", () => {
    render(<App />);

    expect(screen.getByText(/hi, i'm mehdi aichouch/i)).toBeInTheDocument();
    expect(screen.getByText(/my portfolio/i)).toBeInTheDocument();
    expect(screen.getAllByText(/skills/i).length).toBeGreaterThan(0);
    expect(
      screen.getByRole("button", { name: /let's talk/i })
    ).toBeInTheDocument();
  });

  test("renders navigation with all section links", () => {
    render(<App />);

    for (const label of [/home/i, /about/i, /portfolio/i, /contact/i]) {
      expect(screen.getAllByText(label).length).toBeGreaterThan(0);
    }
  });
});

describe("Language switcher", () => {
  test("switches the UI to French", () => {
    render(<App />);

    fireEvent.click(screen.getAllByRole("button", { name: "FR" })[0]);

    expect(screen.getByText(/bonjour, je suis mehdi aichouch/i)).toBeInTheDocument();
  });
});

describe("Contact form validation", () => {
  test("shows an inline error for every empty field on submit", async () => {
    render(<App />);

    fireEvent.click(screen.getByRole("button", { name: /let's talk/i }));

    expect(await screen.findByText(/please enter your name/i)).toBeInTheDocument();
    expect(screen.getByText(/please enter a valid email address/i)).toBeInTheDocument();
    expect(screen.getByText(/please enter a message/i)).toBeInTheDocument();
  });

  test("shows an inline error for an invalid email", async () => {
    render(<App />);

    fireEvent.change(screen.getByLabelText(/enter your email/i), {
      target: { value: "not-an-email" },
    });

    expect(await screen.findByText(/please enter a valid email address/i)).toBeInTheDocument();
  });

  test("clears the field error once the user types", async () => {
    render(<App />);

    fireEvent.click(screen.getByRole("button", { name: /let's talk/i }));
    expect(await screen.findByText(/please enter your name/i)).toBeInTheDocument();

    fireEvent.change(screen.getByLabelText(/enter your name/i), {
      target: { value: "Jane" },
    });

    expect(screen.queryByText(/please enter your name/i)).not.toBeInTheDocument();
  });
});
