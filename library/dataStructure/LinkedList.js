class LList {
    constructor(){
        this.head = new Node("head");
        this.find = (item) => {
            let curNode = this.head;
            while (curNode.element !== item){
                curNode = curNode.next;
            }
            return curNode;
        };
        this.insertAfter = (newElement, beforeItem) => {
            let newNode = new Node(newElement);
            let curNode = this.find(beforeItem);
            newNode.next = curNode.next;
            curNode.next = newNode;
        };
        this.display = () => {
            let curNode = this.head;
            while(curNode.next !== null){
                console.log(curNode.next.element);
                curNode = curNode.next;
            }
        };
        this.findPrevious = (item) => {
            let curNode = this.head;
            while ( (curNode.next.element !== item) &&
                    curNode.next !== null
                ){
                curNode = curNode.next;
            }
            return curNode;
        };
        this.remove = (item) => {
            let prev = this.findPrevious(item);
            if(prev.next !== null){
                prev.next = prev.next.next;
            }
        };
    }
}

// 双向链表
class Doubly extends LList{
    constructor(){
        super();
        this.head = new DoublyNode("head");
        this.insertAfter = (newElement, item) => {
            const newNode = new DoublyNode(newElement);
            const current = this.find(item);
            newNode.next = current.next;
            newNode.prev = current;
            current.next = newNode;
        };
        this.remove = (item) => {
            const currNode = this.find(item);
            // 我觉得原书这里有问题，如果是倒数第二个元素，那么 .next 就是null，我想remove也没什么不行的
            // 原书为 if(!(currNode.next == null))
            if (currNode.element !== "head"){
                currNode.prev.next = currNode.next;
                currNode.next.prev = currNode.prev;
                currNode.next = null;
                currNode.prev = null;
            }
        };
        this.findLast = () => {
            // debugger
            let currNode = this.head;
            while(!(currNode.next == null)){
                currNode = currNode.next;
            }
            return currNode;
        }
        this.dispReverse = () => {
            let currNode = this.findLast();
            while(currNode.prev !== null){
                console.log(currNode.element);
                currNode = currNode.prev;
            }
        }
    }
}


class Node {
    constructor(ele){
        this.element = ele;
        this.next = null;
    }
}

class DoublyNode extends Node {
    constructor(ele){
        super(ele);
        this.prev = null;
    }
}

module.exports = {
    LList,
    Doubly,
};




