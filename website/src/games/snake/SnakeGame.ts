import { Game } from 'ts-engine';
import { Menu } from './Menu';
import { GameController } from './GameController';

export class SnakeGame extends Game {
   private static instance: SnakeGame;

   public static WINDOW_WIDTH = 600;
   public static WINDOW_HEIGHT = 400;

   public static get Instance() {
      return this.instance;
   }

   public static main() {
      this.instance = new SnakeGame(SnakeGame.WINDOW_WIDTH, SnakeGame.WINDOW_HEIGHT, 'snake');
      SnakeGame.Instance.addGameObject(GameController.Instance);
      SnakeGame.Instance.addGameObject(Menu.Instance);

      SnakeGame.Instance.main();
   }
}

export function startSnake() {
   SnakeGame.main();
}
