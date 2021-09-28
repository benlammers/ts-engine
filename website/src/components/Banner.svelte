<script lang="ts">
    import * as animateScroll from "svelte-scrollto";
    import Gears from "../components/Gears.svelte"
    import GithubIcon from "./GithubIcon.svelte";

    let innerWidth;
</script>

<svelte:window bind:innerWidth={innerWidth} />

<div class="banner">
    <div class="gears">
        <Gears width={innerWidth > 768 ? 50 : innerWidth > 450 ? 80 : 110} speed={24} />
    </div>

    <a class="github" href="https://github.com/benlammers/ts-engine" target="_blank" rel="noopener">
        <GithubIcon />
    </a>

    <h1>TS Engine</h1>
    <nav>
        <div class="link">
            <a href="#games" on:click={() => animateScroll.scrollTo({element: "#games"})}>
                Games
            </a>
        </div>
    </nav>
</div>

<style lang="scss">
    .banner {
        position: relative;
        height: 100vh;
        width: 100%;

        overflow: hidden;
    }

    .github {
        position: absolute;
        top: 2rem;
        right: 2rem;
    }

    .gears {
        position: absolute;
        top: 10%;
        left: 30%;
        z-index: -1;
    }

    h1 {
        position: absolute;
        top: 30%;
        left: 5%;

        width: max-content;
        font-weight: 500;
        font-size: 8vw;
    }

    nav {
        position: absolute;
        bottom: 16%;
        right: 30%;
    }

    .link {
        width: max-content;
        position: relative;

        & > :global(a) {
            text-decoration: none;
            font-weight: 600;
            font-size: 2.6vw;
            color: #2F2D2A;        
            margin-bottom: 2rem;
        }

        &:after {
            content: "";
            display: block;
            width: calc(100% + 1.3rem);        
            height: 4px;
            background-color: var(--color-orange);
            transform-origin: left;

            position: absolute;
            bottom: -6px;
            transform: scaleX(1);
            opacity: 1;
            animation: link-out 0.3s ease-out forwards;
        }

        &:hover:after {
            opacity: 0;
            transform: scaleX(0);
            animation: link-in 0.3s ease-in forwards;
        } 
    }
    
    @media only screen and (max-width: 1080px) {
        .link > :global(a) {
            font-size: 4vw;
        }
    }

    @media only screen and (max-width: 768px) {
        .github {
            top: 0.8rem;
            right: 0.8rem;
        }

        .gears {
            left: 15%;
        }
            
        h1 {
            font-size: 14vw;
        }

        .link > :global(a) {
            font-size: 6vw;
        }
    }

    @media only screen and (max-width: 450px) {
        .gears {
            top: 15%; 
            left: -5%;
        }
    
        h1 {
            font-size: 16vw;
        }

        h1, nav {
            left: 50%;
            transform: translateX(-50%);
        }

        .link > :global(a) {
            font-size: 8vw;
        }
    }

    @keyframes link-in {
        to { 
            transform: scaleX(1);
            opacity: 1;
        }
    }

    @keyframes link-out {
        to { 
            transform: scaleX(0);
            opacity: 0;
        }
    }
</style>