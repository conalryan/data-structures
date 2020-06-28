package com.example.ds;

import org.junit.Before;
import org.junit.Test;
import static org.junit.Assert.assertEquals;

public class DynamicArrayTest {

    private DynamicArray da;

    @Test
    public void testEmptyConstructor() {
        this.da = new DynamicArray();
        assertEquals(this.da.getCapacity(), 10);
        assertEquals(this.da.getSize(), 0);
    }

    @Test
    public void testConstructor() {
        this.da = new DynamicArray(2);
        assertEquals(this.da.getCapacity(), 2);
        assertEquals(this.da.getSize(), 0);
    }

    @Test
    public void testAppend() {
        this.da = new DynamicArray(2);
        assertEquals(this.da.getCapacity(), 2);
        assertEquals(this.da.getSize(), 0);

        this.da.append(22);
        assertEquals(this.da.getCapacity(), 2);
        assertEquals(this.da.getSize(), 1);
        assertEquals(this.da.getItem(0), 22);

        this.da.append(33);
        assertEquals(this.da.getCapacity(), 2);
        assertEquals(this.da.getSize(), 2);
        assertEquals(this.da.getItem(1), 33);

        this.da.append(44);
        assertEquals(this.da.getCapacity(), 4);
        assertEquals(this.da.getSize(), 3);
        assertEquals(this.da.getItem(2), 44);
    }
}