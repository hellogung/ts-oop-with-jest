describe('Super Constructor', () => { 
    class Person{
        name: string

        constructor(name: string){
            this.name = name
        }
    }

    class Employee extends Person{
        department: string

        constructor(name: string, department: string){
            super(name)
            this.department = department
        }

        sayHello(){
            console.info(`Hello my name is ${this.name} from ${this.department} Department`)
        }
    }

    it("Should support super constructor", () => {
        const agung = new Employee("Agung Gumelar", "Pengembangan Bisnis")
        agung.sayHello()

    })
 }) 