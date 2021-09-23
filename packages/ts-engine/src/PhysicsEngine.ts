import { GameObject } from './GameObject';
import { Vector2 } from './Vector2';

export class PhysicsEngine {
   private currentCollisions = new CollisionList();

   private within(pos: Vector2, go: GameObject) {
      return (
         pos.x >= go.transform.position.x &&
         pos.x < go.transform.position.x + go.transform.size.x &&
         pos.y >= go.transform.position.y &&
         pos.y < go.transform.position.y + go.transform.size.y
      );
   }

   private colliding(g1: GameObject, g2: GameObject) {
      let ll = g1.transform.position;
      let lr = new Vector2(g1.transform.position.x + g1.transform.size.x - 1, g1.transform.position.y);
      let ul = new Vector2(g1.transform.position.x, g1.transform.position.y + g1.transform.size.y - 1);
      let ur = new Vector2(g1.transform.position.x + g1.transform.size.x - 1, g1.transform.position.y + g1.transform.size.y - 1);

      return this.within(ll, g2) || this.within(lr, g2) || this.within(ul, g2) || this.within(ur, g2);
   }

   private checkAndHandleCollisionEntry(gameObjects: GameObject[]) {
      for (let g1 of gameObjects) {
         for (let g2 of gameObjects) {
            let cp = new CollisionPair(g1, g2);
            if (g1 != g2 && this.colliding(g1, g2) && !this.currentCollisions.has(cp)) {
               g1.onCollisionEnter(g2);
               this.currentCollisions.add(cp);
            }
         }
      }
   }

   private checkAndHandleCollisionExit() {
      let noLongerColliding = new CollisionList();
      for (let cp of this.currentCollisions.list) {
         if (!this.colliding(cp.g1, cp.g2)) {
            noLongerColliding.add(cp);
            cp.g1.onCollisionExit(cp.g2);
         }
      }
      for (let cp of noLongerColliding.list) {
         this.currentCollisions.delete(cp);
      }
   }

   public checkCollisions(gameObjects: GameObject[]) {
      this.checkAndHandleCollisionEntry(gameObjects);
      this.checkAndHandleCollisionExit();
   }
}

class CollisionList {
   private collisions: CollisionPair[];

   public constructor() {
      this.collisions = [];
   }

   public add(cp: CollisionPair) {
      this.collisions.push(cp);
   }

   public delete(cp: CollisionPair) {
      this.collisions = [...this.collisions.filter((colPair) => colPair.g1 !== cp.g1 && colPair.g2 !== cp.g2)];
   }

   public has(cp: CollisionPair) {
      return [...this.collisions.filter((colPair) => colPair.g1 === cp.g1 && colPair.g2 === cp.g2)].length > 0;
   }

   public get list() {
      return this.collisions;
   }
}

class CollisionPair {
   public g1: GameObject;
   public g2: GameObject;

   public constructor(g1: GameObject, g2: GameObject) {
      this.g1 = g1;
      this.g2 = g2;
   }
}
