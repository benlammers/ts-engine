import { GameObject, Vector2 } from 'ts-engine';
import { PongGame } from './PongGame';

export class Center extends GameObject {
   public constructor() {
      super();

      this.name = 'center';

      this.transform.position = new Vector2(PongGame.WINDOW_WIDTH / 2 - 1, 0);

      this.transform.size = new Vector2(2, PongGame.WINDOW_HEIGHT);
      this.material.color = 'lightgray';
      this.transform.depth = -1;
   }
}
