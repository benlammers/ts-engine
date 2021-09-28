<script>
    import Section from "./Section.svelte";
</script>

<Section bg="var(--color-tan)">
    <h2>Creation</h2>
    <p>During my studies at Queen's University I took a Game Development course taught by Nicholas Graham. In this course we looked at a simple game engine developed using Java and Java AWT. I was intrigued by this and being a web developer decided to translate the Java engine for the web. I used Typescript and browser APIs and this is the result. TS Engine is a very simple engine supporting only text and rectangular shapes. It is by no means robust or complete but has been enjoyable to create.</p>
    <span>npm install ts-engine</span>
</Section>

<style lang="scss">
    span {
        background-color: var(--color-gray--1);
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