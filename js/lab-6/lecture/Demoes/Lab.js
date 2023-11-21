const createTrackList=function(trackId,listElement){

    let ulObject=document.createElement("ul");
    ulObject.id=trackId;
    listElement.append(ulObject);

    return  ulObject;
}

const addCourse=(courseName,ListTrackElement)=>{
    let liObject=document.createElement("li");
    liObject.innerText=courseName;
    ListTrackElement.append(liObject);
}


const remove=(courseName,TrackList)=>{

    let children=TrackList.children;
    for(let i=0;i<children.length;i++ )
    {
        if(courseName==children[i].innerText)
        {
            children[i].remove()
        }
    }
    



}


