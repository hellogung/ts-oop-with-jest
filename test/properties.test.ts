describe('Properties', () => { 

    class Customer{
        readonly id: number
        name: string
        age?: number

        constructor(id:number, name:string){
            this.id = id
            this.name = name

        }

        sayHello(name:string):void{
            console.info(`Hello My Name is ${name}`)
        }

    }

    it("Should can have properties", () => {
        const customer = new Customer(1,"Agung Gumelar")

        customer.age = 20

        console.info(customer.id)
        console.info(customer.name)
        console.info(customer.age)
        console.info(customer.sayHello("Agung Handoko"))
    })
 })