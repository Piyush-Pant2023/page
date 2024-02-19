let n=13;
arr=[];
while(n>=1){
    let p=n%2;
    n=Number.parseInt(n/2)
    arr.push(p)
    }
    r=arr.reverse()
    console.log(r.toString())

// find series .1,3,7, 15 ...
for(i=1;i<10;i++){
    console.log(2**i-1)
}