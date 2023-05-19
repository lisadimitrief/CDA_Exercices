package com.perso;

public class Pirate {
    public Pirate(String name)
    {
        this.name = name;
        this.posX = 42;
        this.posY = 42;
    }
    public void move(int x, int y)
    {
        this.posX = x;
        this.posY = y;
        System.out.println("Le pirate se deplace en X:" + this.posX + " et en Y : " + this.posY);
    }
    protected String name;
    protected int posX;
    protected int posY;
}