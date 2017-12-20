import './index.css';

global.PIXI = require('phaser-ce/build/custom/pixi');
global.p2 = require('phaser-ce/build/custom/p2');
global.Phaser = require('phaser-ce');
let Phaser = global.Phaser;
import SpaceHipster from './spaceGame/js/Base';
import './spaceGame/js/Boot';
import './spaceGame/js/Preload';
import './spaceGame/js/MainMenu';
import './spaceGame/js/Game';

console.log(`running correctly`);


console.log(SpaceHipster);

SpaceHipster.game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO, '');

SpaceHipster.game.state.add('Boot', SpaceHipster.Boot);
//uncomment these as we create them through the tutorial
SpaceHipster.game.state.add('Preload', SpaceHipster.Preload);
SpaceHipster.game.state.add('MainMenu', SpaceHipster.MainMenu);
//SpaceHipster.game.state.add('Game', SpaceHipster.Game);

SpaceHipster.game.state.start('Boot');
