class Bob {
  hey(comment: string) {
    let isShouting = !/[a-z]/.test(comment) && /[A-Z]/.test(comment);
    let isAsking =
      comment.includes("?") &&
      comment.charAt(comment.trimEnd().length - 1) === "?";
    let isSilent = comment.length < 1 || !/\S/.test(comment);

    if (isSilent) {
      return "Fine. Be that way!";
    }

    if (isShouting && isAsking) {
      return "Calm down, I know what I'm doing!";
    }

    if (isShouting) {
      return "Whoa, chill out!";
    }

    if (isAsking) {
      return "Sure.";
    }

    return "Whatever.";
  }
}

export default Bob;
