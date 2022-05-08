<script>
	import ListBlocks from './ListBlocks.svelte'
	import { blockList } from './BlocksStore.js'
	import { createBlock } from './BlocksStore.js'
	let newSemiBlockName = "";
	function newBlock()
	{
		console.log(newSemiBlockName)
		createBlock(newSemiBlockName)
		console.log(blockList)
		newSemiBlockName = ""
	}
</script>

<main>
	<div class="wrapper">
		<div class="name">
			Project Blocks
		</div>
			<div class="new">
				<input type="text" bind:value={newSemiBlockName} placeholder="Block Name">
				<button on:click={newBlock}>X</button>
			</div>
			<ListBlocks />
	</div>
</main>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Tapestry&display=swap');
	.new input, button
	{
		margin: .5rem;
		background-color: lightgrey;
		color: black;
		border-color: transparent;
	}
	.subname
	{
		position: relative;
		display: flex;
		justify-content: center;
		align-content: center;
		background-color: lightgrey;
		border-radius: .2em .2em 0 0;
	}
	.block
	{
		width: 15em;
		margin: 2em;
		background-color: aliceblue;
		border-radius: .2em;
		height: 10em;
	}
	body
	{
		margin: 0;
		padding: 0;
	}
	.name {
		background-color: cornsilk;
		font-size: 1.5em;
		font-family: "Yu Gothic UI";
		padding-left: .5rem;
	}
</style>