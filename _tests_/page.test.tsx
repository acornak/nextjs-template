// __tests__/Home.test.tsx
import React from "react";

import { render, screen } from "@testing-library/react";
import Home from "../app/page";

describe("Home", () => {
	it("renders the main content", () => {
		render(<Home />);
		const mainElement = screen.getByRole("main");
		expect(mainElement).toBeInTheDocument();
	});

	it("renders the initial instructions", () => {
		render(<Home />);
		const codeElement = screen.getByText(/app\/page.tsx/i);
		expect(codeElement).toBeInTheDocument();
	});

	it("renders the Vercel link", () => {
		render(<Home />);
		const vercelLink = screen.getByRole("link", {
			name: /By/i,
		});
		expect(vercelLink).toHaveAttribute(
			"href",
			expect.stringContaining("vercel.com"),
		);
	});

	it("renders the Next.js logo", () => {
		render(<Home />);
		const nextLogo = screen.getByAltText("Next.js Logo");
		expect(nextLogo).toBeInTheDocument();
	});

	it("renders the documentation link", () => {
		render(<Home />);
		const docsLink = screen.getByRole("link", {
			name: /Docs/i,
		});
		expect(docsLink).toHaveAttribute(
			"href",
			expect.stringContaining("nextjs.org/docs"),
		);
	});

	it("renders the learn link", () => {
		render(<Home />);
		const learnLink = screen.getByRole("link", {
			name: /Learn/i,
		});
		expect(learnLink).toHaveAttribute(
			"href",
			expect.stringContaining("nextjs.org/learn"),
		);
	});

	it("renders the templates link", () => {
		render(<Home />);
		const templatesLink = screen.getByRole("link", {
			name: /Templates/i,
		});
		expect(templatesLink).toHaveAttribute(
			"href",
			expect.stringContaining("vercel.com/templates"),
		);
	});

	it("renders the deploy link", () => {
		render(<Home />);
		const deployLink = screen.getByRole("link", {
			name: /Deploy/i,
		});
		expect(deployLink).toHaveAttribute(
			"href",
			expect.stringContaining("vercel.com/new"),
		);
	});
});
