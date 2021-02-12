enum Colors {
  Black,
  Brown,
  Red,
  Orange,
  Yellow,
  Green,
  Blue,
  Violet,
  Grey,
  White
}
export class ResistorColor {
  private colors: string[]

  constructor(colors: string[]) {
    if (colors.length < 2) throw 'At least two colors need to be present'
    this.colors = colors
  }
  value = ():number => {
    let val = ''
    for (let i = 0; i < 2; i++){
      const resistorColorName = this.colors[i].charAt(0).toUpperCase() + this.colors[i].slice(1)
      val += Colors[resistorColorName as keyof typeof Colors]
    }
    return parseInt(val)
  }
}
