describe('Inheritance', () => { 
    class Employee{
        name: string

        constructor(name: string){
            this.name = name
        }
    }

    class Manager extends Employee{

    }

    class Director extends Employee{

    }

    it("Should support inheritance", () => {
        const employee = new Employee("Agung Gumelar")
        const manager = new Manager("Desy")
        const director = new Director("Agung Pujo Winarko")

        console.info(employee, manager, director)
    })
 })