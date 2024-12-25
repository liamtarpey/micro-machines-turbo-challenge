import Phaser from "phaser";

export const GLOBAL_CONFIG = {
    // Game type
    type: Phaser.AUTO,

    // Global settings
    globalSettings: {
        playerSpeed: 200,
        enemySpawnRate: 3,
        difficulty: "normal",
    },

    // 4k resolution
    width: 3840,
    height: 2160,

    // Bg color
    backgroundColor: "#1d1d1d",

    // Scaling
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
    },

    // Physics
    physics: {
        default: "arcade",
        arcade: {
            gravity: {
                y: 300,
            },
            debug: false,
        },
    },

    // Game scenes
    scenes: [],

    // Debug
    debug: true,
};
