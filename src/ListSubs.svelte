<script>
    export let blockClass;

    let sub = blockClass.sub;
    console.log(blockClass);
</script>
    {#each $sub as sub (sub.id)}
        <div id={blockClass.title}>
            <div id={sub.id} class="sub" on:click={() => {
                    const element1 = document.getElementById(blockClass.title)

                    element1.childNodes.item(`{sub.id}`).style.display = "none";

                    element1.remove();
                }}>
                <h4>{sub.text}</h4>
        </div>
        </div>
    {/each}

<style>

    .sub
    {
        transform: translateY(-2.5em);
        cursor:pointer;
        display: flex;

        max-width: 13em;
        border-radius: .1rem;
        background-color: #cccccc;
        display: flex;
        align-items: flex-start;
        text-align: left;
        position: relative;
        margin: 0;
        font-size: 1em;
        padding: 0;
        margin-left: .25rem;
        margin-bottom: .25rem;
    }
</style>