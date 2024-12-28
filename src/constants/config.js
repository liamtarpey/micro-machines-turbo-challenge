import Phaser from 'phaser';
import {preload, create, update} from '../scenes/GameScene';

const SPEED_DOWN = 300;
const SIZES = {
    HEIGHT: 2160,
    WIDTH: 3840,
};

export const GLOBAL_CONFIG = {
    /** Basic game settings */
    type: Phaser.WEBGL,
    parent: 'gameContainer',
    debug: true,

    /** 4k */
    width: SIZES.WIDTH,
    height: SIZES.HEIGHT,

    /** Basic scene functions */
    scene: {
        preload: preload,
        create: create,
        update: update,
    },

    /** Global settings */
    globalSettings: {
        playerSpeed: 200,
        enemySpawnRate: 3,
        difficulty: 'normal',
    },

    /** Bg Color */
    backgroundColor: '#1d1d1d',

    /** Scaling */
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
    },

    /** Physics */
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {
                y: SPEED_DOWN,
            },
            debug: true,
        },
    },
};
