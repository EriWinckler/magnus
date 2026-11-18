import React, { act } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { UserProvider } from "./components/Context/UserContext";

// jsdom has no canvas, which particles-bg needs.
jest.mock("particles-bg", () => () => null);

globalThis.IS_REACT_ACT_ENVIRONMENT = true;

test("renders the site content that matches the current resume", () => {
  const container = document.createElement("div");
  document.body.appendChild(container);
  const root = createRoot(container);

  act(() => {
    root.render(
      <UserProvider>
        <App />
      </UserProvider>
    );
  });

  const text = container.textContent;
  [
    "Eridan Winckler",
    "Backend & Platform Engineer",
    "Uninter International",
    "B.S. in Software Engineering",
    "Law studies",
    "Pontifícia Universidade Católica do Paraná (PUCPR)",
    "Java",
    "Spring Boot",
    "Ansible",
    "Docker",
    "GitLab CI/CD",
    "AWS",
  ].forEach((expected) => expect(text).toContain(expected));
  [
    "Eri Winckler",
    "United States",
    "CareerDevs",
    "React, Java and Python",
    "Monkeytype",
    "On-line Classes Completed",
    "Pontifical",
  ].forEach((removed) => expect(text).not.toContain(removed));

  // The tagline also names these skills, so check the Skills section itself.
  const textsOf = (selector) =>
    Array.from(container.querySelectorAll(selector), (el) => el.textContent);
  expect(textsOf("#languages em")).toEqual([
    "Java",
    "Spring Boot",
    "Docker",
    "Ansible",
    "AWS",
    "GitLab CI/CD",
  ]);
  expect(
    Array.from(
      container.querySelectorAll("#languages .bar-expand"),
      (bar) => bar.style.width
    )
  ).toEqual(["95%", "90%", "80%", "80%", "80%", "70%"]);
  expect(textsOf("#certificates h6").map((t) => t.trim())).toEqual([
    "Model Context Protocol",
    "Claude Code in Action",
    "Building with the Claude API",
    "Agent Skills",
  ]);

  const hrefs = Array.from(container.querySelectorAll("a[href]"), (a) =>
    a.getAttribute("href")
  );
  expect(hrefs).toContain("https://www.linkedin.com/in/eridan-winckler");
  expect(hrefs.filter((h) => h.includes("449798169"))).toEqual([]);
  expect(hrefs.filter((h) => h.includes("instagram"))).toEqual([]);
  expect(
    hrefs.filter((h) => h.startsWith("https://verify.skilljar.com/"))
  ).toHaveLength(4);
  expect(
    hrefs.filter((h) => h.includes("1j88L68SdmxFCfw7gL0LCt7gj7YNQPZqP"))
  ).toHaveLength(1);

  act(() => root.unmount());
  container.remove();
});
