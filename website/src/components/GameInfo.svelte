<script lang="ts">
    import GithubIcon from "../components/GithubIcon.svelte";

    export let description: string;
    export let repoURL: string;
 </script>
 
<div class="footer">
    <slot name="controls" />
    <div class="description">
        <p>{description}</p>
        <a href={repoURL} target="_blank" rel="noopener">
            View Source
            <GithubIcon size={2} />
        </a>
    </div>
    <span>Sound effects obtained from <a href="https://www.zapsplat.com" target="_blank" rel="noopener">Zapsplat</a></span>
</div>
 

<style lang="scss">
    .footer {
        display: grid;
        grid-template-columns: max-content 1fr;
        width: 900px;
        justify-self: center;
        column-gap: 4rem;
        row-gap: 2rem;

        @media only screen and (max-width: 1080px) {
            width: 600px;
            row-gap: 4rem;
        }

        @media only screen and (max-width: 650px) {
            width: 100%;
            padding: 2rem 4rem;
            grid-template-columns: 1fr;
            row-gap: 2rem;
        }

        @media only screen and (max-width: 450px) {
            padding: 0 2rem;
        }
        
        span {
            grid-column: 1 / 3;
            font-size: 0.8rem;
            text-align: center;

            @media only screen and (max-width: 650px) {
                grid-column: 1 / 2;
            }

            a {
                text-decoration: none;
                color: var(--color-orange);
            }
        }

        .description {
            display: grid;
            justify-items: center;
            row-gap: 1rem;

            p {
                font-size: 1.6rem;

                @media only screen and (max-width: 1080px) {
                    font-size: 1.4rem;
                }

                @media only screen and (max-width: 650px) {
                    grid-row: 1 / 2;                
                }
            }

            a {
                border: none;
                display: grid;
                grid-template-columns: 1fr max-content;
                align-items: center;
                column-gap: 0.4rem;
                background: var(--color-gray--2);
                padding: 0.2rem 1rem;
                color: var(--color-font);
                text-decoration: none;
                border-radius: 4px;
                box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2);
            }
        }

    }
</style>