# write a method that accepts a numeric array
# and returns a new array with the original elements squared
# [1,2,3] should return [1,4,9]

def square_nums(num_arr)
  num_arr.map{|num| num ** 2}
end
