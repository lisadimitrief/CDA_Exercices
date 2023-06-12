import java.util.Scanner;

public class Chat {
    public Chat(String nom, int age, boolean vaccin) {
        this.nom = nom;
        this.age = age;
        this.vaccin = vaccin;
        this.action = "miaaaaouuuu";
    }

    public void demanderMiaulement() {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Voulez-vous entendre le chat miauler ? (y/n) ");
        String reponse = scanner.nextLine();

        if (reponse.equals("y")) {
            System.out.println(action);
            scanner.close();
        } else if (reponse.equals("n")) {
            System.out.println("OK, peut-être une prochaine fois !");
            scanner.close();
        } else {
            System.out.println("Je n'ai pas compris votre réponse");
            demanderMiaulement();
        }
    }

    private String nom;
    private int age;
    private boolean vaccin;
    private String action;
    
    public String getNom() {
        return nom;
    }
    public void setNom(String nom) {
        this.nom = nom;
    }
    
    public int getAge() {
        return age;
    }
    public void setAge(int age) {
        this.age = age;
    }
    
    public boolean getVaccin() {
        return vaccin;
    }
    public void setVaccin(boolean vaccin) {
        this.vaccin = vaccin;
    }

    public String getAction() {
        return action;
    }
}