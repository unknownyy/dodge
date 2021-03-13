var player;
var playerImage;
var enemy;
var enemyImage;
var backgroundImage;
var isGameOver;

function preload(){
  playerImage = loadImage('https://i.imgur.com/N5uCbDu.png')
  enemyImage = loadImage('https://i.imgur.com/OdL0XPt.png')
  backgroundImage = loadImage('https://i.imgur.com/aKQOg3G.png')
}

function setup() {
  createCanvas(256, 256)

  isGameOver = false
  player = createSprite(width / 2, height - (playerImage.height/2), 0, 0)
  player.addImage(playerImage)
  enemy = createSprite(width / 2, 0, 0, 0)
  enemy.addImage(enemyImage)
  enemy.rotationSpeed = 4.0

}

function draw() {
 
  if (isGameOver) {
    gameOver()
  } else {
    if (enemy.overlap(player)) {
      isGameOver = true
    }
    background(backgroundImage);

  if (keyDown(RIGHT_ARROW) && player.position.x < width - playerImage.width / 2) {
    player.position.x = player.position.x + 1
  }

  if (keyDown(LEFT_ARROW) && player.position.x > playerImage.width / 2) {
    player.position.x = player.position.x - 1
  }

  enemy.position.y = enemy.position.y + 3

  if (enemy.position.y > height) {
  enemy.position.y = 0
  enemy.position.x = random(5, width - 5)
  }

  if (enemy.overlap(player)) {
    gameOver()
  }


  }

  drawSprites()
}

function gameOver() {
  background(0)
  textAlign(CENTER)
  fill('white')
  text('Score', width / 2, height / 4)
  text('Game Over!', width / 2, height / 2)
  text('Click anywhere to try again', width / 2, (3 * height) / 4)
}

function mouseClicked() {
  if (isGameOver) {
    isGameOver = false
    player.position.x = width / 2
    player.position.y = height - (playerImage.height/2)
    enemy.position.x = width / 2
    enemy.position.y = 0
  }
}
