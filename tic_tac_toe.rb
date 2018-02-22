class Cell
  def initialize(start)
    @fig = start
    @flag = false
  end
  attr_accessor :fig
  attr_accessor :flag
end

class Field

  def initialize
    @cat = false
    @victory = false
    @cells = Array.new
    for index in (0..8)
      @cells[index] = Cell.new(index)
    end
  end

  def show_field
    @cells.each_with_index { |cell, index|
      print cell.fig
      print "|" if (index+1)%3 != 0
      print "\n" if index == 8
      print "\n-|-|-\n" if ((index+1)%3 == 0 && index != 8)
      index += 1
    }
  end

  attr_accessor :cells
  attr_accessor :victory
  attr_accessor :cat

  def victory?
    self.victory = true if @cells[0].fig == @cells[1].fig && @cells[0].fig == @cells[2].fig
    self.victory = true if @cells[3].fig == @cells[4].fig && @cells[3].fig == @cells[5].fig
    self.victory = true if @cells[6].fig == @cells[7].fig && @cells[6].fig == @cells[8].fig
    self.victory = true if @cells[0].fig == @cells[4].fig && @cells[0].fig == @cells[8].fig
    self.victory = true if @cells[6].fig == @cells[4].fig && @cells[6].fig == @cells[2].fig
    self.victory
  end

  def victorious
    puts "Winner!" if self.victory?
  end

  def Field.play_game
    play = Field.new
    turn_count = 0
    player = "O"
    play.show_field
    until play.victory == true || play.cat == true do
      print "Player '#{player}' select your cell:  "
      cell_no = gets.chomp
      cell_no = cell_no.to_i
      while cell_no > 8 || play.cells[cell_no].flag == true
        play.show_field
        print "Select a cell still numbered between 0 and 8:  "
        cell_no = gets.chomp
        cell_no = cell_no.to_i
      end
      play.cells[cell_no].fig=(player)
      play.cells[cell_no].flag = true
      play.show_field
      play.victorious
      case player
      when "X"
        player = "O"
      when "O"
        player = "X"
      end
      turn_count += 1
      play.cat = true if turn_count == 9 && play.victory == false
    end
    puts "Cat Game!" if play.cat == true
  end
end

Field.play_game
