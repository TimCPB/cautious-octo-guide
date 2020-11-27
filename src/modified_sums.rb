def modified_sum(nums, n)
  modified_nums = nums.map {|x| x ** n}
  p modified_nums
  modified_nums.sum - nums.sum
end