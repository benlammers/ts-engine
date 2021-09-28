<script lang="ts">
    export let bg: string = "transparent";
    export let id: string = "";
</script>

<div style={`--bg: ${bg}`} {id}>
    <slot />
</div>

<style lang="scss">
    div {
        background: var(--bg);
        width: 100%;
        padding: 8rem 10%;

        display: grid;
        row-gap: 4rem;

        @media only screen and (max-width: 1080px) {
            row-gap: 2rem;
            padding: 8rem 4rem;
        }

        @media only screen and (max-width: 768px) {
            row-gap: 1.6rem;
            padding: 4rem 2rem;
        }
    }   
</style>