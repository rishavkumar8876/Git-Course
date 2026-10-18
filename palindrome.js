function palindrome(){
    let n=121
    let num=n

    let rev=0;
    while(num>0)
    {
        let digit=num%10;
        rev=(rev*10)+digit;
        num=Math.floor(num/10);
    }
    if(rev===n)
    {
        console.log("palindrome Number")
    }
    else{
        console.log("Not a palindrome Number");
    }
}

palindrome()