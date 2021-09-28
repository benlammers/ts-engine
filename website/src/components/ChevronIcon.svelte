<script lang="ts">
    export let direction: "up" | "down" | "right" | "left";

    let rotation;
    if (direction === "up") {
        rotation = 180
    } else if (direction === "down") {
        rotation = 0;
    } else if (direction === "right") {
        rotation = 270;
    } else if (direction === "left") {
        rotation = 90;
    }
</script>

<div width="100%" height="100%" style={`--rotate: ${rotation}deg`}>
    <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.6942 6L12 13.5321L4.30576 6L1 9.23546L12 20L23 9.23546L19.6942 6Z" fill="gray" />
    </svg>
</div>

<style lang="scss">
    div {
        transform: rotate(var(--rotate));
    }
</style>