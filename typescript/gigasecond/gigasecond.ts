class Gigasecond {
    private fromDateInMilliseconds: number

    constructor(from: Date) {
        this.fromDateInMilliseconds = from.getTime()
    }
    date(): Date {
        return new Date( this.fromDateInMilliseconds + Math.pow(10,12) )
    }
}

export default Gigasecond
