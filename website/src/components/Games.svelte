<script>
    import { Link } from "svelte-navigator";
    import Section from "./Section.svelte";
</script>


<Section id="games">
    <h2>Games</h2>
    <div class="games">
        <Link to="/snake">
            <div class="card">
                <img src="images/snake.png" alt="Snake start menu" />
            </div>
        </Link>
    </div>
</Section>

<style lang="scss">
    .games {
        display: grid;
        grid-template-columns: 1fr;
        justify-items: center;
        column-gap: 4rem;
        row-gap: 4rem;
        margin-top: 2rem;
        margin-bottom: 4rem;
    }

    .card {
        box-shadow: var(--shadow-tan--2);
        border: 4px solid var(--color-tan);
        border-radius: 10px;
        height: 24rem;
        overflow: hidden;
        max-width: 36rem;
    }
    
    img {
        height: 100%;
        width: 100%;
        object-fit: cover;
    }
    
    @media only screen and (max-width: 1080px) {
        .games {
            column-gap: 4rem;
            padding: 0 8rem;
        }

    }

    @media only screen and (max-width: 768px) {
        .games {
            padding: 0;
            row-gap: 2rem;
            margin-top: 1rem;
            margin-bottom: 2rem;
        }

        .card {
            height: 20rem;
        }
    }
    
    @media only screen and (max-width: 450px) {
        .card {
            height: 16rem;
        }
    }
</style>

