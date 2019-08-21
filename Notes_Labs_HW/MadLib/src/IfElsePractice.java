import java.util.Scanner;

public class IfElsePractice {

    public static void main(String[] args) {
        Scanner userInput = new Scanner(System.in);

/*        // Dog Says Cat Says
        System.out.println("Enter an animal: ");
        String animal = userInput.nextLine();

        if (animal.equals("dog")) {
            System.out.print(" Dog says Woof Woof!");
        }else if(animal.equals("cat")){
            System.out.print("Cat says Meow!");
        }else{
            System.exit(0);
        }*/

        // Guessing Game
/*        System.out.println("Guess a number: ");
        String number = userInput.nextLine();

        if(number.equals("10")){
            System.out.println("Wow!");
        }else
        {
            System.out.println("Nope");
        }*/

        // Grade
        System.out.println("What's you grade: ");
        String number = userInput.nextLine();

        if(number.equals("60")){
            System.out.println("You passed!");
        }else
        {
            System.out.println("You Fail! Maybe next time.");
        }


    }
}


