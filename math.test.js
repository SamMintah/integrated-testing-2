const {sum, subtract,multiply, divide} =require('./math');

beforeAll(()=>{
    console.log("Before All test")
})

describe('Function',()=>{
    beforeEach(()=>{
        console.log("Before each")
    })
    it('should sum two numbers',()=>{
        expect(sum(2,3)).toBe(5);
    });

    it("should subtract two numbers",()=>{
        expect(subtract(5,3)).toBe(2)
    });
    it("should multiply two numbers", ()=>{
        expect(multiply(3,3)).toBe(9)
    });
    it("should divide two numbers",()=>{
        expect(divide(12,3)).toBe(4);
    });
    afterEach(()=>{
        console.log("after each")
    })
});

afterAll(()=>{
    console.log("After All test")
})
