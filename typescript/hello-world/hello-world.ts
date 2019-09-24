class HelloWorld {
  static hello(val?: string) {
    if (val) {
      return `Hello, ${val}!`;
    }
    return `Hello, World!`;
  }
}

export default HelloWorld;
