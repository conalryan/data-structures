array
================================================================================

Static Array
--------------------------------------------------------------------------------
- Fixed length container containing n elements.
- Indexable from the range [0, n - 1].
- Continuous block of memory.

### Usage
- Storing and accessing sequential data.
- Temporarily storing objects.
- Used by IO routines as Buffers.
- Lookup tables and reverse lookup tables.
- Can be used to return multiple values from a function.
- Used in dynamic programming to cache answers to subproblems.

### Complexity
... | Static Array | Dynamic Array
Access | O(1) | O(1)
Search | O(n) | O(n)
Insertion | N/A | O(n)
Appending | N/A | O(1)
Deletion | N/A | O(n)

Dynamic Array
--------------------------------------------------------------------------------
- Can grow and shrink in size.

### Implementation
- Create static array with initial capacity.
- Add elements to the underlying array keeping track of the number of elements.
- If adding a new element will exceed the capacity, then create a new static array twice the capacity 
and copy original elements to it.
