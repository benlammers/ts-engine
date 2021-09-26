import { Game } from 'ts-engine';
import { GameController } from './GameController';

export class PongGame extends Game {
   private static instance: PongGame;

   public static WINDOW_WIDTH = 600;
   public static WINDOW_HEIGHT = 400;

   public static get Instance() {
      return this.instance;
   }

   public static main() {
      this.instance = new PongGame(PongGame.WINDOW_WIDTH, PongGame.WINDOW_HEIGHT, 'pong', 'black');
      PongGame.Instance.addGameObject(GameController.Instance);

      PongGame.Instance.main();
   }
}
