import { writable } from 'svelte/store'
import BlockClass from './BlockClass'

let counter = 0;

export const blockList = writable([]);

export const createBlock = (title) => {
    const block = new BlockClass(title, counter)
    counter++
    console.log(block)
    blockList.update((blocks) => [...blocks, block])
};
