<script>
    import { blockList } from '../BlocksStore'
    import Block from './Block.svelte'
</script>

<div class="blocks">
    {#each $blockList as blockClass (blockClass.id)}
        <Block {blockClass} class="block"/>
    {/each}
</div>


<style>
    .blocks{
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        grid-template-rows: repeat(5, 1fr);
        grid-column-gap: 0px;
        grid-row-gap: 0px;
    }
</style>