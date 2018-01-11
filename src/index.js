global.PIXI = require('phaser-ce/build/custom/pixi');
global.p2 = require('phaser-ce/build/custom/p2');
global.Phaser = require('phaser-ce');
import { MenuState } from  './boardGame/js/menu';
import { LevelOneState } from './boardGame/js/level';

let Phaser = global.Phaser;


let game = new Phaser.Game(1000, 600, Phaser.AUTO, 'game_stage');
game.state.add('menu', MenuState, true);
