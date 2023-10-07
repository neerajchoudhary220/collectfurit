function preload() {
    this.load.image('sky', './assets/bluesky.jpg');
    this.load.spritesheet('busket',
        './assets/busketgroup.png',
        { frameWidth: 215, frameHeight: 130 }
    );
    this.load.image('ground', './assets/platform.png');
    this.load.image('road','./assets/road.jpg');
    this.load.image('star','./assets/star.png');
}
