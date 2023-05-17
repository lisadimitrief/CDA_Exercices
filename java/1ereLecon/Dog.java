public class Dog extends Animal{
    
    private String mName;
    private int mAge;
    private boolean mVaccin;
    private String mAction;

    public Dog(String name, int age, boolean vaccin, String action){
        this.mName = name;
        this.mAge = age;
        this.mVaccin = vaccin;
        this.mAction = action;
    }

    public int getAge(){
        return mAge;
    }
    public String getName(){
        return mName;
    }
    public boolean getVaccin(){
        return mVaccin;
    }
    public String getAction(){
        return mAction;
    }
}