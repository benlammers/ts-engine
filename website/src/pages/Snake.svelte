<script lang="ts">
    import { afterUpdate } from "svelte"
    import { SnakeGame } from "../games/snake/SnakeGame";
    
    afterUpdate(() => SnakeGame.main())
 </script>
 
<div>
    <canvas id="snake" />
</div>

 
<style>
    div {
        height: 100%;
        width: 100%;
        display: grid;
        justify-content: center;
        align-content: center;
    }

    #snake {
        border: 4px solid black
    }
</style>
 