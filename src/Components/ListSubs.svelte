<script>
    export let blockClass;
    let deleteSub;
    let subs = blockClass.sub;
</script>
    {#each $subs as sub (sub.id)}
        <div id={blockClass.title} >
            <div id={sub.id} class="sub" on:click={() => {
                        $subs = $subs.filter(i => i !== sub)
                }}>
                <h4>{sub.text}</h4>
            </div>
        </div>
    {/each}

<style>
    .sub h4
    {
        width: clamp(14em, 85%, 14em);
        background-color: #cccccc;
        word-wrap: break-word;
        text-align: left;

    }
    .sub
    {
        transform: translateY(-2.5em);
        cursor:pointer;
        display: flex;
        white-space: initial;
        width: 97%;
        border-radius: .1rem;
        background-color: #cccccc;
        display: flex;
        text-align: center;
        position: relative;
        margin: 0;
        font-size: 1em;
        padding: 0;
        margin-left: .25rem;
        margin-bottom: .25rem;
    }
</style>