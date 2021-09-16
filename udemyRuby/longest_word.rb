# write a method that accepts a string and returns the longest word in the sentence
# if two words are the longest word the method should return the
# last word in the sentence with that length

def longest_word(sentence)
  words = sentence.split
  longest_word= words[0]
    words.each do |word|
      longest_word = word if word.length  >=  longest_word.length
  end
 return longest_word
end


# same but returns first longest word instead

def longest_wordFirst(sentence)
  words = sentence.split
  longest_word= words[0]
  words.each do |word|
      longest_word = word if word.length  >  longest_word.length
  end
 return longest_word
end
