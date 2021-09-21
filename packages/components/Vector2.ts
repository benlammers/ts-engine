export class Vector2 {
   public x: number;
   public y: number;

   public constructor(x: number, y: number) {
      this.x = x;
      this.y = y;
   }

   public toString = () => {
      return '(' + this.x + ',' + this.y + ')';
   };
}
