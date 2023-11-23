# Java Objects

An object is an instance of a class. It is a physical entity.

An object in Java can contain:

- State
- Behavior
- Identity

### Example

```java
class Student {
    int id;
    String name;
}

class TestStudent1 {
    public static void main(String[] args) {
        Student s1 = new Student();
        System.out.println(s1.id);
        System.out.println(s1.name);
    }
}
```
