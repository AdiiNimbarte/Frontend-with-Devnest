function arrayV()
{
    var arr =function(input)
    {
        if(toString.call(input)==="[object Array]")
        return true;
        return false;};
    console.log(arr('w3resource'));
    console.log(arr([1,2,3,4]));
}
