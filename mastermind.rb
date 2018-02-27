prng = Random.new
code = []
class Entry
  def initialize(val)
    @val = val
    @flag = false
  end

  attr_accessor :flag
  attr_reader :val
end



puts "An older version of the game 'Mastermind' used numbers instead of colors,
and was called 'Bulls and Cows.'  Since in this version of the game, I've used
numbers instead of colors, I've decided to use this terminology to indicate how
a player is doing.  A 'bull' is a correct number in the correct spot.  A 'cow'
is a correct number in an incorrect spot.  The original 'Bulls and Cows' was
played with both characters having a code of their own, and using a point system
to determine the winner.  This version will only feature the code guessing
part of the game.  At this time the computer builds the code, and the player
guesses, but in time a guessing algorithm will be added, and the player will get
to choose whether to guess the code, or input the code and have the computer
figure it out."

print "Building code "
4.times do
  num = prng.rand(1..6)
  code.unshift(Entry.new(num))
  sleep num
  print "."
end

#code.each { |n| print "\n #{n.val}" }
bulls = 0
turns = 0

while bulls < 4 && turns < 12 do
  print "\nNow try to guess the code!"
  guess = gets.chomp
  guess = guess.split""
  sample = []
  guess.each_with_index { |n|
    sample.push(Entry.new(n))
  }

  bulls = 0
  cows = 0
  code.each { |n| n.flag = false }

  sample.each_with_index { |n, index|
    if n.val.to_i == code[index].val.to_i then
      bulls += 1
      code[index].flag = true
      n.flag = true
    end
    }

  sample.each { |n|
    code.each{ |m|
      if m.val.to_i == n.val.to_i && m.flag == false && n.flag == false then
        cows += 1
        m.flag = true
        n.flag = true
        break
      end
    }
  }
  turns += 1
  puts "Bulls: #{bulls}\nCows: #{cows}"
end
