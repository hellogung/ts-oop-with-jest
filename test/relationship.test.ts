describe('Relationship', () => { 
    class Employee{
        constructor(public name: string){

        }
    }

    class Manager{
        constructor(public name: string){

        }
    }

    it("Should support Relationship Class", () => {
        const agung: Employee = new Manager("Agung Gumelear") // Disarankan tidak menggunakan fitur ini, karena akan membingungka bagi programer
        console.info(agung.name)
    })
 })