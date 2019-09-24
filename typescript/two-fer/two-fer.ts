class TwoFer {
  public static twoFer(name?: string): string {
    // Your code here
    if (name) {
      return `One for ${name}, one for me.`;
    }

    return "One for you, one for me.";
  }
}

export default TwoFer;
