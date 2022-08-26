# ASSESSMENT 4: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is object-oriented programming? How is it different than functional programming?

Your answer: It is based around classes, objects and data instead of functions. It uses objects for its its majority of progarming.  Ruby is an example of OOP. (I know what OOP is but I have a hard time describing it.  Vocabulary seems to be my blockers.  Like I know how it works or what it does but when asked to describe it I struggle to or even come up blank.)

Researched answer: OOP is a programming model that uses the classes and objects instead of functions and logic.  It uses classes that is the blueprint for the objects and you can access and modify the data in the objects themselelves rather than using something like a function.  Objects are the intersection between data and behavoir and we use methods which act kinda like functions to access or manipulate the data in the objects.  OOP is scaleable and can be used on very large projects.  This kinda creates small containers for the code to work on and if you were to change something and it doesn't work it helps prevent a ripple effect from spreading farther down the code but rather contained in its little container.

2. What is the difference between a Float and an Integer in Ruby?

Your answer: An integers is a whole number.  For example: 1, 2, 3, 4 ,5 are integers along with any number.  A float is also an integer but it has a decimal with it. For example: 1.0, 2.0, 3.1 are all floats.  Even though after the decimal it has a zero it is still considered a float and they are viewed differently by the computer and not considered an integer.

Researched answer: In ruby specifically any number that is written with a decimal point, even if it is point zero.  Ruby recognizes it as a float and not as an integer.  An integer is a whole number that has no decimal.  It can be as large or small of a number as you want. Same goes with a float you can have as many numbers after the decimal the big difference is if you use them in a math method of some sort the computer will treat an integer and float completely different and has processes on how to handle each one.

3. Ruby has an implicit return. What does that mean?

Your answer: An implicit return means that you don't have to invoke a return.  Ruby will give you a return because it essentially know that you are expecting one. So for example you create a method that adds two numbers. So instead of telling the method to return a sum when you print the method it will run the method of add the two numbers and then give you the return of the 2 numbers together even though you did not explicitly tell it to.

Researched answer:  An implicit return is when ruby takes the last executed instruction in the method and returns it for you with out you having to explicitly telling it to do so.  Its like I make a method that takes two arrays and concats them but inside the method I don't tell it to return the output.  So when I run the method it will implicitly return the concatted version of the two arrays since that was the last executable instruction I gave it.

4. What is a block in Ruby?

Your answer: A ruby block is a pretty much like an anonymous function.  In javascript we have () => {} while in Ruby we use the words do and end to pretty much build the anonymous function.

Researched answer: Ruby blocks looks like methods but they do not require a name and are actually passed to a method call. It also uses the pipes to take in a parameter just like a function. So for an example if I have an array that is [1, 2, 3, 4] and I do a nums.each do |value|, p value,
end. It will iterate through the array and print each value out. If you notice in the example I did not name a method.

5. What is an instance variable in Ruby?

Your answer: An instance variable is a variable that is within the scope of the entire class instead of just a particular method.  You can access it anywhere each time for when you want it in that instance.

Researched answer: An instance variable is a member of an instance of a class but it lies in the realm outside of any method. All instance variables inside of ruby begins with @ for example @name or @animal.  Also a unique character about an instance variable is that it is restricted to whatever object that it is refering to. so example if I do @name = name.  It is now restricted to that object name.

## Looking Ahead: Terms for Next Week

1. PostgreSQL: PostgreSQL is an object-relational database management system and it was developed at the University of California at Berkeley Computer Science Department. 

2. Ruby on Rails: Ruby on Rails is a server-side web application framework written in Ruby. Rails is a model–view–controller framework, providing default structures for a database, a web service, and web pages. Which I feel is like React

3. ORM: Object–relational mapping in computer science is a programming technique for converting data between type systems using object-oriented programming languages. 

4. Active Record: Active Record facilitates the creation and use of business objects whose data requires persistent storage to a database. It is an implementation of the Active Record pattern.

5. Migrations: Migrations are a feature of Active Record that allows you to evolve your database schema over time. Rather than write schema modifications in pure SQL, migrations allow you to use a Ruby DSL to describe changes to your tables.
