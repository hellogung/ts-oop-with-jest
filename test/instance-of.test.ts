describe('Instance Of', () => { 
    class Manager{

    }

    class Employee{

    }

    const budi = new Manager()
    const eko = new Employee()
   
    it("Should support Instance Of", () => {
        expect(budi instanceof Manager).toBe(true)
        expect(budi instanceof Employee).toBe(false)

        expect(eko instanceof Manager).toBe(false)
        expect(eko instanceof Employee).toBe(true)
    })
 })