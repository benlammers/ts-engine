import { Game } from './Game';
import { AudioEngine } from './AudioEngine';
import { Material } from './Material';
import { Transform } from './Transform';
import { Text } from './Text';

export class GameObject {
   public id = Object.toString();
   public name: string;

   public transform: Transform;
   public material: Material;
   // @ts-ignore
   public audio: AudioEngine;

   public text: Text[] = [];

   // @ts-ignore
   public game: Game;

   public constructor() {
      this.transform = new Transform();
      this.material = new Material();

      this.name = '';
   }

   public start() {}
   // @ts-ignore
   public update(elapsedTime: number) {}
   // @ts-ignore
   public onCollisionEnter(col: GameObject) {}
   // @ts-ignore
   public onCollisionExit(col: GameObject) {}
}
