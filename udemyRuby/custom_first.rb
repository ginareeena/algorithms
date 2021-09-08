# write your own custom first and last functions

catArr= %w[kiki jiji luna salem]

def custom_first(arr,num=0)
  return arr[0] if num ==0
  arr[0..num-1]
end

def custom_last(arr, num=0)
  return arr[-1] if num == 0
  arr[-num..-1]
end

# tests:

# p custom_firstRefactor(catArr)
# p custom_firstRefactor(catArr, 1)
# p custom_lastRefactor(catArr)
# p custom_lastRefactor(catArr, 1)
