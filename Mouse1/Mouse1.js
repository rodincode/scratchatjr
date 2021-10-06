/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Mouse1 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("mouse1-a", "./Mouse1/costumes/mouse1-a.svg", {
        x: 50,
        y: 27
      }),
      new Costume("mouse1-b", "./Mouse1/costumes/mouse1-b.svg", {
        x: 65,
        y: 21
      })
    ];

    this.sounds = [new Sound("pop", "./Mouse1/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenGreenFlagClicked() {
    this.stage.vars.songDuration = 60;
    this.direction += 1;
    while (!(Math.round(this.direction) == 90)) {
      this.stage.vars.mouseTimer = this.timer;
      this.direction += 11.846 / this.stage.vars.songDuration;
      yield;
    }
  }
}
