class Animal
{
    constructor(name,weight,color)
    {
        this.name=name;
        this.weight=weight;
        this.color=color;
    }
    eat()
    {
        console.log(`${this.name} is eating`);
    }
    sleep()
    {
        console.log(`${this.name} is sleeping`);
    }
    
}

class Dog extends Animal
{
     constructor(name,weight,color,breedname)
     {
         super(name,weight,color);
         this.breedname=breedname;
     }
     featrues()
    {
        console.log(`The breed name of this ${this.name} is ${this.breedname}`);
    }
    run()
    {
        console.log(`${this.name} is ruuning `);
    }
     
}
class Horse extends Animal
{
     constructor(name,weight,color,height)
     {
         super(name,weight,color);
         this.height=height;
         
     }
   
    run()
    {
        console.log(`the ${this.name} is ${this.height}.`);
    }
     
}

let dg=new Dog("Dog","30kg","brown","pug");
dg.eat();
dg.featrues();
dg.run();
dg.sleep();
let hor=new Horse("Horse","40kg","white","6feet");
dg.eat();
dg.run();
dg.sleep();