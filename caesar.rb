#include<iostream>lol

Kernel.puts("Type a sentence to be encrypted.\n")
message = gets.chomp
puts("What is the key?")
key = gets.chomp
key = key.to_i
while (key > 26) do
  if (key.to_i > 26)
    puts ("The key must be a number no larger than 26. Input a new key.")
    key = gets.chomp
    key = key.to_i
  end
end
translate = message.split("")
counter = 0
translate.each do |l|
  l = l.ord
  if (l >= "A".ord && l <= "Z".ord) then
    l += key
    if (l > 'Z'.ord) then
      l -= 26
    end
  end
  if (l >= 'a'.ord && l <= 'z'.ord) then
    l += key
    if (l > 'z'.ord) then
      l -= 26
    end
  end
  l = l.chr
  translate[counter] = l
  counter += 1
end
message = translate.join
puts(message)
