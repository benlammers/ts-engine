<script>
    import { Link } from "svelte-navigator";
    import Gears from "./Gears.svelte";

    let innerWidth;
</script>

<svelte:window bind:innerWidth={innerWidth} />

<div class="game-page">
    <header>
        <Link to="/">
            <div class="header-link">
                <div class="gears">
                    <Gears width={innerWidth > 1080 ? 12 : innerWidth > 768 ? 18 : 22} speed={16} />
                </div>
                <div class="header-title">TS Engine</div>
            </div>
        </Link>
    </header>

    <div class="no-game">Cant play games on mobile or small screens</div>   

    <div class="game-container">
        <slot name="game" />
    </div>

    <slot name="controls" />
</div>

<style lang="scss">
    .game-page {
        display: grid;
        height: 100%;
        align-content: start;
    }

    header {
        display: grid;
        padding: 2rem 0;
        width: 100%;
        
        & > :global(a) {
            text-decoration: none;
            justify-self: center;
        }
        
        .header-link {
            display: grid;
            width: max-content;
        }

        .gears, .header-title {
            grid-row: 1 / 2;
            grid-column: 1 / 2;
            
            color: var(--color-font);        
            align-self: center;
            justify-self: center;
        }

        .gears {
            z-index: -1;
        }

        .header-title {
            font-size: 4vw;
        }
    }

    .game-container {
        margin: auto;
        box-shadow: var(--shadow-tan--2);
        border: 4px solid var(--color-tan);
        border-radius: 10px;
        margin: 3rem 0;
        
        align-self: center;
        justify-self: center;

        @media only screen and (max-width: 650px) {
            display: none;
        }
    }

    .no-game {
        display: grid;
        align-content: center;

        font-size: 1.6rem;
        padding: 4rem;
        text-align: center;
        font-weight: 200;

        @media only screen and (min-width: 651px) {
            display: none;
        }
    }
</style>