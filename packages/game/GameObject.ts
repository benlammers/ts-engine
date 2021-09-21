import { Game } from './Game';
import { AudioEngine } from '../engines/AudioEngine';
import { Material } from '../components/Material';
import { Transform } from '../components/Transform';
import { Text } from '../components/Text';

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

   public toString = () => {
      return this.name;
   };
}
