//Problem-01
function formatString(input: string, toUpper?: boolean = true):string{
    return toUpper? input.toUpperCase(): input.toLowerCase()
}

// problem-02

function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[]{
    return items.filter(item=> item.rating>=4)
}
