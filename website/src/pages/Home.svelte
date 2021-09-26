<script lang="ts">
    import * as animateScroll from "svelte-scrollto";
    import { Link } from "svelte-navigator";
    import GearIcon from "../icons/GearIcon.svelte"
</script>

<div class="banner">
    <div class="gear"><GearIcon color="rgba(229,229,229, 0.5)" size="lg" speed={24} /></div>
    <div class="gear"><GearIcon color="rgba(241,217,182, 0.5)" size="sm"  speed={24} reverse offset={63} /></div>
    <div class="gear"><GearIcon color="rgba(241,217,182, 0.5)" size="sm"  speed={24} reverse offset={58} /></div>

    <h1>TS Engine</h1>
    <nav>
        <div class="link" id="games">
            <a href="#games" on:click={() => animateScroll.scrollTo({element: "#games"})}>
                Games
            </a>
        </div>
    </nav>
</div>

<div class="content">
    <div class="creation">
        <h2>Creation of TS Engine</h2>
        <p>Veniam reprehenderit dolor voluptate duis non est fugiat labore. Laborum labore labore ullamco consectetur nisi ut eiusmod cupidatat sunt pariatur consequat laboris voluptate magna. Aliquip ut voluptate ullamco in ullamco velit nulla nulla ad in culpa et qui. Aute dolore dolor voluptate laborum labore et.</p>
    </div>
    <span>TS Engine gives credit to Nicholas Graham for architecture design</span>
</div>
<div class="games" id="games">
    <h2>Games</h2>
    <div class="games-list">
        <Link to="/snake">
            <div class='game-card snake'>
                
            </div>
        </Link>
        <Link to="/pong">
            <div class='game-card pong'>

            </div>
        </Link>
    </div>
</div>


<style>
    .banner {
        height: 67vw;
        width: 100%;

        display: grid;

        grid-template-rows: repeat(50, 2%);
        grid-template-columns: repeat(50, 2%);
    }
    
    .banner > .gear:nth-child(1) {
        grid-row: 4 / span 1;
        grid-column: 22 / span 1;
    }

    .banner > .gear:nth-child(2) {
        grid-row: 19 / span 1;
        grid-column: 17 / span 1;
    }

    .banner > .gear:nth-child(3) {
        grid-row: 12 / span 1;
        grid-column: 35 / span 1;
    }

    .gear {
        z-index: -1;
    }

    h1 {
        font-weight: 500;
        font-size: 8vw; 
        width: max-content;
        grid-row: 12 / span 1;
        grid-column: 6 / span 1;
    }

    h2 {
        font-weight: 400;
        font-size: 4vw;
        padding-bottom: 2rem;
    }

    .content {
        margin-top: -20vw;
        width: 100%;
    }

    .creation {
        background: rgba(241,217,182, 0.5);
        text-align: center;
        padding: 6rem 10vw;
    }

    p {
        line-height: 1.6;
    }

    span {
        text-align: center;
        padding: 1rem;
        width: 100%;
        display: block;
        background: rgba(229,229,229, 0.5);
    }

    .games {
        text-align: center;
        padding: 6rem 10vw;
        height: 100rem;
    }

    .games-list {
        display: grid;
        grid-template-columns: 1fr 1fr;
        column-gap: 2rem;
    }

    .game-card {
        width: 40vw;
        height: 20rem;
        background: red;
    }

    nav {
        grid-row: 28 / span 1;
        grid-column: 32 / span 1;
    }

    .link {
        width: max-content;
        position: relative;
    }
    
    .link > :global(a) {
        text-decoration: none;
        font-weight: 600;
        font-size: 2.6vw;
        color: #2F2D2A;        
        margin-bottom: 2rem;
    }

    .link:after {
        content: "";
        display: block;
        width: calc(100% + 1.3rem);        
        height: 4px;
        background-color: rgba(234, 153, 34, 0.8);
        transform-origin: left;

        position: absolute;
        bottom: -6px;
        transform: scaleX(1);
        opacity: 1;
        animation: link-out 0.3s ease-out forwards;
    }
    
    .link:hover:after {
        opacity: 0;
        transform: scaleX(0);
        animation: link-in 0.3s ease-in forwards;
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


    @media only screen and (max-width: 768px) {
        .content {
            margin-top: -16vw;
        }

        h1 {
            font-size: 10vw;
        }

        .link > :global(a) {
            font-size: 4vw;
        }

        nav {
            grid-row: 30 / span 1;
            grid-column: 32 / span 1;
        }

        .banner > .gear:nth-child(1) {
            grid-row: 6 / span 1;
            grid-column: 19 / span 1;
        }

        .banner > .gear:nth-child(2) {
            grid-row: 21 / span 1;
            grid-column: 14 / span 1;
        }

        .banner > .gear:nth-child(3) {
            grid-row: 14 / span 1;
            grid-column: 32 / span 1;
        }
    }
</style>