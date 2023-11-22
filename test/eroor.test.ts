describe('Error Handling', () => { 

    class ValidatioinError extends Error{
        constructor (public msg: string){
            super(msg)
        }
    }

    function doubleIt(value:number):number{
        if(value <= 0){
            throw new ValidatioinError("Nilai tidak boleh kurang dari sama dengan 0")
        }
        return value * 2
    }

    it("Should success of Error Handling", () => {
        expect(doubleIt(2)).toBe(4)
    })
 })