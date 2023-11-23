

# Java Data Types

## Java Data Types

Variables can store data of different types, and different types can do different things.

Java has the following data types built-in by default, organized by category:

- **Primitive Types**
  - **Numeric**
    - **Integer**
      - byte
      - short
      - int
      - long
    - **Floating Point**
      - float
      - double
  - **Non-Numeric**
    - char
    - boolean
- **Reference Types**
  - String
  - Array
  - Class

## Primitive Types

### Numeric

#### Integer

##### byte

Stores whole numbers from -128 to 127.

```java
byte myByte = 100;
System.out.println(myByte); // Outputs 100
```

##### short

Stores whole numbers from -32,768 to 32,767.

```java
short myShort = 5000;
System.out.println(myShort); // Outputs 5000
```

##### int

Stores whole numbers from -2,147,483,648 to 2,147,483,647.

```java
int myInt = 100000;
System.out.println(myInt); // Outputs 100000
```

##### long

Stores whole numbers from -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807.

```java
long myLong = 15000000000L;
System.out.println(myLong); // Outputs 15000000000
```

#### Floating Point

##### float

Stores floating point numbers, with decimals, such as 19.99 or -19.99.

```java
float myFloatNum = 5.99f;
System.out.println(myFloatNum); // Outputs 5.99
```

##### double

Stores floating point numbers, with decimals, such as 19.99 or -19.99.

```java
double myDoubleNum = 19.99d;
System.out.println(myDoubleNum); // Outputs 19.99
```

### Non-Numeric

#### char

Stores single characters, such as 'a' or 'B'. Char values are surrounded by single quotes.

```java
char myLetter = 'D';
System.out.println(myLetter); // Outputs D
```

#### boolean

Stores values with two states: true or false.

```java

boolean myBool = true;
System.out.println(myBool); // Outputs true
```

## Reference Types

### String

Stores a sequence of characters, such as "Hello".

```java
String myText = "Hello";
System.out.println(myText); // Outputs Hello
```

### Array

Stores a fixed-size sequential collection of elements of the same type.

```java
String[] cars = {"Volvo", "BMW", "Ford", "Mazda"};
System.out.println(cars[0]); // Outputs Volvo
```

### Class

A user-defined blueprint or prototype from which objects are created. It represents the set of properties or methods that are common to all objects of one type.

```java
class MyClass {
  int x = 5;
}
```

## Primitive Types vs. Reference Types

Primitive types are predefined (already defined) in Java. Reference types are created by the programmer and can be anything from a single class to a massive data structure.

Primitive types are passed by value. Reference types are passed by reference.

Primitive types are stored on the stack. Reference types are stored on the heap.

Primitive types are destroyed immediately after the scope is lost. Reference types are destroyed by the garbage collector when they are no longer needed.

## Primitive Types vs. Wrapper Classes

Primitive types are not classes and they do not have methods.

To use methods on primitive types, you must first convert them to wrapper classes.

```java
int myInt = 10;
Integer myIntWrapper = Integer.valueOf(myInt);
System.out.println(myIntWrapper.toString()); // Outputs 10
```

## Type Casting

Type casting is when you assign a value of one primitive data type to another type.

In Java, there are two types of casting:

- Widening Casting (automatically) - converting a smaller type to a larger type size
- byte -> short -> char -> int -> long -> float -> double
- Narrowing Casting (manually) - converting a larger type to a smaller size type
- double -> float -> long -> int -> char -> short -> byte

```java
int myInt = 9;
double myDouble = myInt; // Automatic casting: int to double

System.out.println(myInt); // Outputs 9
System.out.println(myDouble); // Outputs 9.0
```

```java
double myDouble = 9.78;
int myInt = (int) myDouble; // Manual casting: double to int

System.out.println(myDouble); // Outputs 9.78
System.out.println(myInt); // Outputs 9
```
