import { LinkedList } from "./linked-list";

describe('linked list', () => {
    it('should append', () => {
        const l = new LinkedList<number>();
        expect(l.head).toEqual(undefined);
        expect(l.tail).toEqual(undefined);

        l.append(11);
        expect(l.head?.data).toEqual(11);
        expect(l.tail?.data).toEqual(11);

        l.append(22);
        expect(l.head?.next?.data).toEqual(22);
        expect(l.tail?.data).toEqual(22);

        l.append(33);
        expect(l.head?.data).toEqual(11);
        expect(l.head?.next?.data).toEqual(22);
        expect(l.head?.next?.next?.data).toEqual(33);
        expect(l.tail?.data).toEqual(33);
    });
});