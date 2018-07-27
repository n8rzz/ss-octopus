module ExampleModule
  class ExampleClass::ScopeResolution < NewScope::Operator

    # This is a comment in Ruby
    def initialize(options)
      @@class_var = options[:class]
      @instance_var = options[:instance]
    end

    def method
      puts 'doing stuff'

      yield if block_given?

      other_method(:arg)
    end

    def self.class_method
      return "I am a class method!"
    end

    private

    def other_method(*args)
      puts 'doing other stuff #{42}'
    end

    def self.private
      [1, 2, 3].each do |item|
        puts item
      end
    end

    private_class_method :private
  end
end

ExampleModule::ExampleClass::ScopeResolution
example_instance = ExampleModule::ExampleClass::ScopeResolution.new(:arg)

example_instance.method(:arg) do
  puts 'yielding in block!'
end
