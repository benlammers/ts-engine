<script>
    import ChevronIcon from "./ChevronIcon.svelte";
</script>


<div class="controls">
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

<style lang="scss">
    .key {
        height: 3.2rem;
        width: 3.2rem;
        border-radius: 10px;
        border: 2px solid var(--color-gray);
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
        padding: 10px;
    }

    #up {
        
    }

    #down {

    }

    #left {

    }

    #right {

    }
</style>


