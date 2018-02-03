var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });
var hero;
var bullet = null;
var cursors;
var enemy;

function preload() {
    game.load.image('background', 'assets/background.png');
    game.load.image('hero', 'assets/hero.png');
    game.load.image('enemy1', 'assets/enemy1.png');
}

function create() {
    hero = game.add.sprite(game.world.centerX, game.world.height - 130, 'hero');
    hero.anchor.setTo(0.5);
    hero.speed = 200;
    game.add.tween(hero).from({ y: hero.y + 200 }, 1000, Phaser.Easing.Circular.Out, true);

    cursors = game.input.keyboard.createCursorKeys();

    enemy = game.add.sprite(game.rnd.integerInRange(100, game.world.width - 100), 60, 'enemy1');
    enemy.anchor.setTo(0.5);
}

function update() {
    if (bullet) {
        bullet.y -= 450 * game.time.physicsElapsed;
        if (bullet.y < 0) {
            bullet.destroy();
            bullet = null;
        } else if (enemy && (bullet.x < enemy.x + 85) && (bullet.x > enemy.x - 85) && (bullet.y < enemy.y + 40)) {
            enemy.destroy();
            bullet.destroy();
            enemy = null;
            bullet = null;
            enemy = game.add.sprite(game.rnd.integerInRange(100, game.world.width - 100), 60, 'enemy1');
            enemy.anchor.setTo(0.5);
            console.log('hit');
        }
    }


    if (cursors.left.isDown) {
        hero.x -= hero.speed * game.time.physicsElapsed;
    }
    else if (cursors.right.isDown) {
        hero.x += hero.speed * game.time.physicsElapsed;
    }
    if (game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)) {
        shot();
    }
}

function shot() {
    if (bullet === null) {
        bullet = game.add.graphics(0, 0);
        bullet.beginFill(0xFF0000, 1);
        bullet.drawCircle(0, 0, 10);
        bullet.x = hero.x;
        bullet.y = hero.y - 110;
    }
}