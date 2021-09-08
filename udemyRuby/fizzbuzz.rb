
# write a method that accepts a number. It should print:
# "Fizz" if it is divisible by 3
# "Buzz" if divisible by 5
# "Fizzbuzz" only if it is divisible by both

def fizzbuzz(num)
  while num < 26
    if(num % 15 == 0)
        puts "#{num}: Fizzbuzz"
    elsif(num % 3 == 0)
        puts "#{num}: Fizz"
    elsif (num % 5 == 0)
      puts "#{num}: Buzz"
    end
    num += 1
  end
end

# fizzbuzz(1)
