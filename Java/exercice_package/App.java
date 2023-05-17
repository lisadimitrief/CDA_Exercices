import com.perso.*;

public class App {
    public static void main(String[] args){
        Pirate p = new Pirate("Luffy");
        p.move(32, 47);

        HommePoisson hp = new HommePoisson("Octy");
        hp.move(69,52);
        hp.swim(55);
    }
}
