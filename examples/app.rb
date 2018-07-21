# this is a comment
class Person
  attr_accessor :name

  def initialize(attributes = {})
    @name = attributes[:name]
  end

  def self.greet
    "hello"
  end
end

person_robert = person.new(:name => "RobertIsCool")

print Person::greet, " ", person_robert.name, "\n"
puts "another #{Person::greet} #{person_robert.name}"
