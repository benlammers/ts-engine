import { GameObject, Text, Vector2 } from 'ts-engine';
import type { Difficulty } from './GameController';
import { SnakeGame } from './SnakeGame';

export class Menu extends GameObject {
   private static instance: Menu;

   public static get Instance() {
      return this.instance || (this.instance = new this());
   }

   private welcome: Text[];
   private difficulty: Text[];

   public showWelcome() {
      this.text = this.welcome;
   }

   public showDifficulty(difficulty: Difficulty, highScore: number) {
      let textIndex = difficulty === 'easy' ? 3 : difficulty === 'normal' ? 2 : 1;
      let text = JSON.parse(JSON.stringify(this.difficulty));
      text[textIndex].text = '> ' + this.difficulty[textIndex].text + '  ';
      text[4].text = 'High Score: ' + highScore;
      this.text = text;
   }

   public showScore(score: number, highScore: number) {
      this.text = [
         new Text('Score: ' + score, '20px monospace', 'rgba(0, 0, 0, 0.6)', 'left', new Vector2(10, 24)),
         new Text('High Score: ' + highScore, '12px monospace', 'rgba(0, 0, 0, 0.6)', 'left', new Vector2(10, 42)),
      ];
   }

   public constructor() {
      super();

      this.welcome = [
         new Text(
            'Snake',
            'bold 42px monospace',
            'black',
            'center',
            new Vector2(SnakeGame.WINDOW_WIDTH / 2, SnakeGame.WINDOW_HEIGHT / 2 - 20)
         ),
         new Text(
            'Press Space to Start',
            '20px monospace',
            'gray',
            'center',
            new Vector2(SnakeGame.WINDOW_WIDTH / 2, SnakeGame.WINDOW_HEIGHT / 2 + 15)
         ),
         new Text(
            'Use arrow keys to move',
            '16px monospace',
            'gray',
            'center',
            new Vector2(SnakeGame.WINDOW_WIDTH / 2, SnakeGame.WINDOW_HEIGHT / 2 + 40)
         ),
      ];

      this.difficulty = [
         new Text(
            'Select Difficulty',
            'bold 24px monospace',
            'black',
            'center',
            new Vector2(SnakeGame.WINDOW_WIDTH / 2, SnakeGame.WINDOW_HEIGHT / 2 - 60)
         ),
         new Text('Hard', '20px monospace', 'gray', 'center', new Vector2(SnakeGame.WINDOW_WIDTH / 2, SnakeGame.WINDOW_HEIGHT / 2 - 24)),
         new Text('Normal', '20px monospace', 'gray', 'center', new Vector2(SnakeGame.WINDOW_WIDTH / 2, SnakeGame.WINDOW_HEIGHT / 2)),
         new Text('Easy', '20px monospace', 'gray', 'center', new Vector2(SnakeGame.WINDOW_WIDTH / 2, SnakeGame.WINDOW_HEIGHT / 2 + 24)),
         new Text(
            'High Score: ',
            '14px monospace',
            'gray',
            'center',
            new Vector2(SnakeGame.WINDOW_WIDTH / 2, SnakeGame.WINDOW_HEIGHT / 2 + 54)
         ),
         new Text(
            'Press Space to Select',
            '12px monospace',
            'gray',
            'center',
            new Vector2(SnakeGame.WINDOW_WIDTH / 2, SnakeGame.WINDOW_HEIGHT / 2 + 90)
         ),
      ];
   }
}
