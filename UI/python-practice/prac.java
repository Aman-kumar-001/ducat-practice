//reverse a string 

public class Main{
    public String reversed(String str){
        String rev = " ";
        
        for(int i = str.length() - 1 ; i>=0 ; i--){
            rev += str.charAt(i);
        }
        
       return rev;
        }
        
        
 public static void main(String[] args){
     Main main = new Main();
     String rev = main.reversed("aman");
     System.out.println(rev);
 }
}



//palindrome number 

import java.util.Scanner;

public class Palindrome{
   public static void main(String[] args){
      
      Scanner scanner = new Scanner(System.in);
      
      System.out.println("enter the string");
      String str = scanner.nextLine();
      
       String rev = new StringBuilder(str).reverse().toString();
       
       if (str.equals(rev)) {
            System.out.println("Palindrome");
        } else {
            System.out.println("Not Palindrome");
        }

        // Close the scanner
        scanner.close();
     
   }
}

//or


public class Palindrome {
    public String Checked(String str) {
        String str_new = "";  // Initialize str_new as an empty string
        
        for (int i = str.length() - 1; i >= 0; i--) {
            str_new += str.charAt(i);
        }
        
        if (str.equals(str_new)) {
            return "Palindrome";  // Return the result instead of printing it
        } else {
            return "Not Palindrome";  // Return the result instead of printing it
        }
    }

    public static void main(String[] args) {
        Palindrome check = new Palindrome();
        String result = check.Checked("aman");
        System.out.println(result);  // Print the result
    }
}



//fibonacci series 


import java.util.Scanner;

public class Fibonacci{
    public static void main(String[] args){
        
        Scanner scanner = new Scanner(System.in);
        
        System.out.println("enter the length");
        int num = scanner.nextInt();
        
        int a =0;
        int b = 1;
        
        for(int i=0 ;i<= num ;i++){
            System.out.print(a + " ");
            int sum = a + b ;
            a = b ;
            b = sum ;
            
        }
    }
}

//Factorial of a Number (Iteration)

import java.util.Scanner;

public class Factorial{
    public static void main (String[] args){
        
        Scanner scanner = new Scanner(System.in);
        
        System.out.println("enter the last digit");
        int num = scanner.nextInt();
        int Factorial = 1;
        
        for( int i=1 ; i<=num ; i++){
            Factorial *= i;
        }
        System.out.println(Factorial);
    }
}

//reverse string 

import java.util.Scanner;


public class ReverseString {
    public static void main(String[] args) {
       Scanner scanner = new Scanner(System.in);
       
       System.out.println("enter the String");
       String str = scanner.nextLine();
       String rev = " ";
       
       for( int i=str.length()-1 ; i>=0 ; i--){
           rev += str.charAt(i);
       }
        System.out.println(rev);
    }
}

//or 

public class Main{
    public String reversed(String str){
        String rev = " ";
        
        for(int i = str.length() - 1 ; i>=0 ; i--){
            rev += str.charAt(i);
        }
        
       return rev;
        }
        
        
 public static void main(String[] args){
     Main main = new Main();
     String rev = main.reversed("aman");
     System.out.println(rev);
 }
}




//bubble sort

public class Bubbelsort{
    public static void main(String[] args){
        int[] arr = {5,6,2,7,8};
        for(int i=0 ; i< arr.length - 1 ; i++){
            for(int j =0 ; j < arr.length - i - 1 ; j++){
                if(arr[j] > arr[j + 1]){
                    int temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
         for (int num : arr) System.out.print(num + " ");
    }
}

//or


class Bubble{

}


//star pattern 

// *
// * *
// * * *
// * * * *
// * * * * *



public class pettern{
    static public void main(String[] args){
        int n = 5;
        for(int i=1; i<=n ;i++){
            for(int j=1; j<=i ; j++){
                System.out.print("*");
            }
            System.out.println();
        }
    }
}


//star pattern 2 

// *****
// ****
// ***
// **
// *



public class pattern2{
    public static void main(String[] args){
        int n =5;
        for(int i=5; i>=0 ; i--){
            for(int j=1 ; j<=i ; j++){
                System.out.print("*");
            }
            System.out.println();
        }
    }
}

//     *
//    ***
//   *****
//  *******
// *********


public class Pattern3{
    public static void main(String[] args){
        int n =5;
       
        for(int i=1; i<=n ; i++){
            for(int j=1 ; j<=n - i ; j++){
                System.out.print(" ");
            }
            for(int k=1 ; k <= (2 * i - 1);k++ ){
                System.out.print("*");
            }
            System.out.println();
        }
    }
}


// * * * * * 
//  * * * * 
//   * * * 
//    * * 
//     * 


public class Pattern3{
    public static void main(String[] args){
        int n = 5; // Number of rows
        for (int i = n; i >= 1; i--) {
            for (int j = n; j > i; j--) {
                System.out.print(" ");
            }
            for (int k = 1; k <= i; k++) {
                System.out.print("* ");
            }
            System.out.println();
        }
    }
}
//     * 
//    * * 
//   * * * 
//  * * * * 
// * * * * * 
//  * * * * 
//   * * * 
//    * * 
//     * 


public class Pattern3{
    public static void main(String[] args){
        int n = 5; // Number of rows
        for (int i = 1; i <= n ; i++) {
            for (int j = 1; j <=n-i; j++) {
                System.out.print(" ");
            }
            for (int k = 1; k <= i; k++) {
                System.out.print("* ");
            }
            System.out.println();
            
            
        }
       for (int m = n - 1; m >= 1; m--) {
            for (int q = 1; q <= n - m; q++) {
                System.out.print(" ");
            }
            for (int s = 1; s <= m; s++) {
                System.out.print("* ");
            }
            System.out.println();
        }
    }
}


//or peak elemnt in array 


// class Bubble{
//     public int peak(int[] arr1){
//   int max = Integer.MIN_VALUE;
//     for(int i= 1 ; i<=arr1.length- 1; i++){
//         if(arr[i] >= arr[i-1] && arr[i] >= arr[i + 1]){
//             max = arr[i];
//         }
//     }
//     return max;
        
//     }
// }

  
//   public static void main(String[] args) {
//         Bubble bubble = new Bubble();
//         int peakElement = bubble.peak(new int[]{1, 2, 3, 4, 5});
//         System.out.println("Peak Element: " + peakElement);
//     }
// }

class Bubble {
    public int findPeak(int[] arr1) {
        int max = 0;
        if (arr1.length == 1) return arr1[0]; // Handle single element array

        for (int i = 1; i < arr1.length - 1; i++) {
            if (arr1[i] >= arr1[i - 1] && arr1[i] >= arr1[i + 1]) {
                max = arr1[i]; // Return the first peak element found
            }
        }

        // Check the boundaries if a peak was not found in the middle
        if (arr1[0] >= arr1[1]) return arr1[0]; // Left boundary peak
        if (arr1[arr1.length - 1] >= arr1[arr1.length - 2]) return arr1[arr1.length - 1]; // Right boundary peak

        return max; // Return -1 if no peak is found (though logically, there should be at least one peak)
    }

    public static void main(String[] args) {
        Bubble bubble = new Bubble();
        int peakElement = bubble.findPeak(new int[]{1, 210, 3, 4, 5 ,910});
        System.out.println("Peak Element: " + peakElement);
    }
}



//Program to find the minimum (or maximum) element of an array


class MaxMin {
    public int[] findMinMax(int[] arr12) {
        int max = Integer.MIN_VALUE;
        int min = Integer.MAX_VALUE;

        for (int i = 0; i < arr12.length; i++) {
            if (arr12[i] > max) {
                max = arr12[i];
            }
            if (arr12[i] < min) {
                min = arr12[i];
            }
        }
        return new int[]{min, max};  // Returning an array with min and max values
    }

    public static void main(String[] args) {
        MaxMin mm = new MaxMin();
        int[] result = mm.findMinMax(new int[]{1, 2, 3, 4, 5});
        System.out.println("min = " + result[0] + ", max = " + result[1]);
    }
}




