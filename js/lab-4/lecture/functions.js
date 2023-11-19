const filtergreaterThanValue=function(array,comapre_value){//varibles
    // array=function(){}
    let result=[];
    for(let index in array)
    {
        if(array[index]>comapre_value)
        result.push(array[index]);
    }

    return result;
}



// -------------- Eman Developer
const filter=function(array,condition_function)// callback function(condition_function)
// array=[1,2,3,4,5,6,12,1]
//condition_function=function(item){return  item >5}
{
  let result=[];
  for(let index in array)
  {
    if(condition_function(array[index],index))
    result.push(array[index]);
  }
  return result;
}






// toqa 
const filterGreater=function(item){
  return  item >5
}



// mossad
const filterSmallerThan=function(item)
{
    return item<2;
}













