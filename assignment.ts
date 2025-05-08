//Problem-01
function formatString(input: string, toUpper: boolean = true):string{
    return toUpper? input.toUpperCase(): input.toLowerCase()
}

// Problem-02

function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[]{
    return items.filter(item=> item.rating>=4)
}

// Problem-03

function concatenateArrays<T>(...arrays: T[][]): T[]{
    let result:T[] = []
    arrays.forEach(array=>{
        array.forEach(item=>{
            result.push(item)
        })
    })
    return result
}

// Problem-04

class Vehicle{
    private make: string
    private year: number
  
    constructor(make: string, year: number){
      this.make = make
      this.year = year
    }
  
    public getInfo(): string{
      return `Make: ${this.make}, Year: ${this.year}`
    }
  }
  
  class Car extends Vehicle {
    private model: string
  
    constructor(make: string, year: number, model: string){
      super(make, year)
      this.model = model
    }
  
    public getModel(): string{
      return `Model: ${this.model}`
    }
  }


//   Problem-05

function processValue(value: string | number): number{
    if(typeof value === 'string'){
        return value.length
    }else{
        return value *2
    }
}

// problem-06

interface Product{
    name: string;
    price: number;
  }
  
  function getMostExpensiveProduct(products: Product[]): Product | null{
    if (products.length === 0){
      return null
    }
  
    let mostExpensive = products[0]
  
    for (const product of products){
      if (product.price > mostExpensive.price){
        mostExpensive = product
      }
    }
    return mostExpensive
  }

//   Problem-07

enum Day{
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
  }
  
  function getDayType(day: Day): string{
    if (day === Day.Saturday || day === Day.Sunday) {
      return "Weekend"
    }
    return "Weekday"
  }

//   Problem-08

async function squareAsync(n: number): Promise<number>{
    if (n < 0) {
      throw new Error("Negative number not allowed")
    }
  
    return new Promise((resolve) =>{
      setTimeout(() =>{
        resolve(n * n)
      }, 1000)
    })
  }




