# write a method that takes an array of words
# and returns a new array with only words that are palindromes
# doesn't mutate original array

words = ["cat", "level", "racecar"]

def is_palindrome(arr)
arr.select {|word| word == word.reverse}
end

# write the same method with the .reject method
# and doesn't mutate original array

words2= ["zaz", "zee", "eve"]

def is_palindrome_reject(arr)
arr.reject {|word| word != word.reverse}
end

p is_palindrome_reject(words2)

# write a method that returns a given array without
# elements that contain c

def filter_c (arr)
  arr.reject{|elem|elem.include?("c")}
end

animals= ["cat", "cheetah", "whaleshark", "chickadee"]

p filter_c(animals)
