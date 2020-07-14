# linked list
A linked list is a collection of entities which are not stored in sequential order. 
Instead, each entity has a pointer to the next entity. 
Each entity, also referred to as a node, is composed of data and a reference (in other words, a link) to the next node in the sequence.

This structure allows for efficient insertion or removal of nodes from any position in the sequence during iteration.

A drawback of linked lists is that access time is linear. Faster access, such as random access, is not possible.

## Interface
The main operations on linked lists are:
- append - add a node to the end of the list
- delete - remove a node from the list
- deleteHead - remove the first node from the list • find - find a node in the list
- deleteTail - remove the last node from the list
- prepend - add a node to the beginning of the list 

## Uses
A linked list is used as a good foundation for many other data structures:
- queues
- stacks
- hash tables

## Complexities
Access | Search | Insertion | Deletion
O(n) | O(n) | O(1) | O(1)
