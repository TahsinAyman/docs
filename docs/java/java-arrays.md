# Java Arrays

An array is a container object that holds a fixed number of values of a single type. The length of an array is established when the array is created. After creation, its length is fixed.

## Declaring Arrays

To use an array in a program, you must declare a variable to reference the array, and you must specify the type of array the variable can reference. Here is the syntax for declaring an array variable:

```java

dataType[] arrayRefVar;   // preferred way.
or
dataType arrayRefVar[];  // works but not preferred way.

``` 

The style `dataType[] arrayRefVar` is preferred. The style `dataType arrayRefVar[]` comes from the C/C++ language and was adopted in Java to accommodate C/C++ programmers.

## Creating Arrays

You can create an array by using the `new` operator with the following syntax:

```java

arrayRefVar = new dataType[arraySize];

```

The above statement does two things:

- It creates an array using new dataType[arraySize].                          
- It assigns the reference of the newly created array to the variable arrayRefVar.

Declaring an array variable, creating an array, and assigning the reference of the array to the variable can be combined in one statement, as shown below:

```java

dataType[] arrayRefVar = new dataType[arraySize];

```

Alternatively you can create arrays as follows:

```java

dataType[] arrayRefVar = {value0, value1, ..., valuek};

```

The array elements are accessed through the index. Array indices are 0-based; that is, they start from 0 to arrayRefVar.length-1.

## Example

```java

public class TestArray {

   public static void main(String[] args) {
      double[] myList = {1.9, 2.9, 3.4, 3.5};

      // Print all the array elements
      for (int i = 0; i < myList.length; i++) {
         System.out.println(myList[i] + " ");
      }
      
      // Summing all elements
      double total = 0;
      for (int i = 0; i < myList.length; i++) {
         total += myList[i];
      }
      System.out.println("Total is " + total);
      
      // Finding the largest element
      double max = myList[0];
      for (int i = 1; i < myList.length; i++) {
         if (myList[i] > max) max = myList[i];
      }
      System.out.println("Max is " + max);  
   }
}

```

This will produce the following result:

```java

1.9
2.9
3.4
3.5
Total is 11.7
Max is 3.5

```

## Passing Arrays to Methods

You can pass to the method a reference to an array, instead of passing the entire array. This is particularly useful when the data in the array is large.

```java

// Pass array to method
public static void printArray(int[] array) {
   for (int i = 0; i < array.length; i++) {
      System.out.print(array[i] + " ");
   }
}

```

## Returning an Array from a Method

A method may also return an array. For example, the method shown below returns an array that is the reversal of another array:

```java

// Return an array

public static int[] reverse(int[] list) {
   int[] result = new int[list.length];

   for (int i = 0, j = result.length - 1; i < list.length; i++, j--) {
      result[j] = list[i];
   }
   return result;
}

```

## Passing Arrays to Methods

You can pass to the method a reference to an array, instead of passing the entire array. This is particularly useful when the data in the array is large.

```java

// Pass array to method
public static void printArray(int[] array) {
   for (int i = 0; i < array.length; i++) {
      System.out.print(array[i] + " ");
   }
}

```

## Returning an Array from a Method

A method may also return an array. For example, the method shown below returns an array that is the reversal of another array:

```java

// Return an array

public static int[] reverse(int[] list) {
   int[] result = new int[list.length];

   for (int i = 0, j = result.length - 1; i < list.length; i++, j--) {
      result[j] = list[i];
   }
   return result;
}

```

## Passing Arrays to Methods

You can pass to the method a reference to an array, instead of passing the entire array. This is particularly useful when the data in the array is large.

```java

// Pass array to method

public static void printArray(int[] array) {
   for (int i = 0; i < array.length; i++) {
      System.out.print(array[i] + " ");
   }
}

```

## Returning an Array from a Method

A method may also return an array. For example, the method shown below returns an array that is the reversal of another array:

```java

// Return an array

public static int[] reverse(int[] list) {
   int[] result = new int[list.length];

   for (int i = 0, j = result.length - 1; i < list.length; i++, j--) {
      result[j] = list[i];
   }
   return result;
}

```


## References

- [Java Arrays](https://www.tutorialspoint.com/java/java_arrays.htm)
- [Java Arrays](https://www.w3schools.com/java/java_arrays.asp)
- [Java Arrays](https://www.geeksforgeeks.org/arrays-in-java/)
- [Java Arrays](https://www.programiz.com/java-programming/arrays)
- [Java Arrays](https://www.javatpoint.com/array-in-java)
