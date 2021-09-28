<script lang="ts">
    import GearIcon from "./GearIcon.svelte"

    export let width: number;
    export let speed: number;
</script>

<div style={`--width: ${width}vw; --height: ${(width / 4) * 3}vw`}>
    <GearIcon color="var(--color-gray)" {speed} rowStart={1}  columnStart={9} size={21} />
    <GearIcon color="var(--color-tan)" {speed} reverse offset={55} rowStart={17} columnStart={1} size={14} />
    <GearIcon color="var(--color-tan)" {speed} reverse offset={12} rowStart={11}  columnStart={29} size={12} />
</div>

<style lang="scss">
    div {
        display: grid;
        grid-template-columns: repeat(40, 1fr);
        grid-template-rows: repeat(30, 1fr);
        width: var(--width);
        height: var(--height);
    }
</style>
