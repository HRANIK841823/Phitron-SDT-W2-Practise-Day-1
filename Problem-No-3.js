const numbers=[1,3,5,7,9,2,4,6,8,10,11,13,15,17,19,12,14,16,18,20]

const sort=(array)=>{
    for(var i=0;i<array.length;i++)
    {
        for(var j=i+1;j<array.length-1;j++)
        {
            if(array[i]>array[j])
            {
                const temp=array[i];
                array[i]=array[j];
                array[j]=temp;
            }
        }
    }
    return array;
}
const SortedArray=sort(numbers);
console.log(SortedArray);