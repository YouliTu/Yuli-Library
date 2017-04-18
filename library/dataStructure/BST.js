

class BST {
    constructor(){
        this.root = null;
        this.inset = (data) => {
            let n = new Node(data,null,null);
            if(this.root === null){
                this.root = n;
            } else {
                let current = this.root;
                let parent;

            }
        }
        // 当前节点是否在BST中
        // @return bool
        this.contains = (value) => {
            let found = false,
                current = this.root;
            while(!found && current){
                // 小于当前节点，左节点变为根节点
                if(value < current.value){
                    current = current.left;
                } else if (value > current.value){
                    current = current.right;
                } else {
                    found = true;
                }
            };
            return found;
        }
    }
}

class Node {
    constructor(data,left,right){
        this.value = data;
        this.left = left;
        this.right = right;
        this.show = () => {
            return this.value;
        }
    }
}