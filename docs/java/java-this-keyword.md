# Java this Keyword

The this keyword can be used to refer current class instance variable. If there is ambiguity between the instance variables and parameters, this keyword resolves the problem of ambiguity.

## Usage of Java this Keyword

There can be a lot of usage of java this keyword. In java, this is a reference variable that refers to the current object.

Usage of java this keyword

Here is given the 6 usage of java this keyword.

1. this can be used to refer current class instance variable.
2. this can be used to invoke current class method (implicitly)
3. this() can be used to invoke current class constructor.
4. this can be passed as an argument in the method call.
5. this can be passed as argument in the constructor call.
6. this can be used to return the current class instance from the method.

### 1) this keyword can be used to refer current class instance variable.

The this keyword can be used to refer the current class instance variable. If there is ambiguity between the instance variables and parameters, this keyword resolves the problem of ambiguity. 

```java
class Student{  
    int rollno;  
    String name;  
    float fee;  
    Student(int rollno,String name,float fee){  
        this.rollno=rollno;  
        this.name=name;  
        this.fee=fee;  
    }  
    void display(){System.out.println(rollno+" "+name+" "+fee);}  
}
```

### 2) this keyword can be used to invoke current class method (implicitly)

The this keyword can also be used to invoke the current class method (implicitly). If you don't use this keyword, compiler automatically adds this keyword while invoking the method. 

```java
class A{  
    void m(){System.out.println("hello m");}  
    void n(){  
        System.out.println("hello n");  
        //m();//same as this.m()  
        this.m();  
    }  
}
```
