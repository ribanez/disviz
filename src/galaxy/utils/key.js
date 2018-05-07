export default {
  isModifier,

  H: 72,
  L: 76,
  K: 75,
  Space: 32,
  '/': 191
};

function isModifier(e) {
  return e.altKey || e.ctrlKey || e.metaKey || e.shiftKey;
}
