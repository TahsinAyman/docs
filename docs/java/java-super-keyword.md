# Java super Keyword

The super keyword in Java is a reference variable that is used to refer parent class objects. The keyword "super" came into the picture with the concept of Inheritance. It is majorly used in the following contexts:

- Use of super with variables: This scenario occurs when a derived class and base class have same data members. In this case there is a possibility of ambiguity for the JVM. To avoid this ambiguity we use super keyword to refer the immediate parent class instance variable.

- Use of super with methods: When we want to call a method of immediate parent class and that method is overridden by child class, we use super keyword to differentiate between the overridden method and parent class method.

- Use of super with constructors: When we want to call the constructor of immediate parent class, we use super keyword.

## Use of super with variables

```java
class Animal {
    String color = "white";
}
```