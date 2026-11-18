import { act } from "react";
import { createRoot } from "react-dom/client";
import { afterEach, describe, expect, test, vi } from "vitest";
import App from "./App";
import { CONTENT, LINKS, RESUME_URLS, VARIANTS } from "./content";

// jsdom has no canvas, which particles-bg needs.
vi.mock("particles-bg", () => ({ default: () => <div data-testid="particles" /> }));

globalThis.IS_REACT_ACT_ENVIRONMENT = true;

let root;
let container;

function render(path = "/") {
  window.history.replaceState({}, "", path);
  container = document.createElement("div");
  document.body.appendChild(container);
  root = createRoot(container);
  act(() => root.render(<App />));
  return container;
}

afterEach(() => {
  act(() => root.unmount());
  container.remove();
  window.history.replaceState({}, "", "/");
});

const texts = (el, selector) =>
  Array.from(el.querySelectorAll(selector), (node) => node.textContent.trim());

describe("default page", () => {
  test("shows the resume copy in recruiter order", () => {
    const page = render();
    const text = page.textContent;

    [
      CONTENT.name,
      VARIANTS.default.headline,
      CONTENT.location,
      VARIANTS.default.summary,
      CONTENT.contactLocation,
      CONTENT.experience.employer,
      CONTENT.experience.employerLocation,
      CONTENT.contactText,
      ...CONTENT.experience.roles.flatMap((role) => [role.title, role.dates, ...role.bullets]),
      ...CONTENT.skillGroups.flatMap((group) => [group.label, group.items]),
      ...CONTENT.education.flatMap((entry) => [entry.school, entry.course, entry.years]),
    ].forEach((expected) => expect(text).toContain(expected));

    expect(Array.from(page.querySelectorAll("main > section"), (s) => s.id)).toEqual([
      "about",
      "experience",
      "skills",
      "education",
      "contact",
    ]);
    expect(texts(page, "nav li a")).toEqual(["About", "Experience", "Skills", "Education", "Contact"]);
    expect(page.querySelectorAll("h1")).toHaveLength(1);
  });

  test("shows the fixed labels, headings and accessible names", () => {
    const page = render();
    const text = page.textContent;
    [
      "About Me",
      "Contact Details",
      "Experience",
      "Skills",
      "Also worked with",
      "Education & Certifications",
      "Education",
      "Certifications",
      "Contact",
      "Resume",
      "Download Resume",
      "Email me",
      "LinkedIn",
      "GitHub",
      "Anthropic Academy",
      "Completed in Apr 2026",
      "Completed in Mar 2026",
      "Ovitas Inc. Burlington, MA, USA (fully remote)",
      `\u00a9 ${new Date().getFullYear()} Eridan Winckler`,
    ].forEach((expected) => expect(text).toContain(expected));
    expect(page.querySelector('a[href="#home"] img').alt).toBe("Eridan Winckler, home");
    expect(page.querySelector("#about img").alt).toBe("Eridan Winckler");
    ["Scroll to About", "Back to top", "Menu", "LinkedIn", "GitHub"].forEach((label) =>
      expect(page.querySelector(`[aria-label="${label}"]`)).not.toBeNull()
    );
  });

  // Every visible string, so a change to any copy in src/content.js has to be reviewed here.
  test("page text matches the reviewed copy", () => {
    expect(render().textContent).toMatchSnapshot();
  });

  test("never shows removed, invented or private text", () => {
    const text = render().textContent;
    [
      "United States",
      "CareerDevs",
      "Eri Winckler",
      "React, Java and Python",
      "Monkeytype",
      "Pontifical",
      "On-line Classes Completed",
      "Built and maintained",
      "Seeking",
      "C2C",
      "1099",
      "Would you like to work with me",
      "—", // em dash
      "–", // en dash
    ].forEach((removed) => expect(text).not.toContain(removed));
    // No phone numbers of any shape.
    expect(text).not.toMatch(/\+\d{1,3}[\s-]?\d{2,3}[\s-]\d{3,5}-\d{4}/);
    expect(text).not.toMatch(/\b\d{3}-\d{4}\b/);
  });

  test("shows the skill bars Eridan rated, in order, as meters", () => {
    const meters = Array.from(render().querySelectorAll("#skills [role=meter]"));
    expect(
      meters.map((meter) => [
        document.getElementById(meter.getAttribute("aria-labelledby")).textContent,
        Number(meter.getAttribute("aria-valuenow")),
      ])
    ).toEqual([
      ["Java", 95],
      ["Spring Boot", 90],
      ["GitLab CI/CD", 85],
      ["Linux", 85],
      ["Docker", 80],
      ["Ansible", 80],
      ["AWS", 80],
      ["SQL", 80],
    ]);
  });

  test("links to the resume, profiles and verifiable certificates", () => {
    const page = render();
    const hrefs = Array.from(page.querySelectorAll("a[href]"), (a) => a.getAttribute("href"));
    expect(hrefs.filter((h) => h === RESUME_URLS.default)).toHaveLength(2);
    expect(hrefs).toContain(LINKS.linkedin);
    expect(hrefs).toContain(LINKS.github);
    expect(hrefs).toContain(`mailto:${LINKS.email}`);
    expect(hrefs.filter((h) => h.startsWith("https://verify.skilljar.com/"))).toHaveLength(4);
    expect(texts(page, "#education h4 a")).toEqual(CONTENT.certifications.map((c) => c.title));
    expect(hrefs.filter((h) => h.includes("instagram"))).toEqual([]);
  });

  test("every icon-only link has an accessible name", () => {
    const page = render();
    Array.from(page.querySelectorAll("a"))
      .filter((a) => a.textContent.trim() === "")
      .forEach((a) =>
        expect(a.getAttribute("aria-label") || a.querySelector("img[alt]")?.alt).toBeTruthy()
      );
  });

  test("shows the particles hero when motion is allowed", () => {
    expect(render().querySelector("[data-testid=particles]")).not.toBeNull();
  });
});

test("?cv=platform switches the headline and summary", () => {
  const text = render("/?cv=platform").textContent;
  expect(text).toContain(VARIANTS.platform.headline);
  expect(text).toContain(VARIANTS.platform.summary);
  expect(text).not.toContain(VARIANTS.default.headline);
});

test("?cv=platform page text matches the reviewed copy", () => {
  expect(render("/?cv=platform").textContent).toMatchSnapshot();
});

test("?cv=backend page text matches the reviewed copy", () => {
  expect(render("/?cv=backend").textContent).toMatchSnapshot();
});

test("reduced motion removes the particles", () => {
  const original = window.matchMedia;
  window.matchMedia = (query) => ({
    matches: query.includes("reduce"),
    media: query,
    addEventListener() {},
    removeEventListener() {},
  });
  try {
    expect(render().querySelector("[data-testid=particles]")).toBeNull();
  } finally {
    window.matchMedia = original;
  }
});
