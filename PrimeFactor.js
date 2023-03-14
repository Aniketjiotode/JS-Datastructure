
function primeFactors(number)
{
    let n=number;
    let p = 2;
    console.log(`Primefactor of ${number}: `) 
    while(n > 1)
    {
        if(n % p == 0){
            console.log(p);
            n /= p;
        }
        else p++;
    }
}
let number = 278;
primeFactors(number);