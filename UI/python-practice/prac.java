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




