enum ResistanceColors {
  Black = 0,
  Brown = 1,
  Red = 2,
  Orange = 3,
  Yellow = 4,
  Green = 5,
  Blue = 6,
  Violet = 7,
  Grey = 8,
  White = 9,
}

function capitalizeColor(color: string): string {
  return color.charAt(0).toUpperCase() + color.slice(1);
}

function isRecognizedColor(color: string): boolean {
  const colorKey = capitalizeColor(color)
  return Object.prototype.hasOwnProperty.call(ResistanceColors, colorKey)
}

function convertColorToNumber(color: string): number {
  const colorKey = capitalizeColor(color)

  return ResistanceColors[colorKey as keyof typeof ResistanceColors]
}

export function decodedValue(colors: string[]): number {
  try {
    const [firstColor, secondColor] = colors

    if (!isRecognizedColor(firstColor)) {
      throw new Error(`Invalid color argument for decodedValue: ${firstColor}`);
    }

    const firstColorValue: number = convertColorToNumber(firstColor)

    if (!isRecognizedColor(secondColor)) {
      return firstColorValue
    }
    const secondColorValue: number = convertColorToNumber(secondColor)

    return firstColorValue * 10 + secondColorValue

  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(`Error decoding color value: ${error.message}`);
    } else {
      console.error('Unknown error occurred');
    }
    return -1; // Return -1 to indicate an error occurred
  }
}
