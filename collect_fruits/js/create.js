function randomXCoordinate() {
    return Math.floor(Math.random() * 500) + 100;
}

function randomYcoordinate() {
    return Math.floor(Math.random() * 300) + 1;

}

function randomePosition(x) {
    random_number = Math.floor(Math.random() * 2) + 0;
    var velocity = 0;
    if (x > 512) {
        velocity = -100;
    } else if (x <= -1) {
        velocity = 100;

    }
    else {
        if (random_number == 0) {
            velocity = -(Math.floor(Math.random() * 100) + 10);
        } else {
            velocity = Math.floor(Math.random() * 100) + 10;
        }
    }
    return velocity;
}

function create() {
    this.add.image(400, 200, 'sky').setScale(3);
    star_0 = this.physics.add.group(({
        key: 'star',
        repeat: -1,
        setXY: { x: randomXCoordinate(), y: randomYcoordinate() }
    }));

    star_1 = this.physics.add.group(({
        key: 'star',
        repeat: -1,
        setXY: { x: randomXCoordinate(), y: randomYcoordinate() }
    }));




    platforms = this.physics.add.staticGroup();
    platforms.create(500, 600, 'ground').setScale(4).refreshBody();
    player = this.physics.add.sprite(100, 10, 'busket');
    player.setBounce(0.4);
    player.setCollideWorldBounds(true);
    player.body.setGravityY(300);
    // stars.setCollideWorldBounds(true);
    // stars.body.setGravityX();

    this.physics.add.collider(player, platforms);
    // this.physics.add.collider(stars,platforms);
    this.anims.create({
        key: 'right',
        frames: this.anims.generateFrameNumbers('busket', { start: 1, end: 3 }),
        frameRate: 10,
        repeat: -1
    });

    this.anims.create({
        key: 'left',
        frames: this.anims.generateFrameNumbers('busket', { start: 3, end: 1 }),
        frameRate: 10,
        repeat: -1
    });

    this.anims.create({
        key: 'turn',
        frames: [{ key: 'busket', frame: 0 }],
        frameRate: 20  // stars.add.group.create({
     
    });
    var score = 0;
    var scoreText;
    scoreText = this.add.text(16, 16, 'Score: 0', { fontSize: '32px', fill: '#fff' });
    this.physics.add.collider(star_0, platforms, ((star) => {
        star.disableBody(true, true);
        if (star_0.countActive(true) === 0) {
            star_0.children.iterate(function (child) {
                child.enableBody(true, child.x, 20, true, true);
            });

           var velocity =  randomePosition(star_0.children.entries[0].x)
            star_0.setVelocityX(velocity);
        }
    }));

    this.physics.add.collider(star_1, platforms, ((star) => {
        star.disableBody(true, true);
        if (star_1.countActive(true) === 0) {
            star_1.children.iterate(function (child) {
                child.enableBody(true, child.x, 20, true, true);
            });

           var velocity =  randomePosition(star_1.children.entries[0].x)
            star_1.setVelocityX(velocity);
        }
    }));


    this.physics.add.overlap(player, star_1, ((platform,star)=>{
        star.disableBody(true,true);
        score+= 10;
        scoreText.setText('Score: ' + score);

        if (star_1.countActive(true) === 0) {
            star_1.children.iterate(function (child) {
                child.enableBody(true, child.x, 20, true, true);
            });

           var velocity =  randomePosition(star_1.children.entries[0].x)
            star_1.setVelocityX(velocity);
        }
    }), null, this);

    this.physics.add.overlap(player, star_0, ((platform,star)=>{
        star.disableBody(true,true);
        score+= 10;
        scoreText.setText('Score: ' + score);
        
        if (star_0.countActive(true) === 0) {
            star_0.children.iterate(function (child) {
                child.enableBody(true, child.x, 20, true, true);
            });

           var velocity =  randomePosition(star_0.children.entries[0].x)
            star_0.setVelocityX(velocity);
        }
    }), null, this);

  



}