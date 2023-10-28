const arr = [3,2,4];
const target = 6;

var twoSum = function(nums, target) {
    for(i in nums){ 
        for(j = 0 ;j< nums.length; j++){
            if (j == i) continue;
            if(nums[i] + nums[j] == target){
                return [Number(i), j];
            }
        }
    }
};

const sum = twoSum(arr, target);

console.log(sum);