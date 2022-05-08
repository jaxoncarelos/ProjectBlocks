<script>
    import ListSubs from "./ListSubs.svelte";
    export let blockClass;
    let value = ""
    console.log(blockClass)
    function newSub()
    {
        console.log(blockClass.sub);
        blockClass.createSub(value)
        value = ""
    }
</script>

    <div class="block">
        <div class="subname">
            <h1 class="text">{blockClass.title}</h1>
            <div class="newSub">
                <input type="text" bind:value={value} placeholder="Sub Name">
                <button class="new" on:click={newSub}>+</button>
            </div>
            <ListSubs class="balls" {blockClass}/>
        </div>
    </div>
<style>
    .balls
    {
        flex-direction: row;
    }
    .newSub input
    {
        background: lightgrey;
    }
    .newSub button
    {
        height: 2.2em;
        position: relative;
        left: 13em;
        bottom: 2.4em;
    }
    .newSub
    {
        position: relative;
        transform: scale(0.5);
        bottom: 1em;
        right: 3em;
        display: flex;
        flex-direction: column;
    }
    .new
    {
        position: relative;
        bottom: .25rem;
        left: 1rem;
        font-size: 1.25rem;
        background: grey;
        width: 3em;
        height: 3rem;
    }
    .subname
    {
        transform: translateY(-2rem);
        text-align: center;
        position: relative;
        height: 4em;
        background-color: lightgrey;
        border-radius: .2em .2em 0 0;
    }
    .subname h1
    {
        transform: translateY(0.75rem);
    }
    .block
    {
        overflow:auto;
        width: 15em;
        margin: 2em;
        background-color: aliceblue;
        border-radius: .4em;
        height: 20em;
    }
</style>
