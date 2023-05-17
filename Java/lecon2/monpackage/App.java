import java.io.BufferedReader;
import java.io.InputStreamReader;

/*
 *  BufferedReader -> synchrone
 *                    thread-safe
 *                    lecture de chaine de caractères
 * 
 * Scanner         -> asynchrone
 *                    not-thread-safe  
 *                    lecture de données et possibilité de parsing  
 *
 */

 public class App{
    public static void main(String[] args) throws Exception
    {
        /// BufferedReader ///
        // BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        // System.out.println(br);

        InputStreamReader clavier = new InputStreamReader(System.in);
        BufferedReader entreUtilisateur = new BufferedReader(clavier);
        String name = entreUtilisateur.readLine();
        System.out.println(name);
        entreUtilisateur.close();

        /// Scanner ///
        // Scanner scanner = new Scanner(System.in);
        // int reponse = scanner.nextInt();
        // System.out.println(reponse);
        // scanner.close();
    }
 }