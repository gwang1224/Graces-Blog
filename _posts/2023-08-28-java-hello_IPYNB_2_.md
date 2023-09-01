---
layout: default
title: Java Hello
description: A progressive journey through Java basics starting with the classic "Hello, World!" example.
courses: {'labnotebook': {'week': 1}}
type: hacks
---

### [Object Oriented Programming](https://youtu.be/Wok4Xw_5cyY) 

- **Object-Oriented Programming:** an approach to creating and using models of physical or imagined objects
- **class:** a programmer-defined blueprint from which objects are created
- **camel case:** a naming convention where the first letter of the first word is upper or lowercase and the first letter of each additional word is uppercase
- java is case sensitive
- public: class can be accessed from anywhere


```java
public class MyFirstClass {
    
}
```

### [Creating Objects](https://youtu.be/C5Ks_u87Ltg)

- **class:** a list of attributes and instructions (a blueprint) for how to create an instance of itself
    - **attribute:** characteristics of an object
    - **behaviors:** actions hat an object can perform
- **object:** an instance of the class
- **instantiate:** to all the constructor to create an object
- **constructor:** a block of code that has the same name as the class and tells the computer how to create a new object
- creating objects example


```java
House myHouse = new House();

House friendsHouse = new House();

House parentsHouse = new House();
```

- **state:** the attributes represented by the object's instance variables

### [Calling Methods](https://youtu.be/CPE_lYGCw3A)

- **method:** a named set of instructions to perform a task
- **parameter:** a variable in the method that defines the type of value to receive when the method is called


```java
fido.bark(3);
```

fido = name of object

. = dot operator, used to call a method in a class

bark = name of method

3 = argument, a value passed to a method when the method is called

### Static example

The key terms in HelloStatic introduction:
- "class" is a blueprint for code, it is the code definition and must be called to run
- "method" or "static method" in this case, is the code to be run/executed, similar to a procedure
- "method definition" or "signature" are the keywords "public static void" in front of the name "main" and the parameters "String[] args" after the name.
- "method call" is the means in which we run the defined code



```java
// Define Static Method within a Class
public class HelloStatic {
    // Java standard runtime entry point
    public static void main(String[] args) {    
        System.out.println("Hello World!");
    }
}
// A method call allows us to execute code that is wrapped in Class
HelloStatic.main(null);   // Class prefix allows reference of Static Method
```

### Dynamic Example

The key terms in HelloStatic introduction:
- "Object Oriented Programming" focuses software design around data, or objects.
- "object" contains both methods and data
- "instance of a class" is the process of making an object, unique or instances of variables are created within the object
- "constructor" special method in class, code that is used to initialize the data within the object
- "getter" is a method that is used to extract or reference data from within the object. 


```java
// Define Class
public class HelloDynamic { // name the first letter of class as capitalized, note camel case
    // instance variable have access modifier (private is most common), data type, and name
    private String hello;
    // constructor signature 1, public and zero arguments, constructors do not have return type
    public HelloDynamic() {  // 0 argument constructor
        this.setHello("Hello, World!");  // using setter with static string
    }
    // constructor signature, public and one argument
    public HelloDynamic(String hello) { // 1 argument constructor
        this.setHello(hello);   // using setter with local variable passed into constructor
    }
    // setter/mutator, setter have void return type and a parameter
    public void setHello(String hello) { // setter
        this.hello = hello;     // instance variable on the left, local variable on the right
    }
    // getter/accessor, getter used to return private instance variable (encapsulated), return type is String
    public String getHello() {  // getter
        return this.hello;
    }
    // public static void main(String[] args) is signature for main/drivers/tester method
    // a driver/tester method is singular or called a class method, it is never part of an object
    public static void main(String[] args) {  
        HelloDynamic hd1 = new HelloDynamic(); // no argument constructor
        HelloDynamic hd2 = new HelloDynamic("Hello, Nighthawk Coding Society!"); // one argument constructor
        System.out.println(hd1.getHello()); // accessing getter
        System.out.println(hd2.getHello()); 
    }
}
// IJava activation
HelloDynamic.main(null);
```

    Hello, World!
    Hello, Nighthawk Coding Society!


![](https://cdn.discordapp.com/attachments/871893548319014932/1146534138904584292/java-classes.png)

### Building own Dynamic Class

Building Java code that contains instance of class, constructors, parameters, setters 


```java
// Class definition
class GroceryItem {
    // Instance variables
    private String name;
    private int quantity;

    // Constructor with parameters
    public GroceryItem(String name, int quantity) {
        this.name = name;
        this.quantity = quantity;
    }

    // Getter for name
    public String getName() {
        return name;
    }

    // Setter for quantity
    public void setQuantity(int quantity) {
        if (quantity >= 0) {
            this.quantity = quantity;
        } else {
            System.out.println("Quantity cannot be negative.");
        }
    }


    public static void main(String[] args) {
        // Creating instances of the GroceryItem class
        GroceryItem item1 = new GroceryItem("apples", 5);  // Constructor with arguments
        GroceryItem item2 = new GroceryItem("breads", 2);
        System.out.println("Grace needs to buy " + item1.quantity + " " + item1.name);
        System.out.println("Grace needs to buy " + item2.quantity + " " + item2.name);
    }
    
}

GroceryItem.main(null);


```

    Grace needs to buy 5 apples
    Grace needs to buy 2 breads



```java
// Defining Location class
class MyLocation {
    // creating instance variables
    private int house;
    private String street;
    private String city;
    private String state;
    private int zip;

    //Class constructor with parameters
    public MyLocation(int house, String street, String city, String state, int zip) {
        this.house = house;
        this.street = street;
        this.city = city;
        this.state = state;
        this.zip = zip;
    }

    // Getter for house
    public int getHouse() {
        return house;
    }

    // Getter for street
    public String getStreet() {
        return street;
    }

    // Getter for city
    public String getCity() {
        return city;
    }

    // Getter for house
    public String getState() {
        return state;
    }

    // Getter for house
    public int getZip() {
        return zip;
    }

    public static void main(String[] args) {
        // Creating instances of the GroceryItem class
        MyLocation location1 = new MyLocation(16601, "Nighthawk Lane", "San Diego", "California", 92127);  // Constructor with arguments
        MyLocation location2 = new MyLocation(17170, "Camino Del Sur", "San Diego", "California", 92127);
        System.out.println("Grace was at " + location1.house + " " + location1.street + " " + location1.city + ", " + location1.state + " " + location1.zip);
        System.out.println("Grace was at " + location2.house + " " + location2.street + " " + location2.city + ", " + location2.state + " " + location2.zip);
    }

}

MyLocation.main(null);
```

    Grace was at 16601 Nighthawk Lane San Diego, California 92127
    Grace was at 17170 Camino Del Sur San Diego, California 92127


### Building own Static Class


```java
public class StringUtils {
    public static String reverse(String input) {
        return new StringBuilder(input).reverse().toString();
    }

    public static void main(String[] args) {
        String original = "Hello, World!";
        String reversed = StringUtils.reverse(original);

        System.out.println("Original: " + original);
        System.out.println("Reversed: " + reversed);
    }
    
}

StringUtils.main(null);

```

    Original: Hello, World!
    Reversed: !dlroW ,olleH



```java
import java.util.Random;
import java.util.Scanner;

public class NumberGuessingGame {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        Random random = new Random();
        
        int lowerBound = 1;
        int upperBound = 100;
        int secretNumber = random.nextInt(upperBound - lowerBound + 1) + lowerBound;
        
        System.out.println("Welcome to the Number Guessing Game!");
        System.out.println("I have selected a number between " + lowerBound + " and " + upperBound + ". Try to guess it!");

        int attempts = 0;
        int guess = 0;
        
        while (guess != secretNumber) {
            System.out.print("Enter your guess: ");
            guess = scanner.nextInt();
            attempts++;
            
            if (guess < secretNumber) {
                System.out.println("Too low! Try again.");
            } else if (guess > secretNumber) {
                System.out.println("Too high! Try again.");
            }
        }

        System.out.println("Congratulations! You've guessed the number " + secretNumber + " in " + attempts + " attempts.");
        scanner.close();
    }
}

NumberGuessingGame.main(null);
```

    Welcome to the Number Guessing Game!
    I have selected a number between 1 and 100. Try to guess it!
    Enter your guess: Too low! Try again.
    Enter your guess: Too low! Try again.
    Enter your guess: Too low! Try again.
    Enter your guess: Too high! Try again.
    Enter your guess: Too high! Try again.
    Enter your guess: Too high! Try again.
    Enter your guess: Too low! Try again.
    Enter your guess: Congratulations! You've guessed the number 84 in 8 attempts.

