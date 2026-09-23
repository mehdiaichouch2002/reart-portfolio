import { render, screen, fireEvent, within } from "@testing-library/react";
import App from "./App";

describe("App smoke test", () => {
  test("renders all main sections", () => {
    render(<App />);

    expect(
      screen.getByRole("heading", { level: 1, name: /i build magento 2 stores/i })
    ).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /^work$/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /^skills$/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /send message/i })).toBeInTheDocument();
  });

  test("renders navigation with all section links", () => {
    render(<App />);

    for (const label of [/experience/i, /work/i, /skills/i, /contact/i]) {
      expect(screen.getAllByText(label).length).toBeGreaterThan(0);
    }
  });

  test("lists the live client stores in the hero", () => {
    render(<App />);

    for (const store of [/carhartt wip/i, /anita/i, /edwin/i]) {
      expect(screen.getAllByRole("link", { name: store }).length).toBeGreaterThan(0);
    }
  });
});

describe("Language switcher", () => {
  test("switches the UI to French", () => {
    render(<App />);

    fireEvent.click(screen.getAllByRole("button", { name: "FR" })[0]);

    expect(
      screen.getByRole("heading", { level: 1, name: /je développe des boutiques magento 2/i })
    ).toBeInTheDocument();
  });
});

describe("Projects", () => {
  test("shows all other projects on demand", () => {
    render(<App />);

    const showAll = screen.getByRole("button", { name: /show all \d+ projects/i });
    fireEvent.click(showAll);

    expect(screen.getByRole("button", { name: /show fewer/i })).toBeInTheDocument();
    expect(screen.getByText("Portfolio")).toBeInTheDocument();
  });
});

describe("Resume modal", () => {
  test("opens with a role choice and download buttons", () => {
    render(<App />);

    fireEvent.click(screen.getByRole("button", { name: /download resume/i }));

    const dialog = screen.getByRole("dialog", { name: /download my resume/i });
    expect(within(dialog).getByRole("radio", { name: /magento 2/i })).toBeInTheDocument();
    expect(within(dialog).getByRole("button", { name: /english \(pdf\)/i })).toBeInTheDocument();
  });
});

describe("Contact form validation", () => {
  test("shows an inline error for every empty field on submit", async () => {
    render(<App />);

    fireEvent.click(screen.getByRole("button", { name: /send message/i }));

    expect(await screen.findByText(/enter your name/i)).toBeInTheDocument();
    expect(screen.getByText(/enter a valid email address/i)).toBeInTheDocument();
    expect(screen.getByText(/enter a message/i)).toBeInTheDocument();
  });

  test("shows an inline error for an invalid email", async () => {
    render(<App />);

    fireEvent.change(screen.getByLabelText(/^email$/i), {
      target: { value: "not-an-email" },
    });

    expect(await screen.findByText(/enter a valid email address/i)).toBeInTheDocument();
  });

  test("clears the field error once the user types", async () => {
    render(<App />);

    fireEvent.click(screen.getByRole("button", { name: /send message/i }));
    expect(await screen.findByText(/enter your name/i)).toBeInTheDocument();

    fireEvent.change(screen.getByLabelText(/^name$/i), {
      target: { value: "Jane" },
    });

    expect(screen.queryByText(/enter your name/i)).not.toBeInTheDocument();
  });
});
