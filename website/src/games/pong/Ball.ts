import { GameObject, Vector2 } from 'ts-engine';
import { GameController } from './GameController';
import { PongGame } from './PongGame';

export class Ball extends GameObject {
   private ROOT_2 = Math.sqrt(2);
   private speed: number = 3;
   private velocity = new Vector2(-this.ROOT_2, -this.ROOT_2);

   private size = 15;

   public update(elapsedTime: number) {
      this.transform.position.x += (this.velocity.x * this.speed * elapsedTime) / 30;
      this.transform.position.y += (this.velocity.y * this.speed * elapsedTime) / 30;

      if (this.transform.position.x < -this.size) {
         ++GameController.Instance.score.right;
         this.resetBall();
      } else if (this.transform.position.x > PongGame.WINDOW_WIDTH) {
         ++GameController.Instance.score.left;
         this.resetBall();
      }
   }

   public onCollisionEnter(col: GameObject) {
      this.audio.playClip('boing');

      if (col.name === 'top' || col.name === 'bottom') {
         this.velocity.y *= -1;
      } else if (col.name === 'paddle') {
         this.velocity.x *= -1;
      }
   }

   public resetBall() {
      this.transform.position = new Vector2(PongGame.WINDOW_WIDTH / 2, PongGame.WINDOW_HEIGHT / 2);
      // Set angle of new ball
      this.velocity = new Vector2(-this.ROOT_2, -this.ROOT_2);
   }

   public constructor() {
      super();

      this.name = 'Ball';
      this.transform.size = new Vector2(this.size, this.size);

      this.transform.position = new Vector2(PongGame.WINDOW_WIDTH / 2, PongGame.WINDOW_HEIGHT / 2);
      this.material.color = 'white';
   }
}
