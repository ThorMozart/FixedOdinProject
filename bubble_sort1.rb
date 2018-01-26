array1 = ["monkeysnack", "hi", "howarya", "listen", "buddy",]
puts "unsorted: #{array1}"
array2 = [4,3,78,2,0,2]
puts "unsorted: #{array2}"

def bubble_sort!(the_array)
  index = 0
  switched = false;
  until (index == the_array.length-1) do
    switched = false;
    if (the_array[index] > the_array[index+1]) then
      placeholder = the_array[index]
      the_array[index] = the_array[index+1]
      the_array[index+1] = placeholder
      switched = true
    end
    if (switched == true) then
      index = 0
    else
      index += 1
    end
  end
  the_array
end
array1 = bubble_sort!(array1)
puts "sorted: #{array1}"
array2 = bubble_sort!(array2)
puts "sorted: #{array2}"
