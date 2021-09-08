#write custom max and min methods

def custom_max(arr)
  return nil if arr.empty?
  max= arr[0]
  arr.each {|value| max= value if value > max}
  max
end


def custom_min(arr)
  return nil if arr.empty?
  min= arr[0]
  arr.each {|value| min= value if value < min}
  min
end
