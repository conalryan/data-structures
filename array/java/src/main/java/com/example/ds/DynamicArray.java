package com.example.ds;

public class DynamicArray {
    private int capacity;
    private int size;
    private int[] array;

    public DynamicArray() {
        this.capacity = 10; // default capacity
        this.size = 0;
        this.array = new int[this.capacity];
    }

    public DynamicArray(int capacity) {
        this.capacity = capacity;
        this.size = 0;
        this.array = new int[this.capacity];
    }

    public int getCapacity() {
        return this.capacity;
    }

    public int getSize() {
        return this.size;
    }

    public int getItem(int index) {
        if (index < 0 || index > size) {
            throw new IndexOutOfBoundsException();
        }
        return this.array[index];
    }

    public void append(int item) {
        if (size == capacity) {
            this.capacity = this.capacity * 2;
            int[] tmp = new int[this.capacity];
            for (int i = 0; i < size; i++) {
                tmp[i] = array[i];
            }
            array = tmp;
        }
        array[size] = item;
        size++;
    }
}