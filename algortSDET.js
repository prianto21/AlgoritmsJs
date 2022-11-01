const firstList = [2,2,7, 11, 15];
const secondList = [3, 2, 4];
const thridList = [3, 3];

var twoSum = function (nums, target) {
    // 1, brute force
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            // compare values from both loops , and their indexes are not thesame
            if (nums[i] + nums[j] === target && i !== j) return [i, j];

        }

    }

}

console.log(twoSum(firstList, 9));