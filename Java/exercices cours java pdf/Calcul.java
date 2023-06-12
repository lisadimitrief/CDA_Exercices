import java.util.Scanner;

public class Calcul {
    public static void main(String[] args){
        // int nombre = 0;

        // while(nombre<=10){
        //     if(nombre==2 || nombre==4 || nombre==6 || nombre==8 || nombre==10)
        //     {
        //         System.out.println(nombre);
        //     }
        //     nombre ++;
        // }
        // while(nombre<=10){
        //     if(nombre%2==0)
        //     {
        //         System.out.println(nombre);
        //     }
        //     nombre ++;
        // }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //     Scanner scanner = new Scanner(System.in);

    //         System.out.println("entrez la valeur de début : ");
    //         int debut = scanner.nextInt();
    //         System.out.println("entrez la valeur de fin : ");
    //         int fin = scanner.nextInt();
            
    //         if(debut<fin){
    //             while(debut!=fin){
    //                 if(debut%2==0)
    //                 {
    //                     System.out.println(debut);
    //                 }
    //                 debut ++;
    //             }
    //             scanner.close();
    //         }else{
    //             System.out.println("Erreur c'est pas logique, recommence");
    //         }
    // }
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        int prix = Math.random()*1000;
        Scanner scanner = new Scanner(System.in);

        System.out.println("Donne un chiffre : ");
        int chiffre = scanner.nextInt();

        test(chiffre, prix, scanner);

        
    }

    public static void test(int chiffre, double prix, Scanner scanner){
        if(chiffre != prix){
            if(chiffre < prix){
                System.out.println("Plus !");
                chiffre = scanner.nextInt();
            }else{
                System.out.println("Moins !");
                chiffre = scanner.nextInt();
            }
            test(chiffre, prix, scanner);
        }else{
            System.out.println("Bravo c'était "+prix+" !");
            scanner.close();
        }
    }
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////