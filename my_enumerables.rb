include Enumerable
module Enumerable
  def my_each
    for index in (0..self.size-1) do
      yield(self[index])
    end
  end

  def my_each_with_index
    for index in (0..self.size-1) do
      yield(self[index], index)
    end
  end

  def my_select
    return_entry = []
    for index in (0..self.size-1) do
      check = yield(self[index])
      if check then
        return_entry.push(self[index])
      end
    end
    return_entry
  end

  def my_all?
    for index in (0..self.length-1)
      check = yield(self[index])
      if check then
        index += 1
      else
        return false
      end
    end
    return true
  end

  def my_any?
    for index in (0..self.length-1)
      check = yield(self[index])
      if check then
        return true
      else
        index += 1
      end
    end
    return false
  end

  def my_none?
    for index in (0..self.length-1)
      check = yield(self[index])
      if check then
        return false
      else
        index += 1
      end
    end
    return true
  end

  def my_count(count_value = :default, &the_block)
    counter = 0
    if block_given?
      self.my_each { |n| counter += 1 if yield(n) }
    elsif count_value == :default
      self.my_each { counter += 1 }
    else
      self.my_each { |n|
        if n == count_value then
          counter += 1
        end
      }
    end
    counter
  end

  def my_map( &alteration )
    return_value = []
    if alteration.respond_to?(:call)
      self.my_each { |n|  return_value.push(alteration.call(n)) }
    else
      self.my_each { |n| return_value = yield(n) }
    end
    return_value
  end

  def my_inject(start_pos = 0, &function)
    total = self[start_pos]
    now_pos = start_pos +1
    start_pos += 1
    for now_pos in (start_pos..self.length - 1) do
      total = yield(total, self[now_pos])
    end
    total
  end

  def multiply_els
    self.my_inject { |n, m| n*m }
  end
end
test_array = [4,3,2,1]
puts ".each, my_each test:"
test_array.each { |s| print s }
print "\n"
test_array.my_each { |s| print s}
print "\n"
puts "my_each_with_index, .each_with_index test:"
test_array.my_each_with_index { |n,i| print "#{n}, #{i} ; " }
test_array.each_with_index { |n,i| print "#{n}, #{i} ; " }
puts "\nmy_select, .select test:"
my_select_test =  test_array.my_select { |n| n%2 == 0 }
print "#{my_select_test}\n"
select_test = test_array.select { |n| n%2 == 0 }
print "#{select_test} \n"
puts "all?, my_all? test:"
puts test_array.all? { |n| n%2 == 0 }
puts test_array.all? { |n| n%1 == 0 }
puts test_array.my_all? { |n| n%2 == 0 }
puts test_array.my_all? { |n| n%1 == 0 }
puts "any?, my_any? test:"
puts test_array.any? { |n| n > 5 }
puts test_array.any? { |n| n%3 == 0}
puts test_array.my_any? { |n| n > 5 }
puts test_array.my_any? { |n| n%3 == 0}
puts "none?, my_none? test:"
puts test_array.none? { |n| n > 5 }
puts test_array.none? { |n| n%3 == 0}
puts test_array.my_none? { |n| n > 5 }
puts test_array.my_none? { |n| n%3 == 0}
puts ".count, my_count test:"
puts test_array.count
puts test_array.my_count
puts ".count(1), .my_count(1) test:"
puts test_array.count(1)
puts test_array.my_count(1)
puts ".count/.my_count { x%2 == 0 } test"
puts test_array.count { |x| x%2 == 0 }
puts test_array.my_count { |x| x%2 == 0 }
puts ".map/.my_map test:"
print test_array.map { |n| n*2 }
print "\n"
print test_array.my_map { |n| n*2 }
print "\n"
puts "multyply_els test: #{test_array.multiply_els}"
