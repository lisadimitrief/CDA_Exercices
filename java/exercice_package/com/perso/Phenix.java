package com.perso;

public final       class Phenix extends HommePoisson{

    public Phenix(String name)
    {
          // this.name = name;
        super(name);
    }

    public void fly(int x, int y, int z)
    {
       
        swim(x, y, z);
        System.out.println("Le phénix vol en Z: "+z+", en X:"+x+" et y:"+y); 
    }
}