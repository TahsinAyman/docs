
# Java Variables

Variables are containers for storing data values. In Java, there are different types of variables, for example:

## String

Stores text, such as "Hello". String values are surrounded by double quotes.

```java
String greeting = "Hello";
System.out.println(greeting); // Outputs "Hello"
```

## int

Stores integers (whole numbers), without decimals, such as 123 or -123.

```java
int myNum = 15;
System.out.println(myNum); // Outputs 15
```

## float

Stores floating point numbers, with decimals, such as 19.99 or -19.99.

```java
float myFloatNum = 5.99f; 
System.out.println(myFloatNum); // Outputs 5.99
```

## char

Stores single characters, such as 'a' or 'B'. Char values are surrounded by single quotes.

```java
char myLetter = 'D';
System.out.println(myLetter); // Outputs D
```

## boolean

Stores values with two states: true or false.

```java
boolean myBool = true;
System.out.println(myBool); // Outputs true
```

## byte

Stores whole numbers from -128 to 127.

```java
byte myByte = 100;
System.out.println(myByte); // Outputs 100
```

## short

Stores whole numbers from -32768 to 32767.

```java
short myShort = 5000;
System.out.println(myShort); // Outputs 5000
```

## long

Stores whole numbers from -9223372036854775808 to 9223372036854775807.

```java
long myLong = 15000000000L;
System.out.println(myLong); // Outputs 15000000000
```

## double

Stores floating point numbers, with decimals, such as 19.99 or -19.99 (note the double use of the decimal point).

```java
double myDouble = 19.99d;
System.out.println(myDouble); // Outputs 19.99
```

## Java Identifiers

All Java variables must be identified with unique names. These unique names are called identifiers.

### Identifiers can be short names (like x and y) or more descriptive names (age, sum, totalVolume).

### Note: It is recommended to use descriptive names in order to create understandable and maintainable code:

```java
// Good
int minutesPerHour = 60;

// OK, but not so easy to understand what m actually is
int m = 60;
```

### Java Identifiers - Rules

- All identifiers should begin with a letter (A to Z or a to z), currency character ($) or an underscore (_).
- After the first character, identifiers can have any combination of characters.
- A key word cannot be used as an identifier.
- Most importantly, identifiers are case sensitive.
- Examples of legal identifiers: age, $salary, _value, __1_value.
- Examples of illegal identifiers: 123abc, -salary.

### Java Identifiers - Conventions

- Class names should start with an upper case letter. All other words should have their first letter in upper case. (camelCase)
- If the name consists of more than one word, camelCase is recommended.
- Examples: class MyClass, int myNum, String firstName, void main(), etc.

### Java Variables

A variable is a container which holds the value while the Java program is executed. A variable is assigned with a data type.

### Variable Types

- Local Variables
- Class Variables (Static Variables)
- Instance Variables (Non-static Variables)

### Local Variables

A variable declared inside the body of the method is called local variable. You can use this variable only within that method and the other methods in the class aren't even aware that the variable exists.

A local variable cannot be defined with "static" keyword.

### Class Variables (Static Variables)

A variable declared within the class with static keyword, is called static variable. It cannot be local. You can create a single copy of static variable and share among all the instances of the class. Memory allocation for static variable happens only once when the class is loaded in the memory.

### Instance Variables (Non-static Variables)

A variable declared within the class but outside the body of the method, is called instance variable. It is not declared as static. It is called instance variable because its value is instance specific and is not shared among instances.
