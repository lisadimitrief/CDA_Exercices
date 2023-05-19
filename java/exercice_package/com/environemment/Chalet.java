package com.environemment;

public class Chalet extends Construction{
    public Chalet(){
        this.nbrPieces = 5;
    }

    public void materiaux(String materiel){
        System.out.println("Le Chalet est construit en "+materiel);
    }

    public void setNbrPieces(int nbr){
        this.nbrPieces = nbr;
    }

    public int getNbrPieces(){
        return nbrPieces;
    }
}