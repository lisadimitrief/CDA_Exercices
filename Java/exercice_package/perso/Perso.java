package perso;
public class Perso{
    public Perso(int age, String pseudo, String statu, String element){
        this.age = age;
        this.pseudo = pseudo;
        this.statu = statu;
        this.element = element;
    }

    public int age;
    public String pseudo;
    public String statu;
    public String element;

    public int getAge(){
        return age;
    }
    public String getPseudo(){
        return pseudo;
    }
    public String getStatu(){
        return statu;
    }
    public String getElement(){
        return element;
    }

}