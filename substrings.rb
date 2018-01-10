#build the dictionary
dictionary = ["below","down","go","going","horn","how","howdy","it","i","low","own","part","partner","sit"]
#build the method
def substrings(input_string, test_array)
#split the string into an array of strings, each word being an element
input_array = input_string.split(" ")
#create an empty test_hash to be filled
test_hash = {}
test_array.each do |n|
  test_hash[n] = 0.to_i
end
#compare each word in the split test array with each word in the split dictionary array to find out
#if the letters in each dictionary entry appear in order in each test array entry
input_array.each do |w|
  test_array.each do |t|
    if (w.downcase.rindex(t) != nil) then
      test_hash[t] += 1
    end
  end
end
#return the test_hash
puts(test_hash)
test_hash
end
#run the substrings method using a sample string literal, and the dictionary above
substrings("Howdy partner, sit down! How's it going?",dictionary)
