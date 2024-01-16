import Node from "./Node.js";

export default class LinkedList {
    constructor() {
        this.head = null;
    }

    // adds a new node containing value to the end of the list
    append(value) {
        if(this.head == null) this.prepend(value);
        else {
            let tmp = this.head;
            while (tmp.nextNode != null) tmp = tmp.nextNode;
            tmp.nextNode = new Node(value);
        }
    }

    // adds a new node containing value to the start of the list
    prepend(value) {
        let tmp =  null;
        if (this.head != null) tmp = this.head;
        this.head = new Node(value);
        this.head.nextNode = tmp;
    }

    // returns the total number of nodes in the list
    size() {
        let count = 0;
        let tmp = this.head;
        while (tmp != null) {
            count++;
            tmp = tmp.nextNode;
        }
        return count;
    }

    // returns the first node in the list
    headNode() {
        return this.head;
    }

    // returns the last node in the list
    tailNode() {
        if (this.head == null) return null;
        let tmp = this.head;
        while (tmp.nextNode != null) tmp = tmp.nextNode;
        return tmp;
    }

    // returns the node at the given index
    at(index) {
        if (this.head == null) return null;
        if (index > this.size()) return null;
        let tmp = this.head;
        let counter = 0;
        while (index != counter) {
            tmp = tmp.nextNode;
            counter++;
        }
        return tmp;
    }

    // removes the last element from the list and returns it
    pop() {
        let copy;
        if(this.size() == 0 || this.size() == 1) this.head = null;
        else {
            let tmp = this.head;
            while(tmp.nextNode.nextNode != null) tmp = tmp.nextNode;
            copy = tmp.nextNode;
            tmp.nextNode = null;
        }
        return copy;
    }

    // returns true if the passed in value is in the list and otherwise returns false.
    contains(value) {
        let tmp = this.head;
        while (tmp != null) {
            if(tmp.value == value) return true;
            tmp = tmp.nextNode;
        }
        return false;
    }

    // returns the index of the node containing value, or null if not found.
    find(value) {
        let tmp = this.head;
        let index = 0;
        while(tmp != null) {
            if(tmp.value == value) return index;
            index++;
            tmp = tmp.nextNode;
        }
        return null;
    }

    // returns the list converted into a string
    toString() {
        if(this.head == null) return null;
        let tmp = this.head;
        let string = "";
        while(tmp != null) {
            string += `(${tmp.value}) -> `;
            tmp = tmp.nextNode;
        }
        string += "null";
        return string;
    }

    // creates inserts a node with the given value on the specified index
    instertAt(value, index) {
        if(index == 0) this.prepend(value);
        else if (index > this.size()) return null;
        else {
            let tmp = this.head;
            let counter = 0;
            while (counter != index - 1) {
                tmp = tmp.nextNode;
                counter++;
            }
            let copy = tmp.nextNode;
            tmp.nextNode = new Node(value);
            tmp.nextNode.nextNode = copy;
        }
    }

    // removes a node on the specified index
    removeAt(index) {
        if (index == 0) {
            let copy = this.head.nextNode;
            this.head = copy;
        } else if (index > this.size()) return null;
        else {
            let tmp = this.head;
            let counter = 0;
            while (counter != index - 1) {
                tmp = tmp.nextNode;
                counter ++;
            }
            let copy = tmp.nextNode.nextNode;
            tmp.nextNode = copy;
        }
    }
}
