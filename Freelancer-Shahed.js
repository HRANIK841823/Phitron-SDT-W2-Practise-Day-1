const monthlySavings=(array,living_cost)=>{
    if (!Array.isArray(array) || typeof living_cost !== 'number') 
    {
        console.log("Invalid input");
        return;
    }
    let sum=0;
    for(var i=0;i<array.length;i++)
    {
        if(array[i]>=3000)
        {
            var tax=(array[i]*20)/100;
            var after_tax=3000-tax;
            sum=sum+after_tax;
        }
        else{
            sum=sum+array[i];
        }
    }
    const savings=sum-living_cost;
    if(savings>=0)
    {
        console.log(savings);
    }
    else{
        console.log("earn more");
    }
}
const month=monthlySavings([1000,2000,3000],5400);