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

    it('should delete', () => {
        const l = new LinkedList<number>();
        expect(l.head).toEqual(undefined);
        expect(l.tail).toEqual(undefined);

        l.append(11);
        expect(l.head?.data).toEqual(11);
        expect(l.tail?.data).toEqual(11);

        // delete head
        l.delete(11);
        expect(l.head).toEqual(undefined);
        expect(l.tail).toEqual(undefined);

        l.append(22);
        l.append(33);
        expect(l.head?.data).toEqual(22);
        expect(l.tail?.data).toEqual(33);

        // delete head
        l.delete(22);
        expect(l.head?.data).toEqual(33);
        expect(l.tail?.data).toEqual(33);

        l.append(44);
        l.append(55);
        expect(l.head?.data).toEqual(33);
        expect(l.head?.next?.data).toEqual(44);
        expect(l.tail?.data).toEqual(55);

        // delete middle
        l.delete(44);
        expect(l.head?.data).toEqual(33);
        expect(l.head?.next?.data).toEqual(55);
        expect(l.tail?.data).toEqual(55);

        // delete tail
        l.delete(55);
        expect(l.head?.data).toEqual(33);
        expect(l.head?.next).toEqual(undefined);
        expect(l.tail?.data).toEqual(33);
    });

    it('should delete head', () => {
        const l = new LinkedList<number>();
        expect(l.head).toEqual(undefined);
        expect(l.tail).toEqual(undefined);

        l.append(11);
        l.append(22);
        l.append(33);
        l.append(44);
        l.append(55);

        l.deleteHead();
        expect(l.head?.data).toEqual(22);
        expect(l.head?.next?.data).toEqual(33);
        expect(l.tail?.data).toEqual(55);

        l.deleteHead();
        expect(l.head?.data).toEqual(33);
        expect(l.head?.next?.data).toEqual(44);
        expect(l.tail?.data).toEqual(55);

        l.deleteHead();
        expect(l.head?.data).toEqual(44);
        expect(l.head?.next?.data).toEqual(55);
        expect(l.tail?.data).toEqual(55);
    });

    it('should delete tail', () => {
        const l = new LinkedList<number>();
        expect(l.head).toEqual(undefined);
        expect(l.tail).toEqual(undefined);

        l.append(11);
        l.append(22);
        l.append(33);
        l.append(44);
        l.append(55);

        l.deleteTail();
        expect(l.head?.data).toEqual(11);
        expect(l.head?.next?.data).toEqual(22);
        expect(l.tail?.data).toEqual(44);

        l.deleteTail();
        expect(l.head?.data).toEqual(11);
        expect(l.head?.next?.data).toEqual(22);
        expect(l.tail?.data).toEqual(33);

        l.deleteTail();
        expect(l.head?.data).toEqual(11);
        expect(l.head?.next?.data).toEqual(22);
        expect(l.tail?.data).toEqual(22);

        l.deleteTail();
        expect(l.head?.data).toEqual(11);
        expect(l.head?.next).toEqual(undefined);
        expect(l.tail?.data).toEqual(11);
    });
});