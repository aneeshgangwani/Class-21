function isTouching(obj1,obj2){
    if(obj1.x-obj2.x<obj1.width/2+obj2.width/2 && obj2.x-obj1.x<obj2.width/2+obj1.width/2
      && obj1.y-obj2.y<obj1.height/2+obj2.height/2&&obj2.y-obj1.y<obj1.height/2+obj2.height/2){
      return true;
    }else {
      return false;
    }
  
   }
  
    function bounceoff(obj1,obj2){
      if(obj1.x-wall.x<obj1.width/2+wall.width/2 && wall.x-obj1.x<wall.width/2+obj1.width/2){
        obj1.velocityX=obj1.velocityX*-1;
      }
      if(obj1.y-wall.y<obj1.height/2+wall.height/2 && wall.y-obj1.y<wall.height/2+obj1.height/2){
        obj1.velocityY=obj1.velocityY=1;
      }
    }
  
    function collide(obj1,obj2){
      if(obj1.x-obj2.x<obj1.width/2+obj2.width/2 && obj2.x-obj1.x<obj2.width/2+obj1.width/2
        && obj1.y-obj2.y<obj1.height/2+obj2.height/2&&obj2.y-obj1.y<obj1.height/2+obj2.height/2){
        obj1.velocityX=0;
        obj2.velocityX=0;
        obj1.velocityY=0;
        obj2.velocityY=0;
      }
     }