import { Howl, HowlOptions } from 'howler';

export class AudioEngine {
   private audioClips = new Map<string, Howl>();

   public addClip(clipName: string, clipFileNames: string[], howlOptions?: HowlOptions) {
      let howl = new Howl({
         src: clipFileNames,
         ...howlOptions,
      });

      this.audioClips.set(clipName, howl);
   }

   public playClip(clipName: string) {
      let howl = this.audioClips.get(clipName);
      howl?.play();
   }
}
