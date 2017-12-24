import { RPG, Phaser } from '../Base';
RPG.BattleState = function () {
  "use strict";
  Phaser.State.call(this);

  this.prefab_classes = {
      "background": RPG.TilePrefab.prototype.constructor,
      "rectangle": RPG.Prefab.prototype.constructor,
      "player_unit": RPG.PlayerUnit.prototype.constructor,
      "enemy_unit": RPG.EnemyUnit.prototype.constructor
  };

  this.TEXT_STYLE = {font: "14px Arial", fill: "#FFFFFF"};
};

RPG.BattleState.prototype = Object.create(Phaser.State.prototype);
RPG.BattleState.prototype.constructor = RPG.BattleState;

RPG.BattleState.prototype.init = function (level_data) {
  "use strict";
  this.level_data = level_data;

  this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
  this.scale.pageAlignHorizontally = true;
  this.scale.pageAlignVertically = true;
};

RPG.BattleState.prototype.create = function () {
  "use strict";
  var group_name, prefab_name, player_unit_name, enemy_unit_name;

  // create groups
  this.groups = {};
  this.level_data.groups.forEach(function (group_name) {
      this.groups[group_name] = this.game.add.group();
  }, this);

  // create prefabs
  this.prefabs = {};
  for (prefab_name in this.level_data.prefabs) {
      if (this.level_data.prefabs.hasOwnProperty(prefab_name)) {
          // create prefab
          this.create_prefab(prefab_name, this.level_data.prefabs[prefab_name]);
      }
  }
};

RPG.BattleState.prototype.create_prefab = function (prefab_name, prefab_data) {
  "use strict";
  var prefab;
  // create object according to its type
  if (this.prefab_classes.hasOwnProperty(prefab_data.type)) {
      prefab = new this.prefab_classes[prefab_data.type](this, prefab_name, prefab_data.position, prefab_data.properties);
  }
};
