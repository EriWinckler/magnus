// jsdom has no window.matchMedia; default to "no reduced motion". Tests can override it.
window.matchMedia = (query) => ({
  matches: false,
  media: query,
  addEventListener() {},
  removeEventListener() {},
});
