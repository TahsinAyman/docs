# Java Continue Statement

The Java continue statement is used to continue the loop. It continues the current flow of the program and skips the remaining code at the specified condition. In case of an inner loop, it continues the inner loop only.

## Java Continue Statement Example

```java
public class JavaContinueExample {
    public static void main(String[] args) {
        for (int i = 1; i <= 10; i++) {
            if (i == 5) {
                continue;
            }
            System.out.println(i);
        }
    }
}
```

## Java Continue Statement in While Loop

```java
public class JavaContinueExample2 {
    public static void main(String[] args) {
        int i = 1;
        while (i <= 10) {
            if (i == 5) {
                i++;
                continue;
            }
            System.out.println(i);
            i++;
        }
    }
}
```

## Java Continue Statement in do-while Loop

```java
public class JavaContinueExample3 {
    public static void main(String[] args) {
        int i = 1;
        do {
            if (i == 5) {
                i++;
                continue;
            }
            System.out.println(i);
            i++;
        } while (i <= 10);
    }
}
```

## Java Continue Statement in Nested Loop

```java
public class JavaContinueExample4 {
    public static void main(String[] args) {
        for (int i = 1; i <= 3; i++) {
            for (int j = 1; j <= 3; j++) {
                if (i == 2 && j == 2) {
                    continue;
                }
                System.out.println(i + " " + j);
            }
        }
    }
}
```

## Java Continue Statement with Labeled For Loop

```java
public class JavaContinueExample5 {
    public static void main(String[] args) {
        aa:
        for (int i = 1; i <= 3; i++) {
            bb:
            for (int j = 1; j <= 3; j++) {
                if (i == 2 && j == 2) {
                    continue aa;
                }
                System.out.println(i + " " + j);
            }
        }
    }
}
```

## Java Continue Statement with Inner For Loop

```java
public class JavaContinueExample6 {
    public static void main(String[] args) {
        aa:
        for (int i = 1; i <= 3; i++) {
            bb:
            for (int j = 1; j <= 3; j++) {
                if (i == 2 && j == 2) {
                    continue bb;
                }
                System.out.println(i + " " + j);
            }
        }
    }
}
```

## Java Continue Statement with Labeled While Loop

```java
public class JavaContinueExample7 {
    public static void main(String[] args) {
        int i = 1;
        aa:
        while (i <= 3) {
            int j = 1;
            bb:
            while (j <= 3) {
                if (i == 2 && j == 2) {
                    i++;
                    continue aa;
                }
                System.out.println(i + " " + j);
                j++;
            }
            i++;
        }
    }
}
```

## Java Continue Statement with Inner While Loop

```java
public class JavaContinueExample8 {
    public static void main(String[] args) {
        int i = 1;
        aa:
        while (i <= 3) {
            int j = 1;
            bb:
            while (j <= 3) {
                if (i == 2 && j == 2) {
                    j++;
                    continue bb;
                }
                System.out.println(i + " " + j);
                j++;
            }
            i++;
        }
    }
}
```

## Java Continue Statement with Labeled do-while Loop

```java
public class JavaContinueExample9 {
    public static void main(String[] args) {
        int i = 1;
        aa:
        do {
            int j = 1;
            bb:
            do {
                if (i == 2 && j == 2) {
                    i++;
                    continue aa;
                }
                System.out.println(i + " " + j);
                j++;
            } while (j <= 3);
            i++;
        } while (i <= 3);
    }
}
```

## Java Continue Statement with Inner do-while Loop

```java
public class JavaContinueExample10 {
    public static void main(String[] args) {
        int i = 1;
        aa:
        do {
            int j = 1;
            bb:
            do {
                if (i == 2 && j == 2) {
                    j++;
                    continue bb;
                }
                System.out.println(i + " " + j);
                j++;
            } while (j <= 3);
            i++;
        } while (i <= 3);
    }
}
```
