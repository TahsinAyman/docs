# Java for Loop

A for loop is a repetition control structure that allows you to efficiently write a loop that needs to execute a specific number of times.

Syntax:

```java
for(initialization; Boolean_expression; update) {
   // Statements
}
```

When using this version of the for statement, keep in mind that:

- The initialization expression initializes the loop; it's executed once, as the loop begins. 
- When the termination expression evaluates to false, the loop terminates.
- The increment expression is invoked after each iteration through the loop; it is perfectly acceptable for this expression to increment or decrement a value.  

Flow Diagram:

![Java for Loop](https://www.tutorialspoint.com/java/images/java_for_loop.jpg)  

Example:

```java
public class Test {

   public static void main(String args[]) {
      for(int x = 10; x < 20; x = x+1) {
         System.out.print("value of x : " + x );
         System.out.print("\n");
      }
   }
}
```

This will produce the following result:

```java
value of x : 10
value of x : 11
value of x : 12
value of x : 13
value of x : 14
value of x : 15
value of x : 16
value of x : 17
value of x : 18
value of x : 19
```

## Java Enhanced for Loop

Since Java 5, the enhanced for loop was introduced. This is mainly used to traverse collection of elements including arrays.

Syntax:

```java
for(declaration : expression) {
   // Statements
}
```

Here, declaration specifies the newly declared block variable, and it's scope is limited to this block. The block of code inside the loop is executed for each element in expression. 

Flow Diagram: 

![Java Enhanced for Loop](https://www.tutorialspoint.com/java/images/java_enhanced_for_loop.jpg)  

Example:

```java
public class Test {

   public static void main(String args[]) {
      int [] numbers = {10, 20, 30, 40, 50};

      for(int x : numbers ) {
         System.out.print( x );
         System.out.print(",");
      }
      System.out.print("\n");
      String [] names = {"James", "Larry", "Tom", "Lacy"};

      for( String name : names ) {
         System.out.print( name );
         System.out.print(",");
      }
   }
}
```

This will produce the following result:

```java
10, 20, 30, 40, 50,
James, Larry, Tom, Lacy,
```

## Java Infinite for Loop

A for loop can also be used as an infinite loop.

Example:

```java
public class Test {

   public static void main(String args[]) {
      for(;;) {
         System.out.println("This is an infinite loop");
      }
   }
}
```

This will produce the following result:

```java
This is an infinite loop
This is an infinite loop
This is an infinite loop
This is an infinite loop  
...
```

## Java Nested for Loop

A for loop inside another for loop is called a nested for loop.

Syntax:

```java
for(initialization; boolean_expression; update) {
   for(initialization; boolean_expression; update) {
      // Statements
   }
   // Statements
}
```

Flow Diagram:

![Java Nested for Loop](https://www.tutorialspoint.com/java/images/java_nested_for_loop.jpg)

Example:

```java

public class Test {

   public static void main(String args[]) {
      for(int i = 1; i < 6; ++i) {
         System.out.println("Outer loop iteration " + i);
         for (int j = 1; j < 3; ++j) {
            System.out.println("i = " + i + "; j = " + j);
         }
      }
   }
}
```

This will produce the following result:

```java
Outer loop iteration 1
i = 1; j = 1
i = 1; j = 2
Outer loop iteration 2
i = 2; j = 1
i = 2; j = 2
Outer loop iteration 3
i = 3; j = 1
i = 3; j = 2
Outer loop iteration 4
i = 4; j = 1
i = 4; j = 2
Outer loop iteration 5
i = 5; j = 1
i = 5; j = 2
```

