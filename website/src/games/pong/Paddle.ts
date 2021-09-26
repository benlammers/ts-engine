import { GameObject, InputEngine, Vector2 } from 'ts-engine';
import type { PaddleAI } from './PaddleAI';
import { PongGame } from './PongGame';


type Side = 'right' | 'left';

export class Paddle extends GameObject {
   private speed = 10;

   private atTop = false;
   private atBottom = false;
   public paddleAI: PaddleAI | undefined;

   private height = 80;
   private width = 20;

   public update(elapsedTime: number) {
      if (this.paddleAI) this.paddleAI.move(this.atBottom, this.atTop, this.speed, elapsedTime);
      else {
         if (InputEngine.Instance.getKey('ArrowDown') && !this.atBottom) {
            this.transform.position.y += (elapsedTime * this.speed) / 20;
         } else if (InputEngine.Instance.getKey('ArrowUp') && !this.atTop) {
            this.transform.position.y -= (elapsedTime * this.speed) / 20;
         }
      }
   }

   public onCollisionEnter(col: GameObject) {
      if (col.name === 'bottom') {
         this.atBottom = true;
      }
      if (col.name === 'top') {
         this.atTop = true;
      }
   }

   public onCollisionExit(col: GameObject) {
      if (col.name === 'bottom') {
         this.atBottom = false;
      }
      if (col.name === 'top') {
         this.atTop = false;
      }
   }

   public constructor(side: Side, paddleAI?: PaddleAI) {
      super();

      this.name = 'paddle';

      let startingHeight = (PongGame.WINDOW_HEIGHT - this.height) / 2;

      if (side == 'right') this.transform.position = new Vector2(PongGame.WINDOW_WIDTH - 30 - this.width, startingHeight);
      else this.transform.position = new Vector2(30, startingHeight);

      this.transform.size = new Vector2(this.width, this.height);
      this.material.color = 'white';

      this.paddleAI = paddleAI;
   }
}
