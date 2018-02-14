puts("Give me a list of numbers with commas in between each one.")
list = gets.chomp
list = list.split(",").map { |n| n.to_i }

def pick(numbers)
   buy1 = numbers.min
   buy_day1 = numbers.index(buy1)
   the_end = numbers.index(numbers.last)
   sell_array = numbers[buy_day1..the_end]
   sell1 = sell_array.max
   sell_day1 =  numbers.index(sell1)
   sell2 = numbers.max
   sell_day2 = numbers.index(sell2)
   buy_array = numbers[0..sell_day2]
   buy2 = buy_array.min
   if (numbers.max == numbers[0]) then
     special_case = numbers.unshift
     buy_day2 = special_case.index(buy2)
   else
     buy_day2 = numbers.index(buy2)
   end
   if ((sell1 - buy1) > (sell2 - buy2)) then
     puts("[#{buy_day1},#{sell_day1}]")
   else
     puts ("[#{buy_day2},#{sell_day2}]")
   end
end
pick(list)


# known bug, if the largest number is listed first, and listed later in the buy_array
# it somehow ends up null and returns an error
