export class DynamicArray {
    private static _INIT_SIZE: number = 10; // default size
    private static _MULTIPLIER: number = 2; // default doubling size
    
    private _capacity: number;
    private _size: number;
    private _array: number[]; // start with number then make generic <T>

    constructor(capacity: number = DynamicArray._INIT_SIZE) {
        this._array = Array(capacity);
        this._capacity = capacity;
        this._size = 0;
    }

    get capacity(): number {
        return this._capacity;
    }

    get size(): number {
        return this._size;
    }

    getItem(index: number): number {
        this._checkThrowOutOfBounds(index);
        return this._array[index]; 
    }

    append(item: number): void {
        if (this._size === this._capacity) {
            this._ensureCapacity();
        }
        this._array[this._size] = item;
        this._size++;
    }

    insert(item: number, index: number): void {
        this._checkThrowOutOfBounds(index);
        if (this.size == this.capacity) {
            this._ensureCapacity();
        } else {
            // iterate backwards shifting values right
            for (let i = this._size; i > index; i--) {
                this._array[i] = this._array[i -1];
            }
        }
        this._array[index] = item;
        this._size++;
    }

    remove(index: number): void {
        // Start at index up to size, shift left then delete last index
        this._checkThrowOutOfBounds(index);
        for (let i = index; i < this._size -1; i++) {
            this._array[i] = this._array[i + 1];
        }
        this._array[this._size -1] = 0; // or null in case of object
        this._size--;
    }

    private _checkThrowOutOfBounds(index: Number): void {
        if (index < 0 || index > this._size - 1) {
            throw new Error(`Index out of bounds: ${index}, is not within 0 - ${this._size}`);
        }
    }
    
    private _ensureCapacity(): void {
        this._capacity = this._capacity * DynamicArray._MULTIPLIER;
        const tmp = Array(this._capacity);
        for (let i = 0; i < this._size; i++) {
            tmp[i] = this._array[i];
        }
        this._array = tmp;
    }
}