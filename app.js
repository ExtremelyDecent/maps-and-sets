//1 {1,2,3,4}
//2 {"ref"}
//3 0: {Array(3) => true}
//  1: {Array(3) => false}
// hasDuplicate function
const hasDuplicate = array => (new Set(array).size !== array.length);

//vowelCount function

function vowelCount(str){
    const vowels = new Map();
    for(let c of str){
        let lowerC = c.toLowerCase();
        if("aeiou".includes(lowerC)){
            if (!vowels.has(lowerC)){
                vowels.set(lowerC,1);
            }
            else{
                vowels.set(lowerC, vowels.get(lowerC)+1);
            }
        }
    }
    return vowels;
}
