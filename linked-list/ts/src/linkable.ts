import { LinkedListNode } from "./linked-list-node";

/**
 * Variations in implementation:
 * - head only
 * - head and count
 * - head and tail
 * - head, tail and count
 */
export interface Linkable<T> {
   
    head: LinkedListNode<T>;
    tail: LinkedListNode<T>;

    /**
     * Add a node to the end of the list
     */
    append: (value: T) => void;
    
    /**
     * Remove a node from the list
     */
    delete: (value: T) => void;
    
    /**
     * Remove the first node from the list 
     */
    deleteHead: () => void;
    
    /**
     * Remove the last node from the list 
     */
    deleteTail: () => void;
    
    /**
     * Find a node in the list
     */
    find: (value: T) => void;
    
    /**
     * Add a node to the beginning of the list
     */
    prepend: (value: T) => void;
}