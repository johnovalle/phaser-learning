import './index.css';


//let Phaser = global.Phaser;
console.log("phaser in index", Phaser);
import { SpaceHipster, Phaser } from './spaceGame/js/Base';
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
