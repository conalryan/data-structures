package com.example.ds;

import org.junit.Before;
import org.junit.Test;
import static org.junit.Assert.assertEquals;

public class HashTableTest {

    private HashTable ht;

    @Test
    public void testEmptyConstructor() {
        this.ht = new HashTable();
    }
}