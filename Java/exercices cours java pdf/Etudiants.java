// import java.util.HashSet;
// import java.util.LinkedList;
// import java.util.Set;
// import java.util.List;
// import javax.swing.text.html.HTMLDocument.Iterator;
// import java.util.Arrays;
// import java.lang.reflect.Array;
// import java.util.ArrayList;
// import java.util.Scanner;
// import java.util.Integer;

import java.util.*;


public class Etudiants{
    public static void main(String[] args){
        // Scanner scanner = new Scanner(System.in);
        
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
            // int[] tableauEssai = {0, 1, 3};
            // int cible = 2;
            // System.out.println(compareValeurTableau(tableauEssai, cible));
        //////EX10///////////////////////
        // ArrayList<String> liste = new ArrayList<>();
        // liste.add("Chocolat");
        // liste.add("Vanille");
        // liste.add("Noisette");
        
        // System.out.println(present(liste, "Noisette")==-1?"-1, Il n'y est pas":("Il se trouve a la position "+present(liste, "Noisette")));
        // System.out.println(present(liste, "Noix")==-1?"-1, Il n'y est pas":("Il se trouve a la position "+present(liste, "Noix")));
        
        ///////EX11////////////////////////
            // int[] tabileau;
            // tabileau = new int[] {69 ,25 ,65 ,263 ,2};
        
            // System.out.println(heyooh(tabileau, 69));
        ///////EX12/////////
            // LinkedList<Integer> ptiteListe = new LinkedList<Integer>();
            // ptiteListe.add(1);
            // ptiteListe.add(2);
            // ptiteListe.add(3);
            // ptiteListe.add(4);
            // ptiteListe.add(5);

            // System.out.println(pair(ptiteListe));

        //////EX13/////////////////////
            // int[] tabileau;
            // tabileau = new int[] {69 ,25 ,65 ,263 ,2};
    }
    
    // public static int[] doctorwho(int[] tab){
    //     for (int i = 0; i < tab.length; i++) {
    //         int reste = tab[i]%i;
    //         if (reste != 0 ) {
    //             remove(tab, tab[i]);
    //         }
    //     }
    // }

    public static LinkedList<Integer> pair(LinkedList<Integer> tableau){
        Iterator<Integer> iterator = tableau.iterator();

        while (iterator.hasNext()) {
             Integer element = iterator.next();
             if (element % 2 == 0) {
                iterator.remove();
             }
        }
        return tableau;
    }

    public static boolean heyooh(int[] tab, int cible){
        Arrays.sort(tab);
        return Arrays.binarySearch(tab, cible) >= 0;
    }

    public static int present(ArrayList<String> list, String cible){
        // boolean existe = list.contains(cible);
        if (list.contains(cible)) {
            // for (int i = 0; i < list.size(); i++) {
            //     if (list.get(i)==cible) {
            //         return i;
            //     }
            // }
                return list.indexOf(cible);
        }
        return -1;
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

