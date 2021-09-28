<script lang="ts">
    import Banner from "../components/Banner.svelte";
    import Games from "../components/Games.svelte";
    import Info from "../components/Info.svelte";

    let innerWidth;
</script>

<svelte:window bind:innerWidth={innerWidth} />

<Banner />
<Info />
<Games />