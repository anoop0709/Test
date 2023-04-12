const arr = [2,3,4,1,44,1];

const add = (arr)=>{
    arr.map((item)=>{
        return item++;

    })
}
console.log(add(arr));