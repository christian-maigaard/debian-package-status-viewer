const removeParentheses = (text) => {
  return text.replace(/ *\([^)]*\) */g, "");
};

module.exports = { removeParentheses };
