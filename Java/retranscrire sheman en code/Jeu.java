public class Jeu {
    public boolean estVide(){
        return question == null;
    }

    public int nombreTotalQuestions(){
        //il faut compter le nombre de question
        return nbrQuestion;
    }

    public String tireQuestion(){
        question.setVisible(false);
        return question;
    }
}
