import { Component } from './Component';

export class Material extends Component {
   public color: string;

   public constructor(color?: string) {
      super();
      if (color) this.color = color;
      else this.color = 'red';
   }

   public toString() {
      return this.color;
   }
}
