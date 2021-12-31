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
        <GithubIcon size={innerWidth > 768 ? 3.6 : 3 } />
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

        @media only screen and (max-width: 1080px) {
            max-height: 40rem;
        }

        @media only screen and (max-width: 768px) {
            max-height: 32rem;
        }

        @media only screen and (max-width: 450px) {
            max-height: unset;
        }
    }

    .github {
        position: absolute;
        top: 2rem;
        right: 2rem;

        @media only screen and (max-width: 768px) {
            top: 0.8rem;
            right: 0.8rem;
        }
    }

    .gears {
        position: absolute;
        top: 10%;
        left: 30%;
        z-index: -1;

        @media only screen and (max-width: 768px) {
            left: 15%;
        }

        @media only screen and (max-width: 450px) {
            top: 15%; 
            left: -5%;
        }
    }

    h1 {
        position: absolute;
        top: 30%;
        left: 5%;

        width: max-content;
        font-weight: 500;
        font-size: 8vw;

        @media only screen and (max-width: 768px) {            
            font-size: 14vw;
        }

        @media only screen and (max-width: 450px) {            
            font-size: 16vw;
            left: 50%;
            transform: translateX(-50%);
        }
    }

    nav {
        position: absolute;
        bottom: 16%;
        right: 30%;

        @media only screen and (max-width: 450px) {
            left: 50%;
            transform: translateX(-50%);
        }
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

            @media only screen and (max-width: 1080px) {
                font-size: 4vw;
            }

            @media only screen and (max-width: 768px) {
                font-size: 6vw;
            }

            @media only screen and (max-width: 450px) {
                font-size: 8vw;
            }
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
