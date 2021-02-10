export default class Words {
    count(msg: string): Map<string, string>{
        const count = new Map()
        const words = msg.trim().split(/[\s\n\t]/).filter( word => word.length )
        words.forEach(word => {
            word = word.toLowerCase()
            if (count.has(word)) count.set(word, count.get(word) + 1)
           else count.set(word, 1)
        })
        return count
    }
}