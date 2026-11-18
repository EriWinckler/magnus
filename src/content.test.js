import { describe, expect, test } from "vitest";
import { RESUME_URLS, VARIANTS, selectVariant } from "./content";

const DEFAULT_URL = RESUME_URLS.default;

describe("selectVariant", () => {
  test.each([
    ["?cv=backend", "backend"],
    ["?cv=PLATFORM", "platform"],
    ["?cv=Platform&utm_source=linkedin", "platform"],
    ["?utm_source=x&cv=backend", "backend"],
  ])("%s gives the %s copy", (search, key) => {
    const variant = selectVariant(search);
    expect(variant.key).toBe(key);
    expect(variant.headline).toBe(VARIANTS[key].headline);
    expect(variant.summary).toBe(VARIANTS[key].summary);
  });

  test.each(["", "?cv=bogus", "?cv=", "?lang=pt", "?cv=__proto__", "?cv=constructor", "?cv=toString"])(
    "%j gives the default copy",
    (search) => {
      const variant = selectVariant(search);
      expect(variant.key).toBe("default");
      expect(variant.headline).toBe(VARIANTS.default.headline);
      expect(variant.resumeUrl).toBe(DEFAULT_URL);
    }
  );

  test("a variant without its own resume URL falls back to the default resume", () => {
    expect(selectVariant("?cv=backend", { ...RESUME_URLS, backend: null }).resumeUrl).toBe(
      DEFAULT_URL
    );
  });

  test("a variant with its own resume URL uses it", () => {
    const urls = { ...RESUME_URLS, platform: "https://example.com/platform.pdf" };
    expect(selectVariant("?cv=platform", urls).resumeUrl).toBe("https://example.com/platform.pdf");
  });
});
