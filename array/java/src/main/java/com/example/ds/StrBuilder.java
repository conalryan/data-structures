package com.example.ds;

public class StrBuilder {
    
    private char[] chars;

    private int count;

    public StrBuilder(String str) {
        int capacity = str.length() * 2;
        this.chars = new char[capacity];
        char[] cs = str.toCharArray();
        for (char c : cs) {
            this.append(c);
        }
    }

    public StrBuilder append(String str) {
        char[] cs = str.toCharArray();
        for (char c : cs) {
            this.append(c);
        }
        return this;
    }

    public StrBuilder append(char c) {
        this.ensureCapacity(this.count + 1);
        this.chars[count++] = c;
        return this;
    }

    public String build() {
        return new String(this.chars).trim();
    }

    public char[] getChars() {
        return this.chars;
    }

    public int getCount() {
        return this.count;
    }

    private void ensureCapacity(int count) {
        if (count == this.chars.length) {
            char[] tmp = new char[this.chars.length * 2];
            for (int i = 0; i < count; i++) {
                tmp[i] = this.chars[i];
            }
            this.chars = tmp;
        }
    }
}