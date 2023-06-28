public class Quizz {
    public Quizz(double DIFFICULTE_PAR_DEFAUT, double niveau, int score) {
    this.DIFFICULTE_PAR_DEFAUT = 1;
    this.niveau = niveau;
    this.score = score;
    }
    
    public final double DIFFICULTE_PAR_DEFAUT;
    private double niveau;
    private int score;

    public void ajouteScore (double score){
        score++;
    }

    public double niveau (){
        return niveau;
    }

    public int score(){
        return score;
    } 
}
