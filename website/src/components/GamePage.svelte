<script lang="ts">
    import { Link } from "svelte-navigator";
    import Gears from "./Gears.svelte";

    export let title: string;
    let innerWidth;
</script>

<svelte:window bind:innerWidth={innerWidth} />

<div class="game-page">
    <Link to="/">
        <div class="link">
            <div class="gears">
                <Gears width={innerWidth > 1080 ? 8 : innerWidth > 768 ? 12 : 20} speed={16} />
            </div>
            <div class="site-title">TS Engine</div>
        </div>
    </Link>
    <div class="no-game">Cant play games on mobile or small screens</div>   

    <div class="game-container">
        <slot name="game" />
    </div>
    <slot name="game-info" />
</div>

<style lang="scss">
    .game-page {
        display: grid;
        align-content: start;
        justify-items: center;
        row-gap: 2rem;
        padding: 2rem 0;

        @media only screen and (max-width: 1400px) {
            row-gap: 1.2rem;
        }

        @media only screen and (max-width: 650px) {
            padding-bottom: 2rem;
        }
        
        & > :global(a) {
            text-decoration: none;
            justify-self: center;
        }
    }   
        
    .link {
        display: grid;
        width: max-content;
        margin-bottom: 1rem;
    }

    .gears, .site-title {
        grid-row: 1 / 2;
        grid-column: 1 / 2;
        
        color: var(--color-font);        
        align-self: center;
        justify-self: center;
    }

    .gears {
        z-index: -1;
    }

    .site-title {
        font-size: 2rem;
        
        @media only screen and (max-width: 1400px) {
            font-size: 2.4vw;
        }

        @media only screen and (max-width: 1080px) {
            font-size: 3vw;
        }

        @media only screen and (max-width: 768px) {
            font-size: 1.4rem;
        }
    }

    .game-container {
        overflow: hidden;
        box-shadow: var(--shadow-tan--2);
        border: 4px solid var(--color-tan);
        border-radius: 10px;
        
        align-self: center;
        justify-self: center;

        @media only screen and (max-width: 1400px) {
            margin-bottom: 2rem;
        }

        @media only screen and (max-width: 650px) {
            display: none;
        }
    }

    .no-game {
        display: grid;
        align-content: center;
        width: 100%;

        font-size: 1.6rem;
        padding: 4rem;
        text-align: center;
        font-weight: 200;
        background: var(--color-tan);

        @media only screen and (min-width: 651px) {
            display: none;
        }

        @media only screen and (max-width: 450px) {
            padding: 2rem;
        }
    }
</style>