import { GameObject } from 'ts-engine';

export class Menu extends GameObject {
   private static instance: Menu;

   public static get Instance() {
      return this.instance || (this.instance = new this());
   }

   // private welcome: Text[];

   // public showWelcome() {
   //    this.text = this.welcome;
   // }

   public constructor() {
      super();
   }
}
