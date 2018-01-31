array1 = ["monkeysnack", "hi", "howarya", "listen", "buddy",]
puts "unsorted: #{array1}"
array2 = [4,3,78,2,0,2]
puts "unsorted: #{array2}"

def bubble_sort_by(thingy, &passed)
  index = 0
  switched = false
  until (index == thingy.length-1) do
    switched = false
    bit = yield(thingy[index], thingy[index + 1])
    if (bit < 0) then
      switched = true
      thingy[index], thingy[index+1] = thingy[index+1], thingy[index]
    end
    if (switched == true) then
      index = 0
    else
      index += 1
    end
  end
  thingy
end
array1 = bubble_sort_by(array1) { |first, second| second.length - first.length }
puts "sorted: #{array1}"
array2 = bubble_sort_by(array2) { |first, second| second - first }
puts "sorted: #{array2}"
