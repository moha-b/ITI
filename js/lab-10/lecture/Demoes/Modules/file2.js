
const file2=(function(){
    let number=5;
    console.log("file2",number);


    const getData=function(){
        console.log("get data");
    }
    return {number,getData}
})();



