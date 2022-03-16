import { render, screen } from "@testing-library/react";
import App from "./App";
import { Button } from "./components/Button";

import { api } from "./services/api";
import * as endpoints from "./utils/endpoints";

// Render Page
test("renders Home in App", () => {
  render(<App />);
  const linkElement = screen.getByText(/registered/i);
  expect(linkElement).toBeInTheDocument();
});

// Render Component
test("renders Item component", () => {
  render(<Button id="btnGoBack">Go Back</Button>);
  const itemElement = screen.getByText(/Go Back/i);
  expect(itemElement).toBeInTheDocument();
});

// API Test
test("getting companies from api", async () => {
  const companies = await api.get(endpoints.company);
  expect(companies.data?.length).toBeGreaterThan(0);
});

test("getting numbers from api", async () => {
  const companies = await api.get(endpoints.number);
  expect(companies.data?.length).toBeGreaterThan(0);
});
