package com.perso;

public class Vivant{
    public Vivant(String name, boolean inspAir, boolean expCo2){
        this.name = name;
        this.inspAir = inspAir;
        this.expCo2 = expCo2;
    }
    public String name;
    public boolean inspAir;
    public boolean expCo2;
    
    public void respire(){
        System.out.println(name+" respire car il inspire de l'air et rejete du CO2.");
    }
    public void photosynthese(){
        System.out.println(name+" fais de la photosynthese car il inspire du CO2 et rejete de l'air.");
    }
}
