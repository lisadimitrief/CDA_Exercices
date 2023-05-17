package perso;
public class App{
    public static void main(String[] args){
        Perso Lyrael = new Perso(120, "Lyrael", "Dragonne", "feu");
        presentation(Lyrael);
    }

    public static void presentation(Perso pseudo){
        String speech = "Je m'appel(le) "+pseudo.getPseudo()+" je suis un(e) "+pseudo.getStatu()+", j'ai "+pseudo.getAge()+" ans et je suis familier(e) avec le(a) "+pseudo.getElement();
        System.out.println(speech);
    }
}