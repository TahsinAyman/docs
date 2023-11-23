# Java Constructors

A constructor in Java is a special method that is used to initialize objects. The constructor is called when an object of a class is created. It can be used to set initial values for object attributes.

## Syntax

```java
<access_modifier> <class_name>() {
    // constructor body
}
```

## Example

```java
class Student {
    int id;
    String name;

    Student() {
        System.out.println("constructor is invoked");
    }

    public static void main(String[] args) {
        Student s1 = new Student();
    }
}
```

## Java Parameterized Constructor

A constructor that has parameters is known as a parameterized constructor.

## Example

```java
class Student {
    int id;
    String name;

    Student(int i, String n) {
        id = i;
        name = n;
    }

    void display() {
        System.out.println(id + " " + name);
    }

    public static void main(String[] args) {
        Student s1 = new Student(111, "Karan");
        Student s2 = new Student(222, "Aryan");
        s1.display();
        s2.display();
    }
}
```

## Java Default Constructor

A constructor that has no parameter is known as a default constructor.

## Example

```java
class Student {
    int id;
    String name;

    Student() {
        System.out.println("constructor is invoked");
    }

    void display() {
        System.out.println(id + " " + name);
    }

    public static void main(String[] args) {
        Student s1 = new Student();
        Student s2 = new Student();
        s1.display();
        s2.display();
    }
}
```

## Java Copy Constructor

A constructor that copies the values of one object to another is known as a copy constructor. It is used to initialize the values of one object by another object.

## Example

```java
class Student {
    int id;
    String name;

    Student(int i, String n) {
        id = i;
        name = n;
    }

    Student(Student s) {
        id = s.id;
        name = s.name;
    }

    void display() {
        System.out.println(id + " " + name);
    }

    public static void main(String[] args) {
        Student s1 = new Student(111, "Karan");
        Student s2 = new Student(s1);
        s1.display();
        s2.display();
    }
}
```

## Java Constructor Overloading

Constructor overloading in Java is a technique of having more than one constructor with different parameter lists. They are arranged in a way that each constructor performs a different task. They are differentiated by the compiler by the number of parameters in the list and their types.

## Example

```java
class Student {
    int id;
    String name;
    int age;

    Student(int i, String n) {
        id = i;
        name = n;
    }

    Student(int i, String n, int a) {
        id = i;
        name = n;
        age = a;
    }

    void display() {
        System.out.println(id + " " + name + " " + age);
    }

    public static void main(String[] args) {
        Student s1 = new Student(111, "Karan");
        Student s2 = new Student(222, "Aryan", 25);
        s1.display();
        s2.display();
    }
}
```

## Java Constructor Chaining

Constructor chaining is the process of calling one constructor from another constructor with respect to the current object.

## Example

```java
class Student {
    int id;
    String name;
    String city;

    Student(int id, String name) {
        this.id = id;
        this.name = name;
    }

    Student(int id, String name, String city) {
        this(id, name); // now no need to initialize id and name
        this.city = city;
    }

    void display() {
        System.out.println(id + " " + name + " " + city);
    }

    public static void main(String[] args) {
        Student s1 = new Student(111, "Karan");
        Student s2 = new Student(222, "Aryan", "delhi");
        s1.display();
        s2.display();
    }
}
```

## Java Constructor vs Method

| Constructor | Method |
| ----------- | ------ |
| A constructor is used to initialize the state of an object. | A method is used to expose the behavior of an object. |
| A constructor must not have a return type. | A method must have a return type. |
| A constructor is invoked implicitly. | A method is invoked explicitly. |

## Java Constructor vs Setter

| Constructor | Setter |
| ----------- | ------ |
| A constructor is used to initialize the state of an object. | A setter is used to set the value of a field. |
| A constructor is invoked implicitly. | A setter is invoked explicitly. |
| A constructor is used to set the mandatory fields of an object. | A setter is used to set the optional fields of an object. |
