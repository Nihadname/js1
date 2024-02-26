let numbers=[10,5,25,8,15];
let One=numbers[0];
for(i=0;i<numbers.length;i++){
    if(numbers[i]>One){
        One=numbers[i];
    }
}
console.log(One);

let addedOne=0;
let numbers2=[1,2,3,4,5];
for(i=0;i<numbers2.length;i++){
addedOne+=numbers2[i];
}
console.log(addedOne)

let stringValue="How are you doing today?"
let theHighestOne="";
let checeked =stringValue.split(" ");
checeked.forEach(element => {
    if(element.length>theHighestOne.length){
        theHighestOne=element;
    }
});
console.log(theHighestOne);


function findLongest(str){
    let arr = str.split(" ");
    let longestWord = arr[0];
    for (let i = 0; i < arr.length; i++) {
        let element = arr[i];
        if (element.length > longestWord.length) {
            longestWord = element;
        }
        
    }
    return {word: longestWord, length: longestWord.length}
};

console.log(findLongest("How are you doing today?"));
