//Problem-01
function formatString(input: string, toUpper?: boolean = true):string{
    return toUpper? input.toUpperCase(): input.toLowerCase()
}

// Problem-02

function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[]{
    return items.filter(item=> item.rating>=4)
}

// Problem-3

function concatenateArrays<T>(...arrays: T[][]): T[]{
    let result:T[] = []
    arrays.forEach(array=>{
        array.forEach(item=>{
            result.push(item)
        })
    })
    return result;
}

