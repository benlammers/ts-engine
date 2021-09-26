import { GameObject, Vector2 } from "ts-engine";

function getRandomInt(min: number, max: number) {
   return Math.floor(Math.random() * (max - min + 1) + min);
}

export class Food extends GameObject {
   public move() {
      let x = getRandomInt(0, 26) * 22 + 4;
      let y = getRandomInt(0, 17) * 22 + 3;
      this.transform.position = new Vector2(x, y);
   }

   public onCollisionEnter(col: GameObject) {
      if (col.name === 'snake' || col.name === 'snakebody') this.move();
   }

   public constructor() {
      super();
      this.name = 'food';
      this.material.color = 'gold';
      this.transform.depth = 1;
      this.transform.size = new Vector2(20, 20);
      this.move();
   }
}
