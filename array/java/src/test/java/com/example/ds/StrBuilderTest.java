package com.example.ds;

import org.junit.Before;
import org.junit.Test;
import static org.junit.Assert.assertEquals;

public class StrBuilderTest {

    private StrBuilder sb;

    @Test
    public void constructorTest() {
        this.sb = new StrBuilder("Hello");
        assertEquals(this.sb.getChars().length, 10);
    }

    @Test 
    public void appendTest() {
        this.sb = new StrBuilder("Hello");
        this.sb.append(" world");
        assertEquals(this.sb.build(), "Hello world");
    }
}