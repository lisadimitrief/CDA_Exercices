package com.environemment;

public class Chateau extends Construction{
    public Chateau(){
        this.nbrPieces = 34;
    }

    public void materiaux(String materiel){
        System.out.println("Le chateau est construit en "+materiel);
    }
}
