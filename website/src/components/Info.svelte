<script>
    import Section from "./Section.svelte";
</script>

<Section bg="var(--color-tan)">
    <h2>Creation</h2>
    <p>Veniam reprehenderit dolor voluptate duis non est fugiat labore. Laborum labore labore ullamco consectetur nisi ut eiusmod cupidatat sunt pariatur consequat laboris voluptate magna. Aliquip ut voluptate ullamco in ullamco velit nulla nulla ad in culpa et qui. Aute dolore dolor voluptate laborum labore et. Veniam reprehenderit dolor voluptate duis non est fugiat labore. Laborum labore labore ullamco consectetur nisi ut eiusmod cupidatat sunt pariatur consequat laboris voluptate magna. Aliquip ut voluptate ullamco in ullamco velit nulla nulla ad in culpa et qui. Aute dolore dolor voluptate laborum labore et.</p>
    <span>npm install ts-engine</span>
</Section>

<style lang="scss">
    span {
        background-color: var(--color-gray);
        font-weight: 400;
        padding: 0.4rem 0.8rem;
        box-shadow: var(--shadow-tan--1);
        font-size: 1.6vw;
        justify-self: center;
        
        @media only screen and (max-width: 1400px) {
            font-size: 2.4vw;
        }
        
        @media only screen and (max-width: 1080px) {
            font-size: 2.2vw;
        }

        @media only screen and (max-width: 768px) {
            font-size: 1.2rem;
        }

        @media only screen and (max-width: 450px) {
            font-size: 1rem;
        }
    }
</style>