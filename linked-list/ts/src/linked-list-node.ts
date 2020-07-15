export interface LinkedListNode<T> {
    data: T;
    next: LinkedListNode<T> | undefined;
}