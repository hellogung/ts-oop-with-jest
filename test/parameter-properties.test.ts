describe('Parameter Properties', () => { 
    class Person{
        constructor(public name: string){
            console.info(`Halo my name is ${name}`)
        }
    }
    it("Should Support Parameter Properties", () => {
        const agung = new Person("Agung Gumelar")

        agung.name = "Millati Hanifa Syahidah"

        console.info(agung.name)
    })
 })