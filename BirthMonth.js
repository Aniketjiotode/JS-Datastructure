
let no_of_individuals=50
let birth_day = new Map()
console.log( "The birthday month and year of $no_of_individuals individuals are: ")
for( individual = 1; individual <= no_of_individuals; individual++ )
{
    let birth_month = Math.floor(Math.random()*12) + 1 
    let birth_year = Math.floor(Math.random()*2)  + 92 
    console.log( `individual ${individual} has birthday in month ${birth_month} year ${birth_year} `)
    birth_day.set(birth_month,individual+" "+birth_day.get(birth_month))
}
birth_day.forEach (function(value, key) {
    console.log(`The individuals who are having birthday in month ${key} are: `)
    console.log(value)
})
