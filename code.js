var findMedianSortedArrays = function (nums1, nums2) {
  var numbers = [...nums1, ...nums2];
  numbers = numbers.sort((a, b) => a - b);
  if (numbers.length % 2 == 0) {
    var index = Math.floor(numbers.length / 2);
    return (numbers[index] + numbers[index - 1]) / 2;
  } else {
    var index = Math.floor(numbers.length / 2);
    return numbers[index];
  }
};
var nums1 = [3],
  nums2 = [-2, -1];
console.log(findMedianSortedArrays(nums1, nums2));
