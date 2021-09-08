# write a method that accepts an array of whole numbers
# It should return an array of 2 arrays
# The first nested array should contain only odds
# The second nested array should contain only evens
# If theere are no even or odd numbers the respective inner array should be empty

def evens_and_odds(numbers)
  numbers.partition{|number| number.odd?}
 end

 p evens_and_odds([1,2,3,4,5,6])

