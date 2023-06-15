public class App {
    public static void main(String[] args){
        Chat Luna = new Chat("Luna", 1, true);
        Chat Nova = new Chat("Nova", 1, false);
        
        presentation(Luna);
        presentation(Nova);
    };

    public static void presentation(Chat Chat){
        System.out.println(
            "Bonjour ! Je m'appelle "+Chat.getNom()+" , j'ai "+Chat.getAge()+" ans et je suis"+(Chat.getVaccin()?" vacciné":"pas vacciné"));
            Chat.demanderMiaulement();
    };
}