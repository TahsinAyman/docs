# Java while Loop

A while loop statement in Java programming language repeatedly executes a target statement as long as a given condition is true.

Syntax:

```java
while (condition(s)) {
   statement(s);
}
```

Here, statement(s) may be a single statement or a block of statements. The condition may be any expression, and true is any non-zero value. The loop iterates while the condition is true.

When executing, if the boolean expression evaluates to true, then the while loop executes the statement(s) in the while loop body. After one iteration, the condition is evaluated again. This process continues until the condition evaluates to false.

When the condition becomes false, program control passes to the line immediately following the loop.

Flow Diagram:

![Java while Loop](https://www.tutorialspoint.com/java/images/java_while_loop.jpg)

Example:

```java
public class Test {

   public static void main(String args[]) {
      int x = 10;

      while( x < 20 ) {
         System.out.print("value of x : " + x );
         x++;
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

## Java do...while Loop
