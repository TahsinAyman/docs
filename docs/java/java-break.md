# Java Break Statement

The Java break statement is used to break loop or switch statement. It breaks the current flow of the program at specified condition. In case of inner loop, it breaks only inner loop.

We can use Java break statement in all types of loops such as for loop, while loop and do-while loop.

## Java Break Statement Example

```java
public class JavaBreakExample {
    public static void main(String[] args) {
        for (int i = 1; i <= 10; i++) {
            if (i == 5) {
                break;
            }
            System.out.println(i);
        }
    }
}
```

## Java Break Statement in While Loop

```java
public class JavaBreakExample2 {
    public static void main(String[] args) {
        int i = 1;
        while (i <= 10) {
            if (i == 5) {
                i++;
                break;
            }
            System.out.println(i);
            i++;
        }
    }
}
```

## Java Break Statement in do-while Loop

```java
public class JavaBreakExample3 {
    public static void main(String[] args) {
        int i = 1;
        do {
            if (i == 5) {
                i++;
                break;
            }
            System.out.println(i);
            i++;
        } while (i <= 10);
    }
}
```

## Java Break Statement in Nested Loop

```java
public class JavaBreakExample4 {
    public static void main(String[] args) {
        aa:
        for (int i = 1; i <= 3; i++) {
            bb:
            for (int j = 1; j <= 3; j++) {
                if (i == 2 && j == 2) {
                    break aa;
                }
                System.out.println(i + " " + j);
            }
        }
    }
}
```

## Java Break Statement in Switch Case

```java
public class JavaBreakExample5 {
    public static void main(String[] args) {
        int number = 20;
        switch (number) {
            case 10:
                System.out.println("10");
                break;
            case 20:
                System.out.println("20");
                break;
            case 30:
                System.out.println("30");
                break;
            default:
                System.out.println("Not in 10, 20 or 30");
        }
    }
}
```

## Java Break Statement with Inner Loop

```java
public class JavaBreakExample6 {
    public static void main(String[] args) {
        for (int i = 1; i <= 3; i++) {
            for (int j = 1; j <= 3; j++) {
                if (i == 2 && j == 2) {
                    break;
                }
                System.out.println(i + " " + j);
            }
        }
    }
}
```

## Java Break Statement with Labeled For Loop

```java
public class JavaBreakExample7 {
    public static void main(String[] args) {
        aa:
        for (int i = 1; i <= 3; i++) {
            bb:
            for (int j = 1; j <= 3; j++) {
                if (i == 2 && j == 2) {
                    break aa;
                }
                System.out.println(i + " " + j);
            }
        }
    }
}
```

## Java Break Statement with Labeled While Loop

```java
public class JavaBreakExample8 {
    public static void main(String[] args) {
        int i = 1;
        aa:
        while (i <= 3) {
            int j = 1;
            bb:
            while (j <= 3) {
                if (i == 2 && j == 2) {
                    break aa;
                }
                System.out.println(i + " " + j);
                j++;
            }
            i++;
        }
    }
}
```

## Java Break Statement with Labeled do-while Loop

```java
public class JavaBreakExample9 {
    public static void main(String[] args) {
        int i = 1;
        aa:
        do {
            int j = 1;
            bb:
            do {
                if (i == 2 && j == 2) {
                    break aa;
                }
                System.out.println(i + " " + j);
                j++;
            } while (j <= 3);
            i++;
        } while (i <= 3);
    }
}
```

## Java Break Statement with Labeled Switch Case

```java
public class JavaBreakExample10 {
    public static void main(String[] args) {
        int number = 20;
        switch (number) {
            case 10:
                System.out.println("10");
                break;
            case 20:
                System.out.println("20");
                break;
            case 30:
                System.out.println("30");
                break;
            default:
                System.out.println("Not in 10, 20 or 30");
        }
    }
}
```

## Java Break Statement with Labeled Inner Loop

```java
public class JavaBreakExample11 {
    public static void main(String[] args) {
        aa:
        for (int i = 1; i <= 3; i++) {
            bb:
            for (int j = 1; j <= 3; j++) {
                if (i == 2 && j == 2) {
                    break aa;
                }
                System.out.println(i + " " + j);
            }
        }
    }
}
```
