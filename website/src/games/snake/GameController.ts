import { GameObject, InputEngine } from 'ts-engine';
import { Snake, SnakeBody } from './Snake';
import { Food } from './Food';
import { Menu } from './Menu';
import { SnakeGame } from './SnakeGame';

export type Difficulty = 'hard' | 'normal' | 'easy';
export type GameState = 'welcome' | 'difficulty' | 'playing';
export type HighScores = {
   hard: number;
   normal: number;
   easy: number;
};

export class GameController extends GameObject {
   private static instance: GameController;

   public static get Instance() {
      return this.instance || (this.instance = new this());
   }

   public start() {
      this.audio.addClip('collect', ['./collect.mp3']);
      this.audio.addClip('die', ['./src/sound/negative_pop.mp3']);
      this.audio.addClip('select', ['./website/src/sound/unlock.mp3']);

      Menu.Instance.showWelcome();
   }

   public difficulty: Difficulty = 'normal';
   private snakeAdded = 3;

   public score: number = 0;
   public highScores: HighScores;

   public playing: boolean = false;

   public state: GameState;

   public update() {
      // Handle Menu
      if (this.state === 'welcome') {
         if (InputEngine.Instance.getKeyDown('Space') || InputEngine.Instance.getKeyDown('Enter')) {
            this.audio.playClip('select');
            Menu.Instance.showDifficulty(this.difficulty, this.highScores[this.difficulty]);
            this.state = 'difficulty';
         }
      } else if (this.state === 'difficulty') {
         if (InputEngine.Instance.getKeyDown('ArrowDown') && GameController.Instance.difficulty !== 'easy') {
            if (this.difficulty === 'normal') this.difficulty = 'easy';
            else this.difficulty = 'normal';
            this.audio.playClip('select');
            Menu.Instance.showDifficulty(this.difficulty, this.highScores[this.difficulty]);
         } else if (InputEngine.Instance.getKeyDown('ArrowUp') && this.difficulty !== 'hard') {
            if (this.difficulty === 'normal') this.difficulty = 'hard';
            else this.difficulty = 'normal';
            this.audio.playClip('select');
            Menu.Instance.showDifficulty(this.difficulty, this.highScores[this.difficulty]);
         } else if (InputEngine.Instance.getKeyDown('Space') || InputEngine.Instance.getKeyDown('Enter')) {
            this.audio.playClip('select');
            this.startGame();
         }
      } else {
         Menu.Instance.showScore(this.score, this.highScores[this.difficulty]);
      }

      if (this.state !== 'welcome' && InputEngine.Instance.getKeyDown('Escape')) {
         this.audio.playClip('select');
         this.endGame();
      }
   }

   public startGame() {
      this.state = 'playing';
      SnakeGame.Instance.addGameObject(new Snake());
      SnakeGame.Instance.addGameObject(new Food());
   }

   public endGame() {
      this.state = 'welcome';
      this.score = 0;
      SnakeGame.Instance.clearGameObjects();
      SnakeGame.Instance.addGameObject(GameController.Instance);
      SnakeGame.Instance.addGameObject(Menu.Instance);
      Menu.Instance.showWelcome();
   }

   public addSnakeTail(head: Snake, tail: SnakeBody | null, total = 1) {
      let newTail = new SnakeBody(tail || head);
      if (tail) tail.setTail(newTail);
      head.setTail(newTail);
      SnakeGame.Instance.addGameObject(newTail);
      if (total !== this.snakeAdded) this.addSnakeTail(head, newTail, total + 1);
   }

   public increaseScore() {
      this.score += 1;
      if (this.score > this.highScores[this.difficulty]) this.updateHighScores();
   }

   private updateHighScores() {
      this.highScores[this.difficulty] = this.score;
      localStorage.setItem('snake_scores', JSON.stringify(this.highScores));
   }

   public constructor() {
      super();
      this.state = 'welcome';
      let storedScores = localStorage.getItem('snake_scores');
      if (storedScores) {
         this.highScores = JSON.parse(storedScores);
      } else
         this.highScores = {
            easy: 0,
            normal: 0,
            hard: 0,
         };
   }
}
