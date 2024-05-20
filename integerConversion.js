function integerConversion(int){
    let num = Number(int);
    let count = 0;

    while(num > 1){
        if(num % 2 === 1){
            num = num + 1;
            count++;
        }
        num = num / 2;
        count++;
    }
    return count;
}
console.log(integerConversion(15));