import { AudioEngine } from './AudioEngine';
import { InputEngine } from './InputEngine';
import { PhysicsEngine } from './PhysicsEngine';
import { RenderEngine } from './RenderEngine';

import { GameObject } from './GameObject';

export class Game {
   private audioEngine: AudioEngine;
   private inputEngine: InputEngine;
   private physicsEngine: PhysicsEngine;
   private renderEngine: RenderEngine;

   private gameObjects: GameObject[] = [];

   private prevFrameStartTime: number;

   public constructor(windowWidth: number, windowHeight: number, canvasId: string, background = 'white') {
      this.audioEngine = new AudioEngine();
      this.inputEngine = InputEngine.Instance;
      this.physicsEngine = new PhysicsEngine();
      this.renderEngine = new RenderEngine(windowWidth, windowHeight, canvasId, background);

      this.prevFrameStartTime = 0;

      this.loop = this.loop.bind(this);
   }

   public clearGameObjects() {
      this.gameObjects = [];
   }

   public addGameObject(gameObject: GameObject) {
      gameObject.game = this;
      gameObject.audio = this.audioEngine;
      this.gameObjects.push(gameObject);
   }

   protected main() {
      for (let gameObject of this.gameObjects) {
         gameObject.start();
      }

      window.requestAnimationFrame(this.loop);
   }

   protected loop(frameStartTime: number) {
      let elapsedTime = frameStartTime - this.prevFrameStartTime;

      this.inputEngine.startFrame();

      for (let gameObject of this.gameObjects) {
         gameObject.update(elapsedTime);
      }

      this.physicsEngine.checkCollisions(this.gameObjects);

      this.renderEngine.renderScene(this.gameObjects);

      this.prevFrameStartTime = frameStartTime;

      window.requestAnimationFrame(this.loop);
   }
}
