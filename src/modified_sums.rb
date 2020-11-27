def modified_sum(nums, n)
  modified_nums = nums.map {|x| x ** n}
  modified_nums.sum - nums.sum
end