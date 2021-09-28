import { Vector2 } from './Vector2';
import { Component } from './Component';

export class Transform extends Component {
   public position: Vector2;
   public size: Vector2;
   public depth: number;

   public constructor() {
      super();
      this.position = new Vector2(0, 0);
      this.size = new Vector2(0, 0);
      this.depth = 0;
   }
}
