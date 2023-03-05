//link do video:https://youtu.be/wxbRP4WP9ZQ
var menu,click = false, tela = 10,creditos,instrucoes;
var xJogador,yJogador,hit,hit2,hit3,hit4,img,personagem,telafinal,gameover,nomejogo,
bateu= false;
var carimg,img2,i=0,j=0,k=0, r = 0,vida = 3;morreu = false;
var v1 = 2, v2 = 2,v3 = 5,veljogadorX = 2,veljogadorY = 2;
var faixa = [],xV = [], yV = [], qtd = 5;
var xV2 = [], yV2 = [], qtd2 = 11;
var xV3 = [], yV3 = [], qtd3 = 3, vermelho = false, amarelo = false,song,somperdeu,somganhou;
function preload(){
  menu = loadImage("Menu.png");
  instrucoes = loadImage("Imgs/Creditos.png");
  creditos = loadImage("Imgs/Instrucoes.png");
  img = loadImage("Imgs/telagame.png");
  carimg = loadImage("Imgs/car.png");
  img2 = loadImage("Imgs/Caminhao.png");
  personagem = loadImage("Imgs/oldman.png");
  telafinal = loadImage("Imgs/Tela final.png")
  song = loadSound("Sounds/happy.mp3");
  gameover = loadImage("Imgs/GO.png");
  nomejogo = loadImage("Imgs/nomejogo.png")
  }
function setup() {
  createCanvas(400, 400);
  xJogador = 189;
  yJogador = 338;
  hit = false;
  hit2 = false;
  hit3 = false;
  hit4 = false;
  for(i = 0; i < qtd; i++){
  xV3[i] = 284;
  yV3[i] = 38 + (15*i);
  }
  
  for(i = 0; i < qtd; i++){
  xV[i] = 294;
  yV[i] = 270 + (10*i);
  }
  for(i = 0; i < qtd2; i++){
  xV2[i] = 192;
  yV2[i] = 87 + (10*i);
  }
  song.play();
}
function draw(){
  if(tela == 10){
    background(nomejogo)
     }
  else if(tela == 0){
background(menu);
  
     if(mouseX >= 65 && mouseY >=133 && mouseX <= 319 && mouseY <= 202 ){
      noFill();
    strokeWeight(4);
    stroke("yellow")
    rect(65,135,255,68)
    }
    if(mouseX >= 112 && mouseY >=231 && mouseX <= 273 && mouseY <= 273 ){
      noFill();
    strokeWeight(4);
    stroke("yellow")
    rect(112,232,161,42)
    }
    if(mouseX >= 112 && mouseY >=304 && mouseX <= 273 && mouseY <= 347 ){
      noFill();
    strokeWeight(4);
    stroke("yellow")
    rect(112,304,161,42)
    }
}else if(tela == 1){
  background(img)
  noStroke()
  fill("white")
  for (t = 0; t < qtd; t++){
     rect(xV[t],yV[t],70,5);
  }
  for (t = 0; t < qtd2; t++){
     rect(xV2[t],yV2[t],70,5);
  }
  noStroke()
  fill("orange")
  rect(272,29,25,50)
  fill("gray")
  for (t = 0; t < qtd3; t++){
     circle(xV3[t],yV3[t],12);
  }
  fill(99)
  rect(-1,205,401,53);
  r++
  if(r < 135){
    fill("red")
    circle(xV3[0],yV3[0],12);
    vermelho = true;
    amarelo = false;
}
  if(r > 135 && r < 235 ){
    vermelho = false;
    fill("green");
    circle(xV3[2],yV3[2],12);
}
  if(r > 235){
    amarelo = true;
    fill("yellow");
    circle(xV3[1],yV3[1],12);
 }
  if(r == 280){
    r = 0;
  }
  if(bateu == false){
  mover();
  }
  image(carimg,-94 + i,267,130,50);
  image(img2,-146 + k,85,130,53);
  image(personagem,xJogador,yJogador,70,70);
      if(!hit && !hit2 && !hit3){
        k = k + v2;
        i= i + v1;
        
      if(i > 556){
        i = 0;
}
      if(k > 620){
        k = 0;
      }
        if((i == 264 || i == 267) && (vermelho || amarelo)){
      i = i - v1;
    }
    if(k == 190 && (vermelho || amarelo)){
      k = k - v2;
}

}
    if(hit4 && xJogador>=0 && yJogador>=0 && xJogador<=400 && yJogador <=15){
    i = i - v1;
    k = k - v2;
  }
    
    hit = collideRectRect(xJogador + 13 ,yJogador + 5,36,58,-83 + i,272,112,43);
    hit2 = collideRectRect(xJogador + 13 ,yJogador + 5,36,58,-139 + k, 88,122,44);
    hit4 = collideRectRect(0,0,400,15,xJogador + 13 ,yJogador + 5,36,58)
    if ( hit == true || hit2 == true){
      xJogador = 189;
      yJogador = 338;
      vida = vida - 1;

    }else if (hit4 == true){
      textSize(15);
      noStroke();
      fill("black")
      text("NIVEL CONCLUÍDO",155,30);
      text("APERTE ENTER PARA CONTINUAR PARA FASE 2",45,45);
      keyPressed();
      bateu = true;
      }
  fill("black")
  text("VIDAS: "+ vida,320,30)
  if(vida == 0){
    tela = 6;
  }
}

  else if(tela == 2 ){
  background(img)
  noStroke()
  fill("white")
  for (t = 0; t < qtd; t++){
     rect(xV[t],yV[t],70,5);
  }
  for (t = 0; t < qtd2; t++){
     rect(xV2[t],yV2[t],70,5);
  }
  
  noStroke()
  fill("orange")
  rect(272,29,25,50)
  fill("gray")
  for (t = 0; t < qtd3; t++){
     circle(xV3[t],yV3[t],12);
  }
  fill(99)
  rect(-1,205,401,53);
  r++
  if(r < 135){
    fill("red")
    circle(xV3[0],yV3[0],12);
    vermelho = true;
    amarelo = false;
}
  if(r > 135 && r < 235 ){
    vermelho = false;
    fill("green");
    circle(xV3[2],yV3[2],12);
}
  if(r > 235){
    amarelo = true;
    fill("yellow");
    circle(xV3[1],yV3[1],12);
 }
  if(r == 280){
    r = 0;
  }
    if(bateu == false){
  mover();
  }
  image(carimg,-190 + j,143,130,50);
  image(carimg,-94 + i,267,130,50);
  image(img2,-146 + k,85,130,53);
  image(personagem,xJogador,yJogador,70,70);
      if(!hit && !hit2 && !hit3){
        k = k + v2;
        i= i + v1;
        j =  j + v3;

      if(i > 556){
        i = 0;
}
      if(j > 700){
        j = 0;
      }
      if(k > 620){
        k = 0;
      }
        if((i == 264 || i == 267) && (vermelho || amarelo)){
      i = i - v1;
    }
    if(j == 245 && (vermelho|| amarelo)){
      j = j - v3;
    }
    if(k == 190 && (vermelho || amarelo)){
      k = k - v2;
}
}
    if(hit4 && xJogador>=0 && yJogador>=0 && xJogador<=400 && yJogador <=15){
    i = i - v1;
    j = j - v3;
    k = k - v2;
  }
    hit = collideRectRect(xJogador + 13 ,yJogador + 5,36,58,-83 + i,272,112,43);
    hit2 = collideRectRect(xJogador + 13 ,yJogador + 5,36,58,-181 + j, 148,113,43);
    hit3 = collideRectRect(xJogador + 13 ,yJogador + 5,36,58,-139 + k, 88,122,44);
    hit4 = collideRectRect(0,0,400,15,xJogador + 13 ,yJogador + 5,36,58)
    if ( hit == true || hit2 == true || hit3 == true){
      xJogador = 189;
      yJogador = 338;
      vida = vida - 1;

    }else if (hit4 == true){
      keyPressed();
      bateu = true;
      tela = 5
      }
    fill("black")
  text("VIDAS: "+ vida,320,30)
    if(vida == 0){
      tela = 6
    }
    
}else if ( tela == 3){
    background(instrucoes)
    if(mouseX >= 25 && mouseY >= 308 && mouseX <=100 && mouseY <= 375){
      noFill();
      strokeWeight(4);
      stroke(" yellow");
      rect(25,308,77,70);
      }
}else if (tela == 4){
          background(creditos);
    if(mouseX >= 11 && mouseY >= 315 && mouseX <= 83 && mouseY <= 384){
      noFill();
      strokeWeight(4);
      stroke(" yellow");
      rect(11,315,73,69);
      }
}else if(tela == 5){
  background(telafinal)
  vida = 3;
  keyPressed();
}
  else if(tela == 6){
    background(gameover);
    vida = 3;
    keyPressed();
  }
  
}
function mouseClicked(){
  if(tela == 0){
    if(mouseX >= 65 && mouseY >=133 && mouseX <= 319 && mouseY <= 202 ){
      tela = 1
}if(mouseX >= 112 && mouseY >=231 && mouseX <= 273 && mouseY <= 273 ){
  tela = 3;
}if(mouseX >= 112 && mouseY >=304 && mouseX <= 273 && mouseY <= 347 ){
  tela = 4;
}
}if(tela == 3){
  if(mouseX >= 25 && mouseY >= 308 && mouseX <= 100 && mouseY <= 375){
    tela = 0;
  }
}if(tela == 4){
  if(mouseX >= 11 && mouseY >= 315 && mouseX <= 83 && mouseY <= 384){
    tela = 0;
    }
  }
  if(tela == 10){
    tela = 0
  }
}
 function keyPressed(){
  if(keyCode == ENTER && hit4 == true){
  xJogador = 189;
  yJogador = 338;
  bateu = false;
  tela = 2;
}else if(keyCode == SHIFT && tela == 5){
  xJogador = 189;
  yJogador = 338;
  bateu = false;
  tela = 0;
}else if(keyCode == SHIFT && tela == 6){
  xJogador = 189;
  yJogador = 338;
  bateu = false;
  tela = 0;
}else if(keyCode == SHIFT && tela == 10){
  tela = 0;
   }
}
 function mover (){
  if(keyIsDown(UP_ARROW)){
    yJogador = yJogador - veljogadorY;
  }
  if(keyIsDown(DOWN_ARROW)){
    yJogador = yJogador + veljogadorY;
  }
  if(keyIsDown(LEFT_ARROW)){
    xJogador = xJogador - veljogadorX;
  }
  if(keyIsDown(RIGHT_ARROW)){
    xJogador = xJogador + veljogadorX;

  }if(xJogador <= -20){
    xJogador = xJogador + veljogadorX;
    }
    if(xJogador >= 360){
      xJogador = xJogador - veljogadorX;
      }
    if(yJogador <=-10){
      yJogador = yJogador + veljogadorY;
      }
    if(yJogador >=334){
      yJogador = yJogador - veljogadorY;
    }

}






























