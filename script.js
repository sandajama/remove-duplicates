// Good Luck 💪🏾
function removeDuplicates(array){
    let result=[]
    for(let i=0; i<array.length; i++){
        if (result.length ===0){
            result.push(array[i])
        }
        if(result.indexOf(array[i])=== -1){
            result.push(array[i])
        }
    }
    return result

}
   
console.log(removeDuplicates([1, 0, 1, 0]))// ➞ [1, 0]
console.log(removeDuplicates(["New", "York", "City"]))// ➞ ["New", "York", "City"]
console.log(removeDuplicates(["Hassan", "Aisha", "Aisha"])) //➞ ["Hassan", "Aisha"]

