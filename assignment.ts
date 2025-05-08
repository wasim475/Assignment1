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
    return result;
}

// Problem-04

class Vehicle{
    private make: string;
    private year: number;
  
    constructor(make: string, year: number){
      this.make = make;
      this.year = year;
    }
  
    public getInfo(): string{
      return `Make: ${this.make}, Year: ${this.year}`;
    }
  }
  
  class Car extends Vehicle {
    private model: string;
  
    constructor(make: string, year: number, model: string){
      super(make, year);
      this.model = model;
    }
  
    public getModel(): string{
      return `Model: ${this.model}`;
    }
  }


//   Problem-05

function processValue(value: string | number): number{
    if(typeof value === 'string'){
        return value.length;
    }else{
        return value *2
    }
}

