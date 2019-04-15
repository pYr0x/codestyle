function HelloWorld({ greeting = 'hello', greeted = '"World"', silent = false, onMouseOver }) {
  if (!greeting) {
    return null;
  }

  // TODO: Don't use random in render
  const num = Math.floor(Math.random() * 1e7)
    .toString()
    .replace(/\.\d+/gi, '');
}
