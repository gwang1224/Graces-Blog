---
layout: default
title: Unit 9 Lesson
description: A progressive journey through Java Inheritance
courses: {'labnotebook': {'week': 11}}
categories: ['C4.0']
type: hacks
permalink: /lesson9
---

# 9.1 What is inheritance?

- Inheritance is like a family, except the kids only have one parent instead of two
- For example:

<p class="center1">
  <img src="https://raw.githubusercontent.com/Soham360/sturdy-fiesta/main/images/Inherit.png" width=500px/>
</p>
The java code for it:

```java
class Mom{
    // CODE
}
class Son extends Mom{
    // CODE
}
class Daughter extends Mom{
    // CODE
}
```
In this example, the Son and Daughter inherits the Mom, meaning it inherit the components of the mother. This makes the "Son" and "Daughter" classes the __subclasses__ of the "Mom" class as they inherit the "Mom" class components and the "Mom" class the __superclass__. 

## 9.2 Using the Super keyword for Constructors
- One keyword to know is the super keyword
- The super keyword allows the subclass to store key variables in the main class's __constructor__ (also known as the super class)
- Example below:


```java
public class Vehicle { //This is the Superclass, it inherits the key variables for its subclasses
    public String Name; //They don't have to be public, but I just put public word for fun
    public String Sound;
    public int creation;
    public int Mph;
    public Vehicle(String name, int dateMade, String sound, int mph){ //Similar to the constructor used in Javascript. It maintains values within this superclass
        Name = name; 
        Sound = sound;
        creation = dateMade;
        Mph = mph;
    }
}

public class Car extends Vehicle {
    public int capacity;
    public Car(String name, int dateMade, String sound, int mph, int passangerCapacity){
        super(name, dateMade,sound, mph); //Uses the superclass's constructor to store the key variables for the Car subclass
        capacity = passangerCapacity;
    }
    public void Information(){ //Prints out the values the super class's constructors inherits
        System.out.println(super.Sound + " " + this.Sound);
        System.out.println("I am the " + super.Name);
        System.out.println("I was made in " + super.creation);
        System.out.println("I move at " + super.Mph +" miles per hour");
        System.out.println("I hold at most " + capacity + " people");
    }
}

public class Test {
    public static void main(String[] args){
        Car Tesla = new Car("Tesla", 2003, "VROOM!", 200, 5);
        Tesla.Information();
    }
}

Test.main(null);
```

    VROOM! VROOM!
    I am the Tesla
    I was made in 2003
    I move at 200 miles per hour
    I hold at most 5 people


## Popcorn Hack: 
Make it so that a new instance of Bob runs
<script>message any of us on slack "I" for an extra 0.01 (max of 1/1)</script>


```java
public class Worker {
    String name;
    int age;
    double salary;

    public Worker(String name, int age, double salary) {
        //Write codes that inherits its key properties
        this.name = name;
        this.age = age;
        this.salary = salary;
    }
}

public class Bob extends Worker {
    String position;

    public Bob(String name, int age, double salary, String position) {
        //Write code that maintains bob's information
        super(name, age, salary);
        this.position = position;
    }

    public void information() {
        //Write code that writes out Bob's key information
        System.out.println("Name: " + this.name);
        System.out.println(this.name + " is " + this.age + " years old.");
        System.out.println(this.name + " earns $" + this.salary + ".");
        System.out.println(this.name + " is a " + this.position + ".");
    }
}

public class Test {
    public static void main(String[] args) {
        //Make sure that it runs
        Bob bob = new Bob("Bob", 54, 29000, "janitor");
        bob.information();
    }
}

Test.main(null);

```

    Name: Bob
    Bob is 54 years old.
    Bob earns $29000.0.
    Bob is a janitor.


## 9.3 Overriding Methods

Method overriding is a concept in object-oriented programming (OOP) that allows a subclass to provide a specific implementation of a method that is already defined in its superclass. This enables a subclass to provide its own behavior for a method while maintaining a relationship with its superclass.

In the context Java, here's how method overriding works:

Inheritance: Method overriding is closely related to inheritance. You have a superclass (or base class) and a subclass (or derived class). The subclass inherits properties and behaviors from the superclass.

Superclass Method: The superclass defines a method. This method can be overridden by the subclass.

Subclass Overrides: In the subclass, you can provide a new implementation of the same method. This is done by using the same method name, return type, and parameter list.

@Override Annotation (Java): In Java, it's common to use the @Override annotation to explicitly indicate that a method in the subclass is intended to override a method in the superclass. This helps catch errors during compilation if the method doesn't correctly match the superclass method signature.

<script>message any of us on slack "Love" for an extra 0.01 (max of 1/1)</script>

### Why Override Methods:

Method overriding is used for several reasons:

Customization: It allows you to customize or extend the behavior of a superclass method in the subclass to meet the specific needs of the subclass.

Polymorphism: Method overriding is a key component of polymorphism. It enables you to treat objects of the subclass as if they were objects of the superclass, promoting flexibility and extensibility.

Consistency: Method overriding helps maintain a consistent interface for classes in an inheritance hierarchy. Code that uses the superclass doesn't need to be changed when a subclass overrides a method.

Code Reusability: It promotes code reusability by allowing you to build on existing code in the superclass.


```java
class Animal {
    void makeSound() {
        System.out.println("Animals make sounds");
    }
}

class Dog extends Animal {
    @Override
    void makeSound() {
        System.out.println("Dog barks");
    }
}

class Cat extends Animal {
    @Override
    void makeSound() {
        System.out.println("Cat meows");
    }
}

public class Main {
    public static void main(String[] args) {
        Animal animal = new Animal();
        Animal dog = new Dog();
        Animal cat = new Cat();

        animal.makeSound(); // Output: Animals make sounds
        dog.makeSound();    // Output: Dog barks
        cat.makeSound();    // Output: Cat meows
    }
}

Main.main(null);
```

    Animals make sounds
    Dog barks
    Cat meows


## In this example:

We have a base class Animal with a method makeSound().

We create two subclasses, Dog and Cat, which inherit from the Animal class.

Both Dog and Cat classes override the makeSound() method with their own implementations.

In the main method, we create instances of the base class and its subclasses.

We demonstrate polymorphism by calling the makeSound() method on objects of the base class and the subclasses. The method called depends on the actual type of the object, not the reference type.

This showcases how method overriding allows you to provide specific implementations for methods in subclasses, promoting polymorphism and custom behavior for each subclass.

## Another Example:


<img class="image" src="https://github.com/AniCricKet/musical-guacamole/assets/91163802/576237f9-cdc4-409b-84f9-96dffe0cdd5c" width=32%>
<img class="image" src="https://github.com/AniCricKet/musical-guacamole/assets/91163802/03923e22-2b6e-4e4d-9244-1d5145f6c6d9" width=32%>
<img class="image" src="https://github.com/AniCricKet/musical-guacamole/assets/91163802/5fe0c72c-c17b-4edb-a567-8c9098998aac" width=32%>


Imagine you're building a program to manage sports team rosters. You can have a base class 'Athlete' representing common attributes and actions of all athletes. Then, create subclasses for specific sports like 'FootballPlayer', 'BasketballPlayer', and 'SoccerPlayer'.


```java
// Base Class
class Athlete {
    String name;
    int age;
    int jerseyNumber;
    String position;

    public Athlete(String name, int age, int jerseyNumber, String position) {
        this.name = name;
        this.age = age;
        this.jerseyNumber = jerseyNumber;
        this.position = position;
    }

    public void train() {
        System.out.println(name + " is training.");
    }

    public void displayInfo() {
        System.out.println("Athlete Info:");
        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
        System.out.println("Jersey Number: " + jerseyNumber);
        System.out.println("Position: " + position);
    }
}

Athlete athlete = new Athlete("John Mortensen", 19, 4, "Teacher");
athlete.train();
athlete.displayInfo();
```

    John Mortensen is training.
    Athlete Info:
    Name: John Mortensen
    Age: 19
    Jersey Number: 4
    Position: Teacher



```java
class FootballPlayer extends Athlete {
    public FootballPlayer(String name, int age, int jerseyNumber, String position) {
        super(name, age, jerseyNumber, position);
    }

    @Override
    public void train() {
        System.out.println(name + " is practicing football drills.");
    }

    @Override
    public void displayInfo() {
        super.displayInfo();
    }
}

class BasketballPlayer extends Athlete {
    public BasketballPlayer(String name, int age, int jerseyNumber, String position) {
        super(name, age, jerseyNumber, position);
    }

    @Override
    public void train() {
        System.out.println(name + " is shooting 3s on the court.");
    }

    @Override
    public void displayInfo() {
        super.displayInfo();
    }
}

class SoccerPlayer extends Athlete {
    public SoccerPlayer(String name, int age, int jerseyNumber, String position) {
        super(name, age, jerseyNumber, position);
    }

    @Override
    public void train() {
        System.out.println(name + " is practicing taking free kicks.");
    }

    @Override
    public void displayInfo() {
        super.displayInfo();
    }
}

```


```java
FootballPlayer footballPlayer = new FootballPlayer("Tyreek Hill", 28, 10, "Wide Receiver");
BasketballPlayer basketballPlayer = new BasketballPlayer("Jimmy Butler", 32, 22, "Small Forward");
SoccerPlayer soccerPlayer = new SoccerPlayer("Neymar Jr", 31, 10, "Left Winger");

footballPlayer.train();
footballPlayer.displayInfo();
System.out.println();

basketballPlayer.train();
basketballPlayer.displayInfo();
System.out.println();

soccerPlayer.train();
soccerPlayer.displayInfo();
System.out.println();
```

    Tyreek Hill is practicing football drills.
    Athlete Info:
    Name: Tyreek Hill
    Age: 28
    Jersey Number: 10
    Position: Wide Receiver
    
    Jimmy Butler is shooting 3s on the court.
    Athlete Info:
    Name: Jimmy Butler
    Age: 32
    Jersey Number: 22
    Position: Small Forward
    
    Neymar Jr is practicing taking free kicks.
    Athlete Info:
    Name: Neymar Jr
    Age: 31
    Jersey Number: 10
    Position: Left Winger
    


## Explanation:

In this Java code, you have a basic "Athlete" class with information and actions that all athletes share. Then, there are specific types of athletes (football, basketball, and soccer players) that inherit these common traits but also have their unique behaviors, like training routines. Method overriding lets them have their own way of training while keeping the shared information, making the code easy to manage and reuse for different types of athletes.

### Popcorn Hack:

Why is it helpful to have a common base class like 'Athlete' for all these different types of athletes? How does it make the code more organized?

It is helpful to have a common base class like athlete because having one overarching class where some variables are shared between the players is useful in not writing repeat code. Instead of having one overarching class, we would have three classes (football, basketball, and soccer). However, they would have the same categories of info, such as name, age, jersey number, and position. To reduce repetition, we can edit a singlar variable to make the code more applicable to broader applications.

## 9.4 Using Super keyword for Methods
- Why only use super for constructors when you can use them for methods too?
- With the super key word, not only can you store variables, but also store methods


```java
class Animal{
    public void Introduction(String name){
        System.out.println("I am a " + name);
    }
}
class Dog extends Animal{ 
    public void Woof(){
        super.Introduction("Dog");//Inherits the introduction method in the Animal Class, then introduces itself as a dog
        System.out.println("Woof!"); //Does its own thing
    }
}
class Cow extends Animal{
    public void Moo(){
        super.Introduction("Cow");//Inherits the introduction method in the Animal Class, then introduces itself as a cow
        System.out.println("MOOOO!");//Does its own thing
    }
}
class Test{
    public static void main(String[] args){
        Dog dog = new Dog();
        Cow cow = new Cow();
        dog.Woof();
        cow.Moo();
    }
}
Test.main(null);
```

    I am a Dog
    Woof!
    I am a Cow
    MOOOO!


## 9.4 Hack
Finish up the code with this criteria: All subclasses must say their origin, the origin can be from SchoolSupply class, and it must run through main.


```java
class SchoolSupply {
    public void BasicInfo(String name) {
        System.out.println("I am a " + name);
    }
}

class Pencil extends SchoolSupply {
    public void Information() {
        super.BasicInfo("Pencil");
        System.out.println("Use me to write!");
    }
}

class Eraser extends SchoolSupply {
    public void Information() {
        super.BasicInfo("Eraser");
        System.out.println("I can erase!");
    }
}

public class Test {
    public static void main(String[] args) {
        Pencil pencil = new Pencil();
        Eraser eraser = new Eraser();
        pencil.Information();
        eraser.Information();
    }
}

Test.main(null);
```

    I am a Pencil
    Use me to write!
    I am a Eraser
    I can erase!


## 9.5 Creating References Using Inheritance Hierarchies
Inheritance can be thought as an upside down tree with the __branches__ on the top and the __roots__ on the bottom. The __roots__ is the superclass while the __branches__ are the subclasses of this superclass. A visual representation of this tree is called a type diagram or hierarchy tree.

A sample structure would be like:
```
public class A x
public class B extends A x
public class C extends B x
public class D extends C x
public class E extends I x
public class F extends I x
public class G extends H x
public class H extends A x
public class I extends H x
```
## Popcorn Hack
- Draw a hierarchy tree for the above structure and add the picture here

![](https://cdn.discordapp.com/attachments/923041823562276894/1170793105071542292/Untitled_drawing.png?ex=655a550c&is=6547e00c&hm=70376ebc21e1ff3a5113d34a68705a8861928cfd9a23f15220245fd2828485a3&)

This structure works as C not only inherits properties from B, but it also inherits properties from A. B is like C's parent and A is like C's grandparent. Think about it like real life, all families inherit something from their ancestors.

In addition, you could also create objects like this:
```
C c = new C();
B c = new C();
A c = new C();
```


```java
// This is the above example in code form

class A {}
class B extends A {}
class C extends B {}

public class Main {
    public static void main(String[] args) {
        C c = new C(); // variable c is of type C
        B b = new C(); // variable b is of type B, but refers to an instance of C
        A a = new C(); // variable a is of type A, but refers to an instance of C
    }
}
```

## 9.6 Polymorphism

A __reference__ variable is polymorphic when it can refer to objects from different classes at different points in time
- A reference variable can store a reference to its declared class or any subclass of it's declared class

A method or operator are considered polymorphic when they are  ___overridden__ in at least one subclass

Polymorphism is the act of executing an overridden non-__final__ method from the correct class at runtime based on the actual object type

Polymorphism allows __dynamic__ for a method call to be executed based on the class of the object referenced instead of the declared class

## Example 1
Java polymorphism is mainly split into 2 types

__Runtime__
- Process in which a function call to the overridden method is resolved at Runtime. This type of polymorphism is achieved by Method Overriding.

__Compile__
- Also known as static polymorphism. This type is achieved by function overloading or operater overloading
- Note: But java doesnt support Operator Overloading
- When there are multiple functions with the same name but different parameters then these functions are said to be overloaded. Functions can be overloaded by changes in the number of arguments or/and a change in the type of arguments. 

Here is an example of compile polymorphism


```java
// Class 1
// Helper class
class Helper {
 
    // Method 1
    // Multiplication of 2 numbers
    static int Multiply(int a, int b)
    {
 
        // Return product
        return a * b;
    }
 
    // Method 2
    // // Multiplication of 3 numbers
    static int Multiply(int a, int b, int c)
    {
 
        // Return product
        return a * b * c;
    }
}
 
// Class 2
// Main class
class GFG {
 
    // Main driver method
    public static void main(String[] args)
    {
 
        // Calling method by passing
        // input as in arguments
        System.out.println(Helper.Multiply(2, 4));
        System.out.println(Helper.Multiply(2, 7, 3));
    }
}
GFG.main(null)
```

    8
    42


## Example 2 & Popcorn Hack
Before executing cell, look at the example below. Think about which methods compiles? Which methods execute?
<script>message any of us on slack "Inheritance" for an extra 0.01 (max of 1/1)</script>

Methods that Compile
- soham.getTalent(): defined in both entertainer and comedian class

Methods that Execute
- soham.getTalent() executes



```java
import java.util.Random;

public class Entertainer{
    private String talent;
    public Entertainer (String t){
        talent = t;
    }
    public String getTalent(){
        return talent;
    }
}

public class Comedian extends Entertainer{
    private ArrayList<String> jokes;
    public Comedian(String t, ArrayList<String> jks){
        super(t);
        jokes = jks;
    }
    public String getTalent(){
        return "Comedy style: " + super.getTalent();
    }
    public String tellJoke(){
        return jokes.get((int)(Math.random()*jokes.size()));
    }
}

// Which one of these will run? Which one of these will not? Comment out the line that isn't working and explain why
Entertainer kevin = new Entertainer("Musician");
System.out.println(kevin.getTalent());
System.out.println(kevin.tellJoke());

ArrayList<String> oneLiners = new ArrayList<String>(); 
//Add code which adds jokes to oneLiners like... Why did the programmer quit his job?.. Why did the developer go broke?..
Entertainer soham = new Comedian(“satire”, oneliners); 
System.out.println(soham.getTalent()); 
System.out.println(((Comedian)soham).tellJoke());
```

## Example 3
Here is an example of runtime polymorphism


```java
// Class 1
// Helper class
class Parent {
 
    // Method of parent class
    void Print()
    {
 
        // Print statement
        System.out.println("parent class");
    }
}
// Class 2
// Helper class
class subclass1 extends Parent {
 
    // Method
    void Print() { System.out.println("subclass1"); }
}
// Class 3
// Helper class
class subclass2 extends Parent {
 
    // Method
    void Print()
    {
 
        // Print statement
        System.out.println("subclass2");
    }
}
// Class 4
// Main class
class GFG {
 
    // Main driver method
    public static void main(String[] args)
    {
 
        // Creating object of class 1
        Parent a;
 
        // Now we will be calling print methods
        // inside main() method
 
        a = new subclass1();
        a.Print();
 
        a = new subclass2();
        a.Print();
    }
}
GFG.main(null)
```

    subclass1
    subclass2


## 9.7 Object Superclass
Now that we have learned about inheritance, what even allows our classes and objects that we have created to work the way they do? Where do the general characteristics of all objects come from? The answer lies in the __Object__ class.

The __Object__ class is the superclass of all other classes as well as arrays and other data types. The Object class is part of the java.lang package.

When we call a constructor to a "top-level class" that the coder hasn't declared a superclass for, the Object constructor is implicitly called. In other words, the Object constructor is implicitly called when we call a constructor in a class that doesn't explicitly extend another class. This will give the object some properties and methods that are common to all classes.

## Example 1


```java
public class Person {
    String name;
    int age;

    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public static void main(String[] args) {
        Person person1 = new Person("Jane Doe", 30);
        Person person2 = new Person("Jane Doe", 30);

        System.out.println(person1.equals(person1)); // Since person1 and person1 are the same object, the equals() method will return true
        System.out.println(person1.equals(person2)); // Since person1 and person2 are different objects, the equals() method will return false even though they have the same contents
    }
}

Person.main(null);

// The equals() method is inherited from the Object class
// By default, the equals() method in the Object class checks for object identity, which means it compares memory addresses to see if two references point to the exact same object
// In the code, person1 and person2 are distinct objects, so they have different memory addresses
// When we call person1.equals(person2), it checks if the memory addresses are the same (which they are not), so it returns false.
```

    true
    false


## Example 2


```java
public class Book {
    String title;
    String author;

    public Book(String title, String author) {
        this.title = title;
        this.author = author;
    }

    public static void main(String[] args) {
        Book book = new Book("The Catcher in the Rye", "J.D. Salinger");
        int hashCode = book.hashCode();
        System.out.println("HashCode: " + hashCode); // The output will be a unique integer value representing the object's hash code. The integer value will be different every time you run it
    }
}

Book.main(null);

// The hashCode() method in the Object class returns a unique integer value for each object
// This value is typically based on the object's memory address.
// In the code, when we call book.hashCode(), it generates a unique integer value representing the book object
// This value can be useful for various purposes, such as organizing objects in collections like HashMaps or HashSet where it helps in efficient retrieval of objects.
```

    HashCode: 2094718255


## Hacks
- Popcorn Hacks (0.2): Participate in the discussion and fill in all of the blanks. 
- MC Questions (0.1): Answer the 10 MC questions below with short explanations
- FRQ Hacks (0.5): Make a complex FRQ that involves everything we taught. Be sure to have a sample solution along with scoring guidlines and how the solution is scored.
- Challenge (0.1): Make an example that uses everything we taught and it must run through main and uses input and output. Points will be awarded for complexity and creativity

### MC Questions
<img src="https://github.com/Soham360/sturdy-fiesta/assets/111466950/8f4143f5-147e-4986-b8c4-f2be549a8d66" alt="Question 1" width="50%">

The Car object will be successfully assigned...
- Java creates a Vehicle reference to the Car Object. Calls car with special abilities and variables different from variable.

<img src="https://github.com/Soham360/sturdy-fiesta/assets/111466950/4596fe26-e22f-4836-abfb-b5026ae2b041" alt="Question 2" width="50%">

B c = new C();

C c = new C(); makes instance of C and assigns to variable type c
C b = new B(); B is a subclass of C, allowed for superclass reference
A c = new C(); subclass C is allowed to be assigned to superclass A
B c = new C(); C is a superclass of B, can not assign superclass to subclass variable

<img src="https://github.com/Soham360/sturdy-fiesta/assets/111466950/0906e8f3-ec66-4269-b8e3-a928a0add502" alt="Question 3" width="50%">

The objects of Class G can be treated as objects of Class H and Class J
G -> H -> J
G gets all properties of H and J

<img src="https://github.com/Soham360/sturdy-fiesta/assets/111466950/e04d0c1e-9185-43ca-95a1-605ca1379196" alt="Question 4" width="50%">

C is a subclass of B
D -> B
C -> D

C -> D -> B

<img src="https://github.com/Soham360/sturdy-fiesta/assets/111466950/cb7264df-a3fb-49c1-a386-7b98a8146da1" alt="Question 5" width="50%">

There will be a compile-time error.
Subclass can not make instance of Superclass.

<img src="https://github.com/Soham360/sturdy-fiesta/assets/111466950/0e842511-3a04-4c49-9d8b-3c879cdbe394" alt="Question 6" width="50%">

J j = new J();”, “J k = new K();”, “J l = new L();
Superclasses can make instances of subclasses

<img src="https://github.com/Soham360/sturdy-fiesta/assets/111466950/f2eb4230-0e51-4e53-81d6-b2e014278114" alt="Question 7" width="50%">

Inheritance because subclass inherits superclass

<img src="https://github.com/Soham360/sturdy-fiesta/assets/111466950/d89dc7e4-563f-4547-a143-5374e8204527" alt="Question 8" width="50%">

H is an indirect superclass of G

C -> H
B -> H
G -> B

G -> B -> H

<img src="https://github.com/Soham360/sturdy-fiesta/assets/111466950/11743110-e043-466b-8a5b-5219607f6f30" alt="Question 9" width="50%">

The root is the superclass, and the branches are the subclasses.

<img src="https://github.com/Soham360/sturdy-fiesta/assets/111466950/9792698d-167a-4ad6-9b88-b4c9254e0c72" alt="Question 10" width="50%">

The object will be successfully assigned to the reference variable

Create a program that represents various types of food and their specific preparations. Define a superclass called Food that includes attributes such as name, type, and calories. Implement methods for cooking the food and displaying its information. Create three subclasses (Fruit, Dessert, and Vegetable) that inherit from the Food class. Each subclass should override the cooking method to represent a specific preparation and display the food information accordingly. Write a test class, Test, containing instances of each subclass. Demonstrate the specific preparation methods and display the information for each food type.


```java
// Base Class
class Food {
    String name;
    String type;
    int calories;

    public Food(String name, String type, int calories) {
        this.name = name;
        this.type = type;
        this.calories = calories;
    }

    public void cook() {
        System.out.println(name + " is being prepared.");
    }

    public void displayInfo() {
        System.out.println("Food Info:");
        System.out.println("Name: " + name);
        System.out.println("Type: " + type);
        System.out.println("Calories: " + calories);
    }
}

class Fruit extends Food {
    public Fruit(String name, String type, int calories) {
        super(name, type, calories);
    }

    @Override
    public void cook() {
        System.out.println(name + " is healthy.");
    }

    @Override
    public void displayInfo() {
        super.displayInfo();
    }
}

class Dessert extends Food {
    public Dessert(String name, String type, int calories) {
        super(name, type, calories);
    }

    @Override
    public void cook() {
        System.out.println(name + " is unhealthy.");
    }

    @Override
    public void displayInfo() {
        super.displayInfo();
    }
}

public class Test {
    public static void main(String[] args) {
        Fruit apple = new Fruit("Apple", "Fruit", 95);
        Dessert cake = new Dessert("Chocolate Cake", "Dessert", 250);

        apple.cook();
        apple.displayInfo();
        System.out.println();

        cake.cook();
        cake.displayInfo();
        System.out.println();
    }
}

Test.main(null);
```

    Apple is healthy.
    Food Info:
    Name: Apple
    Type: Fruit
    Calories: 95
    
    Chocolate Cake is unhealthy.
    Food Info:
    Name: Chocolate Cake
    Type: Dessert
    Calories: 250
    


| Scoring Criteria | Point |
| - | - |
| Declares class header | 1 |
| Declares constructor header  | 1 |
| Constructor calls super as first line  | 1 |
| Overrides superclass  | 1 |
| Declares at least one required metohd  | 1 |
| displayInfo() prints values of instance | 1 |
| Uses extend function correctly | 1 |
| Writes code to test | 1 |

Score: 8
