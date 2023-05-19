package com.perso;

public class HommePoisson extends Pirate{
    public HommePoisson(String name){
        super(name);
        this.posZ = 42;
    }

    public void swim(int x, int y, int z){
        this.posZ = z;
        System.out.println("L'Homme poisson nage en Z: "+this.posZ+", en X: "+x+" et y:"+y); 
    }
    protected int posZ;
}
