

var window_height = window.innerHeight;

var config = {
    type: Phaser.CANVAS,
    mode:Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    parent: 'maindiv',
    width: "90",
    height:600,
    canvas: document.getElementById('myCustomCanvas'),
    // transparent:true
    
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 100 },
            debug: false,
        }

    },
    scene:{
        preload:preload,
        create:create,
        update:update,
    }

}
var game = new Phaser.Game(config);


