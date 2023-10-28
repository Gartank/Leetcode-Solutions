const arr = [3,2,4];
const target = 6;

var twoSum = function(nums, target) {
    let numsmap = Object();

    for(i in nums){
        let current = nums[i]; 
        let completion = target - current;
        if(numsmap[completion] != undefined){ 
            return [numsmap[completion], i]; 
        }else{
            numsmap[nums[i]] = i;
        } 
    }
};

const sum = twoSum(arr, target);

console.log(sum);