import {writable} from "svelte/store";
import SubClass from './SubClass'
class blockClass
{
    constructor(title, id) {
        this.title = title
        this.id = id
        this.sub = writable([])
        this.counter = 0;
    }

    createSub(text){
        const sub = new SubClass(text, this.counter)
        this.counter++
        console.log(sub)
        this.sub.update((subs) => [...subs, sub])
    };

}
export default blockClass


