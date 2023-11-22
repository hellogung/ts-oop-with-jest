import {MathUtil} from "../src/math-util"

describe('Namespace', () => { 
    it("Should support Namespace", () => {
        console.log((MathUtil.sum(1,2,3,4,5)) * MathUtil.PI)
    })
 })