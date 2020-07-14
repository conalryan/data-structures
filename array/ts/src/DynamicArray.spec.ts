import { DynamicArray } from './DynamicArray';

describe('DynamicArray', () => {
    it('should construct', () => {
        const da = new DynamicArray();
        expect(da).not.toBeNull();
        expect(da.capacity).toEqual(10);
        expect(da.size).toEqual(0);
    });

    it('should append and item', () => {
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
});
