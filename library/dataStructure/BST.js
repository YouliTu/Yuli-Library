

class BST {
    constructor(){
        this.root = null;
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
        this.add = (value) => {
            let node = new Node(value),
                current;
            // 1.null tree
            if(this.root === null){
                this.root = node;
            } else {
                // 以头部为根
                current = this.root;

                while(true){
                    // 小于当前值，向左遍历
                    if(value < current.value){
                        // 没有左节点，作为新节点
                        if(current.left === null){
                            current.left = node;
                            break;
                        } else {
                            current = current.left;
                        }
                    } else if (value > current.value){
                        if(current.right === null){
                            current.right = node;
                            break;
                        } else {
                            current = current.right
                        }
                    } else {
                        break;
                    }
                }

            }
        }
        // 中序遍历
        this.traverse = (process) => {
            const inOrder = (node) => {
                if(!!node){
                    if(node.left !== null){
                        inOrder(node.left);
                    }
                    // console.log(node.show()+ " ")
                    process(node);
                    if(node.right !== null){
                        inOrder(node.right);
                    }
                }
            }

            inOrder(this.root)
        }
        this.size = () => {
            let length = 0;
            this.traverse((node) => {
                length++;
            })
            return length;
        }
        this.toArray = () => {
            let result = [];
            this.traverse((node) => {
                result.push(node.value);
            })
            return result;
        }
        this.toString = () => {
            return this.toArray().toString();
        }
        // 先序遍历
        this.preTraverse = (process) => {
            const preOrder = (node) => {

            }
            preOrder(this.root);
        }
        // 后序遍历
        this.postTraverse = (process) => {
            const postOrder = (node) => {
                if(!!node){
                    postOrder(node.left);
                    postOrder(node.right);
                    process && process(node)
                }
            }
            postOrder(this.root);
        }
        this.getMin = () => {
            let cur = this.root;
            while (cur.left !== null){
                cur = cur.left
            }
            return cur.value;
        }
        this.getMax = () => {
            let cur = this.root;
            while (cur.right !== null){
                cur = cur.right
            }
            return cur.value;
        }
        this.remove = (node) => {
            let childCount,parent,replacement,replaceParent;
            let found = false,
                current = this.root;
            while(!found && current){
                // 小于当前节点，左节点变为根节点
                if(value < current.value){
                    parent = current;
                    current = current.left;
                } else if (value > current.value){
                    parent = current;
                    current = current.right;
                } else {
                    found = true;
                }
            };
            if(found){
                childCount = (current.left !== null?1:0) +
                    (current.right !== null ? 1:0)
                if(current === this.root){
                    switch (childCount){
                        // 没有子节点
                        case 0:
                            this.root = null;
                            break;
                        case 1:
                            this.root = current.right || current.left;
                            break;
                        case 2:
                            replacement = this.root.left;
                            // 找最右的最大节点
                            while(replacement.right !== null){
                                replaceParent = replacement;
                                replacement = replacement.right;
                            }
                            // 不是左节点的第一个节点
                            if(replaceParent !== null){
                                // 把自己这条树删除，
                                // 然后把自己的左树给父级，因为是最大的树，所以一定没有右子树了
                                replaceParent.right = replacement.left;
                                replacement.right = this.root.right;
                                replacement.left = this.root.left;
                            } else {
                                // 直接就是根节点左子树
                                replacement.right = this.root.right;
                            }
                            this.root = replacement;
                    }
                } else {
                    // 非根节点
                    switch (childCount){
                        // 没有子节点，直接删
                        case 0:
                            if(current.value < parent.value){
                                parent.left = null;
                            } else {
                                parent.right = null;
                            }
                            break;
                            // 有一个子节点，直接往父节点接
                        case 1:
                            if(current.value < parent.value){
                                parent.left = current.left || current.right
                            } else {
                                parent.right = current.left || current.right
                            }
                            break;
                        case 2:
                            // 重置指针，准备遍历 找其左子树中的最大值
                            replacement = current.left;
                            replaceParent = current;
                            while(replacement.right !== null){
                                replaceParent = replacement;
                                replacement = replacement.right;
                            }
                            // 待删除节点的左子树，为待删除几点父级的右子树
                            replaceParent.right = replacement.left
                            // 为替换节点分配原节点
                            replacement.right = current.right;
                            replacement.left = current.left;
                            // 子级处理完毕，往父级安装
                            if(current.value < parent.value){
                                parent.left = replacement;
                            } else {
                                parent.right = replacement;
                            }

                    }
                }
            }
        }
    }
}

class Node {
    constructor(data,left,right){
        this.value = data;
        this.left = left || null;
        this.right = right || null;
        this.show = () => {
            return this.value;
        }
    }
}

module.exports = BST;