import { DynamicArray } from './DynamicArray';

describe('DynamicArray', () => {
    it('should construct', () => {
        const da = new DynamicArray();
        expect(da).not.toBeNull();
        expect(da.capacity).toEqual(10);
        expect(da.size).toEqual(0);
    });

    it('should append an item', () => {
        const da = new DynamicArray();
        expect(da.capacity).toEqual(10);
        expect(da.size).toEqual(0);

        da.append(11);
        expect(da.capacity).toEqual(10);
        expect(da.size).toEqual(1);

        da.append(22);
        expect(da.capacity).toEqual(10);
        expect(da.size).toEqual(2);

        da.append(33);
        expect(da.capacity).toEqual(10);
        expect(da.size).toEqual(3);

        da.append(44);
        expect(da.capacity).toEqual(10);
        expect(da.size).toEqual(4);
    });

    it('should append an item and expand capacity', () => {
        const da = new DynamicArray(3);
        expect(da.capacity).toEqual(3);
        expect(da.size).toEqual(0);

        da.append(11);
        expect(da.capacity).toEqual(3);
        expect(da.size).toEqual(1);

        da.append(22);
        expect(da.capacity).toEqual(3);
        expect(da.size).toEqual(2);

        da.append(33);
        expect(da.capacity).toEqual(3);
        expect(da.size).toEqual(3);

        da.append(44);
        expect(da.capacity).toEqual(6);
        expect(da.size).toEqual(4);
    });

    it('should get item', () => {
        const da = new DynamicArray(2);
        expect(da.capacity).toEqual(2);
        expect(da.size).toEqual(0);

        da.append(11);
        expect(da.capacity).toEqual(2);
        expect(da.size).toEqual(1);

        da.append(22);
        expect(da.capacity).toEqual(2);
        expect(da.size).toEqual(2);

        let item = da.getItem(0);
        expect(item).toEqual(11);

        item = da.getItem(1);
        expect(item).toEqual(22);

        try {
            item = da.getItem(3);
        } catch(error) {
            expect(error).not.toBeNull();
        }
    });

    it('should insert an item', () => {
        const da = new DynamicArray(3);
        da.append(11);
        da.append(22);
        da.insert(33, 1);
        expect(da.getItem(0)).toEqual(11);
        expect(da.getItem(1)).toEqual(33);
        expect(da.getItem(2)).toEqual(22);
    });

    it('should delete and item', () => {
        const da = new DynamicArray(3);
        da.append(11);
        da.append(22);
        da.append(33);
        da.remove(1);
        expect(da.size).toEqual(2);
        expect(da.getItem(0)).toEqual(11);
        expect(da.getItem(1)).toEqual(33);
    });
});
