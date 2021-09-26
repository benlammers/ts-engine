import { Component } from 'ts-engine';
import type { Paddle } from './Paddle';
import type { Ball } from './Ball';

export class PaddleAI extends Component {
   private ball: Ball;

   public constructor(ball: Ball, paddle: Paddle) {
      super();
      this.ball = ball;
      this.gameObject = paddle;
   }

   // Moves the paddle with the goal of having its middle in line with the height of the ball
   public move(atBottom: boolean, atTop: boolean, speed: number, elapsedTime: number) {
      let paddleMidY = this.gameObject.transform.position.y + this.gameObject.transform.size.y / 2;
      let ballMidY = this.ball.transform.position.y + this.ball.transform.size.y / 2;

      if (paddleMidY < ballMidY && !atBottom) {
         // move paddle down
         this.gameObject.transform.position.y += (elapsedTime * speed) / 100;
      } else if (paddleMidY > ballMidY && !atTop) {
         // move the paddle up
         this.gameObject.transform.position.y -= (elapsedTime * speed) / 100;
      }
   }
}
