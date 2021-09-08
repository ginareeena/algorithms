# write a method that prints all numbers from 1 to a given number and it's square

  def print_all_nums(num)
    num.times do |num|
      curr_num= num + 1
      puts "I am current on number #{curr_num} it's square is #{(curr_num ** 2}"
    end
  end

  # print_all_nums(7)
