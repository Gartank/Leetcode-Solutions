const arr = [3,2,4];
const target = 6;

var twoSum = function(nums, target) {
    let numsmap = Object();

    for(i in nums){
        if(numsmap[target - nums[i]] != undefined){ 
            return [numsmap[target - nums[i]], i]; 
        }else{
            numsmap[nums[i]] = i;
        } 
    }
};

const sum = twoSum(arr, target);

console.log(sum);