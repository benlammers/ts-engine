<script lang="ts">
    import { afterUpdate } from "svelte"
import Controls from "../components/Controls.svelte";
    import GamePage from "../components/GamePage.svelte";
    import { SnakeGame } from "../games/snake/SnakeGame";
    
    afterUpdate(() => SnakeGame.main())
 </script>
 
<GamePage>
    <canvas id="snake" slot="game" />
    <Controls slot="controls" />
</GamePage>    
 