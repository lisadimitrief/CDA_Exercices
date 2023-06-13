import java.util.HashSet;
import java.util.LinkedList;
import java.util.Set;
import java.util.List;
import java.util.Arrays;
import java.util.ArrayList;
import java.util.Scanner;

public class Etudiants{
    public static void main(String[] args){
        Scanner scanner = new Scanner(System.in);
        
        ///////EX5///////////
        // Set<String> eleves = new HashSet<>();
        // System.out.println("On commence ? (yes/no)");
        // String ecris = scanner.nextLine();
        // if (ecris.equals("yes")) {
        //     System.out.println("Donne un nom d'élève : ");
        //     while (ecris.equals("stop")==false) {
        //         // System.out.println("Ensuite ? ");
        //         ecris = scanner.nextLine();
        //         if(ecris.equals("stop")){
        //             System.out.println("Dans la classe il y a : ");
        //             for(String el : eleves){
        //             System.out.println(el);
        //             scanner.close();
        //             }
        //         }else{
        //             eleves.add(ecris);
        //         }
        //     }
        // } else {
        //     scanner.close();            
        // }



        //////////EX6///////////////
        // int[] tableau1;
        // tableau1 = new int[]{7, 56, 25, 69 ,62, 35};
        
        // somme(tableau1);



        //////////EX7//////////
            // ArrayList<String> ingredients = new ArrayList<>();
            // ingredients.add("poire");
            // ingredients.add("pomme");
            // ingredients.add("banane");
            // ingredients.add("raisin");

            // listeLongue(ingredients);



        //////EX8////////////
        // LinkedList<Object>maListe = new LinkedList<>();

        // maListe.add("Objet 1");
        // maListe.add("Objet 2");
        // maListe.add("Objet 3");
        // maListe.add("Objet 4");
        // maListe.add("Objet 5");

        // int size = getSize(maListe);
        // System.out.println("Taille de la liste : "+size);


        //////EX9///////////////////////////
            int[] tableauEssai = {0, 1, 3};
            int cible = 2;
            System.out.println(compareValeurTableau(tableauEssai, cible));

    }




    public static void somme(int[] tab){
        int somme = 0;

        for (int i : tab){
            somme = somme + i;
        }
        System.out.println(somme);
    }

    public static void listeLongue(ArrayList<String> list){
        String taille= "";
        for (String test : list) {
            if (test.length() > taille.length()) {
                taille = test;
            }
        }
        System.out.println(taille);
    }

    public static int getSize(LinkedList<Object> linkedList){
        return linkedList.size();
    }

    public static boolean compareValeurTableau(int[] tableauTest2, int number){
        for(int element : tableauTest2){
            if(element == number){
                return true;
            }
        }
        return false;
    }
}

