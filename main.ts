scene.setBackgroundColor(9)
let lemon = sprites.create(img`
    4 4 4 . . 4 4 4 4 4 . . . . . .
    4 5 5 4 4 5 5 5 5 5 4 4 . . 5 5
    b 4 5 5 1 5 1 1 1 5 5 5 5 5 5 5
    . b 5 5 2 2 1 1 5 5 1 5 5 4 5 5
    . b d 5 2 2 2 5 5 5 5 5 1 5 4 5
    b 4 5 5 2 2 2 5 5 5 5 5 1 5 4 .
    c d 5 5 5 5 5 5 5 5 5 5 5 5 5 4
    c d 4 5 5 5 5 5 5 5 5 5 5 1 5 4
    c 4 5 5 5 d 5 5 5 5 5 5 5 5 5 4
    c 4 d 5 4 5 d 5 5 5 5 5 5 5 5 4
    . c 4 5 5 5 5 d d d 5 5 5 5 5 b
    . c 4 d 5 4 5 d 4 4 d 5 5 5 4 c
    . . c 4 4 d 4 4 4 4 4 d d 5 d c
    . . . c 4 4 4 4 4 4 4 4 5 5 5 4
    . . . . c c b 4 4 4 b b 4 5 4 4
    . . . . . . c c c c c c b b 4 .
`,SpriteKind.Player)
lemon.setPosition(80, 60)
controller.moveSprite(lemon)
lemon.setStayInScreen(true)
game.onUpdateInterval(500, function() {
 sprites.createProjectileFromSide(img`
     . . . . . . . 4 . 4 4 4 4 . 4 .
     . . . . . . 2 4 4 4 4 4 4 4 4 .
     . . . e e e 4 4 2 4 4 4 4 4 4 4
     . . e 2 2 2 2 4 4 2 4 4 4 4 4 .
     . e 2 2 4 4 2 4 4 4 4 4 4 4 . .
     . e 2 4 4 2 4 4 4 4 4 4 4 4 4 4
     e 2 4 2 7 2 4 4 4 4 2 4 4 4 4 .
     e e e 2 2 2 4 4 4 2 2 4 4 4 4 .
     e e e e 2 2 4 4 4 2 2 4 4 4 4 .
     e e e e e 4 2 2 2 4 2 2 e 4 4 .
     e e e e e 2 2 2 7 2 2 2 e c 4 .
     e e e e e e 2 2 2 e 2 e e c . .
     e e e e e e e 2 2 e e e c . . .
     e e e e e e e 2 e e e c . . . .
     e e e e e e e e c c c . . . . .
     . e e e e e e e . . . . . . . .
 `, randint(-10, -50), 50)
}) 