public class Voiture{
    public Voiture(String Marque, String Couleur){
        this.mMarque = Marque;
        this.mCouleur = Couleur;
    }
    public String mMarque;
    public String mCouleur;

    public void afficherCouleur(){
        System.out.println(this.Couleur);
    }
}