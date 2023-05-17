import java.util.Scanner;

public class App {
    public static void main(String[] args){
        // Cat c = new Cat("Luna", 1, false, "miou");
        // Cat c1 = new Cat("Nova", 1, false, "miaouu");
        // presentation(c1);

        Voiture maVoiture = new Voiture("Volvo", "jaune");
        maVoiture.afficherCouleur();
    };

    // public static void presentation(Cat, chat){
    //     String question = "Bonjour je m'appelle "+chat.getName()+"je suis un chat de "+chat.getAge()+" ans, je "+(chat.getVaccin()?"suis vacciner ! ":"ne suis pas vacciner...")+"Voulez-vous que je miaule ? (y/n)";
    //     boolean continuePresentation = true;

    //     do{
    //         System.out.println(question);
    //         Scanner saisieUtilisateur = new Scanner(System.in);
    //         String resp = saisieUtilisateur.next();

    //         if(resp.equals(anObject:"y")){
    //             System.out.println(chat.getAction());
    //             continuePresentation = false;
    //             saisieUtilisateur.close();
    //         }else if(resp.equals(anObject:"n")){
    //             System.out.println("ok...");
    //             continuePresentation = false;
    //             saisieUtilisateur.close();
    //         }else{
    //             question = "Je n'ai pas compris votre réponse, voulez-vous que je miaule ? (répondez soit y pour oui, soit n pour non)";
    //             continuePresentation = true;
    //         }
    //     }while(continuePresentation);
    // };
}