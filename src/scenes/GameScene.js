import Phaser from 'phaser';

export function preload() {
    this.load.image('bg', 'assets/test.png');
}

export function create() {
    this.add.image(0, 0, 'bg').setOrigin(0, 0);
}

export function update() {}

// export class GameScene extends Phaser.Scene {
//     constructor() {
//         console.log("SUPER");
//         super("GameScene");
//     }

//     init() {
//         console.log("initalised");
//     }

//     preload() {
//         this.load.image("bg", "/assets/test.png");
//     }

//     create() {
//         console.log("FOO");
//         console.log(this.textures.exists("bg")); // Should log `true` if the asset is loaded
//         this.add.image(0, 0, "bg").setOrigin(0, 0);
//     }

//     update() {}
// }
