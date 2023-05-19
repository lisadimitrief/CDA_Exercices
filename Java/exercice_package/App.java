import com.perso.*;

public class App {
    public static void main(String[] args){
        Pirate p = new Pirate("Luffy");
        p.move(32, 47);

        HommePoisson hp = new HommePoisson("Octy");
        hp.swim(69, 52, 55);

        Phenix ph = new Phenix("Marco");
        ph.fly(69, 52, 11);

        Vivant roseNuit = new Vivant("RoseNuit", false, false);
        if(roseNuit.inspAir ==false){
            roseNuit.photosynthese();
        } else {
            roseNuit.respire();
        }
        Vivant eric = new Vivant("Eric", true,true);
        if(eric.inspAir ==false){
            eric.photosynthese();
        } else {
            eric.respire();
        }
    }
}
