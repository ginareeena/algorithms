# write a method that takes an array of fahrenheit temperatures
# and returns a new array of temperatures converted to celsius

fahr_temperatures = [100, 75, 90, 88]

def convert_to_celsiusR(temps)
  temps.map {|temp| (temp - 32) * (5.0/9.0)}
end

# p convert_to_celsius([99,77,55])
# p convert_to_celsiusR([99,77,55])
