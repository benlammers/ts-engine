import { GameObject } from './GameObject';

export class RenderEngine {
   private canvas: HTMLCanvasElement;
   private ctx: CanvasRenderingContext2D;

   private background: string;
   private sceneGraph: GameObject[] = [];

   public constructor(windowWidth: number, windowHeight: number, canvasId: string, background: string) {
      let canvas = <HTMLCanvasElement>document.getElementById(canvasId);

      if (canvas === null) throw new Error('Must add canvas for game to render on');

      canvas.width = windowWidth;
      canvas.height = windowHeight;

      this.canvas = canvas;
      this.ctx = <CanvasRenderingContext2D>canvas.getContext('2d');
      this.background = background;
   }

   public renderScene(gameObjects: GameObject[]) {
      this.sceneGraph = [...gameObjects].sort((g1, g2) => g1.transform.depth - g2.transform.depth);
      this.updateCanvas();
   }

   private renderTransforms() {
      for (let go of this.sceneGraph) {
         this.ctx.fillStyle = go.material.color;
         this.ctx.fillRect(go.transform.position.x, go.transform.position.y, go.transform.size.x, go.transform.size.y);
      }
   }

   private renderText() {
      for (let go of this.sceneGraph) {
         for (let text of go.text) {
            this.ctx.textAlign = text.align;
            this.ctx.font = text.font;
            this.ctx.fillStyle = text.color;
            this.ctx.fillText(text.text, text.position.x, text.position.y);
         }
      }
   }

   private updateCanvas() {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

      this.ctx.fillStyle = this.background;
      this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

      this.renderTransforms();
      this.renderText();
   }
}
