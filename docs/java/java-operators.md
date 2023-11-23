
## Java Operators

Operators are used to perform operations on variables and values.

In the example below, we use the + operator to add together two values:

```java
int x = 100 + 50;
```

### Java Arithmetic Operators

Arithmetic operators are used to perform common mathematical operations.

| Operator | Name          | Description                                                  |
| -------- | ------------- | ------------------------------------------------------------ |
| +        | Addition      | Adds together two values                                     |
| -        | Subtraction   | Subtracts one value from another                             |
| *        | Multiplication| Multiplies two values                                        |
| /        | Division      | Divides one value by another                                 |
| %        | Modulus       | Returns the division remainder                               |
| ++       | Increment     | Increases the value of a variable by 1                       |
| --       | Decrement     | Decreases the value of a variable by 1                       |

### Java Assignment Operators

Assignment operators are used to assign values to variables.

| Operator | Example | Same As     |
| -------- | ------- | ----------- |
| =        | x = 5   | x = 5       |
| +=       | x += 3  | x = x + 3   |
| -=       | x -= 3  | x = x - 3   |
| *=       | x *= 3  | x = x * 3   |
| /=       | x /= 3  | x = x / 3   |
| %=       | x %= 3  | x = x % 3   |
| &=       | x &= 3  | x = x & 3   |
| \|=      | x \|= 3 | x = x \| 3  |
| ^=       | x ^= 3  | x = x ^ 3   |
| >>=      | x >>= 3 | x = x >> 3  |
| <<=      | x <<= 3 | x = x << 3  |

### Java Comparison Operators

Comparison operators are used to compare two values.

| Operator | Name                  | Example |
| -------- | --------------------- | ------- |
| ==       | Equal to              | x == y  |
| !=       | Not equal             | x != y  |
| >        | Greater than          | x > y   |
| <        | Less than             | x < y   |
| >=       | Greater than or equal | x >= y  |
| <=       | Less than or equal    | x <= y  |

### Java Logical Operators

Logical operators are used to determine the logic between variables or values.

| Operator | Name  | Description                                                  |
| -------- | ----- | ------------------------------------------------------------ |
| &&       | and   | Returns true if both statements are true                     |
| \|\|     | or    | Returns true if one of the statements is true                |
| !        | not   | Reverse the result, returns false if the result is true      |

### Java Bitwise Operators

Bitwise operators are used to perform bitwise operations on integers.

| Operator | Name    | Description                                                  |
| -------- | ------- | ------------------------------------------------------------ |
| &        | AND     | Sets each bit to 1 if both bits are 1                        |
| \|       | OR      | Sets each bit to 1 if one of two bits is 1                   |
| ^        | XOR     | Sets each bit to 1 if only one of two bits is 1              |
| ~        | NOT     | Inverts all the bits                                        |
| <<       | Zero fill left shift | Shift left by pushing zeros in from the right and let the leftmost bits fall off |
| >>       | Signed right shift | Shift right by pushing copies of the leftmost bit in from the left, and let the rightmost bits fall off |
| >>>      | Zero fill right shift | Shift right by pushing zeros in from the left, and let the rightmost bits fall off |

### Java Ternary Operator

The ternary operator is shorthand for if-then-else statements.

```java

int time = 20;

String result = (time < 18) ? "Good day." : "Good evening.";

System.out.println(result); // Outputs "Good evening."
```
