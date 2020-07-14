import { LinkedListNode } from "./linked-list-node";
import { Linkable } from "./linkable";

export class LinkedList<T> implements Linkable<T> {
    
    head: LinkedListNode<T>;
    tail: LinkedListNode<T>;

    constructor() {
        this.head = null;
        this.tail = null;
    }

    append: (value: T) => void;
    delete: (value: T) => void;
    deleteHead: () => void;
    deleteTail: () => void;
    find: (value: T) => void;
    prepend: (value: T) => void;
}