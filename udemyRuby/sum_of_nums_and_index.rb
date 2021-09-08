# create a method that adds the product of each element and it's index [1,2,3]-> 1*0 + 2*1 + 3*2 = 0 + 2 + 6 = 8

def sum_products (arr)
  sum= 0
  arr.each_with_index {|num, index| sum += (num * index)}
  sum
end

# sum_products([3,6,9])
