const createTable=function(objects)
{
    let table=document.createElement("table");
    let trObject,tdObject;
    for(let object of objects)
    {
        trObject=document.createElement("tr");
        
        for(let property in object)
        {
            tdObject=document.createElement("td");
            tdObject.innerText=object[property];
            trObject.append(tdObject);
        }
        table.append(trObject);
    }

    return table;
}