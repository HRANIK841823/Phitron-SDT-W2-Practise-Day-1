var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];
const unique_array=[];
for(var i=0;i<numbers.length;i++)
{
    var paichi=false;
    for(var j=i+1;j<numbers.length-1;j++)
    {
        if(numbers[i]==numbers[j])
        {
            paichi=true;
        }
    }
    if(paichi==false)
    {
        unique_array.push(numbers[i]);
    }
}
console.log(unique_array);