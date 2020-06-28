package com.example.ds;

import org.junit.Before;
import org.junit.Test;
import static org.junit.Assert.assertEquals;

public class DynamicArrayTest {

    private DynamicArray da;

    @Before
    public void before() {
        this.da = new DynamicArray();
    }

    @Test
    public void testConstructor() {
        assertEquals(this.da.getCapacity(), 10);
    }
}