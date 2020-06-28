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

    public int getCapacity() {
        return this.capacity;
    }

    public int getSize() {
        return this.size;
    }
}