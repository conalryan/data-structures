package com.example.ds;

public class DynamicArray {
    private static final short INIT_SIZE = 10;
    private static final short MULTIPLIER = 2;

    private int capacity;
    private int size;
    private Integer[] array;
    
    public DynamicArray() {
        this.capacity = DynamicArray.INIT_SIZE;
        this.size = 0;
        this.array = new Integer[this.capacity];
    }

    public DynamicArray(int capacity) {
        this.capacity = capacity;
        this.size = 0;
        this.array = new Integer[this.capacity];
    }

    public int getCapacity() {
        return this.capacity;
    }

    public int getSize() {
        return this.size;
    }

    public int getItem(int index) throws IndexOutOfBoundsException {
        this.checkThrowOutOfBounds(index);
        return this.array[index];
    }

    public void append(int item) {
        if (this.size == this.capacity) {
            this.ensureCapacity();
        }
        this.array[size] = item;
        this.size++;
    }

    public void insert(int item, int index) throws IndexOutOfBoundsException {
        this.checkThrowOutOfBounds(index);
        if (this.size == this.capacity) {
            this.ensureCapacity();
        } else {
            // iterate backwards shifting values right
            for (int i = this.size; i > index; i--) {
                this.array[i] = this.array[i -1];
            }
        }
        this.array[index] = item;
        this.size++;
    }

    public void remove(int index) throws IndexOutOfBoundsException{
        // Start at index up to size, shift left then delete last index
        this.checkThrowOutOfBounds(index);
        for (int i = index; i < size -1; i++) {
            this.array[i] = this.array[i + 1];
        }
        this.array[size -1] = 0; // or null in case of object
        this.size--;
    }

    private void checkThrowOutOfBounds(int index) throws IndexOutOfBoundsException {
        if (index < 0 || index > this.size - 1) {
            throw new IndexOutOfBoundsException();
        }
    }
    
    private void ensureCapacity() {
        this.capacity = this.capacity * DynamicArray.MULTIPLIER;
        Integer[] tmp = new Integer[this.capacity];
        for (int i = 0; i < this.size; i++) {
            tmp[i] = this.array[i];
        }
        this.array = tmp;
    }
}