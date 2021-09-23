export class InputEngine {
   private static instance: InputEngine;

   private keys = new Map<string, KeyChange>();
   private keyEventProcessor: KeyInputProcessor;

   private constructor() {
      this.keyEventProcessor = new KeyInputProcessor();
   }

   public static get Instance() {
      return this.instance || (this.instance = new this());
   }

   public startFrame() {
      // Clear key events from last frame
      this.keys.forEach((kc, code) => {
         kc.currentFrame = false;
         this.keys.set(code, kc);
      });

      for (let ev of this.keyEventProcessor.getEvents()) {
         // Keydown event is repeated when the key is held down
         // Only record first time key is pressed and ignore the rest
         if (ev.type === 'keydown') {
            let kc = this.keys.get(ev.code);
            if (kc !== undefined && kc.state === KeyChange.KEY_DOWN) continue;
         }

         let kc = new KeyChange();
         kc.currentFrame = true;
         if (ev.type === 'keydown') {
            kc.state = KeyChange.KEY_DOWN;
         } else if (ev.type === 'keyup') {
            kc.state = KeyChange.KEY_UP;
         }

         this.keys.set(ev.code, kc);
      }
   }

   public getKey(code: string) {
      let kc = this.keys.get(code);
      if (kc === undefined) return false;
      if (kc.state === KeyChange.KEY_DOWN) return true;
      return false;
   }

   public getKeyDown(code: string) {
      let kc = this.keys.get(code);
      if (kc === undefined) return false;
      if (kc.state === KeyChange.KEY_DOWN && kc.currentFrame) return true;
      return false;
   }

   public getKeyUp(code: string) {
      let kc = this.keys.get(code);
      if (kc === undefined) return false;
      if (kc.state === KeyChange.KEY_UP && kc.currentFrame) return true;
      return false;
   }
}

class KeyChange {
   public static KEY_UP = 0;
   public static KEY_DOWN = 1;

   public state: number | undefined;
   public currentFrame: boolean | undefined;
}

class KeyInputProcessor {
   private events: KeyboardEvent[] = [];

   public keyDown(event: KeyboardEvent) {
      this.events.push(event);
   }

   public keyUp(event: KeyboardEvent) {
      this.events.push(event);
   }

   public constructor() {
      window.addEventListener('keydown', this.keyDown.bind(this), false);
      window.addEventListener('keyup', this.keyUp.bind(this), false);
   }

   public getEvents() {
      let pastEvents = this.events;
      this.events = [];

      return pastEvents;
   }
}
