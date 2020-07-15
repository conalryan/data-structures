import { LinkedListNode } from "./linked-list-node";
import { Linkable } from "./linkable";

export class LinkedList<T> implements Linkable<T> {
    
    head: LinkedListNode<T> | undefined;
    tail: LinkedListNode<T> | undefined;

    constructor() {}

    append(value: T): void {
        // If using head only
        // this.appendHead(value);
        if (!this.head) {
            this.head = {
                data: value,
                next: undefined
            }
            this.tail = this.head;
        } else {
            this.appendTail(value);
        }
    }

    private appendHead(value: T): void {
        const newNode = {
            data: value,
            next: undefined
        };
        if (!this.head) {
            this.head = newNode;
        } else {
            // while next is not null, keep iterating until you hit the end
            let n = this.head;
            while (n?.next) {
                n = n.next;
            }
            // @ts-ignore: TS2532: Object is possibly 'undefined'
            n.next = newNode;
        }
    }

    private appendTail(value: T): void {
        const newNode = {
            data: value,
            next: undefined
        }
        if (!this.tail) {
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    delete(value: T): void {
        // TODO
    }

    deleteHead(): void {
        // TODO
    }

    deleteTail(): void {
        // TODO
    }
    
    find(value: T): void {
        // TODO
    }

    prepend(value: T): void {
        // TODO
    }
}