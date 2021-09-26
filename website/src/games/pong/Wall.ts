import { GameObject, Vector2 } from 'ts-engine';
import { PongGame } from './PongGame';

type Side = 'top' | 'bottom';

export class Wall extends GameObject {
   public constructor(side: Side) {
      super();

      this.name = side;

      let wallHeight = 10;

      if (side == 'top') this.transform.position = new Vector2(0, 0);
      else this.transform.position = new Vector2(0, PongGame.WINDOW_HEIGHT - wallHeight);

      this.transform.size = new Vector2(PongGame.WINDOW_WIDTH, wallHeight);
      this.material.color = 'white';
   }
}
