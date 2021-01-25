const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function preload(){
    
}

function setup(){
   
  
    engine=Engine.create();
    world = engine.world

    drop1=  new Drops(100,0,5)
    drop2 = new Drops(180,10,5)
    drop3=  new Drops(260,00,5)
    drop4 = new Drops(340,100,5)
    drop5 = new Drops(380,150,5)
    drop6 = new Drops(20,100,5)
    drop7 = new Drops(140,100,5)
    drop8 = new Drops(220,0,5)
    drop9 = new Drops(321,0,5)
    drop10 = new Drops(50,0,5)
}

function draw(){
    background(0)
    Engine.update(engine)

    drop1.display();
    drop2.display();
    drop3.display();
    drop4.display();
    drop5.display();
    drop6.display();
    drop7.display();
    drop8.display();
    drop9.display();
    drop10.display();



    if(drop1.body.position.y>height){
        Matter.Body.setPosition(drop1.body,{x:100,y:0})
    }

    if(drop2.body.position.y>height){
        Matter.Body.setPosition(drop2.body,{x:180,y:0})
    }

    if(drop3.body.position.y>height){
        Matter.Body.setPosition(drop3.body,{x:260,y:0})
    }

    if(drop4.body.position.y>height){
        Matter.Body.setPosition(drop4.body,{x:340,y:10})
    }


    if(drop5.body.position.y>height){
        Matter.Body.setPosition(drop5.body,{x:380,y:20})
    }

    if(drop6.body.position.y>height){
        Matter.Body.setPosition(drop6.body,{x:20,y:10})
    }

    if(drop7.body.position.y>height){
        Matter.Body.setPosition(drop7.body,{x:140,y:0})
    }

    if(drop8.body.position.y>height){
        Matter.Body.setPosition(drop8.body,{x:220,y:40})
    }

    if(drop9.body.position.y>height){
        Matter.Body.setPosition(drop9.body,{x:321,y:30})
    }

    if(drop10.body.position.y>height){
        Matter.Body.setPosition(drop10.body,{x:50,y:0})
    }
}   

