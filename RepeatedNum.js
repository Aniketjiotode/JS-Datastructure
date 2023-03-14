let arr=[]
console.log("Repeated number between 0 to 100")
for(i=1;i<=100;i++){
    let first=i%10
    let second=Math.floor(i/10)
    if(first==second){
        console.log(i)
    }
}