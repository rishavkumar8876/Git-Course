function Union(){
    let arr1=[1,2,3,3,4]
    let arr2=[1,8,4,2,2,4]
    console.log([... new Set([...arr1,...arr2])])
}
Union()