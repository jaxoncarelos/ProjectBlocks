<script>
    import { blockList } from './BlocksStore'
    import Block from './Block.svelte'
</script>

<div class="blocks">
    {#each $blockList as blockClass (blockClass.id)}
        <Block {blockClass} class="block"/>
    {/each}
</div>