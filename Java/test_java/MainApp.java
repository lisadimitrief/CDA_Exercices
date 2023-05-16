//un commentaire sur une ligne
/*commentaire
 sur plusieurs lignes*/
/*
*base numerique : 
*    décimale (10 -> 0 à 9)
*    binaire (2 -> 0 à 1)
*    octale (8 -> 0 à 7)
*    hexadécimale (16 -> 0 à F)
*
*nombre entier : 
*    12
*    12_333
*    12333
*
*binaire :
*    0b1100011
*    1_100_011
*
*hexadécimale :
*    0xF233
*   \n : retour à la ligne
*   \t : tabulation (met un espace)
*   \r : retour chariot (saute une ligne)
*   \b : retour arrière (supprime le caractère avant)
*   \f : nouvelle page (file)
*
*   Pas de caractères spéciaux, pas d'espace commence par une lettre ou un underscore
*
*/

// public class MainApp 
// {
//     public static void main(String[] args)
//     {
//         int maVariable = 69;
//         System.out.println(maVariable); // raccourci -> sysout
//         maVariable ++;
//         System.out.println(maVariable);
//         autreMethode();
//     }

//     public static void autreMethode()
//     {
//         System.out.println("sweet");
//     }
// }

/////////////////constantes////////////////////////////////////////////////////////////////////////////////////////////////////////////

// public class MainApp 
// {
//     public static void main(String[] args)
//     {
//         final int MAVARIABLE = 69; // on met toujours les constantes en maj et avec "final"
//         System.out.println(MAVARIABLE);
//     }
// }

///////float////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// public class MainApp 
// {
//     public static void main(String[] args)
//     {
//         final float PI = 3.14f; // on met toujours les constantes en maj et avec "final"
//         System.out.println("PI : "+PI);
//     }
// }

///////long////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// public class MainApp 
// {
//     public static void main(String[] args)
//     {
//         final long SOLEIL = 713705L; // on met toujours les constantes en maj et avec "final"
//         System.out.println("regarde a l'envers : "+SOLEIL);
//     }
// }

///////boolean////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

public class MainApp 
{
    public static void main(String[] args)
    {
        final boolean AMOUR = true; // on met toujours les constantes en maj et avec "final"
        System.out.println(AMOUR);
    }
}