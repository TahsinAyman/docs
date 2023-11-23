
# Java Strings

## Java Strings

Strings are used for storing text.

A String variable contains a collection of characters surrounded by double quotes:

```java

String greeting = "Hello";

```

## String Length

A String in Java is actually an object, which contain methods that can perform certain operations on strings. For example, the length of a string can be found with the length() method:

```java

String txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
System.out.println("The length of the txt string is: " + txt.length());

```

## More String Methods  

There are many string methods available, for example toUpperCase() and toLowerCase():

```java

String txt = "Hello World";
System.out.println(txt.toUpperCase());   // Outputs "HELLO WORLD"
System.out.println(txt.toLowerCase());   // Outputs "hello world"

```

The indexOf() method returns the index (the position) of the first occurrence of a specified text in a string (including whitespace):

```java

String txt = "Please locate where 'locate' occurs!";
System.out.println(txt.indexOf("locate")); // Outputs 7

```

The lastIndexOf() method returns the index of the last occurrence of a specified text:

```java 

String txt = "Please locate where 'locate' occurs!";
System.out.println(txt.lastIndexOf("locate")); // Outputs 21

```

Both the indexOf(), and the lastIndexOf() methods return -1 if the text is not found.

## String Concatenation

The + operator can be used between strings to combine them. This is called concatenation:

```java

String firstName = "John";
String lastName = "Doe";
System.out.println(firstName + " " + lastName);

```

## Special Characters

Because strings must be written within quotes, Java will misunderstand this string, and generate an error:

```java

String txt = "We are the so-called "Vikings" from the north.";

```

The solution to avoid this problem, is to use the backslash escape character.

The backslash (\) escape character turns special characters into string characters:

```java

String txt = "We are the so-called \"Vikings\" from the north.";

```

Other escape characters used in Java:

| Code | Result | Description |
| ---- | ------ | ----------- |
| \\'  | '      | Single quote |
| \\"  | "      | Double quote |
| \\   | \      | Backslash |
| \n   |        | New Line |
| \r   |        | Carriage Return |
| \t   |        | Tab |
| \b   |        | Backspace |
| \f   |        | Form Feed |

## Strings Are Immutable

String are immutable - they cannot be changed.

So, it is not possible to change a single character in a string. To change text within a string, use the replace() method:

```java

String txt = "Hello World";
System.out.println(txt.replace("H", "J")); // Outputs "Jello World"

```

## More Immutable Strings



## String Trim

The trim() method removes whitespace from both sides of a string:

```java

String txt = "       Hello World        ";
System.out.println(txt.trim()); // Outputs "Hello World"

```

## String Format

String format() method returns a formatted string using the given locale, specified format string and arguments.

```java

String name = "John";
int age = 30;
String message = String.format("My name is %s. I am %d years old.", name, age);
System.out.println(message);

```


## String Copy

The copyValueOf() method returns a String that represents the characters of the character array.

```java

char[] myString = {'H', 'e', 'l', 'l', 'o'};

String str = "";
str = str.copyValueOf(myString);
System.out.println("Returned String: " + str);

```

