
# write a method given an array of shirts and an array of shorts
# outputs a new array of outfits for all possible
# combinations of shirts and shorts

shirts= %w[striped teal blue maroon]
shorts= %w[black grey white]

def all_outfits(shirts, shorts)
  outfits= []
  shirts.each do |shirt|
    shorts.each do |short|
      outfits.push([shirt,short])
    end
  end
  outfits
end

# p all_outfits(["red tee", "blue tee"],["black shorts"])
# p all_outfits(shirts, shorts)
