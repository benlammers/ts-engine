<script lang="ts">
    import { afterUpdate } from "svelte"

    import { SnakeGame } from "../games/snake/SnakeGame";
    import GamePage from "../components/GamePage.svelte";
    import GameInfo from "../components/GameInfo.svelte";
    import Controls from "../components/Controls.svelte";
    
    afterUpdate(() => SnakeGame.main())
 </script>
 
<GamePage>
    <canvas id="snake" slot="game" />
    <GameInfo 
        slot="game-info" 
        description="Snake is an iconic game with its first version created by Gremlin in 1976. It still appears in modern forms such as Slither.io"
        repoURL="https://github.com/benlammers/ts-engine/tree/main/website/src/games/snake"
    >
        <Controls title="Steer Snake" slot="controls" />
    </GameInfo>
</GamePage>