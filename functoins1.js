function pallindrome(num){
    var temp = num;
    var reverse = 0;

    while(num>0){
        let digit = num%10;
        reverse = reverse*10 + digit;
        num = parseInt(num/10);

    }

    if(temp == reverse){
        console.log(temp+" is a pallindrome number")
    } else {
        console.log(temp+" is not a pallindrome number")
    }

}

pallindrome(1221)

function armstrong(num){
    var sum = 0;
    var temp = num

    for (i=num; i>0; i++){
        rem = num % 10;
        sum = sum + (rem*rem*rem)
        num = parseInt(num/10)
    }

    if (temp == sum){
        console.log(temp+"is a armstrong number")

    }

    else {
        console.log(temp+"is not a armstrong number")
    }
}

armstrong(153)