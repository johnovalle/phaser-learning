export let MenuState = () => {};

MenuState.prototype = {
  preload() {
    this.load.image('logo','assets/logo.jpg');
    this.load.image('start','assets/start_btn.png');
  },
  create() {
    let logo = this.add.sprite(this.world.centerX,this.world.centerY,'logo');
    logo.anchor.setTo(0.5,0.5);

    let start_btn = this.add.button(this.world.centerX,this.world.centerY+200,'start',this.OnClick,this);
    start_btn.anchor.setTo(0.5,0.5);
  },
  update() {},
  OnClick() {
    console.log("Start Level 1 State");
  },
}

// MenuState.prototype.preload = () => {
//   this.load.image('logo','assets/logo.jpg');
//   this.load.image('start','assets/start_btn.jpg');
// };

// MenuState.prototype.create = () => {
//   let logo = this.add.sprite(this.world.centerX,this.world.centerY,'logo');
//   logo.anchor.setTo(0.5,0.5);

//   let start_btn = this.add.button(this.world.centerX,this.world.centerY+200,'start',this.OnClick,this);
//   start_btn.anchor.setTo(0.5,0.5);
// };

// MenuState.prototype.update = () => {

// };

// MenuState.prototype.OnClick = function(){
//   console.log("Start Level 1 State");
// };
