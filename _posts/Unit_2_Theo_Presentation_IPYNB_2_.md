---

---

The method signature for writing void method with parameters is the same as a constructor, with the name of the method followed by the parameters and their types in parentheses. For example, here is a method that prints the perimeter of a rectangle...


```Java
public static void printRectanglePerimeter(double length, double width) {
    System.out.println(2 * (length + width));
  }   
```


```Java
printRectanglePerimeter(1.5, 2.5);
```

    8.0


We can also overload methods as well. This overloading of the method is acceptable because there are different numbers of parameters. 


```Java
// If 2 parameters are given, we will calculate the perimeter by adding the length and width and doubling it
public static void printRectanglePerimeter(double length, double width) {
    System.out.println(2 * (length + width));
}

// If 1 parameter is given, we assume the shape is a square
public static void printRectanglePerimeter(double side) {
    System.out.println(4 * side);
}

// No shape exists, no perimeter is calculated
public static void printRectanglePerimeter() {
    System.out.println(0);
}
```

### Unit 2.5- Calling a Non-Void Method

**Void methods**: complete actions and represent tasks. They are used when you want a method to perform a task or operation without producing a result that needs to be used elsewhere in your program. Void methods are typically used for actions like printing a message, updating a data structure, or modifying the state of an object.

Format for a non-void method:
```
public (static) dataType methodName(parameterListOptional)
```

Which method in this class is a non-void method? Edit the cell below to call the Calculator method.


```Java
public class Calculator {
    public int add(int a, int b) {
        return a + b;
    }

    public static void main(String[] args) {
        Calculator calculator = new Calculator();

        int sum = calculator.add(5, 3);

        // Printing the result
        System.out.println("Sum: " + sum); // Output: Sum: 8
    }
}

```

<details>
<summary>Answer</summary>
The method 'add' is the non void method. To call the whole method, we would write Calculator.main(null).
</details>
