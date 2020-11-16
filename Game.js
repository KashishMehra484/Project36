class Game {
constructor(){}
  
getState(){
var gameStateRef  = database.ref('gameState');
gameStateRef.on("value",function(data){
gameState = data.val();
})
}

update(state){
database.ref('/').update({
gameState: state
});
}

start(){
if(gameState === 0){
player = new Player();
playerCountRef = await database.ref('playerCount').once("value");
if(playerCount.exist()){
playerCount = playerCountRef.Val();
player.getCount();
}
form = new Form()
form.display();
}
}

play(){
form.hide();
text("GameStart",120,100);
Player.getPlayerInfo();
if(allPlayers!==undefined){
var display_position = 130;
for(var plr in allPlayers){
if (plr==='player'+player.index) {
fill("red")
}
else{
fill("black")  
} 
display_position += 50;
textSize(15)
text(allPlayers[plr].name+":"+allPlayers[plr].distance,120,display_position)
}   
}
if (keyIsDown(UP_ARROW&&player.index!==0)){
player.distance+=50;
player.update();
}
}
}

