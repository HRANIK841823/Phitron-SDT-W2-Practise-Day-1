const year=prompt("Enter a Year");
if(year%400==0)
{
    console.log(year+" is a Leap Year")
}
else if(year%4==0 && year%100!=0)
{
    console.log(year+" is a Leap Year")
}
else{
    console.log(year+" is not Leap Year")
}