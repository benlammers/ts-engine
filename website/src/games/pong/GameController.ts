import { GameObject, Text, Vector2 } from 'ts-engine';
import { PaddleAI } from './PaddleAI';
import { Center } from './Center';
import { Wall } from './Wall';
import { Paddle } from './Paddle';
import { PongGame } from './PongGame';
import { Ball } from './Ball';

export type Difficulty = 'hard' | 'normal' | 'easy';
export type GameState = 'welcome' | 'difficulty' | 'playing';

export class GameController extends GameObject {
   private static instance: GameController;

   public score = {
      right: 0,
      left: 0,
   };

   public static get Instance() {
      return this.instance || (this.instance = new this());
   }

   public start() {
      // add audio clips
   }

   public state: GameState;

   public update() {
      if (this.state === 'welcome') this.startGame();

      this.text = [
         new Text(
            this.score.left + '  ' + this.score.right,
            '40px monospace',
            'white',
            'center',
            new Vector2(PongGame.WINDOW_WIDTH / 2, 50)
         ),
      ];
   }

   public startGame() {
      this.state = 'playing';

      let ball = new Ball();
      let leftPaddle = new Paddle('left');
      leftPaddle.paddleAI = new PaddleAI(ball, leftPaddle);

      PongGame.Instance.addGameObject(ball);
      PongGame.Instance.addGameObject(new Paddle('right'));
      PongGame.Instance.addGameObject(leftPaddle);
      PongGame.Instance.addGameObject(new Wall('top'));
      PongGame.Instance.addGameObject(new Wall('bottom'));
      PongGame.Instance.addGameObject(new Center());
   }

   public constructor() {
      super();
      this.state = 'welcome';
   }
}
