<script lang="ts">
    import ChevronIcon from "./ChevronIcon.svelte";

    export let title: string;
    export let vertical: boolean = false;
</script>

<div class="controls">
    <div class="keys" class:vertical>
        <div class="key" id="up">
            <ChevronIcon direction="up" />
        </div>
        <div class="key" id="down">
            <ChevronIcon direction="down" />
        </div>
        <div class="key" id="left">
            <ChevronIcon direction="left" />
        </div>
        <div class="key" id="right">
            <ChevronIcon direction="right" />
        </div>
    </div>
    <span>{title}</span>
</div>

<style lang="scss">

    .controls {
        display: grid;
        row-gap: 1rem;
        justify-items: center;
        align-content: start;
    }

    span {
        font-size: 1.2rem;
        font-weight: 500;
    }

    .keys {
        display: grid;
        --key-size: 3.2rem;

        grid-template-columns: repeat(3, var(--key-size));
        grid-template-rows: repeat(2, var(--key-size));
        row-gap: 0.4rem;
        column-gap: 0.4rem;

        .key {
            height: var(--key-size);
            width: var(--key-size);
            border-radius: 10px;
            border: 2px solid var(--color-gray--1);
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
            padding: 10px;
        }

        #up {
            grid-column: 2 / 3;
        }
        
        
        #down {
            grid-row: 2 / 3;
            grid-column: 2 / 3;
        }

        #left {
            grid-row: 2 / 3;
            grid-column: 1 / 2;
        }

        #right {
            grid-row: 2 / 3;
            grid-column: 3 / 4;
        }

        &.vertical {
            grid-template-columns: repeat(2, var(--key-size));
            grid-template-rows: 1fr;
            padding: 0 calc(var(--key-size) / 2);

            #left, #right {
                display: none;
            }

            #up {
                grid-column: 1 / 2;
            }

            #down {
                grid-row: 1 / 2;
                grid-column: 2 / 3;
            }
        }
    }


</style>


