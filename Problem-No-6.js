var friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom"];
let bigname=friends[0]
for(var i=0;i<friends.length-1;i++)
{
    const element=friends[i].length;
    if(element<friends[i+1].length)
    {
        bigname=friends[i+1];
    }
}
console.log(bigname);