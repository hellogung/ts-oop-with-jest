describe('Visibility', () => { 

    class Counter{

        // private counter: number = 0
        protected counter: number = 0

        
        public increment(): void {
            this.counter++
        }
        
        public getCounter():number{
            return this.counter
        }
    }

    class DoubleCounter extends Counter{
        public doubleCounter():void{
            this.counter += 2 
        }
    }

   it("Should support visibility", () => {
    const counter = new Counter()
    
    counter.increment()
    counter.increment()
    console.info(counter.getCounter())
    
   })

   it("Should support protected", () => {
    const counter2 = new DoubleCounter()
    counter2.increment()
    counter2.doubleCounter()
    console.info(counter2.getCounter)
   })
 })