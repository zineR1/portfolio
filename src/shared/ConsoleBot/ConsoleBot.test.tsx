import userEvent from "@testing-library/user-event";
import ConsoleBot from "./ConsoleBot";
import { useAppStore } from "../../store";
import { initialData } from "../../constants";
import { render, screen } from "@testing-library/react";
import { describe, it, expect, beforeEach, vi } from "vitest";

vi.mock("../../store/useAppStore", () => ({
  useAppStore: vi.fn(),
}));

describe("ConsoleBot integration", () => {
  beforeEach(() => {
    (useAppStore as any).mockReturnValue({ user: initialData });
  });

  it("renders intro message", () => {
    render(<ConsoleBot />);
    const introButton = screen.getByRole("button", { name: /about me/i });
    expect(introButton).toBeInTheDocument();
  });

  it("renders the correct line when 'About Me' button is clicked", async () => {
    render(<ConsoleBot />);
    const user = userEvent.setup();

    const aboutMeButton = screen.getByRole("button", { name: /about me/i });
    await user.click(aboutMeButton);

    const output = await screen.findByText(
      /I'm a Frontend Engineer focused on building fast/i
    );
    expect(output).toBeInTheDocument();
  });

  it("renders tech stack when 'Tech Stack' button is clicked", async () => {
    render(<ConsoleBot />);
    const user = userEvent.setup();

    const techButton = screen.getByRole("button", { name: /tech stack/i });
    await user.click(techButton);

    const output = await screen.findByText(/Frontend: React/i);
    expect(output).toBeInTheDocument();
  });

  it("disables buttons after click", async () => {
    render(<ConsoleBot />);
    const user = userEvent.setup();

    const hobbiesButton = screen.getByRole("button", { name: /hobbies/i });
    expect(hobbiesButton).not.toBeDisabled();

    await user.click(hobbiesButton);
    expect(hobbiesButton).toBeDisabled();
  });
});
