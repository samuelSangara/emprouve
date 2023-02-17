const array=[1,2,3,3,3,3,4,5,6,6];

function except(array, excluded){
    let chain=[];
    for(let element of array)
        if(!excluded.includes(element))
        chain.push(element);
    return chain;
}

console.log(except(array,[3]))
