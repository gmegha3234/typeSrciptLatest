//Given an array of intervals like [[1, 3], [2, 6], [8, 10], [15, 18], [7, 9]] merge the intervals that overlap.
// OUTPUT: [[1, 6], [7, 10], [15, 18]]

const arr = [
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
  [7, 9],
];
const dup=[...arr];
const resArr=[];

arr.forEach((item)=>{
    let flag=0;
    dup.forEach((dupItem)=>{
      if(dupItem!==item){
         if(dupItem[0]>item[0]&& dupItem[0]<item[1]){
            resArr.push([item[0],dupItem[1]]);
            flag=1;
         }    
      }
      
    })
    if (flag === 0) resArr.push(item);
})
console.log(resArr);