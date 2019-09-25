class SpaceAge {
  seconds: number = 0;
  earthYears: number = 0;

  private rounder(float: number): number {
    return Math.round(float * 100) / 100;
  }

  constructor(age: number) {
    this.seconds = age;
    this.earthYears = age / 31557600;
  }

  onEarth(): number {
    return this.rounder(this.earthYears);
  }

  onMercury(): number {
    return this.rounder(this.earthYears / 0.2408467);
  }

  onVenus(): number {
    return this.rounder(this.earthYears / 0.61519726);
  }

  onMars(): number {
    return this.rounder(this.earthYears / 1.8808158);
  }

  onJupiter(): number {
    return this.rounder(this.earthYears / 11.862615);
  }

  onSaturn(): number {
    return this.rounder(this.earthYears / 29.447498);
  }

  onUranus(): number {
    return this.rounder(this.earthYears / 84.016846);
  }

  onNeptune(): number {
    return this.rounder(this.earthYears / 164.79132);
  }
}

export default SpaceAge;
