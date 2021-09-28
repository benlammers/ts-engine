import { Component } from './Component';
import { Vector2 } from './Vector2';

export class Text extends Component {
   public position: Vector2;
   public text: string;
   public font: string;
   public color: string | CanvasGradient | CanvasPattern;
   public align: CanvasTextAlign;

   public constructor(
      text: string,
      font: string,
      color: string | CanvasGradient | CanvasPattern,
      align: CanvasTextAlign,
      position: Vector2
   ) {
      super();
      this.position = position;
      this.text = text;
      this.font = font;
      this.color = color;
      this.align = align;
   }
}
