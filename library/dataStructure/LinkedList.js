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
// 循环链表
class Loop extends LList{
    constructor(){
        super();
        this.find = (item) => {
            let curNode = this.head;
            while(curNode.element !== item){
                curNode = curNode.next;
            }
            return curNode;
        }
        this.insertAfter = (newElement,item) => {
            let newNode = new Node(newElement);
            let curNode = this.find(item);
            // 尾部插入
            // 原书此处不好，既然curNode.next.element === "head" 那curNode.next肯定就是this.head了
            // 所以根本不用判断
            newNode.next = curNode.next
            curNode.next = newNode;
            // if(curNode.next.element === "head"){
            //     newNode.next = this.head
            //     curNode.next = newNode;
            // } else {
            //     newNode.next = curNode.next
            //     curNode.next = newNode;
            // }
        }
        this.display = () => {
            let curNode = this.head;
            while(curNode.next !== null && curNode.next.element !== "head"){
                console.log(curNode.next.element);
                curNode = curNode.next
            }
        }
        this.findPrevious = (item) => {
            let curNode = this.head;
            if(curNode.next !== null && curNode.next.element !== item){
                curNode = curNode.next
            }
            return curNode;
        }
        this.remove = (item) => {
            let prevNode = this.findPrevious(item);
            // 原书这里不对，如果 prevNode.next 是null 那么prevNode就是null了，根本找不大
            // 又因为循环链表.next.next也不用判断，需要判断的是prevNode的存在性
            if(prevNode !== null){
                prevNode.next = prevNode.next.next;
            }
        }
        // 将某节点向后移动n个
        this.back = (item,n) => {
            let curNode = this.find(item);
            let prevNode = this.findPrevious(item)
            while(n > 0){
                if(curNode.next.element === "head"){
                    prevNode.next = curNode.next;
                    curNode.next.next = curNode;
                } else {
                    prevNode.next = curNode.next;
                    curNode.next = curNode;
                }
                n--;
            }
        }
        // 前
        this.advance = (item,n) => {
            let curNode = this.find(item);
            let prevNode = this.findPrevious(item)
            let prprNode = this.findPrevious(prevNode);
            while(n > 0){
                if(prevNode.element === "head"){
                    prevNode.next = curNode.next;
                    prprNode.next = curNode;
                } else {

                    prevNode.next = curNode.next.next;
                    curNode.next = prevNode.next;
                    prprNode.next = curNode;
                }
                n--;
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




