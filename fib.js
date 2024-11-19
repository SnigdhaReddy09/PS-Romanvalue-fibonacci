// 1
num="MXVIV"
roman={"I":1,"V":5,"X":10,"L":50,"C":100,"D":500,"M":1000}
sum=0
i=0
while(i<num.length){
    x=num[i]
    y=num[i+1]
    if(i<num.length-1){
        if(roman[x]>=roman[y]){
            sum=sum+roman[x]
        }else{
            sum+=roman[y]-roman[x]
            i++
        }
    }else{
        sum+=roman[x]
    }
    i++
}
console.log(sum)

// 2
n=7
a=0,b=1,res="",sum=0
for(i=1;i<=n;i++){
    if(i!=n){
    res+=a+"+"
    }
    else{
    res+=a+"="
    }
    sum+=a
    c=a+b
    a=b
    b=c
}
console.log(res+sum)

// 3
num = prompt("Enter a number:") //4311
fibsum = 0
for (let j of num) { 
    a = 0, b = 1
    while (a < j) {
        let c = a + b;
        a = b;
        b = c;
        if (a == j) { 
            fibsum += Number(j);
            break;
        }
    }
}
console.log(fibsum);