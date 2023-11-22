describe('Static', () => { 

    class Configuration{
        static NAME: string = "Belajar Typescript OOP"
        static VERSION: number = 1.0
        static AUTHOR: string = "Agung Gumelar"
    }

    class MathUtil{
        static sum(...values: number[]):number{
            let total = 0
            for(let value of values){
                total += value
            }

            return total
        }
    }

    it("Should support static properties", () => {
        console.info(Configuration.NAME)
        console.info(Configuration.VERSION)
        console.info(Configuration.AUTHOR)
    })

    it("Should SUM", () => {
        expect(MathUtil.sum(1,2,3)).toBe(6)
    })
 })