

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
    }
};


class Node {
    constructor(ele){
        this.element = ele;
        this.next = null;
    }
}




