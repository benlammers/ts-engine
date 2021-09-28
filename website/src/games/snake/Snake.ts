import { GameObject, Vector2, InputEngine } from 'ts-engine';
import { GameController } from './GameController';
import { SnakeGame } from './SnakeGame';

type Direction = 'up' | 'down' | 'left' | 'right';

export class Snake extends GameObject {
   private isDead: boolean = false;

   private elapsed: number = 0;
   private direction: Direction = 'down';
   private prevDirection: Direction = 'down';

   private addToSnake: boolean = false;

   // First SnakeBody after Snake
   public tailStart: SnakeBody | undefined;
   // SnakeBody at end of Snake
   public tailEnd: SnakeBody | undefined;

   private willHitBarrier() {
      return (
         (this.direction === 'up' && this.transform.position.y - 22 < 0) ||
         (this.direction === 'down' && this.transform.position.y + 25 > SnakeGame.WINDOW_HEIGHT) ||
         (this.direction === 'left' && this.transform.position.x - 22 < 0) ||
         (this.direction === 'right' && this.transform.position.x + 26 > SnakeGame.WINDOW_WIDTH)
      );
   }

   private move() {
      let pastPos = new Vector2(this.transform.position.x, this.transform.position.y);

      if (this.direction === 'up') this.transform.position.y -= 22;
      if (this.direction === 'down') this.transform.position.y += 22;
      if (this.direction === 'left') this.transform.position.x -= 22;
      if (this.direction === 'right') this.transform.position.x += 22;

      this.tailStart && this.tailStart.move(pastPos);
      this.prevDirection = this.direction;
   }

   public update(elapsedTime: number) {
      let delay = GameController.Instance.difficulty === 'easy' ? 300 : GameController.Instance.difficulty === 'normal' ? 200 : 60;

      if (InputEngine.Instance.getKey('ArrowUp') && this.prevDirection !== 'down') this.direction = 'up';
      if (InputEngine.Instance.getKey('ArrowDown') && this.prevDirection !== 'up') this.direction = 'down';
      if (InputEngine.Instance.getKey('ArrowRight') && this.prevDirection !== 'left') this.direction = 'right';
      if (InputEngine.Instance.getKey('ArrowLeft') && this.prevDirection !== 'right') this.direction = 'left';

      this.elapsed += elapsedTime;
      if (this.elapsed > delay && !this.isDead) {
         if (this.willHitBarrier()) this.die();
         else {
            if (this.addToSnake) this.onAddToSnake();
            this.move();
            this.elapsed = this.elapsed - delay;
         }
      }
   }

   private die() {
      this.isDead = true;
      this.material.color = 'black';
      this.audio.playClip('die');
      setTimeout(() => {
         if (this.tailStart) this.tailStart.die(180);
         else GameController.Instance.endGame();
      }, 200);
   }

   public setTail(tail: SnakeBody) {
      if (!this.tailStart) {
         this.tailStart = tail;
         this.tailEnd = tail;
      } else {
         this.tailEnd = tail;
      }
   }

   public onCollectFood() {
      this.audio.playClip('collect');
      GameController.Instance.increaseScore();
      this.addToSnake = true;
   }

   public onAddToSnake() {
      if (this.tailEnd) GameController.Instance.addSnakeTail(this, this.tailEnd);
      else GameController.Instance.addSnakeTail(this, null);
      this.addToSnake = false;
   }

   public onCollisionEnter(col: GameObject) {
      if (col.name === 'food') this.onCollectFood();
      else if (col.name === 'snakebody' && !this.isDead) this.die();
   }

   public constructor() {
      super();

      this.transform.position = new Vector2(4, 3);
      this.transform.size = new Vector2(20, 20);
      this.transform.depth = 3;

      // color-orange
      this.material.color = 'rgba(234, 153, 34, 0.9)';
      this.name = 'snake';
   }
}

export class SnakeBody extends GameObject {
   public tail: SnakeBody | undefined;
   public number: number;

   public move(pos: Vector2) {
      let prevPos = this.transform.position;
      this.transform.position = new Vector2(pos.x, pos.y);
      this.tail && this.tail.move(prevPos);
   }

   public die(delay: number) {
      this.material.color = 'lightgray';

      let newDelay = (delay === 20 && delay) || delay - 10;

      setTimeout(() => {
         if (this.tail) this.tail.die(newDelay);
         else GameController.Instance.endGame();
      }, delay);
   }

   public setTail(tail: SnakeBody) {
      this.tail = tail;
   }

   public constructor(lead: Snake | SnakeBody) {
      super();
      // color-tan
      this.material.color = 'rgba(241, 217, 182, 0.7)';
      this.name = 'snakebody';
      this.number = GameController.Instance.score;
      this.transform.size = new Vector2(lead.transform.size.x, lead.transform.size.y);
      this.transform.position = new Vector2(lead.transform.position.x, lead.transform.position.y);
      this.transform.depth = 2;
   }
}
