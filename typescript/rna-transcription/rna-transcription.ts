class Transcriptor {
  toRna(sequence: string): string {
    let complementSequence = "";
    for (let nucleotide of sequence) {
      if (nucleotide in this.complements) {
        complementSequence += this.complements[nucleotide];
        continue;
      } else {
        throw Error("Invalid input DNA.");
      }
    }
    return complementSequence;
  }

  complements: { [nucleotide: string]: string } = {
    G: "C",
    C: "G",
    T: "A",
    A: "U"
  };
}

export default Transcriptor;
