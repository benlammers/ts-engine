<script lang="ts">
    export let size: "lg" | "sm" = "sm";
    export let color: string;
    export let speed: number;
    export let offset: number = 0;
    export let reverse: boolean = false;

    let width;
    let height;

    let smfactor = 1.2;
    let lgfactor = 2;

    let smW = 13.4 * smfactor;
    let smH = 13.8 * smfactor

    let lgW = 13.4 * lgfactor
    let lgH = 13.8 * lgfactor

    switch (size) {
        case "sm":
            width = `${smW}vw`;
            height = `${smH}vw`;
            break;
        default:
            width = `${lgW}vw`;
            height = `${lgH}vw`;
    }
</script>

<svg class:reverse={reverse} {width} {height} viewBox="0 0 134 138" fill="none" xmlns="http://www.w3.org/2000/svg" style={`--speed: ${speed}s; --offset: ${offset}deg;`}>
    <path d="M117.772 75.6967C118.045 73.51 118.25 71.3233 118.25 69C118.25 66.6767 118.045 64.49 117.772 62.3033L132.19 51.0283C133.488 50.0033 133.83 48.1583 133.01 46.655L119.343 23.0117C118.523 21.5083 116.678 20.9617 115.175 21.5083L98.1601 28.3417C94.6068 25.6083 90.7801 23.3533 86.6118 21.645L84.0151 3.53667C83.9021 2.73267 83.4996 1.99753 82.8831 1.46915C82.2667 0.940765 81.4786 0.655433 80.6668 0.666671H53.3335C51.6251 0.666671 50.1901 1.89667 49.9851 3.53667L47.3885 21.645C43.2201 23.3533 39.3935 25.6767 35.8401 28.3417L18.8251 21.5083C17.2535 20.8933 15.4768 21.5083 14.6568 23.0117L0.990123 46.655C0.10179 48.1583 0.511791 50.0033 1.81012 51.0283L16.2285 62.3033C15.9551 64.49 15.7501 66.745 15.7501 69C15.7501 71.255 15.9551 73.51 16.2285 75.6967L1.81012 86.9717C0.511791 87.9967 0.170123 89.8417 0.990123 91.345L14.6568 114.988C15.4768 116.492 17.3218 117.038 18.8251 116.492L35.8401 109.658C39.3935 112.392 43.2201 114.647 47.3885 116.355L49.9851 134.463C50.1901 136.103 51.6251 137.333 53.3335 137.333H80.6668C82.3751 137.333 83.8101 136.103 84.0151 134.463L86.6118 116.355C90.7801 114.647 94.6068 112.323 98.1601 109.658L115.175 116.492C116.747 117.107 118.523 116.492 119.343 114.988L133.01 91.345C133.83 89.8417 133.488 87.9967 132.19 86.9717L117.772 75.6967V75.6967ZM67.0001 92.9167C53.8118 92.9167 43.0835 82.1883 43.0835 69C43.0835 55.8117 53.8118 45.0833 67.0001 45.0833C80.1885 45.0833 90.9168 55.8117 90.9168 69C90.9168 82.1883 80.1885 92.9167 67.0001 92.9167Z" fill={color}/>
</svg>

<style>
    svg {
        animation: spin var(--speed) infinite linear;
        transform-origin: center;
    }

    svg.reverse {
        animation: reverse-spin var(--speed) infinite linear;
    }

    @keyframes spin {
        from {transform:rotate(calc(0deg + var(--offset)));}
        to {transform:rotate(calc(360deg + var(--offset)));}
    }

    @keyframes reverse-spin {
        from {transform:rotate(calc(360deg + var(--offset)));}
        to {transform:rotate(calc(0deg + var(--offset)));}
    }
</style>